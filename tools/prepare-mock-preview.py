"""Prepare a static browser preview with no external network connections."""
import json, shutil
from pathlib import Path
root=Path(__file__).resolve().parent.parent
preview=root.parent/'cdl-mock-preview'
dest=preview/'dist'
dest.mkdir(parents=True,exist_ok=True)
for path in root.iterdir():
    if path.name.startswith('.') or path.name in ['tests','tools','database','source-materials','CDL Assets']: continue
    if path.is_dir(): shutil.copytree(path,dest/path.name,dirs_exist_ok=True)
    elif path.suffix.lower() in ['.html','.js','.css','.json','.png','.svg','.jpg','.jpeg','.txt']: shutil.copy2(path,dest/path.name)
shutil.copy2(root/'tools/mock-auth.js',dest/'mock-auth.js')
p=dest/'index.html';html=p.read_text()
html=html.replace('<script src="vendor/supabase-2.105.0.js"></script>','<script src="mock-auth.js"></script>')
html=html.replace('<head>','<head>\n<meta http-equiv="Content-Security-Policy" content="default-src \'self\'; connect-src \'none\'; script-src \'self\' \'unsafe-inline\'; style-src \'self\' \'unsafe-inline\'; img-src \'self\' data:; font-src \'self\'; object-src \'none\'; form-action \'self\'; base-uri \'none\'">')
p.write_text(html)
(preview/'.openai').mkdir(exist_ok=True);(preview/'.openai/hosting.json').write_text(json.dumps({'static':{'directory':'dist'}}))
print(preview)

for width in (360,390,768):
    (dest/f'layout-{width}.html').write_text(f'<html lang="en"><head><meta charset="utf-8"><title>{width}px responsive test</title></head><body style="margin:0"><p>Responsive iframe test: {width}px viewport. Not device emulation.</p><iframe title="{width}px CDL Hub viewport" src="index.html" width="{width}" height="1100" style="border:1px solid #aaa;display:block"></iframe></body></html>')

(dest/'review-start.html').write_text("""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CDL local review</title><style>body{font:18px/1.6 sans-serif;max-width:720px;margin:30px auto;padding:20px}a{display:block;padding:18px;margin:15px 0;border:2px solid #14557c;color:#14557c;border-radius:10px}:focus-visible{outline:3px solid #a65f00}</style></head><body><h1>Maricel’s local instructor review</h1><p>Mock data only. No emails or Supabase connections. This is not the live website.</p><a href="instructor-review.html">1. Open instructor guide and visual comparisons</a><a href="index.html">2. Open application — choose Enter as Synthetic Driver</a><p>In the application, open Training → Safety &amp; Resources. Regulatory research is incomplete and is not approved driving guidance. Print the guide to retain findings; reloading clears its selections.</p><p>No approval gate is granted by using this preview.</p></body></html>""")
