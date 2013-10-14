#!/bin/bash

readonly PROJECT_FOLDER=$(basename $(pwd))
readonly ARCHIVE_BASENAME=${PROJECT_FOLDER%.git}
readonly ARCHIVE_NAME="${ARCHIVE_BASENAME}.zip"

rm -f "${ARCHIVE_NAME}"
zip -r "${ARCHIVE_NAME}" . > /dev/null
