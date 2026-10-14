import os
import re

app_dir = '/Users/raajshekhar/untitled folder/aqua-xfoul/app'

header_str = '''<Link href="/"><div className="flex items-center gap-3 hover:opacity-80 transition-opacity">
<svg viewBox="0 0 100 100" className="w-8 h-8 text-[#A7C8FF] shrink-0" fill="none" stroke="currentColor" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
  <line x1="55" y1="20" x2="85" y2="75" />
  <line x1="35" y1="85" x2="75" y2="85" />
  <line x1="15" y1="75" x2="40" y2="30" />
</svg>
<div className="text-2xl font-bold tracking-tighter text-[#A7C8FF] font-headline">AquaXFoul</div>
</div></Link>'''

footer_str = '''<Link href="/"><div className="flex items-center gap-2 hover:opacity-80 transition-opacity">
<svg viewBox="0 0 100 100" className="w-6 h-6 text-[#A7C8FF] shrink-0" fill="none" stroke="currentColor" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
  <line x1="55" y1="20" x2="85" y2="75" />
  <line x1="35" y1="85" x2="75" y2="85" />
  <line x1="15" y1="75" x2="40" y2="30" />
</svg>
<div className="text-lg font-bold text-[#A7C8FF] font-headline mb-6">AquaXFoul</div>
</div></Link>'''

for root, dirs, files in os.walk(app_dir):
    for file in files:
        if file.endswith('.tsx'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r') as f:
                content = f.read()

            original = content
            
            # Completely replace the broken multi-nested SVG blocks with the pristine ones
            content = re.sub(r'<Link href="/">\s*<div className="flex items-center gap-3 hover.*?AquaXFoul</div>\s*</div></Link>', header_str, content, flags=re.DOTALL)
            
            content = re.sub(r'<Link href="/">\s*<div className="flex items-center gap-2 hover.*?AquaXFoul</div>\s*</div></Link>', footer_str, content, flags=re.DOTALL)
            
            # Since some might not have font-headline mb-6, let's fix the footer for pages without it
            content = content.replace('font-headline mb-6">AquaXFoul', '">AquaXFoul') if 'font-headline mb-6">AquaXFoul' in original == False else content

            if content != original:
                with open(filepath, 'w') as f:
                    f.write(content)
                print(f"Restored DOM blocks in {filepath}")
