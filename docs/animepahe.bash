#!/bin/bash

# "End is near, bash scripts are here"
# animepahe - bash script for fetching latest animes and other animes in JSON
# format

# Uses animepahe's REST api to fetch information about anime(s). Features
# include: search for anime(s), fetch latest ones and use an image viewer
# with libcurl support to view a snapshot/poster of the anime.

# Required dependencies: Bash, jq, GNU getopt
# Optional dependencies: an image viewer with libcurl support for fetching
#                        and viewing images

# Made with love by majorgamerjay <majorgamerjay@gmail.com> for public use.

API_LINK="https://animepahe.com/api?"

PARAMETERS=$(getopt -a -n animepahe -o i:l:s: --long image:,latest:,search: -- "$@")
RET=$?

IMG_BOOL="1"

usage() {
    echo "Usage: animepahe [ -i | --image image_viewer ]   -l | --latest page
                 [ -i | --image image_viewer ]   -s | --search name"
    exit 2
}

if [ "$RET" != "0" ]; then
    usage
fi

eval set -- "$PARAMETERS"


if [ "$1" == "-i" ] || [ "$1" == "--image" ]; then
    unset IMG_BOOL
    shift

    IMG_VIEWER="$1"
    shift
fi

get_latest() {
    if [ -z $2 ]; then
        LIST=$(curl "${API_LINK}m=airing&page=$1" | jq '.data[] | .snapshot')
        eval $IMG_VIEWER $LIST
    else
        curl "${API_LINK}m=airing&page=$1" | jq '[ .data[] | { name: .anime_title, screenshot: .snapshot, sub: .fansub, episode: .episode, completed: .completed} ]'
    fi
}

search_name() {
    if [ -z $2 ]; then
        LIST=$(curl "${API_LINK}m=search&q=$1" | jq '.data[] | .poster')
        eval $IMG_VIEWER $LIST
    else
        curl "${API_LINK}m=search&q=$1" | jq '[ .data[] | { title: .title, type: .type, episodes: .episodes, status: .status, season: .season, year: .year, score: .score, poster: .poster } ]'
    fi
}

while true; do
    case $1 in
        -l | --latest ) get_latest   $2 $IMG_BOOL ; shift 2 ;;
        -s | --search ) search_name  $2 $IMG_BOOL ; shift 2 ;;

        -- ) shift
             if [ -z $1 ]; then
                 exit
             else
                 echo "Unexpected option: $1"
                 usage
             fi

    esac
done
