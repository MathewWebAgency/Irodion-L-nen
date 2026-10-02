/* Laeuft ohne defer, also vor dem ersten Anstrich.
   Setzt die Klasse, solange noch nichts gezeichnet ist. Lag das inline
   im Kopf, blockte die Content-Security-Policy es live weg, und der
   Auftritt sprang einmal fertig und dann zurueck. Deshalb eine Datei. */
document.documentElement.classList.add('js-bereit');

/* Das Tuerfoto im Einstieg ist das groesste Bild im ersten Blick. Es wird
   klar, sobald es geladen ist, und wartet nicht auf die Skripte am Ende
   der Seite. Sonst stuende es Sekunden milchig da, und Google zaehlte
   die Wartezeit mit. load steigt nicht auf, darum das Abfangen am
   Dokument. */
document.addEventListener('load', function (e) {
  var t = e.target;
  if (t && t.tagName === 'IMG' && t.closest && t.closest('.hero__bild')) {
    t.classList.add('klar');
  }
}, true);
