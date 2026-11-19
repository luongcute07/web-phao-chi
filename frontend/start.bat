@echo off
echo ========================================================
echo  KHOI CHAY UNG DUNG PHAO CHI QUANG BINH (NEXT.JS)
echo ========================================================
echo Dang kiem tra dependencies...
if not exist node_modules (
    echo Cai dat thu vien lan dau...
    call npm install
)
echo Dang khoi dong Development Server tai http://localhost:3000 ...
call npm run dev
pause
