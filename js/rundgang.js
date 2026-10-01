/* ==========================================================================
   DER RUNDGANG. Elf Plaetze im Haus.

   Grundfassung, die immer funktioniert: ein waagerechtes Band zum Wischen,
   das per scroll-snap an jedem Foto einrastet (reines CSS, nativ, ohne
   selbstgebautes Ziehen). Dazu zaehlt hier ein Zaehler "3 / 8" mit.

   Am Desktop mit Bewegung wird der Rundgang gepinnt: Beim senkrechten
   Scrollen wandert das Band waagerecht vorbei, eine duenne Linie zeigt,
   wie weit man ist. Bewegt wird nur transform.
   ========================================================================== */

(function () {
  'use strict';

  var sektion = document.querySelector('.rundgang');
  if (!sektion) return;
  var bahn     = sektion.querySelector('.rundgang__bahn');
  var liste    = sektion.querySelector('.rundgang__liste');
  var balken   = sektion.querySelector('.rundgang__fortschritt span');
  var nr       = document.getElementById('rundgang-nr');
  var stationen = sektion.querySelectorAll('.station');
  var html = document.documentElement;

  /* Der Zaehler beim Wischen: welches Foto steht gerade an der Achse? */
  var offen = false;
  function zaehlen() {
    offen = false;
    var links = bahn.getBoundingClientRect().left
              + parseFloat(getComputedStyle(liste).paddingLeft);
    var beste = 0, abstand = Infinity;
    for (var i = 0; i < stationen.length; i++) {
      var d = Math.abs(stationen[i].getBoundingClientRect().left - links);
      if (d < abstand) { abstand = d; beste = i; }
    }
    if (nr && nr.textContent !== String(beste + 1)) nr.textContent = beste + 1;
  }
  bahn.addEventListener('scroll', function () {
    if (offen) return;
    offen = true;
    requestAnimationFrame(zaehlen);
  }, { passive: true });

  /* Am Desktop mit Bewegung: pinnen und dem Scroll folgen. */
  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  var mm = gsap.matchMedia();
  mm.add('(min-width: 900px) and (prefers-reduced-motion: no-preference)', function () {
    html.classList.add('js-rundgang');
    bahn.setAttribute('tabindex', '-1');

    function weg() { return Math.max(0, liste.scrollWidth - window.innerWidth); }

    var zeit = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: sektion,
        start: 'top top',
        end: function () { return '+=' + weg(); },
        pin: true,
        scrub: 0.6,
        anticipatePin: 1,
        invalidateOnRefresh: true
      }
    });
    zeit.fromTo(liste, { x: 0 }, { x: function () { return -weg(); } }, 0);
    if (balken) zeit.fromTo(balken, { scaleX: 0 }, { scaleX: 1 }, 0);

    ScrollTrigger.refresh();

    return function () {
      html.classList.remove('js-rundgang');
      bahn.setAttribute('tabindex', '0');
    };
  });
})();
