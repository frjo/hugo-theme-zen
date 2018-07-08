#!/usr/bin/env bash

# shell script hardening
set -euo pipefail

# This script creates a new sub them from the zen base theme.
# (Run chmod 700 on this file to make it executable)

if [[ ! -d "zen" || "${PWD##*/}" != "themes" ]]; then
  echo "Error: This script must be run from the theme folder."
  echo "Usage: ./zen/create_sub_theme.sh"
fi

if [[ -z "${1-}" ]]; then
  echo -n "Enter a human-readable subtheme name: "
  read -e inputname
else
  inputname="$1"
fi

human=`echo $inputname | sed -e 's/"/\\"/g'`
themename=`echo $inputname | tr [:upper:] [:lower:] | sed -e 's/[\-\ ]/_/g' -e 's/[^a-z0-9_]//g'`

mkdir "$themename"

cp -p zen/.eslintrc zen/.gitignore zen/.sass-lint.yml $themename/
cp -p zen/gulpfile.js zen/package-lock.json zen/package.json zen/theme.toml $themename/
cp -pr zen/sass $themename/
cp -pr zen/static $themename/

sed -e 's/^\(name = \).*$/\1"'"$human"'"/g' -e 's/^\(description = \).*$/\1"A Zen sub-theme"/g' $themename/theme.toml > $themename/theme.toml.temp
mv -f $themename/theme.toml.temp $themename/theme.toml
