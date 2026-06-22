import os
import shutil
import glob

brain_dir = r"C:\Users\USER\.gemini\antigravity\brain\c81b64cc-def5-47fb-bb40-d893e7ba3581"
dest_dir = r"C:\Users\USER\.gemini\antigravity\scratch\plantas_medicinales\assets\images"

# Ensure destination exists
os.makedirs(dest_dir, exist_ok=True)

plants = {
    "aloe_vera": "aloe_vera.png",
    "calendula": "calendula.png",
    "hiedra": "hiedra.png",
    "lavanda": "lavanda.png",
    "toronjil": "toronjil.png",
    "chile": "chile.png",
    "higo": "higo.png"
}

print("Iniciando copia de imágenes...")
for prefix, dest_name in plants.items():
    search_pattern = os.path.join(brain_dir, f"{prefix}_*.png")
    matches = glob.glob(search_pattern)
    if matches:
        src_path = matches[0]
        dest_path = os.path.join(dest_dir, dest_name)
        shutil.copy2(src_path, dest_path)
        print(f"Copiado: {os.path.basename(src_path)} -> {dest_name}")
    else:
        print(f"No se encontró imagen para {prefix}")
print("Copia finalizada.")
