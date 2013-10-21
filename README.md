ReadMe
------

A simple set of scripts to interract with JON server to gather JMS Metrics and before a couple of
operation. Nothing to fancy, but might be useful to some people, so i've pushed it here.

To test it, you'll need a working RHQ server monitoring resources using JMS. Then, simply run the
following command:

  $ source set-env.sh # adapt the configuration to your env first !
  $ ./run.sh <script> <args>
