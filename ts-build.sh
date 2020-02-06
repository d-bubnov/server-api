#!/bin/bash

# this subshell is a scope of try
# try
(
  # this flag will make to exit from current subshell on any error
  # inside it (all functions run inside will also break on any error)
  set -e
  yarn install;
  tsc;
)
# and here we catch errors
errorCode=$?
if [ $errorCode -ne 0 ]; then
  echo "Something went wrong..."
  # If you want to exit the script with the same error use next command: `exit $errorCode`
  # For continue, just not use `exit` command. For example `echo` or nothing.
  echo $errorCode;
fi

exit 0;
