# Design-Konzept · Irodion, Lünen

Stand 11.09.2026. Dieses Dokument wird vom Build wörtlich konsumiert. Jede Textzeile
darin geht unverändert auf die Seite. Es gilt, bis eine Änderung freigegeben ist.

---

## 0. Der Betrieb

**Irodion**, Griechisches Spezialitäten-Restaurant, Roggenmarkt 19, 44532 Lünen.
Telefon 02306 12864, info@irodion-luenen.de. Inhaber und Geschäftsführer:
**Christos Tzes**. Auf der eigenen Seite unterschreibt das Haus mit **Familie Tzes**.

Seit **1983** in der Lünener Altstadt, im Fachwerkhaus am Roggenmarkt. **1990** umgebaut,
**2009** modernisiert, im Sommer **2017** für Gruppen und Feiern erweitert. Draußen
Kopfsteinpflaster und cremefarbene Schirme mit dem eigenen Namen darauf. Drinnen dunkle
Eichenbalken, Kognakleder-Bänke, Terrakottaboden, Sandsteinwand, und in die hölzernen
Trennwände zwischen den Nischen ist ein **Mäander** geschnitzt.

Öffnungszeiten: Mittwoch Ruhetag, außer an Feiertagen. Montag, Dienstag, Donnerstag,
Freitag, Samstag, Sonntag von 11:30 bis 14:30 Uhr und von 17:00 bis 22:30 Uhr. Warme
Küche mittags bis 14:00 Uhr, abends bis 22:00 Uhr. An allen Feiertagen geöffnet.

**Was es gibt:** Essen im Haus, Außenbereich bei gutem Wetter, Mitnahme auf Vorbestellung,
Räume für Gesellschaften mit individueller Aufteilung.

**Was wegfällt:** kein Lieferservice, an keiner Stelle, auch nicht im Alt-Text. Das Haus
bietet Mitnahme auf Vorbestellung an, das ist etwas anderes und wird auch so genannt.

**Bildmaterial:** Die zweiundzwanzig echten Fotos der alten Seite liegen in 640×480 vor.
Das reicht für kleine Kacheln, nicht für den Hero. Das große Material wird erzeugt und
dabei **auf die echten Fotos konditioniert**, damit der Raum aussieht wie dieser Raum
und nicht wie eine beliebige Taverne: Mäander in den Trennwänden, Kognakleder,
Terrakottaboden, dunkle Balken, Sandsteinverblendung. Kennzeichnung im Impressum unter
Bildnachweis. Keine erfundenen Gästestimmen, keine erfundenen Auszeichnungen, keine
nachgebauten echten Personen, keine fremden Marken im Bild.

---

## 1. Die These in einem Satz

Das Haus heißt nach einem Theater in Athen, aber der Mann, nach dem zwei Gerichte auf
der Karte heißen, steht seit 1983 selbst am Roggenmarkt, und die Seite führt genau
diesen Weg vor: vom Pflaster unter den Schirmen durch die Tür bis an einen Tisch in der
Nische, an dem man einfach eine Nummer sagt.

---

## 2. Die Kundensprache, recherchiert, geht wörtlich in die Texte

**Gewünschtes Ergebnis:** die Portionen sind riesig · man geht satt raus · der Chef kommt
selbst an den Tisch · seit Ewigkeiten dieselbe Familie · man sitzt gemütlich in der
Nische · draußen in der Altstadt sitzen

**Schmerz:** die Karte im Netz ist ein 22-MB-PDF, das auf dem Handy nicht aufgeht · man
weiß nicht, ob mittwochs offen ist · man weiß nicht, ob man reservieren muss · wo parkt man

**Der Einwand, der abhält:** die Karte ist so lang, dass man sich nicht entscheiden kann ·
wirkt von außen altmodisch · lohnt sich das für eine große Runde

**Antwort im Layout, nicht im Text:** Die vollständige Karte mit echten Preisen steht auf
der Seite selbst, lesbar auf dem Handy, kein PDF-Download. Die lange Karte bekommt einen
Einstieg über die Nummer, so wie im Haus bestellt wird. Der Ruhetag steht groß und ist
nicht zu übersehen. Der Weg zum Tisch ist das Telefon, ohne Umweg.

---

## 3. Die Typografie

Auf der Seite stehen Ηρώδειο, Kalós ílthate und die griechischen Gerichtnamen. Zwei der
drei Schriften mussten deshalb echtes Griechisch tragen. Geprüft, nicht angenommen: die
Subsets wurden bei Google Fonts einzeln abgefragt.

| Rolle | Familie | Griechisch | Einsatz | Warum diese |
|---|---|---|---|---|
| Display | **Alegreya**, variabel 400–900 | ja, greek und greek-ext | Schlagzeilen, Hero-Bänder, Sektionsköpfe, Gerichtnamen | Von Juan Pablo del Peral für längere Literatur gezeichnet, humanistisch, mit leicht keilförmigen Serifen und einem unruhigen, kalligrafischen Rhythmus. Das ist genau das Material der geschnitzten Eiche in den Nischen: warm, handgemacht, nicht glatt. Echte Kursive, echtes Griechisch. |
| Body | **Commissioner**, variabel 100–900 | ja | Fließtext, Antworten, Beschreibungen | Von Kostas Bartsokas, einem griechischen Schriftgestalter. Niedriger Kontrast, ruhig, hält sich unter der Alegreya zurück, ohne farblos zu sein. |
| Label | **Martian Mono**, variabel 100–800 | nein, wird nicht gebraucht | Gerichtnummern, Preise, Uhrzeiten, Eyebrows | Die Nummern sind bei diesem Haus die Marke, siehe Abschnitt 5. Sie brauchen eine Schrift mit gebauten, unverwechselbaren Ziffern, die neben der warmen Alegreya nach Werkstatt aussieht statt nach Dekoration. Trägt nur Ziffern, Zeiten und Versalien-Labels, also kein Griechisch nötig. |

Alle drei unter SIL Open Font License, lokal als woff2 im Projekt, `font-display: swap`,
Preload für Alegreya im Kopf. Kein fremder CDN-Aufruf. Subsets nach `unicode-range`
getrennt, das griechische Paket lädt nur nach, wenn griechische Zeichen vorkommen.

**Abgrenzung zu Xenios, laut gesagt:** Xenios trägt EB Garamond, Literata und
Commissioner. Hier bleibt allein Commissioner, und zwar in einer anderen Rolle, dort
kleine Versalien-Labels, hier der Fließtext. Display und Label sind neu und gegensätzlich
gewählt, damit die beiden Häuser sich nicht verwechseln lassen.

**Handwerk an der Schrift, verbindlich:**
- Type-Scale mit Verhältnis 1.333, sieben Stufen als Token in `:root`. Keine freien
  Zwischengrößen. Die großen Schlagzeilen skalieren fluid mit `clamp()`.
- Laufweite: Display groß bei `-0.025em`, Versalien-Labels bei `+0.14em`.
- Zeilenhöhe: Schlagzeilen 1.04 bis 1.12, Fließtext 1.62.
- Zeilenlänge auf 62 bis 70 Zeichen begrenzt, in `ch` am Textelement selbst, nie am
  Container.
- Preise und Nummern mit `font-variant-numeric: tabular-nums`, damit die Spalte steht.
- Echte Schnitte, kein Fake-Bold, kein Fake-Italic.
- Deutsche Anführungszeichen unten und oben, `hyphens: auto` mit `lang="de"`.
- Griechische Wörter bekommen `lang="el"`.

---

## 4. Die Farbe

Die Palette kommt aus dem echten Raum, und die Verteilung ist eine Entscheidung gegen
das Klischee: **Dieses Haus ist innen dunkel.** Dunkle Eichenbalken, Kognakleder,
gedämpftes Licht, Terrakotta unter den Füßen. Also ist die Seite überwiegend dunkel,
und der helle Sandstein ist die seltene Unterbrechung, nicht der Grund.

| Token | Wert | Rolle |
|---|---|---|
| `--eiche` | `#1B1411` | die Balken, der Hauptgrund |
| `--eiche-tief` | `#110C0A` | Fuß, Schatten, Nischen |
| `--sandstein` | `#E3D7C0` | die Verblendung und das Tischtuch, die helle Fläche |
| `--sandstein-hell` | `#F0E7D6` | Karten, Formularfelder |
| `--tinte` | `#231A13` | Text auf Sandstein |
| `--tinte-weich` | `#4C3D30` | Sekundärtext auf Sandstein |
| `--leinen` | `#F0E6D4` | Text auf Eiche |
| `--leinen-weich` | `#BCAE97` | Sekundärtext auf Eiche |
| `--kognak` | `#8C3A1C` | der Akzent auf Sandstein, selten |
| `--kognak-hell` | `#D08A4E` | derselbe Akzent auf Eiche |
| `--terrakotta` | `#A8583A` | der Boden, nur als Fläche und Linie, nie als Text |
| `--kerbe` | `#6B5540` | Haarlinien, der Mäander im Ruhezustand |

Kein reines Schwarz, kein reines Weiß. Alle Paarungen werden gegen WCAG AA gerechnet
und die Zahlen nach dem Build in `DESIGN.md` festgehalten, nicht geschätzt. Nach der
Freigabe des Hero-Materials wird die Palette aus dem Film nachgezogen, damit Seite und
Bild eine Welt sind.

**Die Abweichung, laut gesagt:** Warmes Beige plus Serife plus Terracotta ist genau der
Standard-Look, den ich sonst sperre. Ich weiche bewusst ab und verdiene es strukturell:
Der Beige-Ton ist hier nicht der Grund, sondern der Gast. Die Seite steht auf dunkler
Eiche, so wie der Raum. Terrakotta erscheint nur als Fläche und Linie, nie als
Textfarbe, weil es im Haus der Boden ist und keine Beschriftung. Und der Akzent ist das
Kognakleder der Bänke, ein gebranntes Rot, das man aus dem Raum abnehmen kann.

**Anti-Referenzen:** kein Blau-Weiß der griechischen Flagge, keine Säulen als Deko,
kein Fast-Schwarz mit Neon, keine Amphoren, keine Sirtaki-Bildsprache, keine
austauschbaren Icon-Dreispalter, keine gleich abgerundeten Karten mit gleichem Schatten,
keine Stockfoto-Gyros-Nahaufnahme mit Bokeh.

---

## 5. Das Signature-Element: Sagen Sie einfach die Nummer

Die Karte dieses Hauses ist von 1 bis 1005 durchnummeriert, mit Untervarianten wie 28a,
43a, 73b, 100a. Stammgäste bestellen so. Man sagt nicht Rhodos Teller, man sagt die 47.
Das ist keine Idee von mir, das steht auf ihrer Karte.

Daraus wird das eine Element, das man sich merkt, und es löst zugleich das größte
echte Problem der Seite: Diese Karte hat über zweihundert Positionen, und eine lange
Liste ohne Einstieg schreckt ab.

**Der Mitmach-Moment:** Ein Feld mit drei Stellen und den Ziffern darunter, gesetzt in
Martian Mono, in der Form der Nummernschilder auf der echten Karte. Der Besucher tippt
eine Nummer, und die Karte darunter springt an die Stelle und hebt das Gericht kurz
hervor. Tippt er eine Nummer, die es nicht gibt, sagt die Zeile das freundlich und
nennt die nächstgelegene. Ohne Tastatur bedienbar, mit Tastatur bedienbar, und bei
`prefers-reduced-motion` springt die Karte ohne Fahrt direkt an die Stelle.

Der Test aus dem Skill: Nimmt man das Element weg, ändert sich die Seite spürbar? Ja.
Ohne es ist die Karte eine Liste, mit ihm ist sie die Karte dieses Hauses.

**Das zweite, leisere Signature: der Mäander.** In die Trennwände zwischen den Nischen
ist ein Mäander geschnitzt, das ist im Haus vorhanden und keine Griechenland-Tapete.
Er wird zur Linie, die sich beim Scrollen am Rand der Seite selbst zeichnet und an
jeder Sektion einen Knick macht, so wie das Band im Holz an jeder Kante umspringt. Eine
Bordüre wird daraus ausdrücklich nicht.

---

## 6. Die Band-Map des Heros

Dieselbe Mechanik wie bei Xenios, weil sie dort funktioniert hat: ein erzeugter Film,
der beim Runterscrollen vorwärts und beim Hochscrollen rückwärts läuft, mit Textbändern
in den ruhigen Flächen. Die Reise ist eine andere, weil das Haus ein anderes ist.

Drei Segmente, etwa 16 Sekunden, rund 1000vh Scrollstrecke. Die Bereiche sind
Startpunkte und werden vom Flick-Test bei 120, 240 und 360 Pixeln bestätigt oder
verschoben.

| Band | Bereich | Was der Film tut | Text, wörtlich | Auftritt |
|---|---|---|---|---|
| 1 | 0.00–0.14 | Roggenmarkt am frühen Abend, Kopfsteinpflaster, Fachwerkgiebel, die cremefarbenen Schirme stehen im warmen Licht | Eyebrow `ΗΡΩΔΕΙΟ`, Zeile **„Benannt nach einem Theater in Athen."** | Annäherung aus der Tiefe, beim Laden einmalig gesetzt |
| 2 | 0.17–0.34 | Unter die Schirme hindurch, an den eingedeckten Tischen vorbei auf die Tür zu, kalt wird warm | **„Gebaut in ein Fachwerkhaus in Lünen."** | Weich zu scharf, echot die Schwelle |
| 3 | 0.38–0.56 | Durch die Tür, dunkle Balken, die geschnitzten Mäander der Trennwände ziehen seitlich durch | **„Seit 1983. Dieselbe Familie, dieselbe Adresse."** | Zeichen fahren seitlich ein, im Takt der durchziehenden Wand |
| 4 | 0.60–0.78 | Tiefer im Raum, an der Theke vorbei, Kognakleder, Terrakotta, Gläser | **„Über hundert Gerichte. Die Stammgäste sagen eine Zahl."** | Wortsprung mit Überschwingen auf „Zahl" |
| 5 | 0.82–1.00 | Ankunft an einer freien Nische, gedeckt, die Fahrt kommt zur Ruhe | Schlagzeile **„Ihr Platz steht bereit."** Subline „Roggenmarkt 19, Lünener Altstadt. Küche bis 22:00 Uhr." CTA **„Tisch reservieren: 02306 12864"** | Wörter steigen auf, dann Subline, dann der Ruf |

Band 1 lässt die Einblend-Rampe weg, Band 5 die Ausblend-Rampe, damit die Reise gesetzt
beginnt und gesetzt endet.

**Die Textbahnen:** Die Mittelbahn gehört dem Weg zum Tisch und bleibt frei. Die Texte
stehen links und rechts davon. Die Scrims liegen als eigene Ebenen auf der Bühne und
laufen vom Bildrand nach innen aus, damit keine Kante im Bild sichtbar wird. Jeder
Textblock wird gegen seinen schlechtesten Frame gemessen, Boden 3,5 zu 1.

**Zwei Fassungen**, quer und hoch, wie bei Xenios. Das Handy bekommt eine eigene
Hochkant-Fahrt und nicht den beschnittenen Querfilm. Bei `prefers-reduced-motion` und
bei quer gehaltenem Handy ohne Höhe läuft gar kein Video, dann steht der Standbild-Hero.

---

## 7. Der Standbild-Hero

Für Handys ohne Video und für reduzierte Bewegung. Ein entworfenes Layout auf dem
Endframe, keine Entschuldigung.

- Eyebrow: `ΗΡΩΔΕΙΟ`
- Schlagzeile: **„Benannt nach einem Theater in Athen. Gebaut in ein Fachwerkhaus in Lünen."**
- Subline: „Griechische Küche am Roggenmarkt, seit 1983 dieselbe Familie."
- CTA: **„Tisch reservieren: 02306 12864"**

---

## 8. Die Seite unter dem Hero

Jede Sektion ist ein Schritt. Keine zwei Nachbarn teilen dasselbe Layout-Skelett.

### 8.1 Der Settle
Läuft direkt aus Band 5 heraus, auf dem Endframe.

### 8.2 Woher der Name kommt
Kopf: **„Das Odeon des Herodes Atticus."**
Text: „Am Fuß der Akropolis steht ein antikes Theater, fünftausend Plätze, gestiftet
von Herodes Atticus. Auf Griechisch heißt es Ηρώδειο, und gespielt wird dort bis heute.
Wir haben unser Haus danach benannt, weil sich an diesem Ort seit zweitausend Jahren
Leute treffen, um einen Abend miteinander zu verbringen. Mehr wollten wir am
Roggenmarkt eigentlich auch nie."
Ein Bild, hochformatig, warmes Abendlicht auf Steinrängen. Ausdrücklich als Stimmungsbild
gekennzeichnet, nicht als Aufnahme des Denkmals ausgegeben.

### 8.3 Seit 1983 am Roggenmarkt
Kopf: **„Ein Haus, eine Familie, vier Umbauten."**
Text: „1983 haben wir hier aufgemacht, im Fachwerkhaus am Roggenmarkt. Die Adresse hat
sich seitdem nicht geändert, nur das Haus ist mitgewachsen. Viermal haben wir angefasst,
was nötig war, und die Nischen stehen immer noch da, wo sie immer standen. Wer öfter
kommt, den begrüßen wir beim Namen."
Eine Zeitleiste als Mäander-Knoten, vier Stationen mit je einer Zeile:
`1983` eröffnet · `1990` umgebaut · `2009` modernisiert · `2017` erweitert
Das ist der Vektorplan-Moment dieser Sektion, kein Icon-Set.

### 8.4 Sagen Sie einfach die Nummer
Kopf: **„Die Stammgäste bestellen mit einer Zahl."**
Text: „Unsere Karte ist durchnummeriert, von der 1 bis zur 1005. Wer öfter bei uns
sitzt, bestellt keinen Rhodos Teller, sondern die 47, und wir wissen Bescheid. Tippen
Sie eine Nummer ein, dann zeigen wir Ihnen, was dahintersteckt."
Darunter das Nummernfeld aus Abschnitt 5.

### 8.5 Die Karte
Kopf: **„Die ganze Karte. Kein Download."**
**Ohne Unterzeile.** Die kleinen grauen Zeilen unter den Überschriften häuften sich,
und diese sagte nichts, was die Überschrift nicht schon sagt. Die Preisauskunft steht
dafür in den Anmerkungen unter der Karte.
Alle Kategorien, gesetzt als ein einziges, identisch wiederholtes Bauteil, mit
Nummer, Name und Beschreibung. **Ohne Preise, so entschieden.** Die Preise stehen auf
der Karte im Haus, und solange sie nicht vom Betrieb bestätigt sind, steht lieber
nichts da als eine Zahl, die nicht mehr stimmt. Dafür steht in den Anmerkungen unter der Karte: „Die Preise stehen auf der Karte im
Haus. Rufen Sie uns an, wenn Sie vorher etwas wissen wollen."

**Offener Punkt dazu:** Der Prüfer hatte empfohlen, diese Zeile über die Karte zu
stellen, weil eine unerklärte Lücke sich als Verheimlichung liest und dieses Urteil in
den ersten Sekunden fällt. Der Kunde wollte die Unterzeile weg, also steht sie jetzt
unten. Wenn sich zeigt, dass Gäste nach den Preisen fragen, gehört sie nach oben.

**Über den Gängen steht ein Verzeichnis**, neunzehn Anker in einer Zeile. Neunzehn
Gänge ohne Einstieg sind keine Karte, sondern eine Wand. Die Gangköpfe bleiben beim
Scrollen stehen, solange ihr Gang läuft.

Die Kategorien:
Warme Vorspeisen · Kalte Vorspeisen · Suppen · Salate · Beilagen · Saucen ·
Vegetarische Gerichte · Vom Grill · Gemischtes vom Grill · Lamm und Rind vom Grill ·
Platten für zwei oder vier Personen · Pfannengerichte · Hähnchen · Lamm aus dem Ofen ·
Fischgerichte · Typisch griechisch · Für unsere kleinen Gäste bis 12 Jahre · Nachtisch ·
Warme Getränke · Spirituosen · Alkoholfreie Getränke · Biere
Dazu die drei Hinweise, die auf der echten Karte unter den Grillseiten stehen, wörtlich,
und zwar **einmal unter der ganzen Karte**, nicht unter jedem Grillgang. Auf dem Papier
steht der Absatz fünfmal, weil jede Seite für sich lesbar sein muss. Auf einer Seite,
die man am Stück scrollt, sind das fünfmal dieselben 55 Wörter:
„Bei Beilagenänderungen berechnen wir zusätzlich den Preis der gewünschten Beilage.
Statt gemischtem Salat reichen wir zum Aufpreis von 3,00 Euro einen Bauernsalat.
Auf Wunsch überbacken wir alle Gerichte mit Metaxasauce und Käse zum Aufpreis von 3,50 Euro."
Und der Allergiehinweis: „Sollten Sie von Allergien betroffen sein, melden Sie sich
bitte. Unsere separate Allergiekarte gibt Ihnen Auskunft über die in den Speisen
enthaltenen Zutaten."
Nummern in Martian Mono, tabellarische Ziffern. Der Aufbau der Karte ist so gesetzt,
dass eine Preisspalte später ohne Umbau dazukommen kann.

### 8.6 Wenn Sie mehr werden
Kopf: **„Wenn Sie mehr werden, haben wir Platz."**
Text: „2017 haben wir dafür angebaut. Seitdem teilen wir den Raum so, wie Sie ihn
brauchen: mehrere kleine Runden oder eine lange Tafel. Sagen Sie uns am Telefon, wie
viele Sie sind und was gefeiert wird, den Rest stellen wir."

### 8.7 Draußen in der Altstadt
Kopf: **„Bei gutem Wetter sitzen Sie draußen."**
Text: „Dann stellen wir die Schirme raus, auf das Kopfsteinpflaster am Roggenmarkt,
zwischen die Fachwerkgiebel. Und wer lieber zu Hause isst: Rufen Sie vorher an, dann
steht es fertig da, wenn Sie kommen."
Das ist die Stelle, an der die Mitnahme genannt wird, und sie heißt Mitnahme.

### 8.8 Wann die Küche an ist
Kopf: **„Mittwoch ist Ruhetag."**
Wochentabelle, der heutige Tag ist markiert, der Mittwoch deutlich als Ruhetag gesetzt.
Montag, Dienstag, Donnerstag, Freitag, Samstag, Sonntag: 11:30 bis 14:30 Uhr und 17:00
bis 22:30 Uhr. Warme Küche mittags bis 14:00 Uhr, abends bis 22:00 Uhr.
Zeile darunter: **„An Feiertagen haben wir offen, auch mittwochs."**
Das beantwortet den Schmerz, ohne ihn zu wiederholen.

### 8.9 Ihr Platz
Kopf: **„Rufen Sie an, dann steht der Tisch."**
Der Ruf groß: **„02306 12864"**, darunter „Montag bis Sonntag zu den Küchenzeiten,
mittwochs nur an Feiertagen."
Formular als zweiter Weg, vier Felder: Name, Personen, Wunschzeit, freies Feld.
Buttontext: **„Anfrage schicken"**
Erfolgszustand: **„Ihr Mailprogramm ist offen. Schicken Sie die Nachricht ab, wir
melden uns."**

**Der Weg der Anfrage, ehrlich gesagt:** Es gibt kein Backend. Das Formular baut eine
`mailto`-Nachricht an info@irodion-luenen.de und öffnet das Mailprogramm des Besuchers.
Der Erfolgstext sagt genau das. Der verlässliche Weg bleibt das Telefon, deshalb steht
es größer.

### 8.10 Fuß
Adresse, Telefon, Mail, Facebook, Anfahrt, Impressum, Datenschutz. Kolophon mit dem
Hinweis auf das erzeugte Bildmaterial und dem Stand der Preise.

---

## 9. Der Vektorplan

Von Hand gezeichnetes SVG, kein Icon-Set.

- **Der Mäander:** eine Linie am Seitenrand, die sich beim Scrollen selbst zeichnet und
  an jeder Sektion einen rechten Winkel macht, wie das geschnitzte Band in den
  Trennwänden. Ein Knoten pro Sektion.
- **Die Zeitleiste:** vier Knoten für 1983, 1990, 2009, 2017, auf demselben Band.
- **Das Nummernfeld:** die Ziffernform der echten Karte, als Strichzeichnung.
- **Die Wochenmarke:** ein einzelner Kognakstrich unter dem heutigen Tag, und eine
  durchgezogene Kerbe über dem Mittwoch.
- **Der Grund:** eine feste Hintergrundebene mit sehr feinem Korn und einem langsamen
  Wärmeverlauf, damit die Seite ein Ort ist und keine gestapelten Kästen.

Alles davon respektiert `prefers-reduced-motion`: Endzustände sichtbar, Antriebe aus.

---

## 10. Der Asset-Plan und was er kostet

**Entschieden: Der Hero wird zurückgestellt.** Die Mechanik des Heros wird vollständig
gebaut und läuft mit dem vorhandenen Material aus dem Xenios-Projekt als Platzhalter,
damit Bandtakt, Scrims, Lesbarkeit und Flick-Test schon jetzt gemessen werden können.
Der eigene Film für Irodion wird später erzeugt und eingesetzt. Die Band-Texte aus
Abschnitt 6 stehen bereits fest und ändern sich dabei nicht.

**Der Platzhalter wird sichtbar als solcher behandelt:** Er geht nicht mit auf einen
öffentlichen Server, und solange er drin ist, steht die Seite auf `noindex`.

Jetzt erzeugt werden die Bilder der Sektionen, konditioniert auf die echten Fotos des
Hauses. Reihenfolge verbindlich: erst das Bild, dann selbst ansehen, dann einsetzen.

| Nr. | Was | Modell | Wofür | Credits, grob |
|---|---|---|---|---|
| 1 | Steinränge eines antiken Theaters im Abendlicht | nano-banana-pro | Sektion Name | 30 |
| 2 | Die Fassade am Roggenmarkt, Fachwerk, Abend | nano-banana-pro | Sektion 1983 | 30 |
| 3 | Die geschnitzte Mäanderwand einer Nische, nah | nano-banana-pro | Sektion 1983 oder Karte | 30 |
| 4–6 | Drei Gerichte aus dem Haus, wie sie hier kommen | nano-banana-pro | Sektion Karte | 90 |
| 7 | Die Schirme auf dem Pflaster bei Tag | nano-banana-pro | Sektion Draußen | 30 |
| 8 | Der Raum für Gesellschaften, lange Tafel | nano-banana-pro | Sektion Gesellschaften | 30 |
| 9 | Endframe-Ersatz, freie Nische gedeckt | nano-banana-pro | Standbild-Hero, später | 30 |
| | **Summe ohne Nachzieher** | | | **rund 300** |

Mit zwei bis drei Nachziehern realistisch **rund 360 bis 420 Credits**. Der Hero-Film
kommt später dazu und kostet dann noch einmal rund 650.

In jedem Bild-Prompt steht verbindlich: kein Text, keine Beschriftung, keine Logos,
keine Schilder, keine Wasserzeichen. Der Name kommt später per HTML darüber. Dazu
gegen den Hochglanz: dokumentarisches Licht, echte Gebrauchsspuren, leichte Asymmetrie.
Und die verbindlichen Detailangaben: deutsches Fachwerk, Kopfsteinpflaster, deutsche
Gastronomie-Bestuhlung, keine amerikanische Bauweise, keine Amphoren, keine Säulen,
keine griechische Flagge.

---

## 10a. Die Tonlage

**Die Seite spricht in der Wir-Form, aus dem Haus heraus.** Nicht „die Familie Tzes hat
1983 aufgemacht", sondern „1983 haben wir hier aufgemacht". Nicht „wer öfter kommt, wird
beim Namen begrüßt", sondern „wer öfter kommt, den begrüßen wir beim Namen".

Der Unterschied ist nicht Kosmetik. Die dritte Person beschreibt einen Betrieb von
außen, so wie ein Branchenverzeichnis. Die erste Person ist jemand, der einem
gegenübersteht, und genau das ist dieses Haus seit 1983.

**Die Grenze ist die Wahrheit.** Warm heißt nicht ausgeschmückt. Es steht nichts auf
dieser Seite, was der Betrieb nicht bestätigen kann: keine erfundenen Stammgäste, keine
Behauptungen über Portionsgrößen, keine Gefühle, die dem Gast vorgeschrieben werden.
Verboten bleibt das ganze Gastronomie-Vokabular, das jede zweite Seite trägt: Genuss,
kulinarisch, Gaumen, Ambiente, Wohlfühlatmosphäre, herzlich willkommen.

---

## 11. Das Textgatter

Jede Zeile oben geht wörtlich auf die Seite. Vor der Abnahme läuft die Suche über die
fertige Datei: null Gedankenstriche, null Treffer auf ganzheitlich, nahtlos, innovativ,
maßgeschneidert, Lösungen, zukunftssicher, Mehrwert, Ihr starker Partner, Kompetenz aus
einer Hand, passgenau, Rundum-sorglos. Dazu die leiseren Muster und der
Lieferservice-Durchgang.

Bewusst gesetzt und bleibt: der Dreiklang „Ein Haus, eine Familie, vier Umbauten" und
der Zweischlag „Benannt nach einem Theater in Athen. Gebaut in ein Fachwerkhaus in
Lünen." Das ist Handwerk für diese Marke, kein Drift.

**Gestrichen, und der Grund gehört festgehalten:** Über jeder Sektionsüberschrift stand
eine kleine Versalienzeile, und unter zwei Sektionen eine Schlagwortzeile. Nebeneinander
gelesen stand siebenmal dasselbe zweimal untereinander, „Bei gutem Wetter" über „Bei
gutem Wetter sitzt man auf dem Pflaster", „Der Anbau von 2017" über „2017 haben wir
dafür angebaut". Struktur codiert Information. Eine Auszeichnung, die nichts Wahres über
ihren Inhalt sagt, ist Dekoration, und genau daran erkennt man eine Seite, die nach
Vorlage gebaut wurde. Der mechanische Prüfer hatte das fünfmal als
`kicker-above-heading` gemeldet, und der Kunde hat es unabhängig davon gesehen. Der
Eyebrow im Hero bleibt, dort ist Ηρώδειο die Namensmarke über dem Film.

---

## 12. Die offenen Fragen an den Betrieb

1. **Reservierung:** Die Startseite sagt telefonisch oder per Mail, die Seite mit den
   Öffnungszeiten sagt ausdrücklich nur telefonisch. Was gilt? Bis zur Antwort steht
   das Telefon groß und die Mail als zweiter Weg daneben.
2. **Preise:** Die Karte steht vorerst ohne Preise auf der Seite, so entschieden. Sobald
   der Betrieb die Preise bestätigt, kommt die Spalte dazu, der Aufbau ist dafür vorbereitet.
3. **Weinkarte:** Auf der Karte im Netz steht keine Weinkarte. Gibt es eine, und soll
   sie auf die Seite?
4. **Fotos:** Die echten Fotos sind 640×480 und zehn Jahre alt. Gibt es neuere in
   voller Auflösung? Jedes echte Foto ersetzt ein erzeugtes.
5. **Bildkennzeichnung:** Erzeugtes Material wird im Impressum ausgewiesen. Einverstanden?
