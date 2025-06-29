@echo off
echo 🚀 Iniciando AutoContrato...
echo.
echo 📋 Verificando Node.js...
node --version
if %errorlevel% neq 0 (
    echo ❌ Node.js não encontrado!
    echo 📥 Baixe em: https://nodejs.org/
    pause
    exit
)

echo.
echo 📋 Verificando dependências...
if not exist node_modules (
    echo 📦 Instalando dependências...
    npm install
)

echo.
echo 🚀 Iniciando servidor...
echo 📍 O site abrirá em: http://localhost:3000
echo 💡 Para parar: Ctrl+C
echo.

node server-simples.js

pause