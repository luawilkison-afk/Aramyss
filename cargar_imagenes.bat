@echo off
title Cargador de Imagenes - Portal de Fitoterapia
echo.
echo ===================================================
echo   Cargando imagenes premium en la aplicacion web
echo ===================================================
echo.

:: Crear el directorio de destino
mkdir "C:\Users\USER\.gemini\antigravity\scratch\plantas_medicinales\assets\images" 2>nul

:: Copiar e renombrar las imagenes
copy "C:\Users\USER\.gemini\antigravity\brain\c81b64cc-def5-47fb-bb40-d893e7ba3581\aloe_vera_*.png" "C:\Users\USER\.gemini\antigravity\scratch\plantas_medicinales\assets\images\aloe_vera.png" /Y >nul
copy "C:\Users\USER\.gemini\antigravity\brain\c81b64cc-def5-47fb-bb40-d893e7ba3581\calendula_*.png" "C:\Users\USER\.gemini\antigravity\scratch\plantas_medicinales\assets\images\calendula.png" /Y >nul
copy "C:\Users\USER\.gemini\antigravity\brain\c81b64cc-def5-47fb-bb40-d893e7ba3581\hiedra_*.png" "C:\Users\USER\.gemini\antigravity\scratch\plantas_medicinales\assets\images\hiedra.png" /Y >nul
copy "C:\Users\USER\.gemini\antigravity\brain\c81b64cc-def5-47fb-bb40-d893e7ba3581\lavanda_*.png" "C:\Users\USER\.gemini\antigravity\scratch\plantas_medicinales\assets\images\lavanda.png" /Y >nul
copy "C:\Users\USER\.gemini\antigravity\brain\c81b64cc-def5-47fb-bb40-d893e7ba3581\toronjil_*.png" "C:\Users\USER\.gemini\antigravity\scratch\plantas_medicinales\assets\images\toronjil.png" /Y >nul
copy "C:\Users\USER\.gemini\antigravity\brain\c81b64cc-def5-47fb-bb40-d893e7ba3581\chile_*.png" "C:\Users\USER\.gemini\antigravity\scratch\plantas_medicinales\assets\images\chile.png" /Y >nul
copy "C:\Users\USER\.gemini\antigravity\brain\c81b64cc-def5-47fb-bb40-d893e7ba3581\higo_*.png" "C:\Users\USER\.gemini\antigravity\scratch\plantas_medicinales\assets\images\higo.png" /Y >nul

echo [OK] Imagenes copiadas con exito.
echo.
echo ===================================================
echo   Ya puedes abrir o recargar 'index.html'
echo ===================================================
echo.
pause
