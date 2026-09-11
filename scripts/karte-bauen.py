#!/usr/bin/env python3
"""Erzeugt den Karten-Abschnitt aus daten/karte.json und setzt ihn in index.html
   zwischen die beiden Marken ein. Ohne Preise, so entschieden. Die Struktur
   ist so gebaut, dass eine Preisspalte spaeter ohne Umbau dazukommt."""
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
        z.append('  <p class="gang__fuss">Bei Beilagenänderungen berechnen wir zusätzlich den '
                 'Preis der gewünschten Beilage. Statt gemischtem Salat reichen wir zum Aufpreis '
                 'von 3,00 Euro einen Bauernsalat. Auf Wunsch überbacken wir alle Gerichte mit '
                 'Metaxasauce und Käse zum Aufpreis von 3,50 Euro.</p>')
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

block = '\n\n'.join(teile)
anz = sum(len(g['gerichte']) for g in d['gruppen'])

pfad = wurzel/'index.html'
t = pfad.read_text(encoding='utf-8')
neu = re.sub(r'(<!-- KARTE ANFANG -->).*?(<!-- KARTE ENDE -->)',
             lambda m: m.group(1)+'\n'+block+'\n'+m.group(2), t, flags=re.S)
if neu == t and '<!-- KARTE ANFANG -->' not in t:
    sys.exit('Die Marken KARTE ANFANG und KARTE ENDE fehlen in index.html.')
pfad.write_text(neu, encoding='utf-8')
print(f'{anz} Gerichte in {len(d["gruppen"])} Gängen gesetzt, dazu {len(d["getraenke"])} Getränkelisten.')
