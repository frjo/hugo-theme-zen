#!/usr/bin/env bash

# shell script hardening
set -euo pipefail

# This script copies the scss and layout files I think most people
# would like to override. It also copies the example config file.
# (Run chmod 700 on this file to make it executable)

if [[ ! "$0" =~ "themes/zen/scripts/set_up_new_site.sh" ]]; then
  echo "Error: This script must be run from the project root directory."
  echo "Usage: ./themes/zen/scripts/set_up_new_site.sh"
  exit 1
fi

mkdir -p "assets/css"
mkdir -p "layouts"

copy_files=("themes/zen/assets/css/_fonts.scss:assets/css/_fonts.css"
            "themes/zen/assets/css/_custom.scss:assets/css/_custom.css"
            "themes/zen/assets/css/_zen.scss:assets/css/_zen.css"
            "themes/zen/layouts/home.html:layouts/home.html"
            "themes/zen/exampleSite/hugo.yaml:hugo.yaml"
            "themes/zen/.editorconfig:.editorconfig")

for files in "${copy_files[@]}" ; do
  if [[ ! -f "${files##*:}" ]]; then
    cp "${files%%:*}" "${files##*:}"
    echo "Copied: ${files##*:}"
  else
    echo "Already exist so not overwritten: ${files##*:}"
  fi
done

if [[ -f "hugo.toml" && -f "hugo.yaml" ]]; then
  mv hugo.toml hugo.toml.old
fi
