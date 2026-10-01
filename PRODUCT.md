# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Gäste aus Lünen und Umgebung, die meisten auf dem Handy. Drei Anlässe:

- **Stammgäste**, die kurz nachsehen, ob heute offen ist, oder die Nummer eines Gerichts suchen.
- **Erstbesucher**, die entscheiden, ob sie hingehen: Was gibt es, was kostet es, wo ist es, wann ist offen.
- **Gastgeber einer Feier**, die prüfen, ob das Haus eine große Runde aufnimmt, und dann anrufen.

Alle drei wollen schnell zu denselben vier Auskünften: Karte mit Preisen, Öffnungszeiten, Telefonnummer, Lage.

## Product Purpose

Die Seite ersetzt die 22-MB-PDF-Karte, die auf dem Handy nicht aufging, und bringt Gäste ans Telefon. Erfolg heißt: Wer die Seite öffnet, findet Karte, Preis und Öffnungszeit ohne Suchen und ruft an, um einen Tisch zu reservieren.

## Positioning

Seit 1983 dieselbe Familie in demselben Fachwerkhaus am Roggenmarkt. Die Karte ist von 1 bis 1005 durchnummeriert, und Stammgäste bestellen mit der Zahl statt mit dem Namen. Das Haus ist nach dem Odeon des Herodes Atticus in Athen benannt, griechisch Ηρώδειο; das Theater ist im Haus als Glasätzung mit dem Namen IRODION vorhanden.

## Operating Context

- Reserviert wird telefonisch, 02306 12864. Kein Formular, keine Online-Reservierung. Zweiter Weg: info@irodion-luenen.de.
- Mittwoch Ruhetag, außer an Feiertagen. Mo, Di, Do bis So 11:30 bis 14:30 und 17:00 bis 22:30 Uhr. Warme Küche bis 14:00 und bis 22:00 Uhr.
- Außenbereich bei gutem Wetter unter Schirmen auf dem Kopfsteinpflaster.
- Mitnahme auf Vorbestellung. Kein Lieferservice, an keiner Stelle.
- Räume für Gesellschaften mit individueller Aufteilung, seit der Erweiterung 2017.
- Umbauten 1990, Modernisierung 2009, Erweiterung 2017.

## Capabilities and Constraints

- Statische Seite, HTML, CSS, Vanilla JS, ohne Build-Schritt. Deployment per Git-Push nach Hostinger (automatisch), Ablauf nach dem Skill `hostinger-upload`.
- Die Karte kommt aus `daten/karte.json` und wird mit `scripts/karte-bauen.py` in `index.html` gesetzt. Die Gerichts- und Getränkepreise dort sind am 28.09.2026 mit den neun Kartenscans in `roh/original/karte/` abgeglichen und stimmen.
- Preise werden ab dem Redesign angezeigt (vorher bewusst ausgeblendet).
- Versionsstempel an CSS und JS über `scripts/stempel.py` und einen pre-commit-Hook, weil Hostingers CDN und die Browser CSS und JS ein Jahr halten.
- Offen: Die Seite steht auf `noindex` und `Disallow: /`, solange sie nicht offiziell live geht. Die Adresse ist vorerst orange-swallow-342002.hostingersite.com.
- Offen: Zusatzstoffkennzeichnung. Die gedruckte Karte trägt Ziffern für Zusatzstoffe und verweist auf eine separate Allergenkarte; die Seite führt sie bisher nicht.

## Brand Commitments

- Name **Irodion**, griechisch Ηρώδειο. Unterschrift auf der eigenen Seite: Familie Tzes. Inhaber Christos Tzes.
- **Logo**: der Schriftzug IRODION in der Hausschrift, wie auf den Schirmen und in den Kartenüberschriften, Blau. Quelle `roh/Bildschirmfoto 2026-09-28 um 19.13.30.png` (292 × 84 px), gemessenes Logoblau `#305071`. Die Kartenüberschriften stehen im selben Schriftbild in `#1F2E45`. Die Hausschrift selbst liegt nicht als Font vor und wird nicht nachgebaut.
- Sprache: Wir-Form, herzlich, kurze Sätze, die eigene Begrüßung *Kalós ílthate*. Keine Gedankenstriche.
- Das Baujahr des Hauses wird nicht genannt, auch wenn am Balken eine Jahreszahl zu lesen ist.
- Der früher beschriebene geschnitzte **Mäander in den Trennwänden gibt es im Haus nicht** (Stand Fotos September 2026). Er wird nicht mehr behauptet, weder im Text noch als Motiv.

## Evidence on Hand

- 40 echte Fotos des Hauses, nur retuschiert (Licht, Farbe, Schärfe, Perspektive), nichts hinzugefügt oder entfernt: `roh/Bearbeitete Bilder:Videos Kopie/`. Hochformat 3:4 mit rund 1100 × 1450 px, zwei Querformate mit 1448 × 1086 px. Keine Videos.
- Im Haus sichtbar und fotografiert: Fachwerk außen mit Ziegel, Schirme mit dem Logo, Glasätzung des Theaters mit IRODION, geätzte Glaswände mit Akropolis-Motiven, Schwarzweiß-Fotos aus Griechenland, Fachwerkräume mit Holzbalken und Kronleuchtern, ein Flügel mit Terrakottaboden und Kognakleder, Bar, Weinwand, eine lange Tafel für Gesellschaften, Flasche mit "Restaurant IRODION by Elena".
- Die vollständige Karte mit 132 Gerichten und Preisen, dazu Getränke.
- Nicht vorhanden und nicht zu erfinden: Gästestimmen, Bewertungen, Auszeichnungen, Presse, Zahlen über Gäste oder Portionen.

## Product Principles

1. Die vier Auskünfte zuerst: Karte mit Preis, Zeiten, Telefon, Lage. Alles andere ordnet sich unter.
2. Das Haus zeigt sich selbst. Echte Fotos vor jeder Behauptung.
3. Die Nummer ist die Marke. Die Karte bleibt vollständig auf der Seite, durchnummeriert und bestellbar mit der Zahl.
4. Einfach vor raffiniert. Wer das Haus nicht kennt, muss die Seite beim ersten Blick verstehen.

## Accessibility & Inclusion

Rückmeldung September 2026: Die Seite war vielen zu dunkel und zu kompliziert, besonders der Einstieg. Die meisten lesen auf dem Handy. Fließtext groß genug ohne Zoomen, Kontrast WCAG AA auch über Fotos, Telefonnummer mit einem Tippen anwählbar, alles ohne Animation voll benutzbar. Das Alter der Gäste ist nicht erhoben und wird nicht angenommen.
