#!/bin/bash
echo "================================"
echo "Fetching from git..."
git pull

echo ""
echo "================================"
echo "Updating npm lib..."
npm i

echo ""
bash ./dev/db-up.sh
