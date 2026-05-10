@echo off
REM Fix and run the globalNET app in one command
rm -rf .next
rm -rf node_modules\.cache
npm install --legacy-peer-deps
npx prisma generate
npm run build
if %ERRORLEVEL% neq 0 exit /b %ERRORLEVEL%
npm run dev
