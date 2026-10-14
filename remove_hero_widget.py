with open("app/page.tsx", "r") as f:
    lines = f.readlines()

new_lines = []
skip = False
for idx, line in enumerate(lines):
    # Determine the boundaries
    # start line 140 (0-indexed) which is 141
    # end line 207 (0-indexed) which is 208
    if idx >= 140 and idx <= 208:
        continue
    new_lines.append(line)

with open("app/page.tsx", "w") as f:
    f.writelines(new_lines)
