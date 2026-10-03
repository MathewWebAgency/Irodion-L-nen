/* ==========================================================================
   Irodion. Das Wenige, das die Seite an JavaScript braucht:
   die Fotos werden klar, Ankerspruenge, der heutige Tag, das Nummernfeld.
   Ohne JavaScript steht alles vollstaendig da, nur das Nummernfeld fehlt.
   ========================================================================== */

(function () {
  'use strict';

  var html = document.documentElement;
  var reduziert = window.matchMedia('(prefers-reduced-motion: reduce)');

  // Die Notfallregel im CSS greift nur, solange diese Datei nicht laeuft.
  html.classList.add('js-laeuft');

  /* ---------------------------------------------------------------------
     DAS GLAS WIRD KLAR. Unter jedem Foto liegt seine weichgezeichnete
     Fassung. Ist das Foto geladen und im Bild, blendet es darueber auf,
     einmal, 700ms, nur opacity. Fotos, die zusammen ins Bild kommen,
     folgen einander im Abstand von 60ms, in der Reihenfolge der Seite.
     --------------------------------------------------------------------- */
  var fotos = document.querySelectorAll('.klaert');

  function klaeren(img, verzug) {
    if (img.classList.contains('klar')) return;
    function los() {
      if (verzug) img.style.transitionDelay = verzug + 'ms';
      img.classList.add('klar');
      // Die Verzoegerung gilt nur fuer diesen einen Auftritt.
      if (verzug) setTimeout(function () { img.style.transitionDelay = ''; }, verzug + 800);
    }
    if (img.complete && img.naturalWidth) { los(); return; }
    img.addEventListener('load', los, { once: true });
    // Ein Foto, das nicht kommt, soll die Scheibe nicht fuer immer
    // milchig lassen. Dann bleibt eben die weiche Fassung stehen.
    img.addEventListener('error', function () { img.classList.add('klar'); }, { once: true });
  }

  if (reduziert.matches || !('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(fotos, function (img) { img.classList.add('klar'); });
  } else {
    var sicht = new IntersectionObserver(function (eintraege) {
      var neu = eintraege.filter(function (e) { return e.isIntersecting; });
      neu.forEach(function (e, i) {
        sicht.unobserve(e.target);
        klaeren(e.target, i * 60);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.01 });
    Array.prototype.forEach.call(fotos, function (img) { sicht.observe(img); });
  }

  /* ---------------------------------------------------------------------
     ANFAHRT. Auf Android ein geo-Link: Das Telefon oeffnet die Navi-App,
     die dort als Standard eingestellt ist, oder laesst waehlen (Google
     Maps, Waze, HERE ...). Auf Apple-Geraeten Apple Karten, ueberall
     sonst Google Maps im Browser. Ohne JavaScript bleibt Google.
     --------------------------------------------------------------------- */
  var ua = navigator.userAgent, ziel = null;
  if (/Android/.test(ua)) {
    ziel = 'geo:0,0?q=Roggenmarkt+19,+44532+L%C3%BCnen';
  } else if (/iPhone|iPad|iPod|Macintosh/.test(ua)) {
    ziel = 'https://maps.apple.com/?daddr=Roggenmarkt+19,+44532+L%C3%BCnen&dirflg=d';
  }
  if (ziel) {
    Array.prototype.forEach.call(document.querySelectorAll('.karte-link'), function (a) { a.href = ziel; });
  }

  /* ---------------------------------------------------------------------
     DIE AETZLINIE zeichnet sich einmal, wenn sie ins Bild kommt.
     --------------------------------------------------------------------- */
  var linie = document.querySelector('.name__linie');
  if (linie) {
    if (reduziert.matches || !('IntersectionObserver' in window)) {
      linie.classList.add('gezeichnet');
    } else {
      var linienSicht = new IntersectionObserver(function (e) {
        if (!e[0].isIntersecting) return;
        linie.classList.add('gezeichnet');
        linienSicht.disconnect();
      }, { rootMargin: '0px 0px -15% 0px' });
      // Beobachtet wird der Abschnitt, nicht die Linie: Solange sie per
      // clip-path ganz zugeschnitten ist, hat sie keine sichtbare Flaeche,
      // und der Browser meldet sie nie als sichtbar.
      linienSicht.observe(linie.parentElement || linie);
    }
  }

  /* ---------------------------------------------------------------------
     EIN NAME, EINMAL IM BLICK. Solange das Logo gross in der Scheibe des
     Einstiegs zu sehen ist, blendet der Kopf seins aus. Ist die Scheibe
     unter der Leiste verschwunden, uebernimmt der Kopf den Namen.
     --------------------------------------------------------------------- */
  var kopf = document.querySelector('.kopf');
  var glasName = document.querySelector('.hero__logo');
  // Laeuft der Einstieg mit Bewegung, steuert js/eintritt.js das selbst.
  if (kopf && glasName && 'IntersectionObserver' in window && !html.classList.contains('js-eintritt')) {
    new IntersectionObserver(function (e) {
      kopf.classList.toggle('kopf--name-im-glas', e[0].isIntersecting);
    }, { rootMargin: '-60px 0px 0px 0px' }).observe(glasName);
  }

  /* ---------------------------------------------------------------------
     ANKERSPRUENGE. Bis drei Bildschirme weich, darueber sofort. Eine
     weiche Fahrt durch die ganze Karte ist keine Animation mehr.
     Bei reduzierter Bewegung immer sofort.
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
    history.replaceState(null, '', '#' + id);
    // Tastatur und Vorlesen sollen mitkommen, nicht oben stehen bleiben.
    if (!ziel.hasAttribute('tabindex')) ziel.setAttribute('tabindex', '-1');
    ziel.focus({ preventScroll: true });
  }
  document.addEventListener('click', springen);

  /* ---------------------------------------------------------------------
     DER LIVE-STATUS. Gerechnet nach deutscher Zeit (Europe/Berlin), auch
     fuer Besucher, deren Geraet anders eingestellt ist, und jede Minute
     neu. Er steht in der Scheibe des Einstiegs, im Kopf (ab 1001px) und
     ueber der Wochentabelle. Der heutige Tag ist in der Tabelle markiert,
     mit sichtbarem Wort und nicht nur mit Farbe.

     Feiertage kennt der Browser nicht. Am Mittwoch steht deshalb der
     Vorbehalt dabei, statt eine Auskunft zu geben, die falsch sein kann.
     Keine Animation: Das ist eine Auskunft, kein Effekt.
     --------------------------------------------------------------------- */
  var TAGE = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
  var ZEITEN = { auf1: 690, kueche1: 840, zu1: 870, auf2: 1020, kueche2: 1320, zu2: 1350 };
  // Freitags und samstags ist abends bis 23:00 Uhr offen.
  function schluss(tag) { return (tag === 5 || tag === 6) ? 1380 : ZEITEN.zu2; }
  function uhr(min) { var h = Math.floor(min / 60), m = min % 60; return h + ':' + (m < 10 ? '0' : '') + m; }

  function berlin() {
    var teile = {};
    try {
      new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/Berlin', weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23'
      }).formatToParts(new Date()).forEach(function (t) { teile[t.type] = t.value; });
    } catch (e) {
      var d = new Date();
      return { tag: d.getDay(), min: d.getHours() * 60 + d.getMinutes() };
    }
    var tage = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
    return { tag: tage[teile.weekday], min: parseInt(teile.hour, 10) * 60 + parseInt(teile.minute, 10) };
  }

  function naechsterOffenerTag(tag) {
    var t = (tag + 1) % 7;
    return t === 3 ? 4 : t;
  }

  /* Liefert eine kurze Zeile fuer den Kopf, eine lange fuer die Seite und
     ob gerade geoeffnet ist. */
  function status() {
    var j = berlin(), m = j.min, z = ZEITEN;
    if (j.tag === 3) {
      return { offen: false, kurz: 'Heute Ruhetag',
        lang: 'Heute ist Ruhetag. Donnerstag ab 11:30 Uhr sind wir wieder da. An Feiertagen haben wir auch mittwochs offen.' };
    }
    if (m < z.auf1) return { offen: false, kurz: 'Ab 11:30 geöffnet', lang: 'Heute ab 11:30 Uhr geöffnet, warme Küche bis 14:00 Uhr.' };
    if (m < z.kueche1) return { offen: true, kurz: 'Jetzt geöffnet', lang: 'Jetzt geöffnet. Warme Küche bis 14:00 Uhr.' };
    if (m < z.zu1) return { offen: true, kurz: 'Geöffnet bis 14:30', lang: 'Geöffnet bis 14:30 Uhr. Warme Küche wieder ab 17:00 Uhr.' };
    if (m < z.auf2) return { offen: false, kurz: 'Ab 17:00 wieder da', lang: 'Mittagspause. Ab 17:00 Uhr sind wir wieder da.' };
    if (m < z.kueche2) return { offen: true, kurz: 'Jetzt geöffnet', lang: 'Jetzt geöffnet. Warme Küche bis 22:00 Uhr.' };
    var zu = schluss(j.tag);
    if (m < zu) return { offen: true, kurz: 'Geöffnet bis ' + uhr(zu), lang: 'Geöffnet bis ' + uhr(zu) + ' Uhr, die warme Küche ist für heute durch.' };
    var morgen = naechsterOffenerTag(j.tag);
    var wann = morgen === (j.tag + 1) % 7 ? 'morgen' : TAGE[morgen];
    return { offen: false, kurz: 'Jetzt geschlossen', lang: 'Jetzt geschlossen. ' + wann.charAt(0).toUpperCase() + wann.slice(1) + ' ab 11:30 Uhr wieder geöffnet.' };
  }

  var liveFelder = document.querySelectorAll('[data-live]');
  var kopfLive = document.getElementById('kopf-heute');
  var markiert = null;

  function zeigen() {
    var st = status();
    Array.prototype.forEach.call(liveFelder, function (el) {
      var text = el.getAttribute('data-live') === 'kurz' ? st.kurz : st.lang;
      var t = el.querySelector('.live__text') || el;
      if (t.textContent !== text) t.textContent = text;
      el.toggleAttribute('data-offen', st.offen);
      el.hidden = false;
    });
    // Der heutige Tag in der Wochentabelle, nach deutscher Zeit.
    var tag = berlin().tag;
    var zeile = document.querySelector('.woche tr[data-tag="' + tag + '"]');
    if (zeile && zeile !== markiert) {
      if (markiert) {
        markiert.removeAttribute('data-heute');
        var alt = markiert.querySelector('.woche__heute');
        if (alt) alt.remove();
      }
      zeile.setAttribute('data-heute', '');
      var th = zeile.querySelector('th');
      if (th) {
        var marke = document.createElement('span');
        marke.className = 'woche__heute';
        marke.textContent = 'heute';
        th.appendChild(marke);
      }
      markiert = zeile;
    }
  }
  if (kopfLive) kopfLive.setAttribute('data-live', 'kurz');
  liveFelder = document.querySelectorAll('[data-live]');
  zeigen();
  // Zur naechsten vollen Minute, dann jede Minute.
  setTimeout(function () { zeigen(); setInterval(zeigen, 60000); }, (60 - new Date().getSeconds()) * 1000);

  /* ---------------------------------------------------------------------
     DAS NUMMERNFELD. Die Karte ist von 1 bis 1005 durchnummeriert, und
     die Stammgaeste bestellen so. Wer eine Nummer eintippt, bekommt Name
     und Preis genannt; wer eine Nummer eintippt, die es nicht gibt, die
     naechstgelegene.

     Auf der Speisekarte fuehrt das Feld an das Gericht und markiert es.
     Auf der Startseite steht die Karte nicht, dort liest das Feld aus
     js/karte-daten.js und verlinkt das Gericht auf der Speisekarte.

     Das Feld steht im HTML auf hidden und wird hier eingeschaltet: Ohne
     JavaScript soll es gar nicht erst da sein.
     --------------------------------------------------------------------- */
  var feld    = document.getElementById('feldnr');
  var eingabe = document.getElementById('nr-eingabe');
  var nrText  = document.getElementById('nr-status');

  /* Kommt man ueber einen Link wie speisekarte.html#nr-30a, ist das
     Gericht gleich markiert. Hinscrollen erledigt der Anker selbst. */
  var zielGericht = location.hash && /^#nr-/.test(location.hash)
    ? document.getElementById(location.hash.slice(1)) : null;
  if (zielGericht && zielGericht.classList.contains('gericht')) {
    zielGericht.classList.add('getroffen');
  }

  if (feld && eingabe && nrText) {
    /* Ein Verzeichnis, einmal gebaut. Fuehrt die Karte eine Nummer
       zweimal, gilt die erste Stelle, das ist die, die auf der
       gedruckten Karte zuerst kommt. */
    var verzeichnis = Object.create(null);
    var zahlen = [];
    function aufnehmen(nr, name, preis, el) {
      if (nr in verzeichnis) return;
      verzeichnis[nr] = { nr: nr, name: name, preis: preis, el: el };
      zahlen.push({ nr: nr, zahl: parseInt(nr, 10) });
    }
    var gerichte = document.querySelectorAll('.gericht[data-nr]');
    if (gerichte.length) {
      Array.prototype.forEach.call(gerichte, function (g) {
        var n = g.querySelector('.gericht__name');
        aufnehmen(g.getAttribute('data-nr'), n ? n.textContent.trim() : '', g.getAttribute('data-preis') || '', g);
      });
    } else if (window.IRODION_KARTE) {
      window.IRODION_KARTE.forEach(function (z) { aufnehmen(z[0], z[1], z[2], null); });
    }
    zahlen.sort(function (a, b) { return a.zahl - b.zahl; });

    if (zahlen.length) {
      feld.hidden = false;
      var letzterTreffer = null;

      function nennung(e) { return e.name + (e.preis ? ', ' + e.preis + ' Euro' : ''); }

      function hinfuehren(e) {
        if (!e.el) return;
        if (letzterTreffer && letzterTreffer !== e.el) {
          letzterTreffer.classList.remove('getroffen');
        }
        e.el.classList.add('getroffen');
        letzterTreffer = e.el;
        // Dieselbe Regel wie bei den Ankern: nah weich, weit sofort.
        var weit = Math.abs(e.el.getBoundingClientRect().top) > window.innerHeight * 3;
        e.el.scrollIntoView({
          behavior: (reduziert.matches || weit) ? 'auto' : 'smooth',
          block: 'center'
        });
      }

      // Eine Markierung, die stehen bleibt, waehrend die Meldung schon
      // etwas anderes sagt, zeigt auf ein Gericht, das niemand gesucht hat.
      function markeLoeschen() {
        if (letzterTreffer) {
          letzterTreffer.classList.remove('getroffen');
          letzterTreffer = null;
        }
      }

      /* Die Bloecke der Karte, aus den Nummern selbst gelesen: "1 bis 109,
         289 bis 293 und 1001 bis 1005". Eine Luecke ueber 20 trennt. */
      function bereiche() {
        var teile = [], von = null, bis = null;
        for (var i = 0; i < zahlen.length; i++) {
          var z = zahlen[i].zahl;
          if (von === null) { von = bis = z; continue; }
          if (z - bis > 20) { teile.push(von + ' bis ' + bis); von = z; }
          bis = z;
        }
        if (von !== null) teile.push(von + ' bis ' + bis);
        return teile.length > 1
          ? teile.slice(0, -1).join(', ') + ' und ' + teile[teile.length - 1]
          : teile.join('');
      }

      /* Auf der Startseite haengt an einem Treffer der Weg zum Gericht
         auf der Speisekarte. */
      function melden(text, e) {
        nrText.textContent = text;
        if (e && !e.el) {
          var a = document.createElement('a');
          a.className = 'feldnr__zur-karte';
          a.href = 'speisekarte.html#nr-' + e.nr;
          a.textContent = 'In der Karte ansehen';
          nrText.appendChild(document.createTextNode(' '));
          nrText.appendChild(a);
        }
      }

      function suchen(roh) {
        var wert = (roh || '').replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
        if (!wert) {
          markeLoeschen();
          melden('Tippen Sie eine Nummer zwischen 1 und 1005 ein.');
          return;
        }
        if (verzeichnis[wert]) {
          var e0 = verzeichnis[wert];
          hinfuehren(e0);
          melden('Die ' + wert + ' ist ' + nennung(e0) + '.', e0);
          return;
        }

        var zahl = parseInt(wert, 10);
        if (isNaN(zahl)) {
          markeLoeschen();
          melden('Das ist keine Nummer. Auf der Karte stehen Zahlen von 1 bis 1005.');
          return;
        }
        var beste = null, abstand = Infinity;
        for (var i = 0; i < zahlen.length; i++) {
          var d = Math.abs(zahlen[i].zahl - zahl);
          if (d < abstand) { abstand = d; beste = zahlen[i]; }
        }
        if (!beste) return;

        /* Die Nachbarschaft braucht eine Grenze. Bei der 42 ist die 41
           ein hilfreicher Hinweis, bei der 500 waere es eine Nummer weit
           daneben. Die Zahlenreihe hat Luecken, das ist die ehrlichere
           Auskunft. */
        if (abstand > 20) {
          markeLoeschen();
          melden('Die ' + wert + ' gibt es nicht. Auf der Karte stehen die Nummern '
               + bereiche() + '.');
          return;
        }

        var e = verzeichnis[beste.nr];
        hinfuehren(e);
        melden('Die ' + wert + ' gibt es nicht. Am nächsten dran ist die '
             + beste.nr + ', ' + nennung(e) + '.', e);
      }

      // Am Telefon schliesst die Tastatur, damit die Antwort zu sehen ist.
      var grob = window.matchMedia('(pointer: coarse)');
      feld.addEventListener('submit', function (ev) {
        ev.preventDefault();
        if (grob.matches) eingabe.blur();
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
