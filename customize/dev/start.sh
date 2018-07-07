echo ""
echo "================================"
echo "Updating npm lib..."
npm i

echo ""
bash ./dev/db-up.sh

echo ""
echo "================================"
echo "Starting app..."
node app.js
