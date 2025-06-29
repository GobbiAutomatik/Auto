#!/bin/bash

echo "========================================"
echo "🔍 AUTOCONTRATO DIAGNOSTICS"
echo "========================================"
echo ""

echo "📋 1. Checking Node.js..."
if command -v node &> /dev/null; then
    echo "✅ Node.js found!"
    node --version
else
    echo "❌ Node.js NOT FOUND!"
    echo ""
    echo "📥 SOLUTION: Install Node.js"
    echo "Visit: https://nodejs.org/"
    echo ""
    echo "Choose the LTS version (recommended)"
    exit 1
fi

echo ""
echo "📋 2. Checking npm..."
if command -v npm &> /dev/null; then
    echo "✅ npm found!"
    npm --version
else
    echo "❌ npm not found!"
    exit 1
fi

echo ""
echo "📋 3. Checking files..."
if [ -f "package.json" ]; then
    echo "✅ package.json found"
else
    echo "❌ package.json NOT found!"
fi

if [ -f "index.html" ]; then
    echo "✅ index.html found"
else
    echo "❌ index.html NOT found!"
fi

if [ -f "vite.config.ts" ]; then
    echo "✅ vite.config.ts found"
else
    echo "❌ vite.config.ts NOT found!"
fi

echo ""
echo "📋 4. Checking ports..."
if lsof -Pi :5173 -sTCP:LISTEN -t >/dev/null 2>&1; then
    echo "⚠️ Port 5173 is occupied"
else
    echo "✅ Port 5173 is free"
fi

if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null 2>&1; then
    echo "⚠️ Port 3000 is occupied"
else
    echo "✅ Port 3000 is free"
fi

echo ""
echo "📋 5. Testing Node.js directly..."
echo "console.log('✅ Node.js working!');" > test-node.js
node test-node.js
rm test-node.js

echo ""
echo "========================================"
echo "🎯 NEXT STEPS:"
echo "========================================"
echo ""
echo "If everything is ✅, try:"
echo "1. npm install"
echo "2. npm run dev"
echo ""
echo "If something is ❌, follow the instructions above"
echo ""