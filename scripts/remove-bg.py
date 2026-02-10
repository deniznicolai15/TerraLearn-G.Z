from PIL import Image
import os

script_dir = os.path.dirname(os.path.abspath(__file__))
input_path = os.path.join(script_dir, "../public/images/ph-outline-map.png")
output_path = os.path.join(script_dir, "../public/images/ph-map-transparent.png")

# Open image (PIL auto-detects format regardless of extension)
img = Image.open(input_path).convert("RGBA")
pixels = img.load()

threshold = 220

for y in range(img.height):
    for x in range(img.width):
        r, g, b, a = pixels[x, y]
        # If pixel is near-white, make fully transparent
        if r > threshold and g > threshold and b > threshold:
            pixels[x, y] = (r, g, b, 0)

img.save(output_path, "PNG")
print(f"Done! Transparent PNG saved to {output_path}")
print(f"Size: {img.width}x{img.height}")
