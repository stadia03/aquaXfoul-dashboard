import os
import re

app_dir = 'app'

# List of HTML tags we want to animate gracefully on scroll
tags_to_reveal = ['section', 'h1', 'h2', 'h3', 'p', 'img']

for root, _, files in os.walk(app_dir):
    for f in files:
        if f.endswith('.tsx') and f != "layout.tsx":
            path = os.path.join(root, f)
            with open(path, 'r') as file:
                content = file.read()
            
            original = content
            
            for tag in tags_to_reveal:
                # Add 'reveal ' to the className string if it doesn't already have it
                # We use a negative lookahead to prevent duplicate 'reveal reveal ' injections
                pattern = rf'<{tag}\b[^>]*?className="(?!\s*reveal\b)'
                
                # We need to replace the matched `<tag className="` with `<tag className="reveal `
                # Wait, re.sub replaces the entire match. It's better to use a capturing group
                pattern = rf'(<{tag}\b[^>]*?className=")(?!\s*reveal\b)'
                content = re.sub(pattern, r'\1reveal ', content)
                
            if content != original:
                with open(path, 'w') as file:
                    file.write(content)
                print(f"Added visual reveal animations to {path}")
