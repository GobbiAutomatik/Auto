@echo off
echo 🚀 INICIANDO AUTOCONTRATO (MODO MANUAL)
echo ========================================
echo.

echo 📋 Passo 1: Verificando Node.js...
node --version
if %errorlevel% neq 0 (
    echo ❌ Node.js não encontrado!
    echo 📥 Baixe em: https://nodejs.org/
    pause
    exit
)

echo.
echo 📋 Passo 2: Verificando dependências...
if not exist "node_modules" (
    echo 📦 Instalando dependências...
    npm install
    if %errorlevel% neq 0 (
        echo ❌ Erro ao instalar dependências
        pause
        exit
    )
)

echo.
echo 📋 Passo 3: Iniciando servidor...
echo 📍 Acesse: http://localhost:3000
echo 💡 Para parar: Ctrl+C
echo.

node server-simples.js

echo.
echo Servidor parado.
pause