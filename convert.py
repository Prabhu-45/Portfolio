
import re

def style_to_react(match):
    style_str = match.group(1)
    rules = style_str.split(';')
    react_style = []
    for rule in rules:
        if not rule.strip(): continue
        if ':' not in rule: continue
        k, v = rule.split(':', 1)
        k = k.strip()
        v = v.strip()
        parts = k.split('-')
        k_camel = parts[0] + ''.join(p.capitalize() for p in parts[1:])
        react_style.append(f"'{k_camel}': '{v}'")
    return "style={{" + ", ".join(react_style) + "}}"

with open('v1_backup/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

body_match = re.search(r'<body>(.*?)</body>', html, re.DOTALL)
if body_match:
    body = body_match.group(1)
    body = body.replace('class=', 'className=')
    body = body.replace('for=', 'htmlFor=')
    body = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', body)
    body = re.sub(r'style="([^"]*)"', style_to_react, body)
    
    body = re.sub(r'' + '(?i)<img([^>]*?)(?<!/)>', r'<img\1 />', body)
    body = re.sub(r'' + '(?i)<br([^>]*?)(?<!/)>', r'<br\1 />', body)
    body = re.sub(r'' + '(?i)<hr([^>]*?)(?<!/)>', r'<hr\1 />', body)
    body = re.sub(r'' + '(?i)<input([^>]*?)(?<!/)>', r'<input\1 />', body)
    
    with open('jsx_body.txt', 'w', encoding='utf-8') as f2:
        f2.write(body)
