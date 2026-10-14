import os
import re

app_dir = '/Users/raajshekhar/untitled folder/aqua-xfoul/app'

# 1. Add ID to the section in impact/page.tsx
impact_file = os.path.join(app_dir, 'impact', 'page.tsx')
with open(impact_file, 'r') as f:
    impact_content = f.read()

# find: {/* Business Model: Robotics-as-a-Service */}
#       <section className="py-24
# replace with: {/* ... */}
#               <section id="business-model" className="py-24
new_impact_content = impact_content.replace(
    '<section className="py-24 px-12 bg-surface-container-low">\n<div className="max-w-[1920px]',
    '<section id="business-model" className="py-24 px-12 bg-surface-container-low">\n<div className="max-w-[1920px]'
)

with open(impact_file, 'w') as f:
    f.write(new_impact_content)

# 2. Fix all links pointing to "Business Model"
for root, dirs, files in os.walk(app_dir):
    for file in files:
        if file.endswith('.tsx'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r') as f:
                content = f.read()
            
            # replace `href="/impact">Business Model</Link>`
            # with `href="/impact#business-model">Business Model</Link>`
            new_content = re.sub(
                r'href="/impact"(.*)>Business Model</Link>',
                r'href="/impact#business-model"\1>Business Model</Link>',
                content
            )
            
            if new_content != content:
                with open(filepath, 'w') as f:
                    f.write(new_content)
                print(f"Updated {filepath}")
