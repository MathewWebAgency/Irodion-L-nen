---
name: Irodion Lünen
description: Griechisches Restaurant am Roggenmarkt. Man schaut durch die geätzte Scheibe ins Haus.
colors:
  leinen: "#FAF5EC"
  leinen-tief: "#F1E8D8"
  tinte: "#1E3450"
  tinte-weich: "#4E5D70"
  eiche: "#1E3450"
  logoblau: "#305071"
  orange: "#F28C38"
  orange-hover: "#FFA050"
  orange-dunkel: "#C2542A"
  auf-eiche: "#FAF5EC"
  auf-eiche-weich: "#C3D3E4"
  auf-blau-weich: "#C3D3E4"
  treffer: "#F8D2AE"
  linie: "#E3D9C8"
  feldrand: "#7A8494"
  feld: "#FFFFFF"
  glas: "rgba(250, 245, 236, 0.88)"
  glas-voll: "#FAF5EC"
  glas-rand: "rgba(255, 255, 255, 0.78)"
typography:
  display:
    fontFamily: "Zodiak, Source Serif 4, Literata, Georgia, serif"
    fontSize: "clamp(2.625rem, 1.7rem + 3.9vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1.06
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Zodiak, Source Serif 4, Literata, Georgia, serif"
    fontSize: "clamp(2.125rem, 1.5rem + 2.6vw, 3.25rem)"
    fontWeight: 400
    lineHeight: 1.06
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Zodiak, Source Serif 4, Literata, Georgia, serif"
    fontSize: "clamp(1.625rem, 1.3rem + 1.4vw, 2.125rem)"
    fontWeight: 400
    lineHeight: 1.06
    letterSpacing: "-0.02em"
  title-klein:
    fontFamily: "Zodiak, Source Serif 4, Literata, Georgia, serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.2
  lead:
    fontFamily: "Source Serif 4, Literata, Georgia, Times New Roman, serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Source Serif 4, Literata, Georgia, Times New Roman, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  body-klein:
    fontFamily: "Source Serif 4, Literata, Georgia, Times New Roman, serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.45
  label:
    fontFamily: "Source Serif 4, Literata, Georgia, Times New Roman, serif"
    fontSize: "0.9375rem"
    fontWeight: 500
    lineHeight: 1.3
  lead-handy:
    fontFamily: "Source Serif 4, Literata, Georgia, Times New Roman, serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.45
  label-klein:
    fontFamily: "Source Serif 4, Literata, Georgia, Times New Roman, serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.2
  vermerk:
    fontFamily: "Source Serif 4, Literata, Georgia, Times New Roman, serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.4
  ziffer:
    fontFamily: "Source Serif 4, Literata, Georgia, Times New Roman, serif"
    fontSize: "0.9375rem"
    fontWeight: 500
    fontFeature: "tnum, lnum"
  nummer-gross:
    fontFamily: "Zodiak, Source Serif 4, Georgia, serif"
    fontSize: "clamp(2.25rem, 1.5rem + 3vw, 3.75rem)"
    fontWeight: 400
    letterSpacing: "-0.01em"
rounded:
  none: "0px"
  rund: "6px"
  marke: "4px"
spacing:
  r-1: "0.375rem"
  r-2: "0.75rem"
  r-3: "1.25rem"
  r-4: "2rem"
  r-5: "clamp(2.125rem, 1.73rem + 1.69vw, 3.25rem)"
  r-6: "clamp(2.75rem, 1.85rem + 3.76vw, 5.25rem)"
  r-7: "clamp(4rem, 2.40rem + 6.80vw, 8.5rem)"
  rand: "clamp(1.25rem, 5vw, 4rem)"
  breite: "76rem"
components:
  button-primary:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.eiche}"
    typography: "{typography.label}"
    rounded: "{rounded.rund}"
    padding: "0 1.5rem"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "{colors.orange-hover}"
    textColor: "{colors.eiche}"
  ruf:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.eiche}"
    rounded: "{rounded.rund}"
    padding: "0.85rem 1.4rem 0.95rem"
  ruf-hover:
    backgroundColor: "{colors.orange-hover}"
  tipp:
    backgroundColor: "transparent"
    textColor: "{colors.tinte}"
    typography: "{typography.label}"
    rounded: "{rounded.rund}"
    padding: "0.45rem 0.75rem"
  tipp-hover:
    backgroundColor: "{colors.feld}"
  ruhetag:
    backgroundColor: "{colors.treffer}"
    textColor: "{colors.eiche}"
    rounded: "{rounded.marke}"
    padding: "0.05rem 0.45rem"
  heute:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.eiche}"
    rounded: "{rounded.marke}"
    padding: "0.05rem 0.4rem"
  eingabe-nummer:
    backgroundColor: "{colors.feld}"
    textColor: "{colors.tinte}"
    rounded: "{rounded.rund}"
    padding: "0 1rem"
    height: "4.25rem"
  kalkblock:
    backgroundColor: "{colors.leinen}"
    textColor: "{colors.tinte}"
    rounded: "{rounded.none}"
    padding: "clamp(1.25rem, 0.8rem + 2vw, 2.5rem)"
  scheibe:
    backgroundColor: "{colors.glas}"
    textColor: "{colors.tinte}"
    rounded: "{rounded.none}"
    padding: "clamp(1.5rem, 1rem + 2.4vw, 3.25rem)"
  kopf:
    backgroundColor: "{colors.logoblau}"
    textColor: "{colors.auf-eiche}"
    height: "3.75rem"
  heute-marke:
    backgroundColor: "{colors.treffer}"
    textColor: "{colors.eiche}"
    padding: "0.05rem 0.4rem"
---

# Design System: Irodion Lünen

## Overview

**Creative North Star: "Die Glasätzung"**

Man steht vor dem Haus und schaut durch eine geätzte Scheibe hinein. Die Seite trägt die Farben des Hauses: Kalk wie der Putz zwischen den Balken, Sand wie die Sandsteinwand, Eiche wie Balken und Bänke, und das Blau vom Schriftzug auf den Schirmen. Eiche und Blau tragen ganze Abschnitte, nie kleine Tupfer; so wechselt die Seite beim Scrollen die Farbe wie ein Gang durchs Haus, ruhig und ohne grelle Töne. Es gibt genau ein materielles Bauteil, das Milchglas, und es steht nur dort, wo wirklich etwas dahinter liegt: über dem Foto im Einstieg. Alles andere sind klar geschnittene Blöcke, eckig, ohne Verlauf. Nur was man drückt oder ausfüllt, hat leicht gerundete Ecken (6px), wie eine gestanzte Karte.

Die Überschriften stehen in einer leichten Display-Serif, und genau diese Leichtigkeit trennt das System von billig: Es wird nie fett, nie laut. Alles Gelesene steht in einer Buchschrift, wie auf einer gedruckten Karte. Zahlen bleiben in derselben Schrift, mit Tabellenziffern, weil die Karte mit der Nummer bestellt wird und Nummer, Preis und Uhrzeit senkrecht fluchten müssen. Große Nummern (Telefon, Nummernfeld) stehen in der Display-Serif. Die Fotos sind echt und ungetönt, sie tragen die Atmosphäre, das System hält sich zurück.

Bewegung erzählt einen einzigen Gang: vom Eingang unter dem Rundbogen durchs Haus bis an den Tisch. Jede Bewegung hat eine ruhige Fassung, die ohne JavaScript und bei reduzierter Bewegung vollständig ist. Abgelehnt sind ein dunkler Vollbild-Einstieg mit Text in der Mitte, Gold auf Nachtblau und ein Scroll-Film mit Bändern.

**Key Characteristics:**
- Creme als Grund statt hellem Weiß, dazu Abschnitte in Navy, Hauptblau und Sand im Wechsel. Orange ist der einzige Akzent, sparsam (rund 10 Prozent): Knöpfe mit Navy-Schrift, die Marke "heute"; das dunkle Orange nur für große Überschriften.
- Milchglas nur über Fotos, sonst massive Blöcke.
- Fotos, Flächen und Glas eckig. Knöpfe, Felder und Tipps 6px, die Marken "heute" und "Ruhetag" 4px.
- Leichte Display-Serif für Überschriften und große Nummern, Source Serif 4 für alles Gelesene, Zahlen darin mit Tabellenziffern.
- Eine Achse: Die linke Kante der Scheibe im Einstieg ist die linke Kante jeder Sektion.
- Fotos kommen weich an und werden klar, einmal, nur über Deckkraft.

## Colors

Die Palette hat Aaron am 30.09.2026 vorgegeben: Hauptblau #305071, Navy #1E3450, Creme #FAF5EC, Orange #F28C38 (Hover #FFA050), dunkles Orange #C2542A. Orange ist der einzige Akzent und sparsam gesetzt. Knöpfe sind Orange mit Navy-Schrift, nie weiße Schrift auf Orange. Auf Blau und Navy steht Creme, auf Creme steht Navy. Kein Gold, kein Braun. Die Tokennamen eiche und leinen stammen aus der ersten Fassung und tragen heute Navy und Creme. Farben stehen als volle Flächen nebeneinander und mischen sich nie.

### Primary
- **Logoblau** (logoblau): Das gemessene Blau des Schriftzugs von den Schirmen. Logo, Gerichtsnummern, Kartenindex, die Rauten auf hellem Grund, der Rand der heutigen Zeile und der Fokusring; als Fläche Kopf und Nummernfeld. Kontrast auf Kalk 6.77:1, trägt also auch Text.

### Neutral
- **Kalk** (leinen): Der Grund der Seite (Einstieg, Rundgang, Karte, Draußen) und der Block des Nummernfelds. Der Putz zwischen den Balken. Der Tokenname blieb aus der ersten Fassung.
- **Sand** (leinen-tief): Das Haus, Zeiten und Platz, Platzhalter und die Farbe unter jedem noch nicht geladenen Foto. Die Sandsteinwand.
- **Logoblau als Fläche**: Das Nummernfeld steht auf Blau; Text darauf Auf Eiche (7.31:1), Nebentext Auf Blau weich (5.48:1).
- **Navy** (eiche, tinte): Dunkle Sektionen (Name, Feiern, Fuß), die Schrift auf jedem orangen Knopf, Fließtext auf Creme.
- **Orange / Orange hell / Orange dunkel** (orange, orange-hover, orange-dunkel): Knopffläche, ihr Hover, und große Überschriften auf Creme und Sand (4.21:1, nur ab Large-Text-Größe).
- **Tinte** (tinte): Fließtext auf Kalk, 13.61:1, auf Sand 11.51:1.
- **Tinte weich** (tinte-weich): Nebentext, Beschreibungen der Gerichte, Bildsätze, Ruhetag. Nie auf Glas.
- **Auf Eiche** (auf-eiche): Text und Überschriften auf Eiche, auch die Ätzlinie.
- **Auf Eiche weich** (auf-eiche-weich): Nebentext auf Eiche, die kleine Zeile über der Telefonnummer im Ruf.
- **Treffer** (treffer): Die eine Markierfläche. Das gefundene Gericht, die Marke "heute" in der Wochentabelle, die Textauswahl.
- **Linie** (linie): Haarlinien ohne Textanforderung. Tabellenzeilen, Kartenindex, Kopfkante, Fortschrittsspur.
- **Feldrand** (feldrand): Rand von Eingabe und Tipps, Platzhaltertext. 3.81:1 auf Kalk, als Rand ausreichend.
- **Feld** (feld): Reines Weiß nur im Nummernfeld und als Hover der Tipps. Die einzige Stelle, an der Weiß als Fläche steht.
- **Glas / Glas voll / Glasrand** (glas, glas-voll, glas-rand): Das Milchglas der Scheibe, 70 Prozent Kalk mit Weichzeichnung dahinter; Glas voll ist die deckende Fassung ohne backdrop-filter und bei reduzierter Transparenz.

### Named Rules
**The Ganze-Flächen Rule.** Navy und Hauptblau sind Flächen, keine Tupfer: Hauptblau trägt den Kopf und das Nummernfeld, Navy Name, Feiern und Fuß. Orange steht nur auf Knöpfen und der Marke "heute", das dunkle Orange nur in großen Überschriften auf Creme und Sand (kleine Überschriften wie die Getränketitel stehen in Navy). Kein Gold. Zwei gleichfarbige Abschnitte stehen nie direkt nebeneinander.

**The Kein-Verlauf Rule.** Farben mischen sich nie, es gibt keinen Farbverlauf zwischen zwei Palettentönen. Die einzige Ausnahme ist ein Schleier aus Eiche mit abnehmender Deckkraft über dem Gastraumfoto, damit der Gruß darauf lesbar bleibt; er mischt keine zweite Farbe hinein.

**The Glastinte Rule.** Auf Glas stehen nur Tinte und Eiche, nie Tinte weich. Selbst über reinem Schwarz halten sie 6.44:1 und 6.05:1.

## Typography

**Display Font:** Zodiak (mit Source Serif 4, Literata, Georgia, serif)
**Body Font:** Source Serif 4, Gewicht 400 bis 600 mit optischer Größe, dazu eine echte Kursive (400) (mit Literata für Griechisch, Georgia, serif)
**Ziffern:** keine eigene Schrift. Source Serif 4 mit `tabular-nums lining-nums` (Klasse `.ziffer`). Eine Monospace wirkte technisch und nach KI, nicht nach Gasthaus; sie ist am 29.09.2026 entfallen.

**Character:** Eine leichte, ruhige Display-Serif über einer warmen Buchschrift. Zusammen lesen sie sich wie eine gut gesetzte, gedruckte Speisekarte.

### Hierarchy
- **Display** (400, clamp 2.625rem bis 4.5rem, 1.06): Nur die h1 in der Scheibe des Einstiegs, der Gruß im Gastraum und die 404.
- **Headline** (400, clamp 2.125rem bis 3.25rem, 1.06): Jede Sektionsüberschrift und die h1 der Nebenseiten. Abstand darunter r-4.
- **Title** (400, clamp 1.625rem bis 2.125rem, 1.06): Gänge der Karte, mit 2px Eichelinie darunter.
- **Title klein** (400, 1.25rem, 1.2): Ortsnamen im Rundgang, Getränkeblöcke, h2 der Nebenseiten, der Live-Satz bei den Zeiten.
- **Lead** (400, 1.25rem, 1.45): Der Satz unter der h1 (34ch) und der Einleitungstext der Nummer (32ch). Am Handy 1.125rem.
- **Body** (400, 1.0625rem / 17px, 1.6): Fließtext, höchstens 65ch, Notizen der Karte 75ch. Keine Silbentrennung, nirgends.
- **Body klein** (400, 0.9375rem, 1.45): Gerichtsbeschreibungen, Bildsätze, Fuß, Zeitleiste.
- **Label** (500 bis 600, 0.9375rem): Navigation, Feldbeschriftung, Kartenindex, Gerichtsnamen (600). Knopfschrift ist 600 bei 1rem. Nie in Versalien.
- **Ziffer** (450 bis 500, 0.875rem, -0.02em, tabellarische Ziffern): Gerichtsnummern, Preise, Uhrzeiten, Telefonnummer. Die Telefonnummer im Ruf steht größer auf Title-Stufe mit -0.045em.

### Named Rules
**The Leichtigkeit Rule.** Überschriften stehen in Zodiak 400 und werden nie fett gesetzt. Hierarchie entsteht durch Größe und Farbe, nicht durch Gewicht.

**The Ziffern Rule.** Jede Zahl, die gelesen oder verglichen wird, steht mit tabellarischen Versalziffern (`.ziffer`) in der Textschrift. Telefonnummer groß und Nummernfeld stehen in Zodiak. Nie eine Monospace. Jahreszahlen im Fließtext bleiben Text.

**The Griechisch Rule.** Weder Zodiak noch Source Serif 4 haben Griechisch. Griechisches (Ηρώδειο) kommt aus Literata (nur die griechischen Zeichen, per unicode-range) und wird nie getrennt.

## Layout

Ein benanntes Raster über die volle Breite trägt jede Sektion: voll | inhalt ... scheibe (40 Prozent) ... mitte (50 Prozent) ... inhalt | voll. Der Satzspiegel ist höchstens 76rem breit, der Außenrand wächst von 1.25rem bis 4rem. Text steht links auf der Achse und reicht bis zur Scheibenlinie, Bild oder zweite Spalte beginnen an der Mitte. Fotos, die an den Rand laufen sollen, gehen von der Mitte bis voll-end; am Handy laufen sie über die volle Breite.

Sektionen sind klar geschnittene Blöcke im Wechsel: Einstieg Kalk, Name Eiche, Haus Sand, Rundgang Kalk, Nummer Blau, Karte Kalk, Feiern Eiche, Draußen Kalk, Zeiten und Platz Sand, Fuß Eiche, oben und unten mit r-7 Luft. Der Abstand ist zweiteilig: r-1 bis r-4 sind feste Textabstände, r-5 bis r-7 tragen Sektionen und wachsen mit dem Fenster, am Handy etwa auf die Hälfte. Die Kopfleiste ist 3.75rem hoch und fest; jeder Sprung landet darunter.

Umbrüche: unter 600px wird die Zeitleiste senkrecht, unter 700px verschwinden Nebenpunkte der Navigation, ab 900px stehen Text und Bild nebeneinander und der Rundgang wird gepinnt, ab 1001px zeigt der Kopf den heutigen Status.

**The Achsen Rule.** Die linke Kante der Scheibe im Einstieg ist die linke Kante jeder Sektion, auch des Rundgangs. Nichts beginnt daneben.

**The Feste-Plätze Rule.** Nummer, Name und Preis stehen in festen Spalten (3.25rem | Rest | Preis rechtsbündig, mindestens 5ch). Preise brechen nie, gefundene Gerichte springen nicht.

## Elevation & Depth

Das System ist flach. Tiefe entsteht durch Tonwechsel der Blöcke und durch das eine Glas. Schatten gibt es nur an zwei Stellen: unter der Scheibe als weicher, in Eiche getönter Fall mit heller Innenkante, und als kaum sichtbarer Fall unter der festen Kopfleiste. Keine Karte, kein Knopf, kein Foto trägt einen Schatten.

### Shadow Vocabulary
- **Glasschatten** (`box-shadow: inset 0 1px 0 rgba(255,255,255,0.7), 0 2px 6px -2px rgba(42,33,27,0.12), 0 28px 56px -28px rgba(42,33,27,0.38)`): Nur die Scheibe über dem Foto.
- **Kopffall** (`box-shadow: 0 12px 28px -24px rgba(42,33,27,0.45)`): Nur die feste Kopfleiste.

### Named Rules
**The Glas-nur-über-Bild Rule.** Milchglas (70 Prozent Kalk, blur 20px, saturate 1.2, 1px heller Rand) steht nur dort, wo ein Foto dahinter liegt. Über flacher Farbe ist Glas Dekoration; dort steht ein massiver Block. Ohne backdrop-filter und bei reduzierter Transparenz wird das Glas deckend.

## Shapes

Fotos, Flächen, Blöcke und Glas sind eckig. Was man drückt oder ausfüllt (Knöpfe, Anruf, Nummernfeld, Tipps), hat 6px Ecken, die Marken in der Wochentabelle 4px; eine Pille wäre zu weich für die kantige Zodiak. Der Rundbogen der Tür steht im Foto, im Film und als Favicon (Creme auf Navy). Die Raute aus dem O des Schriftzugs steht nur noch an den Haltepunkten der Zeitleiste und im Live-Status, nicht im Kopf. Linien sind Haarlinien von 1px; nur unter den Gängen der Karte steht eine 2px Eichelinie, wie auf der gedruckten Karte. Die Ätzlinie des Theaters, nachgezeichnet nach der geätzten Folie im Haus, steht groß und angeschnitten hell auf Navy (30 Prozent Deckung) hinter der Überschrift. Am Desktop links neben dem Text, am Tablet unter dem Text, am Handy (unter 700px) oben: ganz und ohne Anschnitt in der Breite der Textspalte, mit Luft nach oben, die Überschrift auf dem unteren Teil, der nach unten ins Navy ausläuft, bevor der Text beginnt.

**The Ecken Rule.** Fotos und Flächen bleiben eckig. Gerundet (6px) wird nur, was man drückt oder ausfüllt; nie als Pille.

## Components

### Buttons
Orange mit Navy-Schrift, 6px Ecken, geben beim Drücken nach.
- **Shape:** 6px (`--rund`).
- **Primary (Knopf):** Orange mit Navy-Schrift (5.16:1), 600 bei 1rem, mindestens 3rem hoch, 1.5rem seitlich.
- **Ruf:** Der Anrufknopf. Orange, zweizeilig: kleine Zeile ("Tisch reservieren", "Feier besprechen") in Navy (0.875rem, 600), darunter die Nummer in Zodiak 400 auf Title-Stufe. Am Handy volle Breite.
- **Hover / Focus:** Hover (nur bei echtem Zeiger) wechselt auf Orange hell (#FFA050). Druck skaliert auf 0.97 in 160ms. Fokus 2px Logoblau mit 3px Abstand, auf Navy und Blau in Creme.
- **Textruf:** Link als Aufforderung, 600, Eiche, 1px Unterstrich mit 0.25em Abstand; Hover verdickt auf 2px.

### Chips
- **Style (Tipp):** Durchsichtig mit 1px Feldrand, 6px Ecken, 500 bei 0.9375rem, die Nummer davor in Tabellenziffern, 600, Logoblau. Stehen in einem Raster gleich breiter Felder (mindestens 7rem), am Handy zwei mal zwei.
- **State:** Hover füllt Weiß, Druck 0.97.

### Cards / Containers
- **Corner Style:** 0 (Blöcke und Glas bleiben eckig).
- **Kalkblock:** Das Nummernfeld steht als Kalkblock auf Logoblau, klar geschnitten, ohne Glas, weil nichts dahinter liegt. Innenabstand clamp 1.25rem bis 2.5rem.
- **Scheibe:** Das Glas im Einstieg mit Logo, h1, Satz, Live-Status und Ruf. Kein Kartenlink.
- **Shadow Strategy:** Siehe Elevation; nur die Scheibe.
- **Platzhalter (Nebenseiten):** Sand mit 1px Linie.

### Inputs / Fields
- **Style:** Nummernfeld 4.25rem hoch, weiß, 1px Feldrand, 6px Ecken, Eingabe auf Headline-Stufe, Einfügemarke Logoblau. Platzhalter in Feldrand, deutlich leiser als eine getippte Zahl.
- **Focus:** Fokusring ohne Abstand direkt am Feld.
- **Status:** Leer steht unter dem Feld nichts. Sagt die Meldung etwas, hält sie zwei Zeilen Höhe, damit nichts springt, wenn sie wächst.

### Navigation
- **Kopf:** Feste Leiste in Hauptblau, 3.75rem. Logo und Punkte in vollem Creme (600), nie im weichen Blaugrau: Halbtöne wirken auf Blau durchscheinend und billig. Hover unterstreicht 1px. Rechts der Anrufknopf in Orange mit Navy-Schrift, ohne Zeichen davor: "Tisch reservieren", unter 700px "Reservieren"; dahinter liegt die Nummer (tel-Link, aria-label nennt sie). Solange das Logo groß in der Scheibe steht, blendet das Kopflogo aus.
- **Kartenindex:** Gänge als Logoblau-Links. Ab 1100px steht er als Spalte links neben der Karte und bleibt beim Lesen stehen (sticky); darunter in Spalten zwischen zwei Haarlinien über der Karte.

### Die Karte
Nummer, Name, Preis in festen Spalten; keine Linie je Zeile. Die Gänge stehen in einer Spalte (höchstens 46rem) in Lesereihenfolge; zwei Zeitungsspalten hätten am Desktop sieben Bildschirme Rücksprung bedeutet. Findet die Nummernsuche nichts in der Nähe, nennt sie die echten Bereiche der Karte (aus den Nummern gelesen). Das gefundene Gericht bekommt eine Trefferfläche, die als eigene Ebene nur über Deckkraft kommt. Getränke mit Menge und Preis, Preise brechen nie.

### Die Wochentabelle
Haarlinien zwischen den Tagen. Keine sichtbare Überschrift (nur für Screenreader). Der heutige Tag trägt die laute Marke "heute" in Orange mit Navy-Schrift, Mittwoch die leise Marke "Ruhetag" auf Pfirsich (Treffer). Der heutige Tag ist an einer Logoblau-Linie, kräftigerer Schrift in Eiche und der Marke "heute" auf Treffer zu erkennen, nicht an einer Fläche.

### Der Rundgang
Elf Plätze im Haus als waagerechtes Band, das an jedem Foto einrastet, der nächste Platz schaut an der Kante herein; keine Beschriftung, alle Fotos eckig (auch das erste); Zähler "3 / 11" in Ziffern. Alle Plätze gleich groß, 3:4. Am Desktop mit Bewegung wird er gepinnt und folgt dem Scroll, eine 1px Spur in Eiche zeigt den Fortschritt.

### Das Frostfoto
Unter jedem Foto liegt dieselbe Aufnahme in 40 Pixeln als weiche Fläche. Das echte Foto blendet einmal darüber auf, 700ms, nur über Deckkraft. Ohne JavaScript und bei reduzierter Bewegung steht es sofort klar da; eine Notfallregel holt es nach 2.5 Sekunden.

### Eintreten
Der Einstieg am Scroll: Die Scheibe tritt zurück, das Türfoto wächst aus seinem Kasten zur vollen Fläche, und ein durchgehender Film (Kling 3.0 aus zwei echten Fotos) geht auf die linke der beiden Türen zu, sie öffnet sich, die Kamera tritt hindurch und geht die wenigen Schritte in den Gastraum bis zum Blick des echten Fotos. Der Film besteht aus zwei nahtlos verbundenen Stücken: Ein einziges langes Stück hatte im Raum Einzelheiten verändert, darum rechnet ein kurzes Anschlussstück vom Türrahmen bis zum Foto. Dann steht der Gruß darauf. Der Film spielt nicht selbst, er hängt am Scroll, rückwärts beim Zurückscrollen, Strecke 1.5 Bildschirmhöhen. Bewegt werden nur transform, opacity und clip-path; die Filmzeit folgt dem Scroll über gegatete Sprünge. Ohne GSAP, bei reduzierter Bewegung oder im Datensparmodus bleiben Tür und Scheibe still stehen beziehungsweise trägt das Standbild; das ist die geplante Fassung.

### Motion
Eine Kurve für alles, was erscheint oder antwortet: cubic-bezier(0.23, 1, 0.32, 1). Druck 160ms, Oberfläche 200ms, Klarwerden 700ms, Ätzlinie zeichnet sich einmal in 1200ms. Bewegt werden nur transform und opacity (clip-path nur für den Zuschnitt der Fahrt und die Ätzlinie). Sprünge sind nah weich und weit sofort.

## Do's and Don'ts

### Do:
- **Do** Kalk als Grund, Eiche, Logoblau und Sand als ganze Abschnitte im Wechsel setzen; auf Kalk und Sand trägt Logoblau Logo, Nummern, Links, Rauten und Fokus.
- **Do** jede Sektion auf der Achse beginnen lassen, der linken Kante der Scheibe.
- **Do** Überschriften in Zodiak 400 mit -0.02em und 1.06 Zeilenhöhe setzen.
- **Do** jede Nummer, jeden Preis und jede Uhrzeit mit tabellarischen Versalziffern (`.ziffer`) setzen, große Nummern in Zodiak.
- **Do** echte, ungetönte Fotos aus dem Haus mit Frostfläche darunter verwenden.
- **Do** alles Drückbare auf scale(0.97) in 160ms nachgeben lassen und Hover nur bei echtem Zeiger zeigen.
- **Do** jeder Bewegung eine ruhige Fassung geben, die ohne JavaScript und bei reduzierter Bewegung vollständig ist.
- **Do** bei groben Zeigern 44px Trefferfläche sichern.

### Don't:
- **Don't** Milchglas über flacher Farbe einsetzen; der Kopf ist massives Hauptblau.
- **Don't** Fotos oder Flächen runden, und keine Pillenknöpfe.
- **Don't** Farbverläufe zwischen Palettentönen, Orange als Fläche oder Tupfer außerhalb von Knöpfen und der Marke "heute", weiße Schrift auf Orange, Gold, Braun, helles Weiß als Grund.
- **Don't** die Raute in den Kopf setzen.
- **Don't** Tinte weich auf Glas setzen.
- **Don't** Überschriften fett setzen oder Text in Versalien stellen.
- **Don't** Kleinzeilen über Überschriften (Kicker), Icon-Glyphen oder harte versetzte Schatten einführen.
- **Don't** einen dunklen Vollbild-Einstieg mit Text in der Mitte bauen.
- **Don't** den Mäander verwenden. Es gibt ihn im Haus nicht, weder als Motiv noch als Linie noch im Text.
- **Don't** Zodiak kursiv setzen; es liegt nur aufrecht vor. Kursive im Text kommt aus der echten Source-Serif-Kursive.
- **Don't** eine Monospace für Zahlen einsetzen. Sie liest sich nach Technik und nach KI, nicht nach Gasthaus.

## Stand 01.10.2026 (Nachtrag)

- **Fuß:** Vier Spalten (Marke, Adresse mit "Anfahrt planen", Kontakt, Mehr), Links ohne Unterstrich, je eine Zeile, erst beim Darüberfahren unterstrichen. Keine Öffnungszeiten im Fuß.
- **Anfahrt:** Auf Android ein geo-Link, der die eingestellte Navi-App öffnet oder wählen lässt; auf Apple-Geräten Apple Karten; sonst Google Maps (js/main.js, Klasse `karte-link`).
- **Feiern:** Der Anruf ist ein Knopf wie im Einstieg (Orange, zweizeilig: "Feier besprechen", darunter die Nummer).
- **Nummernfeld:** Kein Einleitungssatz; unter dem Feld "Unsere Empfehlungen" mit 30a Gyros überbacken, 44 Ouzo Teller, 35a Bifteki und Gyros, 23 Christos-Salat, zwei mal zwei.
- **Einstieg:** Strecke zwei Schirmhöhen, scrub 1. Der Film lädt, sobald das Türfoto steht. Sprünge haben einen Wachhund (300ms) und entfallen, wenn der Film schon auf dem Bild steht. Ohne fertigen Film fährt das Türfoto auf die Tür zu und der Gastraum blendet allmählich darüber.
- **Ätzlinie:** Aufgedeckt, sobald der Abschnitt ins Bild kommt (beobachtet wird der Abschnitt, nicht die zugeschnittene Linie), Deckung 30 Prozent.
- Keine Silbentrennung; E-Mail-Adressen brechen nicht am Bindestrich.
- **Handy-Kopf:** Unter 375px rücken Liste und Knopf enger, damit "Reservieren" ganz im Bild steht.
- **Theme-Farbe und Favicon:** theme-color Hauptblau; das Favicon ist der Rundbogen der Tür in Creme auf Navy.
- **Treffer am Telefon:** Nach dem Absenden schließt die Tastatur, damit das gefundene Gericht zu sehen ist.
- **Öffnungszeiten:** Freitag und Samstag abends bis 23:00 Uhr, sonst 22:30 Uhr; warme Küche abends bis 22:00 Uhr. Live-Status, Wochentabelle und JSON-LD folgen dem.
- **Empfehlungen am Handy:** Unter 520px stehen sie untereinander, linksbündig, die Nummern auf einer Flucht; kein Name bricht um.
- **E-Mail:** irodion1@freenet.de.
