#!/bin/bash

echo "Checking for node-sass..."
NODE_SASS=`npm list | grep 'node[-]sass'`
if [ "$NODE_SASS" != "" ]; then 
   echo "Node sass found, removing..."
   npm uninstall node-sass 
fi 

echo "Checking for sass..."
SASS=`npm list | grep 'sass[@]'`
if [ "$SASS" = "" ]; then 
   echo "Sass not found, installing..."
   npm install sass 
fi
		

