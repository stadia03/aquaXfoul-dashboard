import os
import re

directory = '/Users/raajshekhar/untitled folder/aqua-xfoul/app'

for root, dirs, files in os.walk(directory):
    for file in files:
        if file.endswith('.tsx'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r') as f:
                content = f.read()
            
            original_content = content
            
            # Map of text -> url
            nav_links = {
                "Technology": "/technology",
                "Impact": "/impact",
                "Business Model": "/impact",
                "Investors": "/investors",
                "Contact": "/investors",
            }
            
            # Instead of changing to Link component which can be complex with regex, 
            # I will just convert the <a> tags hrefs directly to strings.
            # Next.js <a href="/technology"> works, causing standard browser navigation.
            # But converting to <Link> is better. The app router supports <Link className="...">
            
            # 1. Inject import
            if 'import Link from "next/link"' not in content:
                content = 'import Link from "next/link";\n' + content
                
            # 2. Replace <a> with <Link>
            content = re.sub(r'<a\b', r'<Link', content)
            content = re.sub(r'</a>', r'</Link>', content)
            
            # 3. Fix the specific hrefs by looking for the label text:
            # We want to replace href="#" with the correct route.
            for label, url in nav_links.items():
                pattern = r'(href=)"#"(>'+label+'</Link>)'
                content = re.sub(pattern, rf'\1"{url}"\2', content)
                
            # Fallback for remaining href="#" to="/"
            content = content.replace('href="#"', 'href="/"')
            
            if content != original_content:
                with open(filepath, 'w') as f:
                    f.write(content)
                print(f"Updated {filepath}")
