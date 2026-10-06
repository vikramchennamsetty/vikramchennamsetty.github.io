import os
import sys
from PIL import Image, ImageDraw, ImageFont, ImageFilter

output_dir = r"d:\A_Elevate_Living_Co\vikramchennamsetty.github.io\assets\pinterest\direct-affiliate"
os.makedirs(output_dir, exist_ok=True)

# Font paths
FONT_GEORGIA_BOLD = r"C:\Windows\Fonts\georgiab.ttf"
FONT_GEORGIA = r"C:\Windows\Fonts\georgia.ttf"
FONT_SEGOE_BOLD = r"C:\Windows\Fonts\segoeuib.ttf"
FONT_SEGOE = r"C:\Windows\Fonts\segoeui.ttf"
FONT_ARIAL_BOLD = r"C:\Windows\Fonts\arialbd.ttf"
FONT_ARIAL = r"C:\Windows\Fonts\arial.ttf"

# Source Background Paths
brain_dir = r"C:\Users\chenn\.gemini\antigravity\brain\94ace2a5-3ae7-4a4d-94ce-3d8e72b2a7ac"
bg_pin1 = os.path.join(brain_dir, "dirpin_001_mirror_bg_1791292836147.jpg")
bg_pin2 = os.path.join(brain_dir, "dirpin_002_lights_bg_1791292859096.jpg")
bg_pin3 = os.path.join(brain_dir, "dirpin_003_candlesticks_bg_1791292881625.jpg")
bg_pin4 = r"d:\A_Elevate_Living_Co\vikramchennamsetty.github.io\assets\images\formula_4_small_apartment.png"
bg_pin5 = r"d:\A_Elevate_Living_Co\vikramchennamsetty.github.io\assets\images\small-apartment-fall-decor-hero.jpg"

pins_data = [
    {
        "id": "dirpin_2026_001_wavy_mirror.jpg",
        "bg": bg_pin1,
        "kicker": "ENTRYWAY TRANSFORMATIONS",
        "title": "THE $49 WAVY MIRROR THAT ELEVATES AN ENTRYWAY",
        "items": [
            "• Use as a focal point in narrow entries",
            "• Pair with a slim console",
            "• Let the irregular silhouette provide visual interest",
            "• Keep surrounding decor minimal"
        ],
        "cta": "SEE THE AMAZON FIND →",
        "card_position": "bottom",
        "accent_color": (212, 175, 55),  # Gold
    },
    {
        "id": "dirpin_2026_002_string_lights.jpg",
        "bg": bg_pin2,
        "kicker": "RENTAL PATIO LIGHTING",
        "title": "FIX A DARK RENTAL PATIO WITHOUT HARDWIRING",
        "items": [
            "1. Define the seating zone",
            "2. Run lights along the perimeter",
            "3. Keep the light source above eye level",
            "4. Use warm light for evening ambience"
        ],
        "cta": "SEE THE AMAZON LIGHTING FIND →",
        "card_position": "bottom",
        "accent_color": (230, 160, 60),  # Warm Amber Glow
    },
    {
        "id": "dirpin_2026_003_brass_candlesticks.jpg",
        "bg": bg_pin3,
        "kicker": "BOOKSHELF STYLING GUIDE",
        "title": "HOW TO STYLE VINTAGE BRASS ON A BOOKSHELF",
        "items": [
            "• Place the tallest holder toward the back",
            "• Layer shorter pieces toward the front",
            "• Pair brass with dark wood and books",
            "• Leave negative space around the vignette"
        ],
        "cta": "SEE THE AMAZON FIND →",
        "card_position": "bottom",
        "accent_color": (195, 145, 55),  # Vintage Antique Brass
    },
    {
        "id": "dirpin_2026_004_outdoor_rug.jpg",
        "bg": bg_pin4,
        "kicker": "PATIO FLOORING CHECKLIST",
        "title": "OUTDOOR RUG: 4 THINGS TO LOOK FOR",
        "items": [
            "01  Reversible design",
            "02  Easy-clean surface",
            "03  Outdoor durability",
            "04  Portable / easy to store"
        ],
        "cta": "SEE THE AMAZON RUG →",
        "card_position": "top",
        "accent_color": (70, 130, 180),  # Steel Blue / Terracotta
    },
    {
        "id": "dirpin_2026_005_pillow_covers.jpg",
        "bg": bg_pin5,
        "kicker": "SEASONAL LIVING ROOM REFRESH",
        "title": "THE $14 COUCH REFRESH FOR FALL",
        "items": [
            "• Start with neutral seating",
            "• Add two textured accent covers",
            "• Layer one warm throw",
            "• Keep seasonal accents restrained"
        ],
        "cta": "SEE THE AMAZON FIND →",
        "card_position": "bottom",
        "accent_color": (190, 85, 45),  # Rust Autumn
    }
]

def render_pin(data):
    # Load background image
    if not os.path.exists(data["bg"]):
        print(f"Error: Background missing: {data['bg']}")
        return False
    
    bg_img = Image.open(data["bg"]).convert("RGBA")
    
    # Resize & center crop to 1000x1500
    target_w, target_h = 1000, 1500
    w, h = bg_img.size
    aspect = w / h
    target_aspect = target_w / target_h
    
    if aspect > target_aspect:
        # Image is wider
        new_h = target_h
        new_w = int(new_h * aspect)
        bg_img = bg_img.resize((new_w, new_h), Image.Resampling.LANCZOS)
        left = (new_w - target_w) // 2
        bg_img = bg_img.crop((left, 0, left + target_w, target_h))
    else:
        # Image is taller
        new_w = target_w
        new_h = int(new_w / aspect)
        bg_img = bg_img.resize((new_w, new_h), Image.Resampling.LANCZOS)
        top = (new_h - target_h) // 2
        bg_img = bg_img.crop((0, top, target_w, top + target_h))

    # Create composite overlay
    overlay = Image.new("RGBA", (1000, 1500), (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    
    # Card Geometry & Position
    card_w = 900
    card_x = (1000 - card_w) // 2
    
    if data["card_position"] == "bottom":
        card_y = 780
        card_h = 660
    else:
        card_y = 60
        card_h = 660

    # Draw Card Background (Semi-transparent dark/cream editorial card)
    # 92% opaque warm dark charcoal card for high contrast mobile reading
    card_box = [card_x, card_y, card_x + card_w, card_y + card_h]
    draw.rounded_rectangle(card_box, radius=24, fill=(18, 18, 20, 235), outline=(255, 255, 255, 40), width=2)
    
    # Accent bar on top of card
    draw.rounded_rectangle([card_x + 30, card_y + 24, card_x + 120, card_y + 29], radius=3, fill=data["accent_color"] + (255,))

    # Load Fonts
    font_kicker = ImageFont.truetype(FONT_SEGOE_BOLD, 22)
    font_title = ImageFont.truetype(FONT_GEORGIA_BOLD, 36)
    font_item = ImageFont.truetype(FONT_SEGOE, 26)
    font_cta = ImageFont.truetype(FONT_SEGOE_BOLD, 24)
    font_disc = ImageFont.truetype(FONT_ARIAL, 18)

    # 1. Kicker
    y_cursor = card_y + 45
    draw.text((card_x + 40, y_cursor), data["kicker"].upper(), font=font_kicker, fill=data["accent_color"] + (255,))
    y_cursor += 36

    # 2. Title (Word wrapped)
    title_words = data["title"].split(" ")
    title_lines = []
    curr_line = ""
    for w in title_words:
        test_line = f"{curr_line} {w}".strip()
        bbox = font_title.getbbox(test_line)
        if bbox[2] > card_w - 80:
            title_lines.append(curr_line)
            curr_line = w
        else:
            curr_line = test_line
    if curr_line:
        title_lines.append(curr_line)
        
    for line in title_lines:
        draw.text((card_x + 40, y_cursor), line, font=font_title, fill=(255, 255, 255, 255))
        y_cursor += 44
    
    y_cursor += 15
    # Divider line
    draw.line([card_x + 40, y_cursor, card_x + card_w - 40, y_cursor], fill=(255, 255, 255, 50), width=1)
    y_cursor += 20

    # 3. Items / Points
    for item in data["items"]:
        draw.text((card_x + 40, y_cursor), item, font=font_item, fill=(235, 238, 242, 255))
        y_cursor += 42

    # 4. CTA Button (Gold/Amber Accent Pill)
    y_cursor = card_y + card_h - 110
    cta_box = [card_x + 40, y_cursor, card_x + card_w - 40, y_cursor + 54]
    draw.rounded_rectangle(cta_box, radius=12, fill=data["accent_color"] + (255,))
    
    # CTA Text inside button
    cta_bbox = font_cta.getbbox(data["cta"])
    cta_w = cta_bbox[2] - cta_bbox[0]
    cta_x = (card_w - cta_w) // 2 + card_x
    draw.text((cta_x, y_cursor + 13), data["cta"], font=font_cta, fill=(15, 15, 15, 255))

    # 5. FTC & Amazon Associate Disclosure Footer (At bottom of canvas)
    footer_text = "#ad • As an Amazon Associate I earn from qualifying purchases"
    disc_bbox = font_disc.getbbox(footer_text)
    disc_w = disc_bbox[2] - disc_bbox[0]
    disc_x = (1000 - disc_w) // 2
    disc_y = 1465
    
    # Subtle dark pill behind footer disclosure for 100% legibility
    draw.rounded_rectangle([disc_x - 15, disc_y - 4, disc_x + disc_w + 15, disc_y + 24], radius=6, fill=(0, 0, 0, 180))
    draw.text((disc_x, disc_y), footer_text, font=font_disc, fill=(240, 240, 240, 255))

    # Composite final image
    final_img = Image.alpha_composite(bg_img, overlay).convert("RGB")
    
    out_path = os.path.join(output_dir, data["id"])
    final_img.save(out_path, quality=95)
    print(f"[SUCCESS] Rendered Pin: {out_path}")
    return True

def main():
    print("=== BUILDING DIRECT AFFILIATE PINTEREST CREATIVES (1000x1500) ===")
    success_count = 0
    for pin in pins_data:
        if render_pin(pin):
            success_count += 1
    print(f"\nRendered {success_count} / {len(pins_data)} Pins successfully.")

if __name__ == "__main__":
    main()
