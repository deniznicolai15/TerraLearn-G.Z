from PIL import Image
import os

img_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'public', 'images', 'ph-outline-map.png')
img = Image.open(img_path)
print(f"Image size: {img.width}x{img.height}")
print(f"Mode: {img.mode}")
print(f"File size: {os.path.getsize(img_path)} bytes")
