# Irodion, Lünen

Website für das griechische Spezialitäten-Restaurant Irodion, Roggenmarkt 19, 44532
Lünen. Statisches HTML, CSS und Vanilla JavaScript. Kein Framework, kein Build-Schritt,
kein npm im Auslieferungsstand.

Seit dem Redesign im September 2026 hell, mit echten Fotos des Hauses und der ganzen
Karte samt Preisen. Die Richtung heißt "Die Glasätzung": Man schaut durch die geätzte
Scheibe ins Haus. Die Festlegungen stehen in `DESIGN.md`, die Produktwahrheit in
`PRODUCT.md`.

## Was hier drin liegt

```
index.html          die ganze Seite
impressum.html      mit Bildnachweis
datenschutz.html
404.html
css/tokens.css      Farbe, Schrift, Raum, Bewegung. Wer hier etwas ändert,
                    ändert die ganze Seite
css/fonts.css       die Schriften, lokal, pro Subset mit unicode-range
css/style.css       die Gestaltung
js/vor-anstrich.js  läuft vor dem ersten Anstrich
js/main.js          Fotos werden klar, Ankersprünge, der heutige Tag,
                    das Nummernfeld
assets/bilder/      13 Fotos, je 1080 und 720 Pixel breit und als
                    40-Pixel-Frostfassung. Herkunft in herkunft.json
assets/fonts/       Zodiak, Source Serif 4 (Text, Ziffern), Literata (nur Griechisch)
assets/film/        Eintritts-Fahrt (Kling 3.0) quer und hoch, Start- und Endbild
daten/karte.json    die Karte als Datenquelle, mit allen Preisen
roh/                Originale, Kartenscans, Logo. Nicht im Repository
scripts/            die Werkzeuge, von außen gesperrt
PRODUCT.md          wer die Seite nutzt und wofür
DESIGN.md           die verbindlichen visuellen Festlegungen
```

## Ansehen

```bash
python3 -m http.server 4332 --bind 127.0.0.1
```

Dann `http://127.0.0.1:4332/` im Browser öffnen.

## Die Karte ändern

Die Karte wird **nicht von Hand** in `index.html` bearbeitet. Sie steht in
`daten/karte.json` und wird von dort erzeugt:

```bash
python3 scripts/karte-bauen.py
```

Das Skript schreibt zwischen die Marken `<!-- KARTE ANFANG -->` und `<!-- KARTE ENDE -->`.
Alles, was dort von Hand hineingeschrieben wird, ist beim nächsten Lauf weg.

In `daten/karte.json` stehen zu jedem Gericht Nummer, Name, Beschreibung und Preis, zu
jedem Getränk die Mengen mit ihrem Preis. Die Preise sind am 28.09.2026 gegen die neun
aktuellen Kartenscans abgeglichen. Ändert das Haus einen Preis, wird er dort geändert und
das Skript einmal laufen gelassen.

## Prüfen

```bash
node scripts/kontrast.mjs          # jede Farbpaarung gegen WCAG, gerechnet
npx impeccable detect index.html   # feste Regeln gegen bekannte KI-Muster
python3 scripts/stempel.py --pruefen
```

`scripts/pruefen.mjs` und `scripts/lesbarkeit.mjs` stammen aus der Zeit des Scroll-Films
und prüfen Dinge, die es nicht mehr gibt. Sie bleiben liegen, bis jemand sie braucht.

## Was beim Livegang zu tun ist

1. `og:url` und `og:image` an der als `<!-- DEPLOY STEP -->` markierten Stelle in
   `index.html` mit der echten Adresse ersetzen, dazu die `PLATZHALTER_URL` in
   `sitemap.xml`. **Mit dem Editor, nicht mit einem Shell-Einzeiler**, sonst werden die
   Umlaute zerschossen.
2. `noindex, nofollow` aus allen vier HTML-Dateien entfernen und `robots.txt` von
   `Disallow: /` auf `Allow: /` stellen.
3. Die offenen Punkte im Impressum und in der Datenschutzerklärung prüfen, sie sind dort
   markiert.
4. Hochgeladen wird per `git push`. Hostinger spielt jeden Push auf main automatisch aus.
   **Nie parallel ein ZIP von Hand hochladen.** Ablauf nach dem Skill `hostinger-upload`,
   danach `pruefe_live.sh` gegen die Live-Adresse, online ist die Seite erst bei
   `== ALLES OK`.

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

**Auf Glas nur Tinte und Kartenblau.** Die Milchglasscheiben sind durchscheinend. Über
einem dunklen Bildteil fällt das graue `--tinte-weich` dort auf 3.92:1 und besteht nicht
mehr. Tinte bleibt im schlechtesten Fall bei 8.6:1.

**Nur `transform` und `opacity` animieren.** Die Fotos blenden aus ihrer Frostfassung
auf, einmal, nur über `opacity`. Ohne JavaScript und bei reduzierter Bewegung stehen sie
sofort klar da.

**Das Baujahr wird nicht genannt**, auch wenn es am Balken zu lesen ist. **Den Mäander
gibt es im Haus nicht**, er wird weder im Text noch als Motiv behauptet.

**Kein Lieferservice**, an keiner Stelle, auch nicht im Alt-Text. Das Haus bietet
Mitnahme auf Vorbestellung an, das ist etwas anderes und heißt auf der Seite auch so.
