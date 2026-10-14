import urllib.request
import re
import os

url = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzA4Y2RjMGYyZWJiMTRjNGI4MjEzNzY1ODVkM2IzZjI5EgsSBxDY8uGF6REYAZIBJAoKcHJvamVjdF9pZBIWQhQxNzU2NjE0Nzc0NjQ3NjkwODA2NA&filename=&opi=89354086"
path = "landing/page.tsx"

def html_to_jsx(html):
    body_match = re.search(r'<body[^>]*>(.*?)</body>', html, re.DOTALL | re.IGNORECASE)
    content = body_match.group(1) if body_match else html

    body_class_match = re.search(r'<body[^>]*class=["\']([^"\']*)["\']', html, re.IGNORECASE)
    body_class = body_class_match.group(1) if body_class_match else "bg-surface text-on-surface"

    content = re.sub(r'\bclass=', 'className=', content)
    content = re.sub(r'\bfor=', 'htmlFor=', content)
    content = re.sub(r'<!--(.*?)-->', r'{/*\1*/}', content, flags=re.DOTALL)
    
    content = re.sub(r'<img([^>]*?)(?<!/)>', r'<img\1 />', content)
    content = re.sub(r'<input([^>]*?)(?<!/)>', r'<input\1 />', content)
    content = re.sub(r'<br([^>]*?)(?<!/)>', r'<br\1 />', content)
    content = re.sub(r'<hr([^>]*?)(?<!/)>', r'<hr\1 />', content)

    def style_repl(match):
        style_str = match.group(1)
        bg_match = re.search(r'background-image:\s*url\([\'"]?(.*?)[\'"]?\)', style_str)
        if bg_match:
            return f'style={{{{ backgroundImage: "url(\'{bg_match.group(1)}\')" }}}}'
        return 'style={{}}'
    content = re.sub(r'style=["\']([^"\']*)["\']', style_repl, content)

    return f"""import Link from "next/link";
export default function LandingPage() {{
  return (
    <main className="{body_class}">
      {{/* Original Landing Page Variant */}}
      {content}
    </main>
  );
}}
"""

base_dir = "/Users/raajshekhar/untitled folder/aqua-xfoul/app"
print(f"Downloading {path}...")
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as response:
    html = response.read().decode('utf-8')
    jsx = html_to_jsx(html)
    
    full_path = os.path.join(base_dir, path)
    os.makedirs(os.path.dirname(full_path), exist_ok=True)
    with open(full_path, 'w') as f:
        f.write(jsx)
    print(f"Saved {full_path}")
