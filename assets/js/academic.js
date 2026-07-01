// Interactivity for the custom academic pages: email assembly, the confidence
// gate widget, cursor-aware robot eyes, and on-scroll reveal.
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Assemble mailto links from split attributes so scrapers do not see the address.
  document.querySelectorAll('[data-mail-user]').forEach(function (a) {
    var addr = a.getAttribute('data-mail-user') + '@' + a.getAttribute('data-mail-domain');
    a.setAttribute('href', 'mailto:' + addr);
    if (a.hasAttribute('data-mail-text')) {
      a.textContent = addr;
    }
  });

  // Confidence gate: slider drives an ACT / HOLD verdict, and the robot looks around.
  var gate = document.querySelector('[data-confidence-gate]');
  if (gate) {
    var slider = gate.querySelector('.gate-slider');
    var fill = gate.querySelector('.gate-fill');
    var conf = gate.querySelector('.gate-conf');
    var verdict = gate.querySelector('.gate-verdict');
    var vlabel = verdict.querySelector('strong');
    var vsub = verdict.querySelector('span');
    var thr = parseInt(gate.getAttribute('data-threshold'), 10);

    var update = function () {
      var v = parseInt(slider.value, 10);
      fill.style.width = v + '%';
      conf.textContent = v + '%';
      var act = v >= thr;
      gate.classList.toggle('is-act', act);
      gate.classList.toggle('is-hold', !act);
      vlabel.textContent = act ? 'ACT' : 'HOLD';
      vsub.textContent = act ? 'assist the person now' : 'wait for a human or fallback';
    };
    slider.addEventListener('input', update);
    update();

    var bot = gate.querySelector('.gate-bot');
    var eyes = gate.querySelectorAll('.gate-eye');
    if (bot && eyes.length && !reduce) {
      gate.addEventListener('pointermove', function (e) {
        var r = bot.getBoundingClientRect();
        var dx = Math.max(-1, Math.min(1, (e.clientX - (r.left + r.width / 2)) / 140));
        var dy = Math.max(-1, Math.min(1, (e.clientY - (r.top + r.height / 2)) / 140));
        for (var i = 0; i < eyes.length; i++) {
          eyes[i].style.transform = 'translate(' + (dx * 3).toFixed(1) + 'px, ' + (dy * 2.5).toFixed(1) + 'px)';
        }
      });
      gate.addEventListener('pointerleave', function () {
        for (var i = 0; i < eyes.length; i++) {
          eyes[i].style.transform = '';
        }
      });
    }
  }

  // On-scroll reveal. The reveal-on class is set inline in the head-of-page
  // snippet, so content is never hidden when JavaScript is off.
  if (document.documentElement.classList.contains('reveal-on')) {
    var targets = document.querySelectorAll(
      '.reveal-on .academic-section, .reveal-on .research-flow, .reveal-on .signal-band, .reveal-on .academic-facts, .reveal-on .cv-summary'
    );
    if (!('IntersectionObserver' in window)) {
      for (var j = 0; j < targets.length; j++) {
        targets[j].classList.add('is-revealed');
      }
    } else {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              io.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
      );
      targets.forEach(function (t) {
        io.observe(t);
      });
    }
  }
})();
