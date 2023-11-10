#!/bin/bash

npm list >/tmp/tmp_npm.list
TMP="/tmp/tmp_npm.list"

MOD_INST=""

echo "Checking for node-sass..."
NODE_SASS=`cat $TMP | grep 'node[-]sass'`
if [ "$NODE_SASS" != "" ]; then 
   echo "Node sass found, removing..."
   npm uninstall node-sass 
fi 

echo "Checking for sass..."
SASS=`cat $TMP | grep 'sass[@]'`
if [ "$SASS" = "" ]; then 
   echo "Sass not found, installing..."
   MOD_INST="sass"
fi

MODULES="webpack-cli sass sass-loader css-loader style-loader babel-loader html-loader html-webpack-plugin mini-css-extract-plugin @babel/preset-env"
for MODULE in $MODULES;
do
  echo "Checking for $MODULE"
  CM=`echo $MODULE | sed -e 's/[-]/\[-\]/g'`
  C=`cat $TMP | grep $CM`
  if [ "$C" = "" ]; then
     echo "$MODULE not found, installing..."
     MOD_INST="$MOD_INST $MODULE"
  fi
done

npm install $MOD_INST
