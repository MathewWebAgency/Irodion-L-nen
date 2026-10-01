# Irodion, Ausbaustufe: Design-Konzept

Stand 29.09.2026. **Entwurf mit Recherche, wartet auf Aarons Freigabe.** Erst nach dem Ja
fließen Code und Kie.ai-Credits (Regel aus dem Skill `baue-website`, Phase 2).
Nichts vom Redesign ist bisher committet oder hochgeladen.

## 0. Ausgangslage

- Gebaut und in der Vorschau: das helle Redesign "Die Glasätzung"
  - Einstieg mit Milchglasscheibe, am Desktop Querformat #37, am Handy Hochformat #35
  - Karte mit allen Preisen, Nummernfeld mit Preis
  - Heute-Anzeige
  - Galerie 4x3
  - Feiern, Draußen (Terrasse #38, Gasse #39), Zeiten und Platz
- Aarons Urteil:
  - Palette **C "Leinen & Eiche"** gefällt am ehesten.
  - Die Seite wirkt aber **zu simpel**.
  - Nicht zu kompliziert, nicht zu simpel. Die Bilder müssen sich "mega einfügen".
- Bleibt fest: die Karte, das Nummernfeld, die Live-Anzeige "heute geöffnet".
- Freigegeben: Kie.ai "wenn nötig", zum Beispiel ein Video für den Einstieg aus seinen
  eigenen Fotos.
- Gewünscht: eine interaktive, sehr ansprechende Darstellung für die Bilder.
- Unverändert gültig:
  - PRODUCT.md
  - Fotos echt, nur retuschiert
  - kein Baujahr
  - kein Mäander
  - keine Gedankenstriche
  - Sie-Form auf der Seite
  - kein Lieferservice

## 1. Recherche (Phase 1, erledigt am 29.09.2026)

Aaron hat keine eigenen Referenzen ("Hab keine, such du"). Angesehen und zerlegt:

**Studenterkilden, Kopenhagen** (studenterkilden.dk, Awwwards Honorable Mention 08/2026).
Ein Gasthaus in einem Fachwerkhaus seit 1854, also die nächste Verwandte des Irodion.
- Schrift: eine Familie (GT Ultra) in Gewicht 400, große ruhige Überschriften, viel Luft.
- Farbe: fast Weiß, ein Anthrazitblock für den Über-uns-Text, sandfarbene Knöpfe; die
  Farbe kommt aus den Fotos.
- Rhythmus: das ganze Fachwerkhaus früh groß im Bild, dann drei Angebote mit Fotos, dann
  ein dunkler Block mit einem einzigen großen Absatz.
- Ton: warm, erzählend, das Haus als Hauptfigur.
- Merkelement: das illustrierte Logo beim Laden, danach das Haus in voller Breite.

**Palazzo Sogni, Florenz** (palazzosogni.com, Honorable Mention 06/2026), außerhalb der
Branche, ein Hotel in einem historischen Palast.
- Schrift: helle Serifen-Versalien mit weiter Laufweite (Sogo 300), Fließtext klein.
- Farbe: warmer Putzton, ein gedecktes Blau als einziger Akzent, fast wie Leinen und
  Logoblau.
- Merkelement: Ornamente aus dem eigenen Haus (die Fresken) als feine Linienzeichnung,
  die über die Fotos läuft. Der Einstieg zeigt ein Detail des Hauses, kein Gesamtbild.

**Qissa, Sevenoaks** (qissa.co.uk, Awwwards Nominee 2026), ein Restaurant.
- Schrift: Cormorant Garamond in Gewicht 330 plus Manrope; Nachtblau mit Gold.
- Stark: die Geschichte des Namens ("A word that means a tale") und die Karte als
  Einstieg "Gang für Gang".
- Bewusst nicht übernommen: dunkler Grund mit Gold und zentriertem Text über dem Foto.
  Das ist der Standard-Look teurer Restaurants und genau das "zu dunkel", das Aaron
  nicht will.

**Was übergeht, und warum es zum Irodion passt:**
1. Die Überschriften in einem leichten Gewicht (300 bis 400) statt fett. Alle drei Seiten
   wirken edel vor allem durch Leichtigkeit und Luft, nicht durch Schmuck. Das ist der
   direkte Gegenpol zu "billig".
2. Das eigene Ornament des Hauses als Linie: Beim Irodion sind das die geätzten Scheiben
   mit dem Theater und der Akropolis. Sie werden als feine Linienzeichnung nachgezogen und
   laufen als Detailebene durch die Seite, wie die Fresken bei Palazzo Sogni. Echt aus
   dem Haus, kein erfundenes Muster wie früher der Mäander.
3. Das Haus als Hauptfigur mit einem großen Moment in voller Breite (Studenterkilden) und
   die Geschichte des Namens als eigener, ruhiger Block (Qissa).

**Gäste-Sprache** (golocal, yably, Tripadvisor; nur zur Orientierung, nie als Zitat oder
Bewertung auf der Seite):
- Lob: "reichhaltig", "große Portion für einen annehmbaren Preis", "einfach herrlich
  griechisch", "total gemütlich", "zum Wohlfühlen", "seit über 30 Jahren immer gleich gut".
- Einwand: sich gehetzt fühlen ("nach einer Stunde gebeten zu gehen"), Aufpreise, die
  man nicht kennt.
- Antwort der Seite: Der Satz "in Ruhe essen und es nicht eilig haben müssen" bleibt
  stehen, und alle Preise stehen offen auf der Karte, auch die Aufpreise.

## 2. Die These

**"Treten Sie ein."** Die Seite öffnet die Holztür unter dem Rundbogen und führt einmal
durch das Haus bis an den Tisch. Unterwegs findet man Nummer, Preis und Uhrzeit.

Warum man weiterscrollt: Man steht am Anfang vor dem Haus und ist nach einem Scroll drin.

## 3. Typografie (der größte Hebel gegen "zu simpel")

Bisher trägt Commissioner alles. Das ist sauber, aber neutral, und genau deshalb wirkt
die Seite simpel. Neu ist ein echtes Trio:

- **Display, neu, mit Charakter.** Zwei Kandidaten werden als Prototyp nebeneinander
  gesetzt, Aaron wählt:
  - Zodiak (Fontshare): scharfe Keilserifen, erinnert an in Stein gehauene griechische
    Inschriften, passt zum Theater im Namen.
  - Gambetta (Fontshare): wärmer, lesefreundlicher, mit Haltung.
  - Vor der Wahl prüfen: Lizenz, deutsche Umlaute, griechische Zeichen für Ηρώδειο.
    Fehlen sie, steht Ηρώδειο weiter in Commissioner.
- **Body: Commissioner bleibt.** Bewährt, echtes Griechisch, gut bei 17px.
- **Label/Ziffern: Martian Mono bleibt**, nur für Nummer, Preis, Uhrzeit, Telefon und
  den Live-Status.

Die Schrift wird bearbeitet, nicht nur ausgewählt:

- Display in **leichtem Gewicht (300 bis 400)**, groß, mit -0.02 bis -0.03em Laufweite und
  Zeilenhöhe 1.05 bis 1.1. Leichtigkeit ist der wichtigste Unterschied zu "billig".
- Skala etwa 1.333, deutlich größerer Sprung zwischen Überschrift und Text als bisher.
- `/impeccable typeset` ist Pflicht, sobald die Schriften stehen.

Risiko, laut gesagt: Leinen plus Serif ist ein bekannter Standard-Look (Skill 6.2).
Dagegen steht dreierlei. Es gibt keinen Terrakotta-Akzent, der einzige Akzent ist das
Logoblau des Hauses. Der dunkle Ton ist die Eiche der Balken, kein Espresso. Und die
Display-Schrift kommt aus der Welt der Inschriften, nicht aus dem Magazin.

## 4. Farbe: Palette C "Leinen & Eiche" (gewählt)

| Rolle | Wert | Anteil |
|---|---|---|
| Leinen, Grund | #F6F3EE | ca. 70 % |
| Leinen tief, ruhige Blöcke | #EBE5DC | |
| Tinte, Text | #231C17 | |
| Tinte weich, Nebentext | #5E554D | |
| Eiche, dunkle Flächen, Überschriften, Knopf | #2A211B | ca. 15 % (Nummer, Feiern, Fuß) |
| Text auf Eiche | #F4EFE8 / #C8BBAC | |
| Logoblau, einziger Akzent | #305071 | ca. 3 % (Logo, Nummern, Links, Live-Status) |
| Treffer, heute | #E8DDCB | |
| Linie | #DCD2C5 | |

Kontraste sind geprüft, alle Paare bestehen AA. Die Ziegelfläche entfällt.

## 5. Das Signature-Element: der Einstieg "Eintreten"

Die stärkste Bewegung der Seite, aus dem Haus hergeleitet: der Rundbogen mit der
zweiflügeligen Holztür.

- **Beim Laden:** Das Foto der Tür (#32, frontal) wird aus der Milchglas-Fassung klar.
  Davor steht die Scheibe mit Logo, Überschrift, Live-Status, Ruf und Kartenlink.
  Die Bewegung beginnt also sofort.
- **Beim Scrollen**, gekoppelt über GSAP ScrollTrigger mit `scrub`, kurz gepinnt (etwa
  120vh am Desktop, 90vh am Handy):
  - Die Kamera fährt in den Rundbogen, gerechnet über `transform: scale` um die Mitte
    des Bogens.
  - Im Bogen öffnet sich per `clip-path` in Bogenform der Gastraum (Kronleuchter-Foto,
    warmes Licht) und wächst, bis er den Bildschirm füllt.
  - Dazu erscheint ein einziger Satz: *Kalós ílthate.* Schön, dass Sie da sind.
- **Reduzierte Bewegung, kein JS, langsames Netz:** der heutige ruhige Einstieg, gleich
  schön, gleiche Texte. Das ist die geplante Variante, kein Notbehelf.
- **Durchschalten statt raten:** Mit Emils `prototype` entstehen drei Fassungen, Aaron
  wählt:
  - **A Eintreten** (oben beschrieben). Nur echte Fotos, kein Verzerrungsrisiko.
    **Empfehlung.**
  - **B Die Scheibe wird klar.** Eine geätzte Scheibe mit IRODION liegt über der
    Fassade. Beim Scrollen klart sie auf und wandert in den Kopf.
  - **C Kie.ai-Video.** Eine ruhige Fahrt auf die Tür zu, Startframe ist das echte Foto
    #32, gescrubbt beim Scrollen.
    - Modell: kling/v2-1-pro, 5 Sekunden.
    - Kosten grob 100 bis 500 Credits. Genauen Preis vor dem Start nennen, dazu einen
      möglichen Neuversuch.
    - Bekanntes Risiko: KI-Video verzieht Fachwerk.
    - Deshalb gilt GATE 1: Startframe freigeben. GATE 2: Start-, Mittel- und Endframe
      per ffmpeg ansehen, bevor Aaron das Video sieht.
    - Nach drei verlorenen Versuchen wird das Konzept gewechselt, nicht der Prompt.
- Nur `transform`, `opacity` und `clip-path`, ease-out beim Erscheinen. Vorher
  `find-animation-opportunities` und `animation-vocabulary` laufen lassen.

## 6. Die Bilder interaktiv: "Rundgang durchs Haus"

Ersetzt die 4x3-Galerie. Die Fotos werden groß und bekommen Namen, statt als Kacheln zu
liegen.

- **Desktop:** Beim senkrechten Scrollen wandert ein Band großer Fotos waagerecht vorbei
  (gepinnt, ScrollTrigger).
  - Die Fotos sind unterschiedlich hoch. Eines ist im Rundbogen geschnitten, als Echo
    der Tür.
  - Jedes Foto trägt den Namen seines Ortes und eine Zeile, nur mit belegten Fakten:
    - Die Bar
    - Die Weinwand
    - Der Flügel mit dem Terrakottaboden
    - Die Glaswand mit der Akropolis
    - Santorini in Schwarzweiß
    - Die Fensternische
    - Die Flasche "Restaurant IRODION by Elena"
    - Der Gastraum mit dem Kronleuchter
  - Eine dünne Linie zeigt den Fortschritt.
  - Jedes Foto wird beim Eintreffen klar, derselbe Auftritt wie überall.
- **Handy:** Ein natives waagerechtes Wischen mit Einrasten (`scroll-snap`). Das nächste
  Foto schaut an der Kante herein, dazu ein Zähler "3 / 8". Kein selbstgebautes Ziehen,
  damit nichts hakt (Lehre aus RevierKlar und Gartenprofi Baleca).
- **Tippen oder Klicken öffnet das Foto groß**, mit Wischen, Pfeiltasten und Esc.
  Diese Großansicht ist optional und wird erst nach dem Rundgang entschieden.
- Offene Frage an Aaron: Soll die Glasätzung (#18) als Station in den Rundgang, oder
  ganz raus?

## 6b. Die Detailebene: Ätzlinien

**Ergebnis 29.09.2026:** Kie.ai lieferte zweimal nur das Foto zurück und einmal eine saubere
Zeichnung mit erfundenen Arkaden, die es auf der Folie nicht gibt; nicht verwendet (12
Credits). Umgesetzt ist die eigene Nachzeichnung des Theaters von der Akropolis-Glaswand
(#27), nur an einer Stelle: unter der Überschrift im Namens-Abschnitt.

Das Theater aus der Glasätzung (#18) und die Akropolis von der Glaswand (#27) werden als
feine Linienzeichnung nachgezogen, zuerst mit potrace aus den Fotos (kostenlos), nur
wenn das nicht sauber wird, als Linienauszug über Kie.ai (flux-kontext, rund 5 bis 10
Credits, Ergebnis vorher zeigen).
- Einsatz sparsam, drei Stellen: hinter dem Namen-Block (das Theater), am Rand der
  Karte (die Akropolis, sehr hell), im Fuß.
- Die Linie zeichnet sich einmal beim Hineinscrollen selbst, danach steht sie still.
  Bei reduzierter Bewegung steht sie sofort da.
- Farbe: Linie in Leinen tief oder Eiche mit geringer Deckung, nie als Muster gekachelt.

## 6c. Bewegungsplan (find-animation-opportunities, 29.09.2026)

Eine Restaurantseite, die man gelegentlich besucht. Stammgäste schauen öfter nach den
Zeiten. Deshalb wenig Bewegung, und nur dort, wo sie etwas erklärt.

| # | Ort | Zweck | Häufigkeit | Bewegung |
|---|---|---|---|---|
| 1 | Einstieg "Eintreten" | Erklärung: man tritt ins Haus | einmal pro Besuch | an den Scroll gekoppelt, ohne feste Dauer; `transform: scale` um die Tür, `clip-path: inset(... round)` in Bogenform, Scheibe `opacity` und `translateY`; bei reduzierter Bewegung steht der Einstieg still |
| 2 | Rundgang Desktop | räumliche Führung durch die Räume | einmal pro Besuch | Band `translateX` an den Scroll gekoppelt, gepinnt; Handy nativ per scroll-snap, ohne eigene Bewegung |
| 3 | Ätzlinie Theater | Freude, einmal | einmal pro Besuch | `clip-path: inset(0 100% 0 0)` zu `inset(0)`, 1200ms, `cubic-bezier(0.23, 1, 0.32, 1)`, einmal; bei reduzierter Bewegung sofort da |
| 4 | Fotos | Übergang ohne Sprung beim Laden | je Foto einmal | bleibt: Frost zu klar, `opacity` 700ms |
| 5 | Knöpfe | Rückmeldung | oft | bleibt: `:active` scale(0.97), 160ms |

**Bewusst nicht animiert:**
- **Die Karte mit 132 Gerichten:** Die Gäste lesen sie. Kein Einblenden, kein Staffeln.
- **Die Zeitleiste:** Das ist eine Information. Keine sich zeichnende Linie.
- **Der Live-Status:** Kein pulsierender Punkt, keine Dauerschleife. Der Text wechselt
  einfach.
- **Der Kopf:** Kein Ein- und Ausfahren beim Scrollen, das ist Navigation, die man oft
  benutzt.
- **Die übrigen Sektionen:** Kein Einblenden je Sektion. Genau das war beim alten Film
  "zu viel". Auch keine Parallaxe auf Fotos.

Hinweis: Emils Skills `prototype` und `review-animations` sind in dieser Umgebung nicht
installiert (`npx skills@latest add emilkowalski/skills`). Die Varianten des Einstiegs
werden deshalb von Hand umschaltbar gebaut. Das Review läuft über `emil-design-eng` und
`improve-animations`.

## 7. Die Live-Anzeige ausbauen

Sie war stark und wird wichtiger:

- Sie rechnet nach deutscher Zeit (Europe/Berlin), auch für Besucher im Ausland, und
  aktualisiert sich jede Minute.
- Mögliche Zustände:
  - "Jetzt geöffnet, warme Küche bis 22:00 Uhr"
  - "Mittagspause, ab 17:00 Uhr wieder da"
  - "Heute Ruhetag"
  - "Geschlossen, morgen ab 11:30 Uhr"
- An Feiertagen steht ein ehrlicher Vorbehalt dabei.
- Sie steht in der Scheibe des Einstiegs, im Kopf und in der Wochentabelle.

## 8. Sektionsfolge

1. **Einstieg "Eintreten":** Tür, dann Gastraum. Scheibe mit Logo, Überschrift,
   Live-Status, Ruf und Kartenlink.
2. **Name:** Benannt nach dem Theater in Athen. Rein typografisch, Ηρώδειο groß in der
   Display-Schrift, ohne Foto.
3. **Das Haus:** Text und Zeitleiste 1983, 1990, 2009, 2017.
4. **Rundgang:** die interaktive Bildstrecke.
5. **Nummer:** Eichenblock, das Feld nennt den Preis. Bleibt.
6. **Karte:** bleibt vollständig. Gänge in der Display-Schrift, feste Spalten für
   Nummer, Name und Preis.
7. **Feiern:** Eichenblock, die lange Tafel randabfallend.
8. **Draußen:** Terrasse und Gasse versetzt.
9. **Zeiten und Platz:**
   - Live-Status groß, Wochentabelle.
   - Zum Abschluss das ganze Haus im Querformat (#37) als Abschlussbild: Hier finden
     Sie uns, mit Adresse und Anfahrt. Die Seite endet vor dem Haus, wo sie begann.
10. **Fuß:** Eiche, helles Logo.

## 9. Der eine Call to Action

**Anrufen: 02306 12864, Tisch reservieren.** Die Nummer steht in der Scheibe, im Kopf,
bei Feiern und groß am Ende. Die Mail ist der leisere zweite Weg.

## 10. Asset-Plan

| Sektion | Material | Herkunft | Kosten |
|---|---|---|---|
| Einstieg | Tür #32, Gastraum #3 (Kronleuchter) | echt | 0 |
| Einstieg Handy (Standbild) | #35 Schirm vor Fassade | echt | 0 |
| Einstieg Variante C | Video aus #32 | Kie.ai | ca. 100 bis 500 Credits, nur nach GATE |
| Rundgang | #13, #10, #26, #27, #19, #4, #21, #3 | echt | 0 |
| Feiern | #8 Tafel | echt | 0 |
| Draußen | #38 Terrasse, #39 Gasse | echt | 0 |
| Abschluss Platz | #37 Haus quer | echt | 0 |

Alle Fotos sind bereits als WebP in `assets/bilder/` (Herkunft in `herkunft.json`). Neu
exportiert werden müssen nur die Tür in Quer- und Hochformat-Ausschnitten sowie das
Endbild des Gastraums in voller Breite.

## 11. Ablauf, in dieser Reihenfolge

1. Diese Datei und `.impeccable/redesign-stand.md` lesen.
2. ~~Phase 1: Referenzfrage, eigene Recherche, Rezensionen.~~ Erledigt, siehe Abschnitt 1.
3. **GATE:** Aaron sagt ja zu diesem Konzept.
4. ~~Palette C festschreiben.~~ Erledigt am 29.09. (Token heißen jetzt leinen, eiche,
   auf-eiche; Ziegel ist raus, Feiern steht auf Eiche.)
5. Schrift-Prototyp mit Zodiak und Gambetta, Aaron wählt, dann `/impeccable typeset`.
6. GSAP lokal nach `js/vendor/` (frei lizenziert, kein CDN wegen CSP).
7. Einstieg: drei Prototypen, Aaron wählt. Kie.ai nur bei C, mit Kostenansage und
   beiden GATEs.
8. Rundgang bauen: Desktop gepinnt, Handy per scroll-snap.
9. Live-Status ausbauen.
10. Bilder einfügen und die übrigen Sektionen verfeinern.
    - Offen: der Rahmen der Trennwände als dunkler Holzrand um einzelne Fotos.
11. Laufend `npx impeccable detect`. Dann `review-animations` (Emil), danach
    `/impeccable critique`, `audit`, `polish`, Taste Pre-Flight, Finish-Reviewer und
    Documenter (DESIGN.md neu).
12. Aaron die Wahl vorlegen: mutiger, ruhiger, verspielter, spektakulärer, oder passt es?
13. Commit, Skill `hostinger-upload`, Push, `pruefe_live.sh` bis `== ALLES OK`, Lighthouse
    zeigen.

## 12. Offene Punkte aus dem letzten Review

- **DESIGN.md** beschreibt noch die alte dunkle Welt. Der Documenter schreibt sie nach
  dem Ausbau neu.
- **"Name in der Scheibe als echte Ätzung":** Das geht im neuen Einstieg auf.
- **Unbenutzte Exporte löschen:** `fassade-*` (#32 wird neu geschnitten),
  `glasaetzung-*`, je nach Antwort auf die Frage in Abschnitt 6.
- **Werkzeuge:** Prüfen, ob Emils Skills `prototype`, `review-animations`,
  `find-animation-opportunities` und `animation-vocabulary` installiert sind, sonst
  `npx skills@latest add emilkowalski/skills`.
