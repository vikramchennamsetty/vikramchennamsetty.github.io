import json

with open('lh_report.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

audits = data.get('audits', {})

color_contrast = audits.get('color-contrast', {})
link_name = audits.get('link-name', {})

print("================ COLOR CONTRAST AUDIT DETAILS ================")
print(f"Title: {color_contrast.get('title')}")
print(f"Description: {color_contrast.get('description')}")
details = color_contrast.get('details', {}).get('items', [])
for i, item in enumerate(details):
    node = item.get('node', {})
    print(f"\nItem {i+1}:")
    print(f"  Selector: {node.get('selector')}")
    print(f"  Snippet:  {node.get('snippet')}")
    print(f"  Explanation: {node.get('explanation')}")

print("\n================ LINK NAME AUDIT DETAILS ================")
print(f"Title: {link_name.get('title')}")
print(f"Description: {link_name.get('description')}")
details_link = link_name.get('details', {}).get('items', [])
for i, item in enumerate(details_link):
    node = item.get('node', {})
    print(f"\nItem {i+1}:")
    print(f"  Selector: {node.get('selector')}")
    print(f"  Snippet:  {node.get('snippet')}")
    print(f"  Explanation: {node.get('explanation')}")
