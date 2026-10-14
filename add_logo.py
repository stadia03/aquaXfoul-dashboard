import os
import re

app_dir = '/Users/raajshekhar/untitled folder/aqua-xfoul/app'

# The perfectly reconstructed geometric SVG
svg_logo = '''<svg viewBox="0 0 100 100" className="w-8 h-8 text-[#A7C8FF] shrink-0" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
  <!-- Right Line -->
  <line x1="55" y1="20" x2="85" y2="75" />
  <!-- Bottom Line -->
  <line x1="35" y1="85" x2="75" y2="85" />
  <!-- Left Line -->
  <line x1="15" y1="75" x2="40" y2="30" />
</svg>'''

svg_logo_footer = svg_logo.replace('w-8 h-8', 'w-6 h-6')

def replace_logo(content):
    # Regex to find header logo (text-2xl)
    # `<div className="text-2xl... ">AquaXFoul</div>`
    # Replace with `<div className="flex items-center gap-3">\n{svg_logo}\n...</div>`
    header_pattern = re.compile(r'(<div className="text-2xl[^>]*>AquaXFoul</div>)')
    def header_repl(m):
        return f'<Link href="/"><div className="flex items-center gap-3 hover:opacity-80 transition-opacity">\n{svg_logo}\n{m.group(1)}\n</div></Link>'
        
    # Regex to find footer logo (text-lg)
    footer_pattern = re.compile(r'(<div className="text-lg[^>]*>AquaXFoul</div>)')
    def footer_repl(m):
        return f'<Link href="/"><div className="flex items-center gap-2 hover:opacity-80 transition-opacity">\n{svg_logo_footer}\n{m.group(1)}\n</div></Link>'
        
    new_content = header_pattern.sub(header_repl, content)
    new_content = footer_pattern.sub(footer_repl, new_content)
    
    return new_content

for root, dirs, files in os.walk(app_dir):
    for file in files:
        if file.endswith('.tsx'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r') as f:
                content = f.read()

            new_content = replace_logo(content)
            
            # Make sure Link is imported for the brand marks
            if 'import Link' not in new_content and new_content != content:
                new_content = 'import Link from "next/link";\n' + new_content

            if new_content != content:
                with open(filepath, 'w') as f:
                    f.write(new_content)
                print(f"Injected SVG logo into {filepath}")
