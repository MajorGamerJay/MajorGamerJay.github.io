# Put this in directory full of MD files and it'll create directories
# by the name of the same files and move the files to the corresponding
# directory

for x in $(ls -1 | grep .md)
do
    target=${x::-3}
    mkdir $target
    mv $x $target
done
