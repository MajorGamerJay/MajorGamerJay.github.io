# Copy a file and yank/paste it recursively into each directory
# and subdirectories in the target. Useful for pasting headers
# and footers files recursively

for i in `find $2/ -type d`; do cp $1 $i; done
