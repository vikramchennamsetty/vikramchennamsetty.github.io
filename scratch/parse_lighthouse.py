import json, glob

files = glob.glob('*.json') + glob.glob('scratch/*.json')
print("Found JSON report files:", files)

for path in files:
    if 'metadata' in path or 'EVIDENCE' in path: continue
    print(f"\n--- Reading {path} ---")
    with open(path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    categories = data.get('categories', {})
    audits = data.get('audits', {})

    print(f"Performance Score:    {int(categories.get('performance', {}).get('score', 0) * 100)}")
    print(f"Accessibility Score:  {int(categories.get('accessibility', {}).get('score', 0) * 100)}")
    print(f"Best Practices Score: {int(categories.get('best-practices', {}).get('score', 0) * 100)}")
    print(f"SEO Score:            {int(categories.get('seo', {}).get('score', 0) * 100)}")

    a11y_category = categories.get('accessibility', {})
    audit_refs = a11y_category.get('auditRefs', [])
    failed_a11y = [ref['id'] for ref in audit_refs if audits.get(ref['id'], {}).get('score') is not None and audits.get(ref['id'], {}).get('score') < 1]
    print(f"Failed Accessibility Audits ({len(failed_a11y)}):")
    for aid in failed_a11y:
        a = audits.get(aid, {})
        print(f"  - [{aid}] {a.get('title')}: {a.get('displayValue', 'Failed')}")
