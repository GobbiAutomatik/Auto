@echo off
echo 🔧 Instalando dependências...
echo.

if not exist "package.json" (
    echo ❌ package.json não encontrado!
    echo Certifique-se de estar na pasta correta
    pause
    exit
)

echo 📦 Executando npm install...
npm install

if %errorlevel% equ 0 (
    echo ✅ Dependências instaladas com sucesso!
    echo.
    echo 🚀 Agora você pode executar:
    echo - iniciar.bat
    echo - OU: npm run server
    echo - OU: node server-simples.js
) else (
    echo ❌ Erro ao instalar dependências
    echo.
    echo 🔧 Tente:
    echo 1. Executar como administrador
    echo 2. Verificar conexão com internet
    echo 3. Limpar cache: npm cache clean --force
)

echo.
pause