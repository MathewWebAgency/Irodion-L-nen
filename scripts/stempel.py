#!/usr/bin/env python3
"""
Der Versionsstempel an CSS und JS.

Warum es das braucht: die .htaccess laesst Browser CSS und JavaScript ein
Jahr lang behalten. Das ist fuer die Ladezeit richtig, hat aber einen
Haken. Die Dateinamen aendern sich nie, also fragt ein Browser, der die
Seite schon einmal offen hatte, gar nicht erst nach. Er sieht eine
Aenderung ein Jahr lang nicht, auch nach einem Deploy nicht.

Deshalb haengt dieses Skript an jeden Verweis einen Fingerabdruck des
Dateiinhalts:

    css/style.css   ->   css/style.css?v=a3f9c1d2

Fuer den Browser ist das eine neue Adresse, er holt sie frisch. Der
Server liefert dieselbe Datei, der Parameter interessiert ihn nicht.

Der Stempel kommt aus dem Inhalt, nicht aus einer Nummer, die jemand
hochzaehlen muss. Er aendert sich also genau dann, wenn sich die Datei
wirklich aendert, und sonst nie. Zweimal laufen lassen aendert nichts.

Schriften bekommen ausdruecklich keinen Stempel. Die <link rel=preload>
im Kopf muss zeichengleich mit dem @font-face in fonts.css sein, sonst
laedt der Browser dieselbe Schrift zweimal. Schriften werden ohnehin nie
unter gleichem Namen getauscht.

    python3 scripts/stempel.py          setzt die Stempel
    python3 scripts/stempel.py --pruefen  meldet nur, aendert nichts
    python3 scripts/stempel.py --hook     haengt es an "git commit"
"""

import hashlib
import io
import os
import re
import sys

WURZEL = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# href="css/..." und src="js/...", ein bereits vorhandener Stempel wird
# mitgefasst und ersetzt.
MUSTER = re.compile(r'(\s(?:href|src)=")((?:css|js)/[^"?]+\.(?:css|js))(\?v=[0-9a-f]+)?(")')


def fingerabdruck(pfad):
    with open(pfad, 'rb') as f:
        return hashlib.sha256(f.read()).hexdigest()[:8]


def lauf(nur_pruefen=False):
    html = sorted(f for f in os.listdir(WURZEL) if f.endswith('.html'))
    geaendert, offen, fehlend = [], [], []

    for name in html:
        pfad = os.path.join(WURZEL, name)
        # Umlaute: ausdruecklich UTF-8 lesen und schreiben, nie ueber die
        # Locale des Terminals gehen.
        with io.open(pfad, encoding='utf-8') as f:
            alt = f.read()

        def ersetzen(m):
            ziel = os.path.join(WURZEL, m.group(2))
            if not os.path.exists(ziel):
                fehlend.append('%s -> %s' % (name, m.group(2)))
                return m.group(0)
            return '%s%s?v=%s%s' % (m.group(1), m.group(2), fingerabdruck(ziel), m.group(4))

        neu = MUSTER.sub(ersetzen, alt)

        if neu != alt:
            if nur_pruefen:
                offen.append(name)
            else:
                with io.open(pfad, 'w', encoding='utf-8') as f:
                    f.write(neu)
                geaendert.append(name)

    for z in fehlend:
        print('FEHLT: %s' % z)

    if nur_pruefen:
        if offen:
            print('Stempel nicht aktuell in: %s' % ', '.join(offen))
            return 1
        print('Alle Stempel aktuell.')
        return 1 if fehlend else 0

    if geaendert:
        print('Stempel gesetzt in: %s' % ', '.join(geaendert))
    else:
        print('Stempel waren schon aktuell.')
    return 1 if fehlend else 0


def hook_einhaengen():
    """Haengt das Skript vor jeden Commit. Muss auf jedem Rechner einmal
    laufen, denn Hooks liegen in .git/hooks und werden nicht mitgepusht."""
    ziel = os.path.join(WURZEL, '.git', 'hooks', 'pre-commit')
    if not os.path.isdir(os.path.dirname(ziel)):
        print('Kein .git/hooks gefunden, ist das ein Repository?')
        return 1
    inhalt = (
        '#!/bin/sh\n'
        '# Setzt die Versionsstempel an CSS und JS und legt die\n'
        '# geaenderten HTML-Dateien mit in den Commit.\n'
        'python3 "$(git rev-parse --show-toplevel)/scripts/stempel.py" || exit 1\n'
        'cd "$(git rev-parse --show-toplevel)" && git add -- *.html\n'
    )
    with io.open(ziel, 'w', encoding='utf-8') as f:
        f.write(inhalt)
    os.chmod(ziel, 0o755)
    print('Eingehaengt: .git/hooks/pre-commit')
    print('Auf jedem weiteren Rechner einmal "python3 scripts/stempel.py --hook" laufen lassen.')
    return 0


if __name__ == '__main__':
    if '--hook' in sys.argv:
        sys.exit(hook_einhaengen())
    sys.exit(lauf(nur_pruefen='--pruefen' in sys.argv))
