#!/bin/bash

readonly SCRIPT=$(pwd)/${1}

if [ -z "${SCRIPT}" ]; then
  echo "Missing script name"
  exit 1
fi

if [ ! -e "${SCRIPT}" ]; then
  echo "No such file: ${SCRIPT}"
  exit 2
fi

readonly RHQ_CLI_HOME=${RHQ_CLI_HOME:-${HOME}/Products/jon-server-3.1.2-allplugins/rhq-remoting-cli-4.4.0.JON312GA/bin/}
readonly JON_USERNAME=${JON_USERNAME:-'rhqadmin'}
readonly JON_PASSWORD=${JON_PASSWORD:-${JON_USERNAME}}

"${RHQ_CLI_HOME}/rhq-cli.sh" -u "${JON_USERNAME}" -p "${JON_PASSWORD}" -f "${SCRIPT}"
