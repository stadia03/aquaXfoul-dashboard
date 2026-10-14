import urllib.request
import re
import os

urls = {
    "page.tsx": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzg1MTIwY2Q3ZmUzZTQzZDU5MjA0Y2NiMDZlNDBjMGEzEgsSBxDY8uGF6REYAZIBJAoKcHJvamVjdF9pZBIWQhQxNzU2NjE0Nzc0NjQ3NjkwODA2NA&filename=&opi=89354086",
    "technology/page.tsx": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzc3MzY3MzI0NDAyMjRmOWQ4MmNiZjJkNjFhNjAxZGZmEgsSBxDY8uGF6REYAZIBJAoKcHJvamVjdF9pZBIWQhQxNzU2NjE0Nzc0NjQ3NjkwODA2NA&filename=&opi=89354086",
    "impact/page.tsx": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2Y3NTJjN2FmYjFhODRkZGNiM2Q0NGYwYzk5NTNhODZmEgsSBxDY8uGF6REYAZIBJAoKcHJvamVjdF9pZBIWQhQxNzU2NjE0Nzc0NjQ3NjkwODA2NA&filename=&opi=89354086",
    "investors/page.tsx": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzQ2ODM0NDkxMjMyOTRkY2NhZjRmZmQyYTk2ODJhZDU3EgsSBxDY8uGF6REYAZIBJAoKcHJvamVjdF9pZBIWQhQxNzU2NjE0Nzc0NjQ3NjkwODA2NA&filename=&opi=89354086"
}

def html_to_jsx(html):
    # Extract body content
    body_match = re.search(r'<body[^>]*>(.*?)</body>', html, re.DOTALL | re.IGNORECASE)
    if body_match:
        content = body_match.group(1)
    else:
        content = html

    # Extract body class to use on the main wrapper
    body_class_match = re.search(r'<body[^>]*class=["\']([^"\']*)["\']', html, re.IGNORECASE)
    body_class = body_class_match.group(1) if body_class_match else "bg-surface text-on-surface"

    # Replace class with className
    content = re.sub(r'\bclass=', 'className=', content)
    
    # Replace for with htmlFor
    content = re.sub(r'\bfor=', 'htmlFor=', content)

    # Convert comments
    content = re.sub(r'<!--(.*?)-->', r'{/*\1*/}', content, flags=re.DOTALL)
    
    # Self-close img, input, br, hr
    content = re.sub(r'<img([^>]*?)(?<!/)>', r'<img\1 />', content)
    content = re.sub(r'<input([^>]*?)(?<!/)>', r'<input\1 />', content)
    content = re.sub(r'<br([^>]*?)(?<!/)>', r'<br\1 />', content)
    content = re.sub(r'<hr([^>]*?)(?<!/)>', r'<hr\1 />', content)
    
    # Fix style tags (Stitch often uses style="background-image: url(...)")
    # This is a bit tricky, but let's try a simple replacement for style="background-image: url('...')"
    def style_repl(match):
        style_str = match.group(1)
        # very rudimentary parser for 'background-image: url(X)'
        bg_match = re.search(r'background-image:\s*url\([\'"]?(.*?)[\'"]?\)', style_str)
        if bg_match:
            return f'style={{{{ backgroundImage: "url(\'{bg_match.group(1)}\')" }}}}'
        return 'style={{}}'
    content = re.sub(r'style=["\']([^"\']*)["\']', style_repl, content)

    return f"""export default function Page() {{
  return (
    <main className="{body_class}">
      {content}
    </main>
  );
}}
"""

base_dir = "/Users/raajshekhar/untitled folder/aqua-xfoul/app"
os.makedirs(base_dir, exist_ok=True)

for path, url in urls.items():
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
