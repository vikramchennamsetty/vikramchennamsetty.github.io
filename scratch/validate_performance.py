import os
import xml.etree.ElementTree as ET

html_path = 'small-apartment-entryway-organization-guide.html'
with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Core tags & disclosures
assert 'G-SSKL97RTQC' in content, 'GA4 missing'
assert 'wviafl7b6g' in content, 'Clarity missing'
assert 'elevateliv05f-20' in content, 'Amazon Tag missing'
assert 'B0GQ26MSVQ' in content, 'ASIN 1 missing'
assert 'B0G65C2FR1' in content, 'ASIN 2 missing'
assert 'B07K71JDZ3' in content, 'ASIN 3 missing'
assert 'B091YMYV7Q' in content, 'ASIN 4 missing'
assert 'B08JTFZLT9' in content, 'ASIN 5 missing'
assert 'https://elevatelivingco.me/small-apartment-entryway-organization-guide.html' in content, 'Canonical missing'

# Asset check
assert os.path.exists('assets/images/small-apartment-entryway-hero.jpg'), 'Hero JPG missing'
assert os.path.exists('assets/images/small-apartment-entryway-hero.webp'), 'Hero 1024w WebP missing'
assert os.path.exists('assets/images/small-apartment-entryway-hero-750w.webp'), 'Hero 750w WebP missing'

# Hero image sizes
jpg_size = os.path.getsize('assets/images/small-apartment-entryway-hero.jpg')
webp_1024_size = os.path.getsize('assets/images/small-apartment-entryway-hero.webp')
webp_750_size = os.path.getsize('assets/images/small-apartment-entryway-hero-750w.webp')

print(f"Original JPG size: {jpg_size} bytes ({jpg_size/1024:.1f} KiB)")
print(f"WebP 1024w size:  {webp_1024_size} bytes ({webp_1024_size/1024:.1f} KiB)")
print(f"WebP 750w size:   {webp_750_size} bytes ({webp_750_size/1024:.1f} KiB)")

# Check DOM image texture reuse in Three.js
assert 'new THREE.Texture(heroImgElement)' in content, 'DOM Texture reuse missing in Three.js'

# Accessibility checks
assert 'role="region"' in content, '3D Canvas region role missing'
assert '<h3 class="faq-question">' in content, 'FAQ heading order fix missing'

# Sitemap validation
tree = ET.parse('sitemap.xml')
root = tree.getroot()
urls = [e.text for e in root.findall('.//{http://www.sitemaps.org/schemas/sitemap/0.9}loc')]
assert 'https://elevatelivingco.me/small-apartment-entryway-organization-guide.html' in urls, 'Article missing from sitemap'

print("\n>>> ALL VALIDATION CHECKS PASSED PERFECTLY! <<<")
