@echo off
echo ========================================
echo 🔍 DIAGNÓSTICO AUTOCONTRATO
echo ========================================
echo.

echo 📋 1. Verificando Node.js...
node --version
if %errorlevel% neq 0 (
    echo ❌ Node.js NÃO ENCONTRADO!
    echo.
    echo 📥 SOLUÇÃO: Baixar Node.js em:
    echo https://nodejs.org/
    echo.
    echo Escolha a versão LTS (recomendada)
    goto :fim
) else (
    echo ✅ Node.js encontrado!
)

echo.
echo 📋 2. Verificando npm...
npm --version
if %errorlevel% neq 0 (
    echo ❌ npm não encontrado!
    goto :fim
) else (
    echo ✅ npm encontrado!
)

echo.
echo 📋 3. Verificando arquivos...
if exist "server-simples.js" (
    echo ✅ server-simples.js encontrado
) else (
    echo ❌ server-simples.js NÃO encontrado!
)

if exist "package.json" (
    echo ✅ package.json encontrado
) else (
    echo ❌ package.json NÃO encontrado!
)

if exist "index.html" (
    echo ✅ index.html encontrado
) else (
    echo ❌ index.html NÃO encontrado!
)

echo.
echo 📋 4. Verificando portas...
netstat -ano | findstr ":3000"
if %errorlevel% equ 0 (
    echo ⚠️ Porta 3000 está ocupada
) else (
    echo ✅ Porta 3000 está livre
)

netstat -ano | findstr ":3001"
if %errorlevel% equ 0 (
    echo ⚠️ Porta 3001 está ocupada
) else (
    echo ✅ Porta 3001 está livre
)

echo.
echo 📋 5. Testando Node.js diretamente...
echo console.log("✅ Node.js funcionando!"); > teste-node.js
node teste-node.js
del teste-node.js

echo.
echo ========================================
echo 🎯 PRÓXIMOS PASSOS:
echo ========================================
echo.
echo Se tudo está ✅, tente:
echo 1. npm install
echo 2. node server-simples.js
echo.
echo Se algo está ❌, siga as instruções acima
echo.

:fim
echo.
echo Pressione qualquer tecla para continuar...
pause > nul