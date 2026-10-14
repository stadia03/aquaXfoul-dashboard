import re

with open("app/page.tsx", "r") as f:
    content = f.read()

# Remove the declare global block
declare_block = """declare global {
  namespace JSX {
    interface IntrinsicElements {
      "iconify-icon": any;
    }
  }
}"""
content = content.replace(declare_block, "")

# Insert the Icon component definition right before LandingPage
icon_comp = """
// Wrapper to bypass TypeScript JSX IntrinsicElements checks for custom web components
const Icon = (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { icon: string, class?: string }) => {
  return React.createElement('iconify-icon', props);
};
"""
content = content.replace("export default function LandingPage() {", icon_comp + "\nexport default function LandingPage() {")

# Replace tags
content = content.replace("<iconify-icon ", "<Icon ")
content = content.replace("</iconify-icon>", "</Icon>")

with open("app/page.tsx", "w") as f:
    f.write(content)
print("done")
