@echo off
REM Install dependencies for globalNET
npm install --legacy-peer-deps
npx prisma generate
echo Dependencies installed successfully.
