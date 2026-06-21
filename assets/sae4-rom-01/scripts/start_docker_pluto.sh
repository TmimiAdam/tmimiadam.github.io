#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
COMPOSE_FILE="${ROOT_DIR}/docker-compose.pluto.yml"

usage() {
  cat <<'EOF'
Usage:
  ./scripts/start_docker_pluto.sh build
  ./scripts/start_docker_pluto.sh core
  ./scripts/start_docker_pluto.sh ue
  ./scripts/start_docker_pluto.sh full
  ./scripts/start_docker_pluto.sh logs
  ./scripts/start_docker_pluto.sh down
EOF
}

dc() {
  docker compose -f "${COMPOSE_FILE}" "$@"
}

mode="${1:-}"

case "${mode}" in
  build)
    dc build
    ;;
  core)
    dc up -d epc enb
    ;;
  ue)
    dc up -d --no-deps ue
    ;;
  full)
    dc up -d epc enb ue
    ;;
  logs)
    dc logs -f
    ;;
  down)
    dc down
    ;;
  *)
    usage
    exit 1
    ;;
esac
