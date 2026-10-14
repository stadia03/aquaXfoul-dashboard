import os
import re

app_dir = '/Users/raajshekhar/untitled folder/aqua-xfoul/app'

for root, dirs, files in os.walk(app_dir):
    for file in files:
        if file.endswith('.tsx'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r') as f:
                content = f.read()
            
            # Remove HTML comments injected inside the TSX files
            new_content = re.sub(r'<!--.*?-->', '', content)
            
            if new_content != content:
                with open(filepath, 'w') as f:
                    f.write(new_content)
                print(f"Removed HTML comments in {filepath}")
