#!/bin/bash
#
# edit this file and source before running 'run.sh' to override defaults.

export RHQ_CLI_JAVA_HOME=${RHQ_CLI_JAVA_HOME:-/usr/lib/jvm/jre-1.6.0-sun.x86_64/}
export RHQ_CLI_HOME=${RHQ_CLI_HOME:-/opt/jboss/rhq-remoting-cli-4.4.0.JON312GA}

export JON_USERNAME=${JON_USERNAME:-'rhqadmin'}
export JON_PASSWORD=${JON_PASSWORD}
export JON_SERVER=${JON_SERVER}
export JON_PORT=${JON_PORT:-'7080'}
