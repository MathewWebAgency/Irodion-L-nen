# BILDER.md — Irodion, Lünen

Welcher Auftrag welches Bild erzeugt hat. Diese Datei ist dafür da, dass sich jedes
erzeugte Bild später gegen ein echtes Foto tauschen lässt, ohne dass jemand raten muss,
was auf dem Platz stehen soll.

## Das echte Material

Von der alten Seite gesichert, liegt in `roh/original/`:

| Ordner | Inhalt | Auflösung |
|---|---|---|
| `roh/original/fotos/` | 22 Fotos des Betriebs, innen und außen | 640×480 |
| `roh/original/fotos/ueberuns.jpeg` | Die Begrüßungstafel mit der Namensherkunft | 704×1038 |
| `roh/original/fotos/teaser.jpg` | Das Logobild mit dem Odeon | 493×700 |
| `roh/original/karte/` | Die 9 Seiten der Speisekarte als Scan | ~800×1130 |

**640×480 reicht für kleine Kacheln, nicht für den Hero und nicht für eine
halbseitige Abbildung.** Deshalb sind die Bilder auf der Seite erzeugt. Sie sind aber
nicht frei erfunden, sondern auf diese Fotos konditioniert. Der geschnitzte Mäander,
das Kognakleder, der Terrakottaboden, die dunklen Balken, die Sandsteinverblendung und
die Gipsfiguren im Anbau stammen alle aus dem echten Material.

**Jedes echte Foto in voller Auflösung ersetzt ein erzeugtes.** Das ist der Weg, kein
Notbehelf.

## Was erzeugt wurde

Modell durchgehend `nano-banana-2` über Kie.ai, 2K, jpg, danach mit ffmpeg auf
Anzeigegröße gerechnet und mit `cwebp -q 80 -m 6` nach WebP.

In jedem Auftrag steht verbindlich: kein Text, keine Beschriftung, keine Logos, keine
Schilder, keine Wasserzeichen. Dazu gegen den Hochglanz: dokumentarisches Licht, echte
Gebrauchsspuren, leichte Asymmetrie, keine Symmetrie, kein Lens Flare, kein Nebel.

### `assets/bilder/maeander.webp` · 1400×940 · 48 KB
**Steht in:** Sektion „Seit 1983", rechte Spalte.
**Referenzfoto:** `roh/original/fotos/21009390.jpg`
**Auftrag:** Nahaufnahme einer Trennwand zwischen zwei Nischen. Cremefarbenes Holzfeld
in dunklem Eichenrahmen, darauf ein durchlaufendes geschnitztes Mäanderband, flach und
an den Kanten abgegriffen. Dahinter Kognakleder, Terrakottaboden, dunkle Deckenbalken.
Warmes gedämpftes Kunstlicht von der Seite.
**Geprüft:** kein Text im Bild, keine Personen, Material und Farbwelt stimmen mit den
echten Fotos überein. Das Mäanderband sitzt richtig und ist nicht erfunden.

### `assets/bilder/tafel.webp` · 1400×940 · 80 KB
**Steht in:** Sektion „2017 haben wir dafür angebaut".
**Referenzfotos:** `roh/original/fotos/21009398.jpg` und `21009393.jpg`
**Auftrag:** Eine lange Tafel für etwa sechzehn Personen, vom Betrachter weglaufend.
Cremedecke, einfache weiße Teller, gefaltete Servietten, schlichte Gläser. Dunkle
Eichenstühle, Kognakbank an einer Seite, Terrakottaboden, helle Putzwände mit dunklen
Fachwerkständern, seitlich ein Mäanderfeld.
**Geprüft:** kein lesbarer Text. Die Gipsfiguren auf den Konsolen stammen aus dem
Referenzfoto und stehen wirklich so im Anbau. Die gerahmten Bilder an den Wänden zeigen
niemanden Erkennbares.

### `assets/bilder/schirme.webp` · 1600×894 · 166 KB
**Steht in:** Sektion „Bei gutem Wetter".
**Referenzfoto:** `roh/original/fotos/21009380.jpg`
**Auftrag:** Terrasse auf einem Kopfsteinpflasterplatz in einer deutschen Altstadt.
Große cremefarbene Schirme über quadratischen Tischen mit Cremedecken, dunkle
Geflechtstühle, niedrige Buchshecke in Metallkübeln. Dahinter eine Fachwerkfassade mit
Geranien in den Kästen.
**Geprüft:** kein lesbarer Text auf den Schirmen, keine Personen. Bestuhlung, Schirme
und Hecke entsprechen dem echten Aufbau vor dem Haus.

## Was noch fehlt

### `assets/bilder/odeon.webp` · geplant 1000×1333
**Soll stehen in:** Sektion „Das Odeon des Herodes Atticus", rechte Spalte.
**Stand:** **nicht erzeugt.** Die Kie.ai-Credits waren aufgebraucht, bevor dieses Bild
an der Reihe war. Solange es fehlt, läuft die Sektion einspaltig, damit kein kaputtes
Bild auf der Seite steht. Der fertige Block liegt in `index.html` auskommentiert bereit,
dazu die Klasse `name--ohnebild`, die beim Einsetzen wegfällt.
**Auftrag, wortgleich bereitgehalten:** Steinränge eines antiken Freilufttheaters, von
oben seitlich über die Reihen gesehen. Verwitterter heller Kalkstein, abgegriffene
Kanten, schmale Treppen durch die Ränge, trockenes Gras in den Fugen, Flechten.
Dahinter die hohe Arkadenwand des Bühnengebäudes, die Bögen dunkel. Warme tiefe
Abendsonne von rechts. Kein Text, keine Personen, keine moderne Bühnentechnik, keine
Flutlichter, keine Stühle, keine Flaggen.
**Wichtig:** Das Bild wird auf der Seite ausdrücklich als Stimmungsbild gekennzeichnet
und nicht als Aufnahme des Denkmals ausgegeben. Diese Bildunterschrift bleibt stehen.

### Der Hero-Film
**Stand:** **Platzhalter aus dem Xenios-Projekt**, so entschieden. `assets/video/` enthält
derzeit `hero-scrub.mp4`, `hero-scrub-hoch.mp4` und die zugehörigen Standbilder aus
jenem Projekt. Die Mechanik, der Bandtakt und die Lesbarkeit werden damit schon jetzt
gemessen. Die Bandtexte in `index.html` sind die endgültigen für Irodion und ändern sich
beim Tausch nicht.

Die geplante Reise steht in `KONZEPT.md`, Abschnitt 6: Roggenmarkt am frühen Abend,
unter den Schirmen hindurch, durch die Tür, an den Mäanderwänden vorbei bis an eine
freie Nische.

Die Dateien liegen bewusst mit im Repo, damit sich die Seite dem Kunden als
vollständiges Muster vorführen lässt. Was sie sind und was sie nicht sind, steht in
`assets/video/PLATZHALTER.md`.

**Ein Muster ist kein Livegang.** Solange der Platzhalter drin ist, geht die Seite nicht
öffentlich online. Sie steht auf `noindex`, und `robots.txt` steht auf `Disallow`.

## Der Fototermin, wenn er kommt

Diese Aufnahmen ersetzen erzeugtes Material eins zu eins und sind die Liste für den
Fotografen:

1. Die Trennwand mit dem Mäander, nah, bei Abendlicht. Ersetzt `maeander.webp`.
2. Die lange Tafel im Anbau, eingedeckt, vom Kopfende. Ersetzt `tafel.webp`.
3. Die Terrasse mit den Schirmen, später Nachmittag, ohne Gäste. Ersetzt `schirme.webp`.
4. Der Weg von draußen durch die Tür bis an eine Nische, als Film. Ersetzt den Hero.
5. Christos Tzes im Raum, wenn er einverstanden ist. Dafür gibt es auf der Seite noch
   keinen Platz, aber es wäre der stärkste Zusatz, den diese Seite bekommen kann.
