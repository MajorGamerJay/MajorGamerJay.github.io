#!/bin/bash

# anonfiles (https://anonfiles.com) is an anonymous file upload site.

# Limit of uploads are:
#         20GB  per file
#         500   files or 50GB per hour
#         5,000 files or 100GB per day
# They try their best to keep the files on the site for as long as they can

# Script for uploading and getting information about files in anonfiles.
# using their native API.

# Dependencies for this script: jq, bash, curl.
# If you don't want to use jq, just remove "jq" other places in the script
# By majorgamerjay <majorgamerjay@protonmail.com> for use by everybody.
# Enjoy. ;)

API_URL='https://api.anonfiles.com/'

usage() {
    echo "Usage: anonfiles [ -u | --upload ] filename
                 [ -i | --info   ] id"

    exit 2
}

if [ $# -eq 0 ]; then
    echo "Illegal number of arguments"
    usage
fi

PARSED_ARGUMENTS=$(getopt -a -n anonfiles -o hu:i: --long help,upload:,info: -- "$@")
GETOPT_ERRCODE=$?

if [ "$GETOPT_ERRCODE" != "0" ]; then
    usage
fi

eval set -- "$PARSED_ARGUMENTS"

upload() {
    curl -F "file=@$1" "${API_URL}upload" | jq
}

get_info() {
    curl "https://api.anonfiles.com/v2/file/$1/info" | jq
}

while true; do
    case $1 in
        -u | --upload ) upload   $2 ; shift 2 ;;
        -i | --info   ) get_info $2 ; shift 2 ;;
        -h | --help   ) usage       ;;
        -- ) shift
             if [ -z $1 ]; then
                 exit
             else
                 echo "Unexpected option: $1"
                 usage
             fi

    esac
done
