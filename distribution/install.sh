#!/bin/bash
set -euo pipefail

INSTALLER_URL="https://companyos.soft.group/distribution/installer.mjs"
INSTALLER_FILE="$(mktemp -t operaos-installer).mjs"
trap 'rm -f "$INSTALLER_FILE"' EXIT

curl --fail --silent --show-error --location "$INSTALLER_URL" --output "$INSTALLER_FILE"
exec node "$INSTALLER_FILE"
