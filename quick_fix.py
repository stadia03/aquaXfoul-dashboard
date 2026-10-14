import os
import re

app_dir = '/Users/raajshekhar/untitled folder/aqua-xfoul/app'

for root, dirs, files in os.walk(app_dir):
    for file in files:
        if file.endswith('.tsx'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r') as f:
                content = f.read()

            original = content
            
            # Deduplicate nested </Link> inside the closing </div> of headers
            while '</div></Link>\n</div></Link>' in content:
                content = content.replace('</div></Link>\n</div></Link>', '</div></Link>')

            while '</div></Link>\n</div></Link>\n</div></Link>' in content:
                content = content.replace('</div></Link>\n</div></Link>', '</div></Link>')

            # Deduplicate opening <Link...><Link...> loops wrapping buttons
            # We will find any occurrences of multiple <Link> followed by <button
            # and replace it with just the FIRST <Link> tag that matches the intent.
            def fix_open(m):
                # m.group(0) is like <Link href="/abc"><Link href="/xyz"><button
                links = re.findall(r'<Link href="([^"]*)">', m.group(0))
                # The correct link for "Book Consultation" is /investors
                # We'll just grab the first one unless it's overridden.
                target = links[0] if links else "/"
                if "Book " in content or "Request" in content:
                    pass # just heuristically
                return f'<Link href="{target}"><button'
                
            content = re.sub(r'(?:<Link href="[^"]*">){2,}<button', fix_open, content)
            
            # Deduplicate closing </Link> loops around buttons
            content = re.sub(r'</button>(?:</Link>){2,}', r'</button></Link>', content)
            
            if content != original:
                with open(filepath, 'w') as f:
                    f.write(content)
                print(f"Cleaned up {filepath}")
