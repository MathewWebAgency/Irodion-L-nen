#!/usr/bin/env python3
"""Erzeugt den Karten-Abschnitt aus daten/karte.json und setzt ihn in
   speisekarte.html zwischen die Marken KARTE ANFANG und KARTE ENDE.
   Dazu js/karte-daten.js: Nummer, Name, Preis je Gericht, damit das
   Nummernfeld auf der Startseite ohne die ganze Karte antworten kann.

   Seit dem Redesign im September 2026 mit Preisen. Die Preise stehen in
   einer festen Spalte in der Ziffernschrift, jede Zeile gleich breit, damit
   das Auge senkrecht von Preis zu Preis laufen kann wie auf der gedruckten
   Karte.

   Die Nummer ist lesbar, nicht versteckt: Man bestellt in diesem Haus mit
   ihr, also muss sie auch ein Vorleseprogramm nennen.

   Erzeugt wird ausserdem das Verzeichnis ueber der Karte. Neunzehn Gaenge
   ohne Einstieg sind keine Karte, sondern eine Wand.

   Der Beilagenhinweis steht auf dem Papier fuenfmal, weil jede Seite fuer
   sich lesbar sein muss. Auf einer Seite, die man am Stueck scrollt, steht
   er einmal unter der Karte. Gangeigene Hinweise bleiben bei ihrem Gang."""
import json, re, html, sys, pathlib

wurzel = pathlib.Path(__file__).resolve().parent.parent
d = json.loads((wurzel/'daten'/'karte.json').read_text(encoding='utf-8'))
e = lambda s: html.escape(s, quote=True)

def preis(p):
    """Preis in eine data-Zeile: sichtbar wie gedruckt, maschinenlesbar mit Punkt."""
    wert = p.replace('.', '').replace(',', '.')
    return (f'<data class="preis" value="{wert}">{e(p)}'
            f'<span class="nur-fuer-screenreader"> Euro</span></data>')

teile, gesehen = [], set()

def gang(g):
    z = [f'<section class="gang" id="gang-{g["id"]}" aria-labelledby="gt-{g["id"]}">',
         f'  <h2 class="gang__titel" id="gt-{g["id"]}">{e(g["titel"])}</h2>',
         '  <ol class="gang__liste" role="list">']
    for nr, name, text, p in g['gerichte']:
        eid = f'nr-{nr}' if nr not in gesehen else f'nr-{nr}-{g["id"]}'
        gesehen.add(nr)
        z.append(f'    <li class="gericht" id="{eid}" data-nr="{e(nr)}" data-preis="{e(p)}">')
        z.append(f'      <span class="gericht__nr"><span class="nur-fuer-screenreader">Nummer </span>{e(nr)}</span>')
        z.append(f'      <span class="gericht__name">{e(name)}</span>')
        z.append(f'      {preis(p)}')
        if text:
            z.append(f'      <span class="gericht__text">{e(text)}</span>')
        z.append('    </li>')
    z.append('  </ol>')
    fuss = g.get('fuss')
    if fuss and fuss != 'grill':
        z.append(f'  <p class="gang__fuss">{e(fuss)}</p>')
    z.append('</section>')
    return '\n'.join(z)

for g in d['gruppen']:
    teile.append(gang(g))

# Die Getraenke tragen keine Nummern, dafuer Mengen. Eine Zeile je Getraenk,
# rechts die Paare aus Menge und Preis.
gt = ['<section class="gang gang--getraenke" id="gang-getraenke" aria-labelledby="gt-getraenke">',
      '  <h2 class="gang__titel" id="gt-getraenke">Getränke</h2>',
      '  <div class="getraenke">']
for g in d['getraenke']:
    gt.append('    <div class="getraenke__block">')
    gt.append(f'      <h3 class="getraenke__titel">{e(g["titel"])}</h3>')
    gt.append('      <ul class="getraenke__liste" role="list">')
    for name, paare in g['zeilen']:
        gt.append('        <li class="trank">')
        gt.append(f'          <span class="trank__name">{e(name)}</span>')
        gt.append('          <span class="trank__preise">')
        for menge, p in paare:
            m = f'<span class="trank__menge">{e(menge)}</span>' if menge else ''
            gt.append(f'            <span class="trank__paar">{m}{preis(p)}</span>')
        gt.append('          </span>')
        gt.append('        </li>')
    gt.append('      </ul>')
    gt.append('    </div>')
gt += ['  </div>', '</section>']
teile.append('\n'.join(gt))

namen = [(g['id'], g['titel']) for g in d['gruppen']] + [('getraenke', 'Getränke')]
idx = ['<nav class="karte__index" aria-label="Die Gänge der Karte">',
       '  <ul role="list">']
for i, titel in namen:
    idx.append(f'    <li><a href="#gang-{i}">{e(titel)}</a></li>')
idx += ['  </ul>', '</nav>']

# Die Hinweise unter der Karte, einmal und aus denselben Daten.
h = d['hinweise']
noten = ['<div class="karte__noten">']
noten.append('  <p>' + ' '.join(e(s) for s in h['grill']) + '</p>')
noten.append(f'  <p>{e(h["allergie"])}</p>')
noten.append('</div>')

block = ('\n'.join(idx) + '\n\n<div class="karte__gaenge">\n'
         + '\n\n'.join(teile) + '\n</div>\n\n' + '\n'.join(noten))
anz = sum(len(g['gerichte']) for g in d['gruppen'])

pfad = wurzel/'speisekarte.html'
t = pfad.read_text(encoding='utf-8')
if '<!-- KARTE ANFANG -->' not in t or '<!-- KARTE ENDE -->' not in t:
    sys.exit('Die Marken KARTE ANFANG und KARTE ENDE fehlen in speisekarte.html.')
neu = re.sub(r'(<!-- KARTE ANFANG -->).*?(<!-- KARTE ENDE -->)',
             lambda m: m.group(1)+'\n'+block+'\n'+m.group(2), t, flags=re.S)
pfad.write_text(neu, encoding='utf-8')

# Die Daten fuer das Nummernfeld auf der Startseite, in Kartenreihenfolge.
# Fuehrt die Karte eine Nummer zweimal, gilt die erste Stelle, wie beim
# Anker nr-<nummer> auf der Speisekarte.
daten, schon = [], set()
for g in d['gruppen']:
    for nr, name, text, p in g['gerichte']:
        if nr in schon:
            continue
        schon.add(nr)
        daten.append([nr, name, p])
js = ('/* Erzeugt von scripts/karte-bauen.py aus daten/karte.json. Nicht von\n'
      '   Hand bearbeiten. Je Gericht: Nummer, Name, Preis. */\n'
      'window.IRODION_KARTE = ' + json.dumps(daten, ensure_ascii=False, separators=(',', ':')) + ';\n')
(wurzel/'js'/'karte-daten.js').write_text(js, encoding='utf-8')
print(f'{anz} Gerichte in {len(d["gruppen"])} Gängen gesetzt, dazu '
      f'{sum(len(g["zeilen"]) for g in d["getraenke"])} Getränke in {len(d["getraenke"])} Listen, alle mit Preis.')
