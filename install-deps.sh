#!/bin/bash

echo "🔧 Installing dependencies..."
echo ""

if [ ! -f "package.json" ]; then
    echo "❌ package.json not found!"
    echo "Make sure you're in the correct directory"
    exit 1
fi

echo "📦 Running npm install..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "🚀 Now you can run:"
    echo "- ./start.sh"
    echo "- OR: npm run dev"
else
    echo "❌ Error installing dependencies"
    echo ""
    echo "🔧 Try:"
    echo "1. Check internet connection"
    echo "2. Clear cache: npm cache clean --force"
fi