import os

app_dir = '/Users/raajshekhar/untitled folder/aqua-xfoul/app'

for root, dirs, files in os.walk(app_dir):
    for file in files:
        if file.endswith('.tsx'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r') as f:
                content = f.read()
            
            # Map valid SVG props to React JSX standard casing
            new_content = content.replace('stroke-width="14"', 'strokeWidth="14"')
            new_content = new_content.replace('stroke-linecap="round"', 'strokeLinecap="round"')
            new_content = new_content.replace('stroke-linejoin="round"', 'strokeLinejoin="round"')
            
            if new_content != content:
                with open(filepath, 'w') as f:
                    f.write(new_content)
                print(f"Fixed SVG properties in {filepath}")
