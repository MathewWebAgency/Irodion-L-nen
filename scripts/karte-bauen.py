#!/usr/bin/env python3
"""Erzeugt den Karten-Abschnitt aus daten/karte.json und setzt ihn in index.html
   zwischen die beiden Marken ein. Ohne Preise, so entschieden. Die Struktur
   ist so gebaut, dass eine Preisspalte spaeter ohne Umbau dazukommt.

   Erzeugt wird ausserdem das Verzeichnis ueber der Karte. Neunzehn Gaenge
   ohne Einstieg sind keine Karte, sondern eine Wand.

   Der Hinweis zu den Beilagen stand frueher unter jedem Grillgang, also
   fuenfmal derselbe Absatz mit 55 Woertern. Er steht jetzt einmal unter
   der ganzen Karte. Gangeigene Hinweise bleiben bei ihrem Gang."""
import json, re, html, sys, pathlib

wurzel = pathlib.Path(__file__).resolve().parent.parent
d = json.loads((wurzel/'daten'/'karte.json').read_text(encoding='utf-8'))
e = lambda s: html.escape(s, quote=True)

teile, gesehen = [], set()

def gang(g, art='speise'):
    z = [f'<section class="gang" id="gang-{g["id"]}" aria-labelledby="gt-{g["id"]}">',
         f'  <h3 class="gang__titel" id="gt-{g["id"]}">{e(g["titel"])}</h3>',
         '  <ol class="gang__liste" role="list">']
    for nr, name, text, _preis in g['gerichte']:
        eid = f'nr-{nr}' if nr not in gesehen else f'nr-{nr}-{g["id"]}'
        gesehen.add(nr)
        z.append(f'    <li class="gericht" id="{eid}" data-nr="{e(nr)}">')
        z.append(f'      <span class="gericht__nr label" aria-hidden="true">{e(nr)}</span>')
        z.append(f'      <span class="gericht__name">{e(name)}</span>')
        if text:
            z.append(f'      <span class="gericht__text">{e(text)}</span>')
        z.append('    </li>')
    z.append('  </ol>')
    fuss = g.get('fuss')
    if fuss == 'grill':
        pass   # steht einmal unter der ganzen Karte, siehe Kopfkommentar
    elif fuss:
        z.append(f'  <p class="gang__fuss">{e(fuss)}</p>')
    z.append('</section>')
    return '\n'.join(z)

for g in d['gruppen']:
    teile.append(gang(g))

# Die Getraenke stehen ohne Nummern und ohne Preise, also als schlichte Listen.
gt = ['<section class="gang gang--getraenke" id="gang-getraenke" aria-labelledby="gt-getraenke">',
      '  <h3 class="gang__titel" id="gt-getraenke">Getränke</h3>',
      '  <div class="getraenke">']
for g in d['getraenke']:
    gt.append(f'    <div class="getraenke__block">')
    gt.append(f'      <h4 class="getraenke__titel label">{e(g["titel"])}</h4>')
    gt.append('      <ul role="list">')
    for z in g['zeilen']:
        gt.append(f'        <li>{e(z)}</li>')
    gt.append('      </ul>')
    gt.append('    </div>')
gt += ['  </div>', '</section>']
teile.append('\n'.join(gt))

# Das Verzeichnis. Steht ueber den Spalten und ist der Einstieg in
# neunzehn Gaenge. Reine Anker, also auch ohne JavaScript brauchbar.
namen = [(g['id'], g['titel']) for g in d['gruppen']] + [('getraenke', 'Getränke')]
idx = ['<nav class="karte__index" aria-label="Die Gänge der Karte">',
       '  <ul role="list">']
for i, titel in namen:
    idx.append(f'    <li><a class="label" href="#gang-{i}">{e(titel)}</a></li>')
idx += ['  </ul>', '</nav>']

block = '\n'.join(idx) + '\n\n' + '\n\n'.join(teile)
anz = sum(len(g['gerichte']) for g in d['gruppen'])

pfad = wurzel/'index.html'
t = pfad.read_text(encoding='utf-8')
neu = re.sub(r'(<!-- KARTE ANFANG -->).*?(<!-- KARTE ENDE -->)',
             lambda m: m.group(1)+'\n'+block+'\n'+m.group(2), t, flags=re.S)
if neu == t and '<!-- KARTE ANFANG -->' not in t:
    sys.exit('Die Marken KARTE ANFANG und KARTE ENDE fehlen in index.html.')
pfad.write_text(neu, encoding='utf-8')
print(f'{anz} Gerichte in {len(d["gruppen"])} Gängen gesetzt, dazu {len(d["getraenke"])} Getränkelisten.')
