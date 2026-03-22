from PIL import Image
import os

img_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'public', 'images', 'ph-outline-map.png')
img = Image.open(img_path).convert('RGBA')

print(f"Original size: {img.width}x{img.height}")

# Get bounding box of non-transparent pixels
bbox = img.getbbox()
print(f"Bounding box (non-transparent): {bbox}")

if bbox:
    # Add small padding
    padding = 8
    x1, y1, x2, y2 = bbox
    x1 = max(0, x1 - padding)
    y1 = max(0, y1 - padding)
    x2 = min(img.width, x2 + padding)
    y2 = min(img.height, y2 + padding)

    cropped = img.crop((x1, y1, x2, y2))
    cropped.save(img_path, 'PNG')
    print(f"Crop region: ({x1}, {y1}, {x2}, {y2})")
    print(f"Cropped size: {cropped.width}x{cropped.height}")
    print(f"Saved to: {img_path}")

    # Calculate where the red dot (Mt. Pamitinan) should be in the cropped image
    # Red dot in original image is approximately at 48% x, 37% y
    red_dot_orig_x = img.width * 0.48
    red_dot_orig_y = img.height * 0.37
    # Convert to cropped coordinates
    red_dot_crop_x = red_dot_orig_x - x1
    red_dot_crop_y = red_dot_orig_y - y1
    # Convert to percentage of cropped image (for SVG viewBox 0 0 100 100)
    pct_x = (red_dot_crop_x / cropped.width) * 100
    pct_y = (red_dot_crop_y / cropped.height) * 100
    print(f"\nRed dot in original: ({red_dot_orig_x:.0f}, {red_dot_orig_y:.0f})")
    print(f"Red dot in cropped: ({red_dot_crop_x:.0f}, {red_dot_crop_y:.0f})")
    print(f"SVG viewBox position: translate({pct_x:.1f}, {pct_y:.1f})")
else:
    print("No non-transparent pixels found!")
