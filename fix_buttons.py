import os
import re

app_dir = '/Users/raajshekhar/untitled folder/aqua-xfoul/app'

# Mapping of button text keywords to href destinations
button_routes = {
    "Book Consultation": "/investors",
    "Calculate Your ROI": "/impact#business-model",
    "Calculate Potential Savings": "/impact#business-model",
    "Download Technical Specs": "/technology",
    "Select Plan": "/investors",
    "Request Quote": "/investors"
}

def resolve_href(text):
    for key, route in button_routes.items():
        if key.lower() in text.lower():
            return route
    return None

for root, dirs, files in os.walk(app_dir):
    for file in files:
        if file.endswith('.tsx'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r') as f:
                content = f.read()

            original_content = content
            
            # Make sure Link is imported
            if 'import Link from "next/link"' not in content:
                content = 'import Link from "next/link";\n' + content

            # Find all <button ...> ... </button>
            # Use a regex that captures the whole button tag and the inner text.
            # We use re.DOTALL to match multiline text if any.
            # We need to find <button>...</button>, but we shouldn't wrap if it's already inside a <Link>
            # An easy way is to use a negative lookbehind if possible, but python's lookbehind must be fixed length.
            # Instead, just match the button, and if we are wrapping, check if the replaced string has duplicated Links.
            def replace_button(match):
                start_tag = match.group(1)
                inner_text = match.group(2)
                end_tag = match.group(3)
                
                href = resolve_href(inner_text)
                
                if href:
                    return f'<Link href="{href}">{start_tag}{inner_text}{end_tag}</Link>'
                return match.group(0)
                
            # Find and replace, but later strip duplicate <Link><Link ...> 
            content = pattern.sub(replace_button, content)
            
            # Simple cleanup for duplicated nested links
            import re as regex
            content = regex.sub(r'<Link href="[^"]*">\s*<Link href="[^"]*">', r'<Link href="'+href+'">' if href else r'<Link href="/">', content)
            # Actually, much safer to just run this script on raw JSX only!
            
            if content != original_content:
                with open(filepath, 'w') as f:
                    f.write(content)
                print(f"Updated buttons in {filepath}")
