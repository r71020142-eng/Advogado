@echo off
chcp 65001 > nul
title Enviando Landing Page para o GitHub
color 0b
echo ======================================================================
echo    ENVIANDO CÓDIGO DA LANDING PAGE PARA O REPOSITÓRIO GITHUB
echo    https://github.com/r71020142-eng/Advogado.git
echo ======================================================================
echo.

cd /d "C:\Users\user\.gemini\antigravity\scratch\rodrigo-nofault-landing"

echo Executando: git push -u origin main
echo (Se aparecer uma janela do GitHub no navegador, clique em 'Sign in / Authorize')...
echo.

git push -u origin main

echo.
if %ERRORLEVEL% EQU 0 (
    color 0a
    echo ======================================================================
    echo  [SUCESSO] Código enviado com sucesso para o GitHub!
    echo.
    echo  Agora volte no painel da Vercel, atualize a tela e clique em Deploy.
    echo ======================================================================
) else (
    color 0c
    echo ======================================================================
    echo  [ERRO] Não foi possível enviar. Verifique sua conexão e login do GitHub.
    echo ======================================================================
)

echo.
pause
