/* ==========================================================================
   EINTRETEN. Der Einstieg der Seite.

   Man steht vor der Tuer unter dem Rundbogen. Beim Scrollen tritt die
   Scheibe mit dem Namen zurueck, das Foto waechst zur vollen Flaeche, die
   linke Tuer geht auf, und man geht hinein in den Gastraum. Dann steht
   dort ein Satz: Kalos ilthate. Schoen, dass Sie da sind.

   Die Fahrt ist ein kurzer Film (assets/film), von Kling 3.0 aus zwei
   echten Fotos errechnet: der Tuer und dem Gastraum direkt dahinter. Er
   ist aus zwei Stuecken zusammengesetzt. Das erste geht durch die linke
   Tuer bis in den Tuerrahmen; das zweite beginnt genau mit diesem Bild
   und geht nur die wenigen Schritte bis zum Blick des echten Fotos. Ein
   einziges langes Stueck hatte im Raum Einzelheiten veraendert. Der Film spielt nicht von selbst, er
   haengt am Scroll (ScrollTrigger mit scrub): so schnell oder langsam, wie
   der Besucher scrollt, und rueckwaerts, wenn er zurueckscrollt.

   Ohne GSAP, ohne JavaScript und bei reduzierter Bewegung passiert hier
   nichts: Der Einstieg bleibt so, wie er im HTML steht, Tuer und Scheibe.
   Das ist die geplante ruhige Fassung, kein Notbehelf. Kommt der Film
   nicht an (kein Netz, Datensparmodus), traegt das Standbild die Fahrt,
   und am Ende blendet der Gang ueber.
   ========================================================================== */

(function () {
  'use strict';

  var reduziert = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduziert.matches || !window.gsap || !window.ScrollTrigger) return;

  var hero     = document.querySelector('.hero');
  var figur    = hero && hero.querySelector('.hero__bild');
  var foto     = figur && figur.querySelector('img');
  var film     = hero && hero.querySelector('.hero__film');
  var bild     = film && film.querySelector('.hero__film-bild');
  var video    = film && film.querySelector('.hero__video');
  var ende     = film && film.querySelector('.hero__ende img');
  var startBild = bild && bild.querySelector('img');
  var schleier = film && film.querySelector('.hero__schleier');
  var scheibe  = hero && hero.querySelector('.hero__scheibe');
  var gruss    = hero && hero.querySelector('.hero__gruss');
  var kopf     = document.querySelector('.kopf');
  if (!hero || !foto || !film || !bild || !video || !ende || !startBild || !scheibe || !gruss) return;

  gsap.registerPlugin(ScrollTrigger);
  document.documentElement.classList.add('js-eintritt');

  /* Zwei Fassungen: hoch fuers hochkant gehaltene Handy, quer fuer alles
     andere. Die Bedingung steht zeichengleich im Stylesheet und in den
     <source>-Zeilen. Neuer Film, neuer Dateiname: Die Dateien werden ein
     halbes Jahr zwischengespeichert. */
  var HOCH = '(max-width: 899px) and (orientation: portrait)';
  var schmal = window.matchMedia(HOCH);
  var FILM = { quer: 'assets/film/eintritt-quer-4.mp4', hoch: 'assets/film/eintritt-hoch-4.mp4' };
  var MASS = { quer: [1920, 1080], hoch: [900, 1600] };
  function art() { return schmal.matches ? 'hoch' : 'quer'; }

  /* ---------------------------------------------------------------------
     Deckungsgleich beginnen. Das Filmbild fuellt am Ende den sichtbaren
     Schirm (wie object-fit: cover, mittig). Das Foto im HTML steht
     kleiner, in seinem Kasten und mit eigenem Ausschnitt. Gesucht ist die
     Verschiebung und Skalierung, mit der das Filmbild genau auf dem Foto
     liegt, und der Zuschnitt auf den Kasten.
     Die Bildebene bekommt dafuer genau die Groesse des Filmbilds, auch
     wenn sie ueber den Rand ragt: object-fit schneidet sonst am eigenen
     Kasten ab, und verkleinert saehe man dessen Raender.
     Gemessen wird ueber offset-Werte, die keine Transformation kennen.
     Ist der Einstieg hoeher als der Schirm (am Handy mit langer Scheibe),
     richtet sich das Bild nach dem Schirm; darunter liegt Eiche, und
     daran schliesst die Eiche des naechsten Abschnitts an.
     --------------------------------------------------------------------- */
  function lage() {
    var W = film.offsetWidth;
    var H = Math.min(film.offsetHeight, window.innerHeight);
    var bx = figur.offsetLeft, by = figur.offsetTop;
    var bw = figur.offsetWidth, bh = figur.offsetHeight;
    var m = MASS[art()];
    var nw = foto.naturalWidth || m[0], nh = foto.naturalHeight || m[1];
    var pos = getComputedStyle(foto).objectPosition.split(' ');
    var px = parseFloat(pos[0]) / 100, py = parseFloat(pos[1] || pos[0]) / 100;
    // Das Foto in seinem Kasten
    var sb = Math.max(bw / nw, bh / nh);
    var lb = bx + (bw - nw * sb) * px, tb = by + (bh - nh * sb) * py;
    // Das Filmbild auf dem Schirm
    var sf = Math.max(W / nw, H / nh);
    var wf = nw * sf, hf = nh * sf;
    var lf = (W - wf) / 2, tf = (H - hf) / 2;
    bild.style.width = wf + 'px';
    bild.style.height = hf + 'px';
    bild.style.left = lf + 'px';
    bild.style.top = tf + 'px';
    return {
      k: sb / sf, x: lb - lf, y: tb - tf,
      // Offen bis zur Schirmkante. Was darunter liegt, sieht man erst,
      // wenn der Einstieg weiterzieht; dann ist die Ebene ganz offen.
      schirm: 'inset(0px 0px ' + Math.max(0, film.offsetHeight - H) + 'px 0px)',
      schnitt: 'inset(' + by + 'px ' + Math.max(0, W - bx - bw) + 'px '
             + Math.max(0, film.offsetHeight - by - bh) + 'px ' + bx + 'px)'
    };
  }
  var VOLL = 'inset(0px 0px 0px 0px)';

  /* ---------------------------------------------------------------------
     Der Film. Er wird als Ganzes geholt und als Objekt-URL abgespielt.
     Manche Hoster koennen keine Teilabrufe, dann klemmt jeder Sprung im
     Film, und zwar nur live. So geht es ueberall.
     Gesprungen wird erst, wenn der letzte Sprung angekommen ist.
     Ungegatete Spruenge stapeln sich, das ist der Unterschied zwischen
     weich und ruckelig.
     --------------------------------------------------------------------- */
  var uhr = { t: 0 };
  var geladen = null, lauf = 0, blobUrl = null;
  var besetzt = false, offen = null, wachhund = null;
  var BILD = 1 / 24;

  /* Ein Sprung. Steht der Film schon auf dem Bild, wird nicht gesprungen:
     Manche Browser melden dann kein seeked, und das Gate bliebe fuer immer
     zu. Kommt die Meldung aus einem anderen Grund nicht, loest der
     Wachhund das Gate nach 300ms. Beides liess die Fahrt sonst mitten im
     Weg stehen bleiben. */
  function suchen(ziel) {
    if (Math.abs(video.currentTime - ziel) < BILD / 2) { besetzt = false; return; }
    besetzt = true;
    clearTimeout(wachhund);
    wachhund = setTimeout(angekommen, 300);
    try { video.currentTime = ziel; } catch (e) { angekommen(); }
  }
  function angekommen() {
    clearTimeout(wachhund);
    besetzt = false;
    if (offen !== null) { var ziel = offen; offen = null; suchen(ziel); }
  }
  function springen(t) {
    if (!video.duration || !isFinite(video.duration)) return;
    var ziel = Math.min(video.duration - 0.001, Math.max(0, t * video.duration));
    if (besetzt) { offen = ziel; return; }
    suchen(ziel);
  }
  video.addEventListener('seeked', angekommen);
  video.addEventListener('error', function () {
    clearTimeout(wachhund);
    besetzt = false; offen = null;
    film.classList.remove('film-bereit');
  });

  /* Der Film ist da. Safari auf dem iPhone zeigt neue Bilder beim Springen
     erst, wenn das Video einmal angespielt wurde; stumm ist das ohne
     Beruehrung erlaubt. Erst danach gilt der Film als bereit. */
  function filmBereit(meinLauf) {
    function los() {
      if (meinLauf !== lauf) return;
      film.classList.add('film-bereit');
      springen(uhr.t);
    }
    var spiel;
    try { spiel = video.play(); } catch (e) { spiel = null; }
    if (spiel && spiel.then) {
      spiel.then(function () { video.pause(); los(); }, los);
    } else {
      video.pause();
      los();
    }
  }

  function filmHolen(welche) {
    if (geladen === welche) return;
    var sparen = navigator.connection && navigator.connection.saveData;
    if (sparen || !window.fetch || !window.URL || !URL.createObjectURL) return;
    geladen = welche;
    var meinLauf = ++lauf;
    film.classList.remove('film-bereit');
    clearTimeout(wachhund);
    besetzt = false; offen = null;
    fetch(FILM[welche]).then(function (antwort) {
      if (!antwort.ok) throw new Error('HTTP ' + antwort.status);
      return antwort.blob();
    }).then(function (daten) {
      // Wer zu spaet kommt, spielt nicht mehr mit: Hat jemand inzwischen
      // die Fassung gewechselt, gewinnt die neue.
      if (meinLauf !== lauf) return;
      if (blobUrl) URL.revokeObjectURL(blobUrl);
      blobUrl = URL.createObjectURL(daten);
      video.src = blobUrl;
      video.load();
      video.addEventListener('loadeddata', function () { filmBereit(meinLauf); }, { once: true });
    }).catch(function () {
      if (meinLauf === lauf) geladen = null;   // Standbild traegt die Fahrt
    });
  }

  /* Der Film kommt, sobald das Tuerfoto steht, nicht erst nach der ganzen
     Seite: Wer gleich scrollt, soll die Fahrt sehen und nicht das
     Standbild. */
  var fotoDa = foto.complete && foto.naturalWidth > 0;
  if (!fotoDa) {
    var fotoFertig = function () { fotoDa = true; filmHolen(art()); };
    foto.addEventListener('load', fotoFertig, { once: true });
    foto.addEventListener('error', fotoFertig, { once: true });
  }

  /* ---------------------------------------------------------------------
     Die Zeitleiste. Anteile der Strecke:
     0.00 bis 0.32  Die Scheibe tritt zurueck, das Bild waechst zur Flaeche.
     0.04 bis 0.90  Der Film laeuft durchgehend: auf die linke Tuer zu, sie
                    geht auf, die Kamera geht hindurch und ein paar Schritte
                    in den Gastraum, bis zum Blick des echten Fotos.
     0.66 bis 0.88  Nur ohne Film: Das Tuerfoto faehrt auf die Tuer zu, der
                    Gastraum blendet allmaehlich darueber.
     0.88 bis 1.00  Schleier und Gruss, dann ein kurzes Stehen.
     Wird je Lage neu gebaut (siehe unten). gsap.matchMedia raeumt die
     alte Fassung dabei vollstaendig ab, samt Pin und gesetzten Werten.
     --------------------------------------------------------------------- */
  function bauen() {
    if (fotoDa) filmHolen(art());

    var zeit = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        // Zwei Schirmhoehen: Auch wer zuegig scrollt, sieht die Fahrt und
        // nicht nur ihr Ende. scrub 1 zieht eine Sekunde weich nach.
        end: function () { return '+=' + Math.round(window.innerHeight * 2); },
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: function (st) {
          // Solange nicht gescrollt ist, zeigt der Einstieg das Foto selbst.
          hero.classList.toggle('hero--faehrt', st.progress > 0.001);
          // Ein Name, einmal im Blick: Solange die Scheibe sichtbar ist,
          // schweigt das Logo im Kopf.
          if (kopf) kopf.classList.toggle('kopf--name-im-glas', st.progress < 0.18);
        },
        onLeave: function () { if (kopf) kopf.classList.remove('kopf--name-im-glas'); },
        onEnterBack: function () { if (kopf) kopf.classList.remove('kopf--name-im-glas'); }
      }
    });

    zeit
      // Das Bild waechst aus seinem Kasten zur vollen Flaeche: der
      // Zuschnitt oeffnet sich, und das Filmbild darin wird so gross wie
      // der Einstieg. Weich an und aus, es bewegt sich auf dem Schirm.
      .fromTo(film,
        { clipPath: function () { return lage().schnitt; } },
        { clipPath: function () { return lage().schirm; }, duration: 0.32, ease: 'power2.inOut' }, 0)
      .set(film, { clipPath: VOLL }, 0.33)
      .fromTo(bild,
        { x: function () { return lage().x; }, y: function () { return lage().y; },
          scale: function () { return lage().k; } },
        { x: 0, y: 0, scale: 1, duration: 0.32, ease: 'power2.inOut' }, 0)
      // Die Scheibe tritt zurueck und antwortet sofort.
      .fromTo(scheibe, { opacity: 1, y: 0 }, { opacity: 0, y: -28, duration: 0.2, ease: 'power1.out' }, 0)
      // Der Film. Linear zum Scroll: Die Kamera geht so schnell, wie man
      // scrollt, jede Kurve hier fuehlte sich wie Bremsen an.
      .fromTo(uhr, { t: 0 }, {
        t: 1, duration: 0.86,
        onUpdate: function () { springen(uhr.t); }
      }, 0.04)
      // Ersatzweg, solange der Film noch laedt (oder gar nicht kommt): Das
      // Tuerfoto faehrt langsam auf die Tuer zu, dann blendet der Gastraum
      // allmaehlich darueber. Ist der Film bereit, liegt er darueber, und
      // das Endbild bleibt aus (CSS), der Film zeigt sein letztes Bild selbst.
      .fromTo(startBild,
        { scale: 1, transformOrigin: function () { return art() === 'hoch' ? '50% 65.5%' : '57.6% 56.7%'; } },
        { scale: 1.3, duration: 0.7, ease: 'none' }, 0.04)
      .fromTo(ende, { opacity: 0 }, { opacity: 1, duration: 0.22, ease: 'power1.inOut' }, 0.66)
      .fromTo(schleier, { opacity: 0 }, { opacity: 1, duration: 0.1, ease: 'power1.out' }, 0.88)
      .fromTo(gruss, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.1, ease: 'power2.out' }, 0.9)
      // Ein kurzes Stehen am Ende, damit der Gruss gelesen werden kann.
      .to({}, { duration: 0.02 }, 0.98);

    return function () { hero.classList.remove('hero--faehrt'); };
  }

  /* Neu gebaut wird, sobald eine der drei Lagen wechselt: Breite ueber
     900px, gedrehtes Handy, schmales Querformat. */
  var mm = gsap.matchMedia();
  mm.add({
    breit: '(min-width: 900px)',
    hoch: HOCH,
    schmalQuer: '(max-width: 899px) and (orientation: landscape)'
  }, bauen);

  // Bilder und Schrift koennen die Masse nach dem Laden noch aendern.
  window.addEventListener('load', function () { ScrollTrigger.refresh(); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  foto.addEventListener('load', function () { ScrollTrigger.refresh(); });
})();
