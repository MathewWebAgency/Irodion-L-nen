# DESIGN.md — Irodion, Lünen

Die visuellen Festlegungen. Verbindlich für jede Änderung. Die Herleitung steht in
`KONZEPT.md`, die Bildplätze in `BILDER.md`. Alle Zahlen hier sind gemessen, nicht
geschätzt.

## Die Welt in einem Absatz

Ein Fachwerkhaus am Roggenmarkt, innen dunkel: Eichenbalken, Kognakleder,
Terrakottaboden, in die Trennwände zwischen den Nischen ein Mäander geschnitzt. Draußen
Kopfsteinpflaster und cremefarbene Schirme. Der Besucher kommt von draußen herein, findet
eine freie Nische und sagt eine Zahl. Alles andere ordnet sich dieser Bewegung unter.

## Die fünf Hausgesetze

1. **Die Seite steht auf Eiche.** Der Grund ist dunkel, wie der Raum. Helle Sektionen
   tragen `auf-sandstein` und sind die Ausnahme, nicht die Regel.
2. Der Akzent ist Kognak und kommt selten. Terrakotta ist Fläche und Linie, nie Text.
3. Keine zwei benachbarten Sektionen teilen dasselbe Layout-Skelett.
4. Alles easet, nichts schnappt. Animiert werden nur `transform` und `opacity`.
5. Kein reines Schwarz, kein reines Weiß, kein Flaggenblau, keine Säulen als Deko.

## Farbe

Gerechnet mit `node scripts/kontrast.mjs`. Alle sechzehn geprüften Paarungen bestehen.

| Token | Wert | Rolle | gemessener Kontrast |
|---|---|---|---|
| `--eiche` | `#1B1411` | Hauptgrund, die Balken | Grund |
| `--eiche-tief` | `#110C0A` | Fuß, Schatten, Nischen | Grund |
| `--sandstein` | `#E3D7C0` | die hellen Sektionen | Grund |
| `--sandstein-hell` | `#F0E7D6` | Karten, Formularfelder | Grund |
| `--tinte` | `#231A13` | Text auf Sandstein | 12.00:1 / 13.92:1 |
| `--tinte-weich` | `#4C3D30` | Sekundärtext auf Sandstein | 7.31:1 / 8.48:1 |
| `--leinen` | `#F0E6D4` | Text auf Eiche | 14.70:1 / 15.71:1 |
| `--leinen-weich` | `#BCAE97` | Sekundärtext auf Eiche | 8.35:1 / 8.92:1 |
| `--kognak` | `#8C3A1C` | Akzent auf Sandstein | 5.39:1 / 6.25:1 |
| `--kognak-hell` | `#D08A4E` | derselbe Akzent auf Eiche | 6.43:1 / 6.87:1 |
| `--terrakotta` | `#A8583A` | Fläche und Linie, nie Text | 3.57:1 / 3.58:1 |
| `--kerbe` | `#6B5540` | Haarlinien auf Sandstein | 4.92:1 |
| `--kerbe-hell` | `#7E6650` | dieselbe Kerbe auf Eiche | 3.38:1 / 3.61:1 |
| `--kerbe-fein` | `#33241B` | Trennlinien im Dunkeln | ohne Anforderung |

**Zwei Werte für denselben Kognak**, weil ein einziger Ton nicht auf Eiche und auf
Sandstein zugleich bestehen kann. **Zwei Werte für die Kerbe aus demselben Grund:** Der
erste Entwurf hatte nur `#6B5540`, und auf Eiche fiel der mit 2.60:1 durch.

**Der teuerste Fehler in diesem Projekt war eine Tokenverwechslung.** Impressum und
Datenschutz standen mit `--tinte-weich` auf dunklem Grund, also mit dem Sekundärton für
Sandstein auf Eiche. Gemessen 1.75:1, der Fließtext beider Rechtsseiten war praktisch
unsichtbar. Sichtbar wurde das erst in der Messung, nicht im Blick auf den Bildschirm.
Die Lehre steht als Kommentar an der Regel: **Wer die Grundfläche einer Seite umdreht,
muss jede Textfarbe einzeln nachziehen, auch auf den Nebenseiten, die niemand ansieht.**

## Typografie

| Rolle | Familie | Griechisch | Einsatz |
|---|---|---|---|
| Display | Alegreya, variabel 400–900 | ja, greek und greek-ext | Schlagzeilen, Hero-Bänder, Sektionsköpfe, Gerichtnamen |
| Body | Commissioner, variabel 100–900 | ja | Fließtext, Beschreibungen |
| Label | Martian Mono, variabel 100–800 | nein, nicht gebraucht | Nummern, Preise, Zeiten, Eyebrows |

Alle drei unter SIL Open Font License, lokal als woff2, nach Subset getrennt mit
`unicode-range`. Eine deutsche Seite lädt 104 KB Latein, das griechische Paket mit 46 KB
kommt nur dazu, wenn griechische Zeichen vorkommen.

Sieben Größen als Token, Verhältnis 1.333. Laufweite: Display groß `-0.025em`,
Versalien-Label `+0.14em`. Zeilenlänge in `ch` am Textelement selbst, nie am Container.

**Gemessene Zeilenhöhen, und warum sie so sind:**

| Element | Größe | Zeilenhöhe | Verhältnis |
|---|---|---|---|
| Fließtext in allen Sektionen | 17px | 27.54px | 1.62 |
| `.gericht__name` | 22.67px | 29.02px | 1.28 |
| `.gross`, die Sektionsköpfe | 53.71px | 60.16px | 1.12 |
| `.band__zeile`, die Hero-Bänder | 53.71px | 55.86px | 1.04 |
| `.ruf__nummer`, die Telefonnummer | 33.98px | 33.98px | 1.00 |

Der Prüfer meldet auf alles unter 1.3 einen Befund. **Dieser Befund wird für die
Display-Grade bewusst abgelehnt.** Bei 54 Pixeln ist 1.12 richtiger Satz und 1.5 wäre
eine auseinanderfallende Schlagzeile. Die Regel zielt auf Fließtext, und der liegt hier
durchgehend bei 1.62, also mitten in dem Bereich, den dieselbe Regel empfiehlt.

## Die Karte

**Die Karte lief zuerst in CSS-Spalten, und das war der schwerste Fehler in diesem
Projekt.** Er sah auf dem Bildschirm gut aus. Spalten füllen sich von oben nach unten,
also lief Spalte eins über zehn Bildschirme nach unten und Spalte zwei daneben noch
einmal über zehn. Wer den Fisch, das Kindergericht oder den Nachtisch sehen wollte,
musste zehn Bildschirme zurück nach oben. Niemand tut das. Die Karte versprach
„Die ganze Karte. Kein Download." und war in der Leserichtung halbiert.

Sie läuft jetzt als Raster, `repeat(auto-fill, minmax(21rem, 1fr))`. Ein Raster füllt
zeilenweise: Jede Reihe ist fertig, bevor die nächste beginnt, die Leserichtung läuft
von links nach rechts, und „Vom Grill" steht wieder neben „Lamm und Rind vom Grill".

Dazu drei Dinge, die eine Liste von 132 Positionen erst benutzbar machen:

- **Ein Verzeichnis über den Gängen.** Neunzehn Anker als Zeile, reine `href="#gang-…"`,
  also auch ohne JavaScript brauchbar.
- **Stehende Gangköpfe.** `position: sticky` unter dem festen Kopf. Nach drei
  Bildschirmen Liste weiß sonst niemand mehr, ob er noch in den Pfannengerichten ist.
  Bei reduzierter Bewegung steht der Kopf still.
- **Der Beilagenhinweis genau einmal.** Auf dem Papier steht er fünfmal, weil jede
  Seite für sich lesbar sein muss. Auf einer Seite, die man am Stück scrollt, wären das
  fünfmal dieselben 55 Wörter.

## Der Kopf

Der Kopf trug am Handy unter 860px **gar keine Navigation**. Damit hatte genau das
Gerät, auf dem die meisten Gäste die Seite öffnen, keinen Weg zur Karte und keinen zu
den Zeiten, und beides waren die recherchierten Schmerzen.

Die Liste bleibt jetzt und wandert in eine zweite Zeile unter die Marke. Das kostet
rund vierzig Pixel, und dafür wird oben gespart: weniger Rand, kleinere Marke. Gemessen
100px bei 375px Breite, also 12,4 Prozent des Schirms.

Daneben steht **die Auskunft, die auf dieser Seite am meisten gesucht wird**: ob heute
offen ist. Gerechnet aus demselben Wochentag, der die Wochentabelle markiert. Feiertage
kennt der Browser nicht, deshalb steht der Vorbehalt im `title` und nicht als Behauptung
in der Zeile.

## Scrollen und Sprünge

Auf `html` stand `scroll-behavior: smooth`. Über ein Dokument von rund 20000 Pixeln ist
das keine Animation mehr: Ein Klick auf „Zeiten" fährt durch fünfzehn Bildschirme Karte,
und jede Radbewegung unterwegs bricht ab und lässt den Leser irgendwo dazwischen stehen.

Die Entscheidung fällt jetzt je Sprung in `main.js`: **bis drei Bildschirme weich,
darüber sofort**, bei reduzierter Bewegung immer sofort. Der Fokus zieht mit, damit
Tastatur und Vorlesen nicht oben stehen bleiben.

Dazu `scroll-margin-top: 7rem` auf jedem `section[id]` und jedem `.gang`. Ohne das
parkt jeder Ankersprung die Überschrift samt Eyebrow unter dem 77px hohen festen Kopf.

## Der Mäander

In die hölzernen Trennwände zwischen den Nischen ist ein Mäanderband geschnitzt. Es ist
im Haus vorhanden, siehe `assets/bilder/maeander.webp`, und deshalb keine
Griechenland-Tapete.

Am linken Seitenrand läuft dieselbe Figur als eine einzige Linie mit, die sich beim
Scrollen selbst zeichnet und an jeder Sektion einen rechten Winkel macht. Acht Knoten,
einer je Station.

**Eine Bordüre wird daraus ausdrücklich nicht.** Das Band kommt genau einmal vor, als
Linie, nicht als wiederholtes Muster über Flächen.

Technisch: Die Pfadlänge wird mit `getTotalLength()` gemessen, nicht geraten, denn das
Band macht Haken und ist damit länger als die Strecke, die es überbrückt. Die Schwelle
jedes Knotens wird durch zwanzig Halbierungen auf dem Pfad gesucht, nicht aus seiner Höhe
abgeleitet. Läuft einmal beim Laden.

Unter 1100px Fensterbreite verschwindet die Linie, dort hat sie keinen Platz und würde in
den Text laufen.

## Der Hero

**Stand: Platzhalter.** Der Film stammt aus dem Xenios-Projekt, so entschieden. Die
Mechanik, der Bandtakt und die Lesbarkeit werden damit schon jetzt gemessen, die
Bandtexte sind die endgültigen. Näheres in `BILDER.md`.

Zwei Fassungen derselben Reise, quer und hoch, plus der Standbild-Hero für reduzierte
Bewegung und für quer gehaltene Handys ohne Höhe. Die Bedingungen dafür stehen
zeichengenau gleich in `style.css` und in `hero.js`.

Fünf Bänder, jedes mit einem eigenen Auftritt:

| Band | Bereich | Auftritt |
|---|---|---|
| 1 | 0.00 bis 0.14 | Annäherung aus der Tiefe, beim Laden einmalig gesetzt |
| 2 | 0.17 bis 0.34 | weich zu scharf, echot die Schwelle |
| 3 | 0.38 bis 0.56 | Zeichen fahren seitlich ein |
| 4 | 0.60 bis 0.78 | Wortsprung mit Überschwingen auf „Zahl" |
| 5 | 0.82 bis 1.00 | Wörter steigen auf, dann Subline, dann der Ruf |

**Band 5 heißt „Ihr Platz steht bereit."** Das ist wörtlich die Zeile aus dem
Xenios-Projekt und vom Kunden so gewünscht.

Die Mittelbahn gehört dem Weg zum Tisch. Text steht links und rechts davon, im
Hochformat unten über die ganze Breite. Die Scrims liegen als eigene Ebenen auf der Bühne
und laufen vom Bildrand nach innen aus: **Ein Verlauf, dessen dunkles Ende außerhalb des
Bildes liegt, kann keine Kante zeigen.**

Bandtakt und Lesbarkeit werden erst mit dem eigenen Film endgültig gemessen. Die beiden
Skripte dafür liegen in `scripts/` und müssen vorher vom Gedeck auf das Nummernfeld
umgestellt werden.

## Das Signature-Element: das Nummernfeld

Die Karte läuft von 1 bis 1005, mit Untervarianten wie 28a, 43a, 73b, 100a. So bestellen
Stammgäste. Daraus wird der Mitmach-Moment, und er löst zugleich das größte echte Problem
der Seite: 132 Gerichte ohne Einstieg schrecken ab.

- Eingabe in Martian Mono, 40px, mit tabellarischen Ziffern.
- Genauer Treffer springt zum Gericht und streicht es kurz warm an, mit einer
  Kognakkerbe am Rand. Der Anstrich klingt über 2600ms von selbst ab.
- **Kein Treffer heißt nicht Fehlermeldung.** Wer die 500 tippt, bekommt die
  nächstgelegene Nummer, die es wirklich gibt, samt Namen.
- Die 290 steht auf der echten Karte zweimal, bei den warmen Vorspeisen und bei den
  vegetarischen Gerichten. Der Sprung geht auf die erste Stelle, so wie auf dem Papier.
- Ohne JavaScript trägt das Feld `hidden` und erscheint nie. Die Karte darunter steht
  vollständig im ausgelieferten HTML, alle 132 Gerichte. Der Ausfall kostet nichts.
- Bei `prefers-reduced-motion` springt die Karte ohne Fahrt direkt an die Stelle.

## Bewegung

- Zwei Kurven als Token, überall dieselben: `--ease-aus` für Erscheinen, `--ease-beid`
  für Bewegen.
- UI-Übergänge 140 bis 200 Millisekunden, gestaltete Momente bis 420.
- Ein Auftritt pro Moment, nicht ein Effekt pro Element.
- Alles pausiert bei verstecktem Tab, über eine Regel, die jedes Element und jedes
  Pseudoelement direkt trifft, weil `animation-play-state` nicht vererbt.
- `prefers-reduced-motion` wird an sieben Stellen befolgt, vier in CSS, drei in JS.

## Grobe Zeiger

Gemessen bei 375px mit echter Touch-Emulation, `pointer: coarse` bestätigt.

Elf Elemente lagen unter 44px Höhe: die Marke im Kopf, die vier Vorschlagsknöpfe unter
dem Nummernfeld und sechs Links im Fuß. **Alle scheiterten nur an der Höhe, die Breite
war immer reichlich.**

Behoben, und die Begründung gehört festgehalten: **Eine höhere Zeilenhöhe hilft bei
inline gesetzten Links nicht**, weil die Trefferfläche eines inline Elements am
Inhaltskasten hängt und nicht am Zeilenkasten. Die Links werden deshalb zu
`inline-block` mit Rand, und die Zeilenhöhe der Liste fällt um denselben Betrag, damit
der Fuß nicht auseinandergeht. Nach der Korrektur: **null Elemente unter 44 Pixeln.**

## Gemessen, Stand 11.09.2026

| | |
|---|---|
| Seitengewicht ohne Video | rund 600 KB |
| davon Schriften, deutsche Seite | 104 KB Latein, 46 KB Griechisch dazu |
| davon Bilder | 295 KB, alle lazy |
| Gerichte im ausgelieferten HTML | 132 in 18 Gängen, dazu 4 Getränkelisten |
| Waagerechter Überlauf bei 375, 414, 768, 1024, 1280, 1600 | keiner |
| Elemente unter 12px Schriftgröße | keine |
| Tap-Ziele unter 44px bei grobem Zeiger | keine |
| Konsolenfehler | keine |
| Kopfhöhe am Handy | 100px, 12,4 Prozent des Schirms |
| Farbpaarungen gegen WCAG AA | 16 von 16 bestehen |

## Was gestrichen wurde und warum

Über jeder Sektionsüberschrift stand eine kleine Versalienzeile, unter zwei Sektionen
eine Schlagwortzeile aus drei Begriffen. Beides ist raus.

Der Grund ist nicht Geschmack. Nebeneinander gelesen stand siebenmal dasselbe zweimal
untereinander: „Bei gutem Wetter" über „Bei gutem Wetter sitzt man auf dem Pflaster",
„Der Anbau von 2017" über „2017 haben wir dafür angebaut", das griechische Ηρώδειο über
„Das Odeon des Herodes Atticus". Und „Gesellschaften · Feiern · Aufteilbar" waren drei
Schlagworte, die der Absatz darüber schon gesagt hatte.

**Struktur codiert Information.** Eine Auszeichnung, die nichts Wahres über ihren
Inhalt sagt, ist Dekoration. Der mechanische Prüfer hatte das fünfmal als
`kicker-above-heading` gemeldet, und ich hatte es als Geschmacksfrage weggeschoben. Das
war falsch.

Der Eyebrow im Hero bleibt. Dort ist Ηρώδειο die Namensmarke über dem Film und keine
Wiederholung der Zeile darunter.

## Was ausdrücklich nicht vorkommt

Kein GSAP. Der Skill sieht es vor, gebraucht wird es nirgends, und eine ungenutzte
Bibliothek auszuliefern wäre schlechter als die Abweichung. Alles läuft in Vanilla.

Kein Lieferservice, an keiner Stelle, auch nicht im Alt-Text. Das Haus bietet Mitnahme
auf Vorbestellung an, das ist etwas anderes und heißt auf der Seite auch so.

Kein Inline-JavaScript. Die `.htaccess` setzt `script-src 'self'`, ein Skript in der
Seite läuft lokal und wird live blockiert.

Keine Mäander-Bordüre, keine Säulen, keine Amphoren, kein Blau-Weiß, keine
austauschbaren Icon-Dreispalter, keine gleich abgerundeten Karten mit gleichem Schatten.
