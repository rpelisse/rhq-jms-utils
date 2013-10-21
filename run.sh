#!/bin/bash

readonly SCRIPT=$(pwd)/${1}
shift

if [ -z "${SCRIPT}" ]; then
  echo "Missing script name"
  exit 1
fi

if [ ! -e "${SCRIPT}" ]; then
  echo "No such file: ${SCRIPT}"
  exit 2
fi

checkEnvVar() {
  local name=${1}
  local value=${2}
  local exitCode=${3:-1}

  if [ -z "${value}" ]; then
    echo "Variable ${name} is not defined"
    exit "${exitCode}"
  fi
}

readonly RHQ_CLI_HOME=${RHQ_CLI_HOME:-${HOME}/Products/jon-server-3.1.2-allplugins/rhq-remoting-cli-4.4.0.JON312GA}
readonly JON_USERNAME=${JON_USERNAME:-'rhqadmin'}
readonly JON_PASSWORD=${JON_PASSWORD:-${JON_USERNAME}}
readonly JON_SERVER=${JON_SERVER:-'localhost'}
readonly JON_PORT=${JON_PORT:-'7080'}

checkEnvVar 'JON_USERNAME' "${JON_USERNAME}" 3
checkEnvVar 'JON_PASSWORD' "${JON_PASSWORD}" 4
checkEnvVar 'JON_SERVER '"${JON_SERVER}" 5
checkEnvVar 'JON_PORT' "${JON_PORT}" 6
checkEnvVar 'RHQ_CLI_JAVA_HOME' "${RHQ_CLI_JAVA_HOME}" 7
checkEnvVar 'RHQ_CLI_HOME' "${RHQ_CLI_HOME}" 8

"${RHQ_CLI_HOME}/bin/rhq-cli.sh"    -u "${JON_USERNAME}" -p "${JON_PASSWORD}" \
                                    -s "${JON_SERVER}" -t "${JON_PORT}" \
                                    -f "${SCRIPT}" ${@}
