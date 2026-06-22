@echo off
title Cargador de Recursos - Portal de Fitoterapia
echo.
echo ===================================================
echo   Cargando logotipos y portadas de categorias
echo ===================================================
echo.

:: Crear el directorio de destino si no existe
mkdir "C:\Users\USER\.gemini\antigravity\scratch\plantas_medicinales\assets\images" 2>nul

:: Copiar e renombrar los logotipos
copy "C:\Users\USER\.gemini\antigravity\brain\12f471e9-80eb-40f0-9b78-663226dee537\media__1782141425781.png" "C:\Users\USER\.gemini\antigravity\scratch\plantas_medicinales\assets\images\logo_jmc.png" /Y >nul
copy "C:\Users\USER\.gemini\antigravity\brain\12f471e9-80eb-40f0-9b78-663226dee537\media__1782141426435.png" "C:\Users\USER\.gemini\antigravity\scratch\plantas_medicinales\assets\images\logo_musuq.png" /Y >nul

:: Copiar e renombrar las portadas de categorias del vivero
copy "C:\Users\USER\.gemini\antigravity\brain\12f471e9-80eb-40f0-9b78-663226dee537\cat_semisombra_*.png" "C:\Users\USER\.gemini\antigravity\scratch\plantas_medicinales\assets\images\cat_semisombra.png" /Y >nul
copy "C:\Users\USER\.gemini\antigravity\brain\12f471e9-80eb-40f0-9b78-663226dee537\cat_cactus_*.png" "C:\Users\USER\.gemini\antigravity\scratch\plantas_medicinales\assets\images\cat_cactus.png" /Y >nul
copy "C:\Users\USER\.gemini\antigravity\brain\12f471e9-80eb-40f0-9b78-663226dee537\cat_sombra_*.png" "C:\Users\USER\.gemini\antigravity\scratch\plantas_medicinales\assets\images\cat_sombra.png" /Y >nul
copy "C:\Users\USER\.gemini\antigravity\brain\12f471e9-80eb-40f0-9b78-663226dee537\cat_arboles_*.png" "C:\Users\USER\.gemini\antigravity\scratch\plantas_medicinales\assets\images\cat_arboles.png" /Y >nul
copy "C:\Users\USER\.gemini\antigravity\brain\12f471e9-80eb-40f0-9b78-663226dee537\cat_frutales_*.png" "C:\Users\USER\.gemini\antigravity\scratch\plantas_medicinales\assets\images\cat_frutales.png" /Y >nul

echo [OK] Recursos copiados con exito.
echo.
echo ===================================================
echo   Ya puedes abrir o recargar 'index.html'
echo ===================================================
echo.
pause
