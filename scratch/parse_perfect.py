import json

with open('scratch/lh_perfect_report.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

categories = data.get('categories', {})
audits = data.get('audits', {})

print("================ FINAL ACCESSIBILITY SCORES ================")
print(f"Performance Score:    {int(categories.get('performance', {}).get('score', 0) * 100)}")
print(f"Accessibility Score:  {int(categories.get('accessibility', {}).get('score', 0) * 100)}")
print(f"Best Practices Score: {int(categories.get('best-practices', {}).get('score', 0) * 100)}")
print(f"SEO Score:            {int(categories.get('seo', {}).get('score', 0) * 100)}")

a11y_category = categories.get('accessibility', {})
audit_refs = a11y_category.get('auditRefs', [])
failed_a11y = [ref['id'] for ref in audit_refs if audits.get(ref['id'], {}).get('score') is not None and audits.get(ref['id'], {}).get('score') < 1]
print(f"\nFailed Accessibility Audits Count: {len(failed_a11y)}")
for aid in failed_a11y:
    a = audits.get(aid, {})
    print(f"  - [{aid}] {a.get('title')}: {a.get('displayValue', 'Failed')}")
