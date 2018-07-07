#!/bin/bash
cd /opt/lampp
echo $1
if [ "$1" = "all" ] 
then
    sudo ./xampp start
else 
    sudo ./xampp startmysql
fi
