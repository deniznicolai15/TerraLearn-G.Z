from PIL import Image
import numpy as np

img = Image.open("/vercel/share/v0-project/public/images/ph-outline-map.png").convert("RGBA")
data = np.array(img)

# Make white/near-white pixels transparent
# Keep dark pixels (the outlines) as-is
threshold = 200
white_mask = (data[:, :, 0] > threshold) & (data[:, :, 1] > threshold) & (data[:, :, 2] > threshold)
data[white_mask, 3] = 0

# Also handle light gray pixels with partial transparency
gray_threshold = 160
gray_mask = (data[:, :, 0] > gray_threshold) & (data[:, :, 1] > gray_threshold) & (data[:, :, 2] > gray_threshold) & ~white_mask
# Make them semi-transparent based on how light they are
avg = (data[gray_mask, 0].astype(int) + data[gray_mask, 1].astype(int) + data[gray_mask, 2].astype(int)) // 3
data[gray_mask, 3] = (255 - avg).clip(0, 255).astype(np.uint8)

result = Image.fromarray(data)
result.save("/vercel/share/v0-project/public/images/ph-outline-map.png")
print("Background removed successfully")
