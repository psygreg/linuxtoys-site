#!/bin/bash
# name: Tac Writer
# version: 1.0
# description: tacw_desc
# icon: tacwriter.svg
# repo: https://github.com/narayanls/tac-writer

# --- Start of the script code ---
. /etc/os-release
source "$SCRIPT_DIR/libs/linuxtoys.lib"
source "$SCRIPT_DIR/libs/helpers.lib"
_lang_
source "$SCRIPT_DIR/libs/lang/${langfile}.lib"

GITHUB_API="https://api.github.com/repos/narayanls/tac-writer/releases/latest"
TMP_BUNDLE="/tmp/tac-writer.flatpak"
TMP_LOG="/tmp/tac-writer-flatpak-install.log"

sudo_rq

# Ensure curl exists for GitHub API lookup
if ! command -v curl >/dev/null 2>&1; then
    if is_debian; then
        sudo apt update || true
    fi
    _packages=(curl)
    _install_
    command -v curl >/dev/null 2>&1 || fatal "curl command not found after installation attempt."
fi

# Ensure flatpak exists across supported distro families
if ! command -v flatpak >/dev/null 2>&1; then
    if is_debian; then
        sudo apt update || true
    fi
    _packages=(flatpak)
    _install_
    command -v flatpak >/dev/null 2>&1 || fatal "Flatpak command not found after installation attempt."
fi

# Ensure Flathub remotes exist so required runtimes can be resolved
flatpak_in_lib || fatal "Failed to configure Flatpak/Flathub required for Tac Writer runtime dependencies."

# Resolve latest .flatpak bundle from GitHub releases
LATEST_BUNDLE_URL=$(curl -fsSL "$GITHUB_API" | grep 'browser_download_url' | grep '\.flatpak"' | head -1 | cut -d'"' -f4)
if [ -z "$LATEST_BUNDLE_URL" ]; then
    fatal "Could not find a .flatpak asset in the latest Tac Writer release."
fi

if ! curl -fsSL "$LATEST_BUNDLE_URL" -o "$TMP_BUNDLE"; then
    fatal "Failed to download Tac Writer flatpak bundle."
fi

# Install bundle for current user (silent mode; show details only on failure)
if ! flatpak install --user --noninteractive -y "$TMP_BUNDLE" >/dev/null 2>"$TMP_LOG"; then
    cat "$TMP_LOG"
    rm -f "$TMP_LOG"
    rm -f "$TMP_BUNDLE"
    fatal "Tac Writer flatpak installation failed."
fi

rm -f "$TMP_LOG"
rm -f "$TMP_BUNDLE"
zeninf "Tac Writer installation completed."
