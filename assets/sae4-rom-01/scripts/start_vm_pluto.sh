#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ENV_FILE="${ROOT_DIR}/config/pluto_vm.env"
TEMPLATE_DIR="${ROOT_DIR}/config/templates"
RUN_DIR="${ROOT_DIR}/.run/pluto"
LOG_DIR="${ROOT_DIR}/logs/pluto"

usage() {
  cat <<'EOF'
Usage:
  ./scripts/start_vm_pluto.sh check
  ./scripts/start_vm_pluto.sh core
  ./scripts/start_vm_pluto.sh ue
  ./scripts/start_vm_pluto.sh stop

Modes:
  check  Verifie la presence des binaires et du module Soapy Pluto.
  core   Lance srsepc puis srsenb sur la VM coeur LTE.
  ue     Lance srsue sur la VM utilisateur.
  stop   Arrete les processus lances par ce script.
EOF
}

log() {
  printf '[%s] %s\n' "$(date '+%H:%M:%S')" "$*"
}

fail() {
  printf 'Erreur: %s\n' "$*" >&2
  exit 1
}

need_cmd() {
  command -v "$1" >/dev/null 2>&1 || fail "commande absente: $1"
}

load_env() {
  [ -f "${ENV_FILE}" ] || fail "fichier absent: ${ENV_FILE}"
  set -a
  # shellcheck disable=SC1090
  . "${ENV_FILE}"
  set +a
  : "${MCC:?}" "${MNC:?}" "${TAC:?}" "${APN:?}" "${EARFCN:?}"
  : "${IMSI:?}" "${K:?}" "${OPC:?}" "${ENB_SOAPY_ARGS:?}" "${UE_SOAPY_ARGS:?}"
}

prepare_dirs() {
  mkdir -p "${RUN_DIR}" "${LOG_DIR}"
}

check_pluto_module() {
  SoapySDRUtil --info 2>/dev/null | grep -qi 'pluto' || fail \
    "module Soapy Pluto absent. Installe SoapyPlutoSDR sur la VM puis revalide avec './scripts/start_vm_pluto.sh check'."
}

check_pluto_device() {
  local args="$1"
  local output

  output="$(SoapySDRUtil --find="${args}" 2>&1 || true)"
  printf '%s\n' "${output}" > "${RUN_DIR}/last_soapy_find.txt"

  printf '%s' "${output}" | grep -Eqi 'driver|serial|label|uri' || fail \
    "aucun Adalm-Pluto detecte avec '${args}'. Details: ${RUN_DIR}/last_soapy_find.txt"
}

render_template() {
  local src="$1"
  local dst="$2"

  sed \
    -e "s|__ROOT_DIR__|${ROOT_DIR}|g" \
    -e "s|__MCC__|${MCC}|g" \
    -e "s|__MNC__|${MNC}|g" \
    -e "s|__TAC__|${TAC}|g" \
    -e "s|__LAC__|${LAC}|g" \
    -e "s|__APN__|${APN}|g" \
    -e "s|__EARFCN__|${EARFCN}|g" \
    -e "s|__ENB_ID__|${ENB_ID}|g" \
    -e "s|__N_PRB__|${N_PRB}|g" \
    -e "s|__MME_CODE__|${MME_CODE}|g" \
    -e "s|__MME_GROUP__|${MME_GROUP}|g" \
    -e "s|__MME_BIND_ADDR__|${MME_BIND_ADDR}|g" \
    -e "s|__ENB_BIND_ADDR__|${ENB_BIND_ADDR}|g" \
    -e "s|__SGI_IF_ADDR__|${SGI_IF_ADDR}|g" \
    -e "s|__SGI_IF_NAME__|${SGI_IF_NAME}|g" \
    -e "s|__DNS_ADDR__|${DNS_ADDR}|g" \
    -e "s|__IMSI__|${IMSI}|g" \
    -e "s|__IMEI__|${IMEI}|g" \
    -e "s|__K__|${K}|g" \
    -e "s|__K_LOWER__|${K,,}|g" \
    -e "s|__OPC__|${OPC}|g" \
    -e "s|__OPC_LOWER__|${OPC,,}|g" \
    -e "s|__AMF__|${AMF}|g" \
    -e "s|__SQN__|${SQN}|g" \
    -e "s|__QCI__|${QCI}|g" \
    -e "s|__ENB_SOAPY_ARGS__|${ENB_SOAPY_ARGS}|g" \
    -e "s|__UE_SOAPY_ARGS__|${UE_SOAPY_ARGS}|g" \
    -e "s|__ENB_TX_GAIN__|${ENB_TX_GAIN}|g" \
    -e "s|__ENB_RX_GAIN__|${ENB_RX_GAIN}|g" \
    -e "s|__UE_TX_GAIN__|${UE_TX_GAIN}|g" \
    -e "s|__UE_RX_GAIN__|${UE_RX_GAIN}|g" \
    -e "s|__USER_DB_FILE__|${RUN_DIR}/user_db.csv|g" \
    -e "s|__EPC_PCAP__|${LOG_DIR}/epc_vm.pcap|g" \
    -e "s|__EPC_LOG__|${LOG_DIR}/epc_vm.log|g" \
    -e "s|__ENB_S1AP_PCAP__|${LOG_DIR}/enb_pluto_s1ap.pcap|g" \
    -e "s|__ENB_LOG__|${LOG_DIR}/enb_pluto.log|g" \
    -e "s|__UE_MAC_PCAP__|${LOG_DIR}/ue_pluto_mac.pcap|g" \
    -e "s|__UE_MAC_NR_PCAP__|${LOG_DIR}/ue_pluto_mac_nr.pcap|g" \
    -e "s|__UE_NAS_PCAP__|${LOG_DIR}/ue_pluto_nas.pcap|g" \
    -e "s|__UE_LOG__|${LOG_DIR}/ue_pluto.log|g" \
    "${src}" > "${dst}"
}

render_runtime_files() {
  render_template "${TEMPLATE_DIR}/user_db.csv.template" "${RUN_DIR}/user_db.csv"
  render_template "${TEMPLATE_DIR}/epc_vm.conf.template" "${RUN_DIR}/epc_vm.conf"
  render_template "${TEMPLATE_DIR}/enb_pluto.conf.template" "${RUN_DIR}/enb_pluto.conf"
  render_template "${TEMPLATE_DIR}/ue_pluto.conf.template" "${RUN_DIR}/ue_pluto.conf"
}

stop_all() {
  pkill -f "srsenb ${RUN_DIR}/enb_pluto.conf" >/dev/null 2>&1 || true
  sudo pkill -f "srsepc ${RUN_DIR}/epc_vm.conf" >/dev/null 2>&1 || true
  sudo pkill -f "srsue ${RUN_DIR}/ue_pluto.conf" >/dev/null 2>&1 || true
  sudo pkill -f "tcpdump -i any -w ${LOG_DIR}/pluto_core_wire.pcap" >/dev/null 2>&1 || true
}

start_capture() {
  if ! command -v tcpdump >/dev/null 2>&1; then
    log "tcpdump absent: capture reseau sautee"
    return
  fi

  sudo tcpdump -i any -w "${LOG_DIR}/pluto_core_wire.pcap" \
    'sctp port 36412 or udp port 2152 or icmp' >/dev/null 2>&1 &
}

check_mode() {
  load_env
  prepare_dirs
  need_cmd SoapySDRUtil
  check_pluto_module
  check_pluto_device "${ENB_SOAPY_ARGS}"
  check_pluto_device "${UE_SOAPY_ARGS}"
  need_cmd srsepc
  need_cmd srsenb
  need_cmd srsue
  log "Binaries srsRAN detectes"
  log "Module Pluto detecte"
  log "Resultat Soapy detaille: ${RUN_DIR}/last_soapy_find.txt"
}

core_mode() {
  local srsepc_bin
  local srsenb_bin

  load_env
  prepare_dirs
  need_cmd SoapySDRUtil
  need_cmd srsepc
  need_cmd srsenb
  check_pluto_module
  check_pluto_device "${ENB_SOAPY_ARGS}"
  render_runtime_files
  stop_all
  trap stop_all EXIT INT TERM

  srsepc_bin="$(command -v srsepc)"
  srsenb_bin="$(command -v srsenb)"

  log "Runtime files generes dans ${RUN_DIR}"
  log "Demarrage EPC"
  sudo "${srsepc_bin}" "${RUN_DIR}/epc_vm.conf" >> "${LOG_DIR}/epc_vm.stdout.log" 2>&1 &
  sleep 4

  log "Demarrage capture S1/GTP/ICMP"
  start_capture

  log "Demarrage eNB"
  "${srsenb_bin}" "${RUN_DIR}/enb_pluto.conf"
}

ue_mode() {
  local srsue_bin

  load_env
  prepare_dirs
  need_cmd SoapySDRUtil
  need_cmd srsue
  check_pluto_module
  check_pluto_device "${UE_SOAPY_ARGS}"
  render_runtime_files
  stop_all
  trap stop_all EXIT INT TERM

  srsue_bin="$(command -v srsue)"

  log "Runtime files generes dans ${RUN_DIR}"
  log "Demarrage UE"
  sudo "${srsue_bin}" "${RUN_DIR}/ue_pluto.conf"
}

main() {
  local mode="${1:-}"

  case "${mode}" in
    check)
      check_mode
      ;;
    core)
      core_mode
      ;;
    ue)
      ue_mode
      ;;
    stop)
      prepare_dirs
      stop_all
      log "Processus Pluto arretes"
      ;;
    *)
      usage
      exit 1
      ;;
  esac
}

main "$@"
