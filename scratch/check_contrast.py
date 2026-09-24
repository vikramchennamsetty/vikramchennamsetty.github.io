def relative_luminance(rgb_hex):
    rgb_hex = rgb_hex.lstrip('#')
    r, g, b = [int(rgb_hex[i:i+2], 16) / 255.0 for i in (0, 2, 4)]
    
    def transform(c):
        return c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4
    
    R = transform(r)
    G = transform(g)
    B = transform(b)
    
    return 0.2126 * R + 0.7152 * G + 0.0722 * B

def contrast_ratio(hex1, hex2):
    l1 = relative_luminance(hex1)
    l2 = relative_luminance(hex2)
    lighter = max(l1, l2)
    darker = min(l1, l2)
    return (lighter + 0.05) / (darker + 0.05)

bg_cream = "#fdfdfd"
bg_gold_tint = "#fdfaf3"
bg_orange_tint = "#fdf3e7"
bg_footer = "#0a0a0a"

print("--- CONTRAST RATIO TESTS ---")
print("Gold (#856414) on Cream (#fdfdfd):", f"{contrast_ratio('#856414', bg_cream):.2f}:1")
print("Gold (#856414) on Gold Tint (#fdfaf3):", f"{contrast_ratio('#856414', bg_gold_tint):.2f}:1")
print("TOC Title (#555555) on Cream (#fdfdfd):", f"{contrast_ratio('#555555', bg_cream):.2f}:1")
print("Badge Orange (#B23B00) on Tint (#fdf3e7):", f"{contrast_ratio('#B23B00', bg_orange_tint):.2f}:1")
print("Footer Credit (#A0A0A0) on Dark (#0a0a0a):", f"{contrast_ratio('#A0A0A0', bg_footer):.2f}:1")
