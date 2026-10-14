import os
import re

file_path = '/Users/raajshekhar/untitled folder/aqua-xfoul/app/page.tsx'

with open(file_path, 'r') as f:
    content = f.read()

# Map the exact button text found on the new variant to dynamic routes
routes = {
    "Book Technical Consultation": "/investors",
    "Download Technical Overview": "/technology"
}

for btn_text, route in routes.items():
    # Regex to find the <button>...</button> containing the text
    # e.g.: <button className="...">\n Book Technical Consultation \n <span ...>arrow</span>\n</button>
    pattern = re.compile(rf'(<button[^>]*>.*?{btn_text}.*?</button>)', re.DOTALL | re.IGNORECASE)
    
    # Wrap that exact block in `<Link href="...">` if it isn't already
    def replacer(match):
        block = match.group(1)
        if '<Link' in block or route in block:
            return block 
        return f'<Link href="{route}">{block}</Link>'
        
    # Check if the text actually isn't already preceded by `<Link` in context
    # Usually simplest to just run the re.sub
    # But wait, maybe the route is already wrapped around the button outside?
    # No, we'll just rigidly wrap it.
    new_content = pattern.sub(replacer, content)
    if new_content != content:
        content = new_content
        print(f"Wired {btn_text} -> {route}")

with open(file_path, 'w') as f:
    f.write(content)
