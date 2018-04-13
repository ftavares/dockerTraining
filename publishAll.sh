#!/bin/bash
filename="publish.sh"

for D in *; do
    fileLocation="${D}/${filename}"
    if [ -f $fileLocation ]; then
     cd ${D}
     sh $filename
     cd ..
    fi
done