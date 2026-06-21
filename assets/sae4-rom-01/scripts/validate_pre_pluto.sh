#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "${ROOT_DIR}"

SUMMARY_FILE="${ROOT_DIR}/logs/pre_pluto_validation.txt"
ATTACH_TIMEOUT=90

mkdir -p logs/epc logs/enb logs/ue

log() {
  printf '%s\n' "$*" | tee -a "${SUMMARY_FILE}"
}

cleanup_stack() {
  docker compose down >/dev/null 2>&1 || true
}

trap cleanup_stack EXIT

: > "${SUMMARY_FILE}"

log "[1/6] Nettoyage de l'etat precedent"
cleanup_stack
rm -f logs/epc/* logs/enb/* logs/ue/*

log "[2/6] Construction des images"
docker compose build | tee -a "${SUMMARY_FILE}"

log "[3/6] Demarrage de srsEPC et srsENB"
docker compose up -d epc enb | tee -a "${SUMMARY_FILE}"

log "[4/6] Demarrage d'une capture reseau standard Wireshark-compatible"
docker compose exec -T epc sh -lc \
  "timeout 25 tcpdump -i any -w /var/log/srsran/pre_pluto_wire.pcap 'sctp port 36412 or udp port 2152 or icmp'" \
  >/tmp/pre_pluto_wire_tcpdump.log 2>&1 &
WIRE_TCPDUMP_PID=$!
sleep 2

log "[5/6] Demarrage de srsUE"
docker compose up -d ue | tee -a "${SUMMARY_FILE}"

log "[6/6] Attente de l'attachement UE"
attached=0
for _ in $(seq 1 "${ATTACH_TIMEOUT}"); do
  if grep -q "Network attach successful" logs/ue/ue.log 2>/dev/null; then
    attached=1
    break
  fi
  sleep 1
done

if [ "${attached}" -ne 1 ]; then
  log "Echec: attachement UE non observe dans logs/ue/ue.log"
  exit 1
fi

grep -n "Network attach successful" logs/ue/ue.log | tail -n 1 | tee -a "${SUMMARY_FILE}"
grep -n "Received S1 Setup Request" logs/epc/epc.log | tail -n 1 | tee -a "${SUMMARY_FILE}"
grep -n "Sending S1 Setup Response" logs/epc/epc.log | tail -n 1 | tee -a "${SUMMARY_FILE}"

log "[7/6] Capture du trafic IP et ping UE -> EPC"
docker compose exec -T epc sh -lc 'timeout 12 tcpdump -i any -w /var/log/srsran/icmp_traffic.pcap icmp' >/tmp/pre_pluto_tcpdump.log 2>&1 &
TCPDUMP_PID=$!
sleep 2
docker compose exec -T ue ping -c 4 172.16.0.1 | tee -a "${SUMMARY_FILE}"
wait "${TCPDUMP_PID}" || true
wait "${WIRE_TCPDUMP_PID}" || true
cat /tmp/pre_pluto_tcpdump.log | tee -a "${SUMMARY_FILE}"
cat /tmp/pre_pluto_wire_tcpdump.log | tee -a "${SUMMARY_FILE}"
rm -f /tmp/pre_pluto_tcpdump.log
rm -f /tmp/pre_pluto_wire_tcpdump.log

log "[8/6] Arret propre pour finaliser les captures"
docker compose down | tee -a "${SUMMARY_FILE}"
trap - EXIT

log "Resume des captures"
capinfos logs/epc/epc.pcap \
  logs/enb/enb_s1ap.pcap \
  logs/ue/ue_nas.pcap \
  logs/epc/icmp_traffic.pcap \
  logs/epc/pre_pluto_wire.pcap | tee -a "${SUMMARY_FILE}"

log "Validation pre-Adalm-Pluto terminee"
