#!/bin/bash

echo "🚀 Starting AutoContrato..."
echo ""

echo "📋 Checking Node.js..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found!"
    echo "📥 Please install Node.js"
    exit 1
fi

node --version
echo "✅ Node.js found!"

echo ""
echo "📋 Checking dependencies..."
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Error installing dependencies"
        exit 1
    fi
fi

echo ""
echo "🚀 Starting server..."
echo "📍 Access: http://localhost:5173"
echo "💡 To stop: Ctrl+C"
echo ""

npm run dev