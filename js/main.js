/* ==========================================================================
   Irodion. Die Seite unter dem Hero.
   Auftritte, der heutige Tag, das Nummernfeld, das Formular.
   ========================================================================== */

(function () {
  'use strict';

  var reduziert = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ---------------------------------------------------------------------
     Auftritte. Ein Auftritt pro Moment, nicht ein Effekt pro Element.
     Nach dem Auftritt werden die Staffelverzoegerungen zurueckgenommen,
     sonst haengt jeder spaetere Hover genau um diese Staffelung hinterher.
     --------------------------------------------------------------------- */
  var gruppen = document.querySelectorAll(
    '.name__text, .haus__innen, .nummer__innen, .karte__kopf,' +
    '.feiern__innen, .draussen__text, .zeiten__innen, .platz__links, .platz__rechts'
  );
  Array.prototype.forEach.call(gruppen, function (g) { g.classList.add('auftritt'); });

  if ('IntersectionObserver' in window && !reduziert.matches) {
    var beobachter = new IntersectionObserver(function (eintraege) {
      eintraege.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add('in');
        beobachter.unobserve(e.target);
        // Aufraeumen, sobald der letzte Uebergang wirklich durch ist.
        setTimeout(function () { e.target.classList.add('fertig'); }, 900);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });
    Array.prototype.forEach.call(gruppen, function (g) { beobachter.observe(g); });

    /* Nachzuegler einsammeln.
       Ein Sprung ueber eine Sektion hinweg, etwa ueber einen Anker im Menue
       oder ueber das Nummernfeld, kann den Beobachter ueberspringen: Der
       Zustand wechselt von "noch darunter" direkt auf "schon darueber",
       beide Male ohne Schnittmenge, also meldet er gar nichts. Die Sektion
       bliebe dann fuer immer unsichtbar. Wer schon daran vorbei ist,
       bekommt den Endzustand deshalb sofort und ohne Bewegung. */
    var offen = false;
    function nachzuegler() {
      offen = false;
      Array.prototype.forEach.call(gruppen, function (g) {
        if (g.classList.contains('in')) return;
        if (g.getBoundingClientRect().bottom < 0) {
          g.classList.add('in', 'fertig');
          beobachter.unobserve(g);
        }
      });
    }
    window.addEventListener('scroll', function () {
      if (offen) return;
      offen = true;
      requestAnimationFrame(nachzuegler);
    }, { passive: true });
    window.addEventListener('hashchange', function () { setTimeout(nachzuegler, 60); });
  } else {
    Array.prototype.forEach.call(gruppen, function (g) { g.classList.add('in', 'fertig'); });
  }

  /* Der Anfangszustand muss mitgesetzt werden. Wird die Seite in einem
     Hintergrundtab geladen, feuert visibilitychange nie, und die Schleifen
     liefen dort ungebremst weiter. */
  document.body.classList.toggle('pausiert', document.hidden);

  /* ---------------------------------------------------------------------
     Der heutige Tag in der Wochentabelle.
     Die Marke ist ein eigener Strich und nicht nur eine Farbe, damit sie
     auch ohne Farbwahrnehmung ankommt.
     --------------------------------------------------------------------- */
  var heute = new Date().getDay();
  var zeile = document.querySelector('.woche tr[data-tag="' + heute + '"]');
  if (zeile) {
    zeile.setAttribute('data-heute', '');
    var th = zeile.querySelector('th');
    if (th) {
      var hinweis = document.createElement('span');
      hinweis.className = 'nur-fuer-screenreader';
      hinweis.textContent = ' (heute)';
      th.appendChild(hinweis);
    }
  }

  /* ---------------------------------------------------------------------
     Der Kopf bekommt seinen Grund, sobald der Hero durch ist.
     --------------------------------------------------------------------- */
  var hero = document.getElementById('hero');
  if (hero && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (e) {
      document.body.classList.toggle('kopf-hell', !e[0].isIntersecting);
    }, { rootMargin: '-64px 0px 0px 0px' }).observe(hero);
  }

  /* ---------------------------------------------------------------------
     DAS NUMMERNFELD. Der eine Mitmach-Moment.

     Die Karte dieses Hauses ist von 1 bis 1005 durchnummeriert, und die
     Stammgaeste bestellen so. Wer eine Nummer eintippt, wird an das
     Gericht gefuehrt. Wer eine Nummer eintippt, die es nicht gibt, bekommt
     die naechstgelegene genannt statt einer Fehlermeldung.

     Das Feld steht im HTML auf hidden und wird hier eingeschaltet: Ohne
     JavaScript soll es gar nicht erst da sein, denn die Karte darunter
     steht auch so vollstaendig da.
     --------------------------------------------------------------------- */
  var feld    = document.getElementById('feldnr');
  var eingabe = document.getElementById('nr-eingabe');
  var nrText  = document.getElementById('nr-status');

  if (feld && eingabe && nrText) {
    var gerichte = document.querySelectorAll('.gericht[data-nr]');

    if (gerichte.length) {
      feld.hidden = false;

      /* Ein Verzeichnis, einmal gebaut. Die Karte fuehrt die 290 zweimal,
         einmal unter den warmen Vorspeisen und einmal unter den
         vegetarischen Gerichten. Der Sprung geht auf die erste Stelle,
         das ist die, die auf der gedruckten Karte zuerst kommt. */
      var verzeichnis = Object.create(null);
      var zahlen = [];
      Array.prototype.forEach.call(gerichte, function (g) {
        var nr = g.getAttribute('data-nr');
        if (!(nr in verzeichnis)) {
          verzeichnis[nr] = g;
          zahlen.push({ nr: nr, zahl: parseInt(nr, 10) });
        }
      });
      zahlen.sort(function (a, b) { return a.zahl - b.zahl; });

      var letzterTreffer = null;

      function name(g) {
        var n = g.querySelector('.gericht__name');
        return n ? n.textContent.trim() : '';
      }

      function hinfuehren(g, nr) {
        if (letzterTreffer && letzterTreffer !== g) {
          letzterTreffer.classList.remove('getroffen');
        }
        // Neu anstossen, auch wenn dieselbe Zeile noch einmal gesucht wird.
        g.classList.remove('getroffen');
        void g.offsetWidth;
        g.classList.add('getroffen');
        letzterTreffer = g;

        g.scrollIntoView({
          behavior: reduziert.matches ? 'auto' : 'smooth',
          block: 'center'
        });
        nrText.removeAttribute('data-art');
        nrText.textContent = 'Die ' + nr + ' ist ' + name(g) + '.';
      }

      function suchen(roh) {
        var wert = (roh || '').replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
        if (!wert) {
          nrText.setAttribute('data-art', 'leer');
          nrText.textContent = 'Tippen Sie eine Nummer zwischen 1 und 1005 ein.';
          return;
        }
        if (verzeichnis[wert]) { hinfuehren(verzeichnis[wert], wert); return; }

        /* Keine genaue Nummer. Statt einer Fehlermeldung die naechste,
           die es wirklich gibt. Bei 42 kommt also die 41 oder die 43. */
        var zahl = parseInt(wert, 10);
        if (isNaN(zahl)) {
          nrText.setAttribute('data-art', 'leer');
          nrText.textContent = 'Das ist keine Nummer. Auf der Karte stehen Zahlen von 1 bis 1005.';
          return;
        }
        var beste = null, abstand = Infinity;
        for (var i = 0; i < zahlen.length; i++) {
          var d = Math.abs(zahlen[i].zahl - zahl);
          if (d < abstand) { abstand = d; beste = zahlen[i]; }
        }
        if (!beste) return;
        var g = verzeichnis[beste.nr];
        hinfuehren(g, beste.nr);
        nrText.textContent = 'Die ' + wert + ' gibt es nicht. Am nächsten dran ist die '
                           + beste.nr + ', ' + name(g) + '.';
      }

      feld.addEventListener('submit', function (e) {
        e.preventDefault();
        suchen(eingabe.value);
      });

      Array.prototype.forEach.call(feld.querySelectorAll('.tipp'), function (t) {
        t.addEventListener('click', function () {
          eingabe.value = t.getAttribute('data-nr');
          suchen(eingabe.value);
        });
      });
    }
  }

  /* ---------------------------------------------------------------------
     Das Formular. Es gibt kein Backend, also baut es eine mailto-Nachricht
     und oeffnet das Mailprogramm des Besuchers. Der Erfolgstext sagt genau
     das, nichts anderes waere die Wahrheit. Der verlaessliche Weg bleibt
     das Telefon, deshalb steht es groesser.
     --------------------------------------------------------------------- */
  var formular = document.getElementById('formular');
  var status   = document.getElementById('formular-status');

  if (formular && status) {
    formular.addEventListener('submit', function (e) {
      e.preventDefault();
      var d = new FormData(formular);
      var name2    = (d.get('name') || '').toString().trim();
      var personen = (d.get('personen') || '').toString().trim();
      var zeit     = (d.get('zeit') || '').toString().trim();
      var text     = (d.get('text') || '').toString().trim();

      if (!name2 || !personen || !zeit) {
        status.textContent = 'Bitte Name, Personen und Wunschzeit ausfüllen.';
        var fehlt = !name2 ? 'f-name' : (!personen ? 'f-personen' : 'f-zeit');
        var el = document.getElementById(fehlt);
        if (el) el.focus();
        return;
      }

      var betreff = 'Tischanfrage: ' + personen + ' Personen, ' + zeit;
      var koerper =
        'Guten Tag,\n\nich hätte gern einen Tisch.\n\n' +
        'Name: ' + name2 + '\n' +
        'Personen: ' + personen + '\n' +
        'Wunschzeit: ' + zeit + '\n' +
        (text ? '\n' + text + '\n' : '') +
        '\nViele Grüße\n' + name2;

      window.location.href = 'mailto:info@irodion-luenen.de'
        + '?subject=' + encodeURIComponent(betreff)
        + '&body=' + encodeURIComponent(koerper);

      status.textContent = 'Ihr Mailprogramm ist offen. Schicken Sie die Nachricht ab, wir melden uns.';
    });
  }

})();

/* ==========================================================================
   Der Maeander am Seitenrand.
   Zeichnet sich ueber die Seite unter dem Hero selbst. Die Laenge des
   Pfades wird gemessen, nicht geraten, und die Knoten bekommen ihre
   Schwelle aus der tatsaechlichen Lage auf dem Pfad, nicht aus ihrer
   Hoehe: Das Band macht Haken, also ist der Weg laenger als die Strecke.
   Geschrieben wird nur bei echter Aenderung, die Schleife laeuft nicht
   frei mit.
   ========================================================================== */
(function () {
  'use strict';
  var weg    = document.getElementById('weg');
  var linie  = document.getElementById('weg-linie');
  var knoten = document.querySelectorAll('#weg-knoten circle');
  if (!weg || !linie || !knoten.length || !linie.getTotalLength) return;

  var laenge = linie.getTotalLength();
  linie.style.strokeDasharray = laenge;
  linie.style.strokeDashoffset = 'calc(' + laenge + ' - ' + laenge + ' * var(--wp, 0))';

  /* Fuer jeden Knoten die Stelle auf dem Pfad suchen, an der seine Hoehe
     zuerst erreicht ist. Zwanzig Halbierungen reichen auf ein Tausendstel
     genau, und das laeuft genau einmal beim Laden. */
  var schwellen = [];
  Array.prototype.forEach.call(knoten, function (k) {
    var y = parseFloat(k.getAttribute('cy'));
    var a = 0, b = laenge;
    for (var i = 0; i < 20; i++) {
      var m = (a + b) / 2;
      if (linie.getPointAtLength(m).y < y) a = m; else b = m;
    }
    schwellen.push(b / laenge);
  });

  var reduziert = window.matchMedia('(prefers-reduced-motion: reduce)');
  var letzterP = -1, offen = false;

  function anfang() {
    var h = document.getElementById('hero');
    return h ? h.offsetHeight : 0;
  }

  function messen() {
    offen = false;
    var start = anfang();
    var ende = document.body.scrollHeight - window.innerHeight;
    var strecke = ende - start;
    if (strecke <= 0) return;
    var p = Math.min(1, Math.max(0, (window.scrollY - start) / strecke));
    if (Math.abs(p - letzterP) < 0.004) return;
    letzterP = p;
    weg.style.setProperty('--wp', p.toFixed(3));
    for (var i = 0; i < knoten.length; i++) {
      var an = p >= schwellen[i];
      if (an !== knoten[i].classList.contains('an')) knoten[i].classList.toggle('an', an);
    }
  }

  function beiScroll() {
    if (offen) return;
    offen = true;
    requestAnimationFrame(messen);
  }

  if (reduziert.matches) {
    weg.style.setProperty('--wp', '1');
    Array.prototype.forEach.call(knoten, function (k) { k.classList.add('an'); });
  } else {
    window.addEventListener('scroll', beiScroll, { passive: true });
    window.addEventListener('resize', beiScroll, { passive: true });
    messen();
  }
})();
