# Irodion, Lünen

Website für das griechische Spezialitäten-Restaurant Irodion, Roggenmarkt 19, 44532
Lünen. Statisches HTML, CSS und Vanilla JavaScript. Kein Framework, kein Build-Schritt,
kein npm im Auslieferungsstand.

## Was hier drin liegt

```
index.html          die ganze Seite
impressum.html      mit Bildnachweis für das erzeugte Material
datenschutz.html
404.html
css/tokens.css      Farbe, Schrift, Raum, Bewegung. Wer hier etwas ändert,
                    ändert die ganze Seite
css/fonts.css       die Schriften, lokal, pro Subset mit unicode-range
css/style.css       die Gestaltung
js/vor-anstrich.js  läuft vor dem ersten Anstrich
js/hero.js          die scroll-gesteuerte Kamerafahrt
js/main.js          Auftritte, Wochentabelle, das Nummernfeld, das Formular,
                    der Mäander am Seitenrand
assets/             Schriften, Bilder, Video
daten/karte.json      die Karte als Datenquelle, mit Preisen für später
roh/original/       das echte Material der alten Seite, gehört nicht auf den Server
roh/erzeugt/        die Bilder in voller Auflösung, gehören nicht auf den Server
scripts/            die Werkzeuge, gehören nicht auf den Server
KONZEPT.md          die Herleitung. Jede Textzeile steht wörtlich so auf der Seite
DESIGN.md           die verbindlichen visuellen Festlegungen mit den Messwerten
BILDER.md           welcher Auftrag welches Bild erzeugt hat, für den Fototausch
```

## Ansehen

```bash
python3 -m http.server 4332 --bind 127.0.0.1
```

Dann `http://127.0.0.1:4332/` im **echten Browser** öffnen. Die eingebaute Vorschau
mancher Entwicklungsumgebungen kommt mit Scroll-Video-Seiten nicht klar: Sie stellt das
Zeichnen ein, sobald sie nicht sichtbar ist, dann steht `requestAnimationFrame` still
und CSS-Übergänge frieren mitten drin ein. Das sieht nach einem kaputten Hero aus und
ist keiner.

Ein Doppelklick auf `index.html` zeigt absichtlich den Standbild-Hero: Browser sperren
`fetch` auf `file://`, also greift der geplante Rückfall.

## Die Karte ändern

Die Karte wird **nicht von Hand** in `index.html` bearbeitet. Sie steht in
`daten/karte.json` und wird von dort erzeugt:

```bash
python3 scripts/karte-bauen.py
```

Das Skript schreibt zwischen die Marken `<!-- KARTE ANFANG -->` und `<!-- KARTE ENDE -->`.
Alles, was dort von Hand hineingeschrieben wird, ist beim nächsten Lauf weg.

In `daten/karte.json` stehen zu jedem Gericht Nummer, Name, Beschreibung und Preis. **Die
Preise werden derzeit bewusst nicht ausgegeben**, so entschieden, weil sie aus der alten
PDF-Karte stammen und nicht bestätigt sind. Sie liegen aber bereit, und das Raster der
Gerichtzeile lässt für eine Preisspalte bereits Platz.

## Prüfen

```bash
node scripts/kontrast.mjs          # jede Farbpaarung gegen WCAG, gerechnet
npx impeccable detect index.html   # 59 feste Regeln gegen bekannte KI-Muster
```

Die Skripte aus dem Xenios-Projekt liegen mit im Ordner und laufen erst wieder, wenn der
eigene Hero-Film da ist:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new --disable-gpu --remote-debugging-port=9222 \
  --user-data-dir=/tmp/irodion-chrome --hide-scrollbars about:blank &

node scripts/pruefen.mjs      # Auftritte, Gates, Konsole
node scripts/lesbarkeit.mjs   # Kontrast jedes Hero-Bandes gegen den hellsten Pixel
```

**Achtung:** Beide Skripte stammen aus dem Xenios-Projekt und prüfen dort unter anderem
das Gedeck, das es hier nicht gibt. Sie müssen auf das Nummernfeld umgestellt werden,
bevor ihre Zahlen wieder etwas bedeuten.

## Was beim Livegang zu tun ist

1. **Den eigenen Hero-Film erzeugen und einsetzen.** In `assets/video/` liegt derzeit
   der Platzhalter aus dem Xenios-Projekt. Er ist bewusst mit im Repo, damit sich die
   Seite dem Kunden als vollständiges Muster vorführen lässt, siehe
   `assets/video/PLATZHALTER.md`. **Ein Muster ist kein Livegang:** Solange dort
   Fremdmaterial liegt, geht die Seite nicht öffentlich online.
2. Das fehlende Bild der Steinränge erzeugen, einsetzen und die Klasse `name--ohnebild`
   sowie ihre Regel in `style.css` entfernen. Näheres in `BILDER.md`.
3. `og:url` und `og:image` an der als `<!-- DEPLOY STEP -->` markierten Stelle in
   `index.html` mit der echten Adresse ersetzen, dazu die drei `PLATZHALTER_URL` in
   `sitemap.xml`. **Mit dem Editor, nicht mit einem Shell-Einzeiler**, sonst werden die
   Umlaute zerschossen.
4. `noindex, nofollow` aus allen vier HTML-Dateien entfernen und `robots.txt` von
   `Disallow: /` auf `Allow: /` stellen.
5. Die offenen Punkte im Impressum prüfen, sie sind dort markiert.
6. Den **Inhalt** des Ordners zippen, nicht den Ordner. `roh/` und `scripts/` bleiben
   draußen.
7. Nach dem Deploy selbst prüfen: 200 über HTTPS, das Video liefert wirklich aus,
   Konsole sauber, Scrubbing läuft live, Nummernfeld springt.

## Die Regeln, die man beim Ändern kennen muss

**Kein Inline-JavaScript.** Die `.htaccess` setzt `script-src 'self'`. Ein Skript direkt
in der Seite läuft lokal und wird live blockiert. Das fällt erst nach dem Deploy auf,
und dort nur in der Konsole.

**Die Verweise auf CSS und JS tragen einen Versionsstempel.** Die `.htaccess` lässt
Browser diese Dateien ein Jahr behalten, und die Dateinamen ändern sich nie. Ohne
Stempel sieht ein wiederkehrender Besucher eine Änderung ein Jahr lang nicht, auch
nach einem Deploy nicht. `scripts/stempel.py` hängt deshalb einen Fingerabdruck des
Dateiinhalts an, aus `css/style.css` wird `css/style.css?v=79bc5d4f`. Das läuft über
`.git/hooks/pre-commit` bei jedem Commit von selbst mit. **Auf einem neuen Rechner
einmal `python3 scripts/stempel.py --hook` ausführen**, Hooks werden nicht mitgepusht.
Ohne eingehängten Hook stimmen die Stempel irgendwann nicht mehr, `python3
scripts/stempel.py --pruefen` sagt es. Schriften bekommen bewusst keinen Stempel: die
`preload`-Zeile im Kopf muss zeichengleich mit dem `@font-face` in `fonts.css` sein,
sonst lädt der Browser dieselbe Schrift zweimal.

**Die Seite steht auf Eiche, nicht auf Sandstein.** Der Grund ist dunkel, wie der Raum.
Helle Sektionen tragen die Klasse `auf-sandstein` und sind die Ausnahme. Wer diese
Verteilung umdreht, kippt die ganze Herleitung aus `KONZEPT.md`.

**Es gibt drei Hero-Zustände**, und ihre Bedingungen stehen zeichengenau gleich in
`style.css` und in `hero.js`. Weicht eine ab, lädt die eine Seite Dateien, die die
andere versteckt.

1. Quer und breit: die große Fahrt, Text links und rechts der Mittelbahn.
2. Hochkant bis 1024px: die kleine Fahrt, Text unten über die ganze Breite.
3. Reduzierte Bewegung oder quer gehaltenes Handy ohne Höhe: gar kein Video,
   stattdessen der Standbild-Hero.

**Nur `transform` und `opacity` animieren.** Und nie eine dynamische Eigenschaft auf ein
Element setzen, das gleichzeitig eine Auftrittsanimation mit `forwards` trägt, deren
Endwert gewinnt sonst für immer.

**Kein Lieferservice**, an keiner Stelle, auch nicht im Alt-Text. Das Haus bietet
Mitnahme auf Vorbestellung an, das ist etwas anderes und heißt auf der Seite auch so.
