import os
import re

with open('jsx_body.txt', 'r', encoding='utf-8') as f:
    content = f.read()

os.makedirs('src/components', exist_ok=True)

def write_comp(name, jsx):
    with open(f'src/components/{name}.jsx', 'w', encoding='utf-8') as f:
        f.write(f"import React from 'react';\n\nexport default function {name}() {{\n  return (\n    <>\n      {jsx}\n    </>\n  );\n}}\n")

imports = []
app_jsx = []

# Extract Cursor
cursor_match = re.search(r'<div id="cursor-container">.*?</div>', content, re.DOTALL)
if cursor_match:
    write_comp('Cursor', cursor_match.group(0))
    imports.append("import Cursor from './components/Cursor';")
    app_jsx.append("<Cursor />")
    content = content.replace(cursor_match.group(0), '')

# Extract Navbar
nav_match = re.search(r'<nav id="nav">.*?</nav>', content, re.DOTALL)
if nav_match:
    write_comp('Navbar', nav_match.group(0))
    imports.append("import Navbar from './components/Navbar';")
    app_jsx.append("<Navbar />")
    content = content.replace(nav_match.group(0), '')

# Extract Footer
footer_match = re.search(r'<footer>.*?</footer>', content, re.DOTALL)
if footer_match:
    footer_content = footer_match.group(0)
    content = content.replace(footer_content, '')
else:
    footer_content = ""

# Sections start with {/*  SECTION_NAME  */}
sections = re.split(r'\{/\*\s+([A-Z\s]+)\s+\*/\}', content)

for i in range(1, len(sections), 2):
    name = sections[i].strip().title().replace(' ', '')
    jsx_content = sections[i+1].strip()
    if not jsx_content: continue
    write_comp(name, jsx_content)
    imports.append(f"import {name} from './components/{name}';")
    app_jsx.append(f"<{name} />")

if footer_content:
    write_comp('Footer', footer_content)
    imports.append("import Footer from './components/Footer';")
    app_jsx.append("<Footer />")

app_content = "import React, { useEffect } from 'react';\n" + "\n".join(imports) + "\n\nexport default function App() {\n"
app_content += "  useEffect(() => {\n"
app_content += "    const script = document.createElement('script');\n"
app_content += "    script.src = '/rive.js?v=1';\n"
app_content += "    script.async = true;\n"
app_content += "    document.body.appendChild(script);\n"
app_content += "    return () => document.body.removeChild(script);\n"
app_content += "  }, []);\n\n"
app_content += "  return (\n    <div className='app-container'>\n      " + "\n      ".join(app_jsx) + "\n    </div>\n  );\n}\n"

with open('src/App.jsx', 'w', encoding='utf-8') as f:
    f.write(app_content)
