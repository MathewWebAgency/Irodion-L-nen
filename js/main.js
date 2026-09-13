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
    '.feiern__innen, .draussen__text, .zeiten__innen, .platz__innen'
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
     Ankersprünge. Auf html stand weiches Scrollen, und über ein Dokument
     von rund 20000 Pixeln ist das keine Animation mehr: Ein Klick auf
     "Zeiten" fährt durch fünfzehn Bildschirme Karte, und jede Radbewegung
     unterwegs bricht ab und lässt den Leser irgendwo dazwischen stehen.
     Also wird je Sprung entschieden: bis drei Bildschirme weich, darüber
     sofort. Bei reduzierter Bewegung immer sofort.
     --------------------------------------------------------------------- */
  function springen(e) {
    var a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a) return;
    var id = a.getAttribute('href').slice(1);
    if (!id) return;
    var ziel = document.getElementById(id);
    if (!ziel) return;
    e.preventDefault();
    var weit = Math.abs(ziel.getBoundingClientRect().top) > window.innerHeight * 3;
    ziel.scrollIntoView({
      behavior: (reduziert.matches || weit) ? 'auto' : 'smooth',
      block: 'start'
    });
    // Die Adresse soll den Sprung trotzdem behalten, ohne ein zweites Mal
    // zu scrollen. Deshalb ersetzen statt setzen.
    history.replaceState(null, '', '#' + id);
    // Tastatur und Vorlesen sollen mitkommen, nicht oben stehen bleiben.
    if (!ziel.hasAttribute('tabindex')) ziel.setAttribute('tabindex', '-1');
    ziel.focus({ preventScroll: true });
  }
  document.addEventListener('click', springen);

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
     Die Zeile im Kopf, die sagt, ob heute offen ist.
     Der Mittwoch ist der meistgesuchte Punkt dieser Seite, und die Antwort
     lag bisher bei neunundachtzig Prozent der Scrollstrecke. Sie steht
     jetzt oben, gerechnet aus demselben Wochentag wie die Tabelle.
     Feiertage kennt der Browser nicht, deshalb steht der Vorbehalt in der
     Zeile selbst, statt eine Auskunft zu geben, die falsch sein kann.
     --------------------------------------------------------------------- */
  var heuteZeile = document.getElementById('kopf-heute');
  if (heuteZeile) {
    if (heute === 3) {
      heuteZeile.textContent = 'Heute Ruhetag';
      heuteZeile.title = 'Mittwoch ist Ruhetag, außer an Feiertagen';
      heuteZeile.setAttribute('data-zu', '');
    } else {
      heuteZeile.textContent = 'Heute geöffnet';
      heuteZeile.title = '11:30 bis 14:30 und 17:00 bis 22:30 Uhr';
    }
    heuteZeile.hidden = false;
  }

  /* ---------------------------------------------------------------------
     Der Kopf bekommt seinen Grund, sobald der Hero durch ist.
     --------------------------------------------------------------------- */
  var hero = document.getElementById('hero');
  if (hero) {
    var kopfOffen = false;
    function kopfPruefen() {
      kopfOffen = false;
      var h = hero.getBoundingClientRect();
      document.body.classList.toggle('kopf-hell', h.bottom <= 64);
    }
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (e) {
        document.body.classList.toggle('kopf-hell', !e[0].isIntersecting);
      }, { rootMargin: '-64px 0px 0px 0px' }).observe(hero);
    }
    /* Absicherung. Der Beobachter kann seinen ersten Rueckruf feuern,
       bevor die Hoehe des Heros steht, und meldet dann einmal falsch und
       danach nie wieder, weil die Grenze nie ueberschritten wird. Der Kopf
       bliebe fuer immer eingefaerbt. Gemessen wird deshalb zusaetzlich
       beim Scrollen, gedrosselt und nur bei echter Aenderung. */
    window.addEventListener('scroll', function () {
      if (kopfOffen) return;
      kopfOffen = true;
      requestAnimationFrame(kopfPruefen);
    }, { passive: true });
    window.addEventListener('load', kopfPruefen);
    kopfPruefen();
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

      // Ein Treffer, der stehen bleibt, während die Meldung schon etwas
      // anderes sagt, zeigt auf ein Gericht, das niemand gesucht hat.
      function markeLoeschen() {
        if (letzterTreffer) {
          letzterTreffer.classList.remove('getroffen');
          letzterTreffer = null;
        }
      }

      function suchen(roh) {
        var wert = (roh || '').replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
        if (!wert) {
          markeLoeschen();
          nrText.setAttribute('data-art', 'leer');
          nrText.textContent = 'Tippen Sie eine Nummer zwischen 1 und 1005 ein.';
          return;
        }
        if (verzeichnis[wert]) { hinfuehren(verzeichnis[wert], wert); return; }

        /* Keine genaue Nummer. Statt einer Fehlermeldung die naechste,
           die es wirklich gibt. Bei 42 kommt also die 41 oder die 43. */
        var zahl = parseInt(wert, 10);
        if (isNaN(zahl)) {
          markeLoeschen();
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

        /* Die Nachbarschaft braucht eine Grenze. Bei der 42 ist die 41 ein
           hilfreicher Hinweis. Bei der 500 wäre es die 293, also 207
           daneben, und die Seite würde fünftausend Pixel weit springen,
           um etwas zu zeigen, das niemand gemeint hat. Die Zahlenreihe
           der Karte hat Lücken, das ist die ehrlichere Auskunft. */
        if (abstand > 20) {
          markeLoeschen();
          nrText.setAttribute('data-art', 'leer');
          nrText.textContent = 'Die ' + wert + ' gibt es nicht. Die Karte geht bis 1005, '
                             + 'aber nicht lückenlos. Probieren Sie eine kleinere Zahl.';
          return;
        }

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

})();
