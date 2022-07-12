for x in $(ls -1 | grep .md)
do
    target=${x::-3}
    mkdir $target
    mv $x $target
done
