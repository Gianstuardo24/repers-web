/* ============================================================
   Repers — sitio oficial · i18n + animaciones + feedback
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Config ---------- */
  var SUPABASE_URL = 'https://ckpbwxryhlzaabynupnt.supabase.co';
  var SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNrcGJ3eHJ5aGx6YWFieW51cG50Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUwMDY0ODQsImV4cCI6MjEwMDU4MjQ4NH0.BrLpzXqa5jZUuP7mEl1878mdqx8ohKkanc2lXHnnBLI';

  /* ---------- Diccionario ES/EN ---------- */
  var DICT = {
    /* nav */
    'nav.que': { es: 'Qué es', en: 'What is it' },
    'nav.como': { es: 'Cómo se juega', en: 'How to play' },
    'nav.feedback': { es: 'Feedback', en: 'Feedback' },
    'nav.beta': { es: 'Probar la beta', en: 'Try the beta' },
    /* hero */
    'hero.l1': { es: 'Muévete.', en: 'Move.' },
    'hero.l2': { es: 'Compite.', en: 'Compete.' },
    'hero.l3': { es: 'Diviértete.', en: 'Have fun.' },
    'hero.sub': {
      es: 'Repers convierte el ejercicio en un juego: compite con tus amigos —amistoso o a muerte, tú decides— y diviértete tanto que ni te das cuenta de que estás entrenando.',
      en: 'Repers turns exercise into a game: compete with your friends — fierce or friendly, your call — and have so much fun you forget you’re working out.'
    },
    'hero.cta1': { es: 'Únete a la beta', en: 'Join the beta' },
    'hero.cta2': { es: 'Dejar feedback', en: 'Leave feedback' },
    /* ticker */
    'tick.1': { es: 'Jumping jacks', en: 'Jumping jacks' },
    'tick.2': { es: 'Sentadillas', en: 'Squats' },
    'tick.3': { es: 'Flexiones', en: 'Push-ups' },
    'tick.4': { es: 'Elevación de rodillas', en: 'High knees' },
    'tick.5': { es: '+40 tokens ganados', en: '+40 tokens earned' },
    'tick.6': { es: 'Partida terminada', en: 'Game over' },
    /* features */
    'feat.kicker': { es: 'Qué es Repers', en: 'What is Repers' },
    'feat.title': { es: 'Un party game que te hace sudar', en: 'A party game that makes you sweat' },
    'feat.sub': {
      es: 'Nada de rutinas aburridas: aquí se juega, se ríe, y cuando te das cuenta… ya entrenaste.',
      en: 'No boring routines: you play, you laugh, and before you know it… you’ve worked out.'
    },
    'feat.1.t': { es: 'Retos con amigos', en: 'Battles with friends' },
    'feat.1.p': {
      es: 'Rondas de jumping jacks, sentadillas, flexiones y más. La suma total de repeticiones gana la partida.',
      en: 'Rounds of jumping jacks, squats, push-ups and more. Most total reps wins the game.'
    },
    'feat.2.t': { es: 'Tu avatar 3D', en: 'Your 3D avatar' },
    'feat.2.p': {
      es: 'Un personaje con tu estilo: ropa, zapatillas y accesorios que se ganan jugando.',
      en: 'A character with your style: clothes, sneakers and accessories you earn by playing.'
    },
    'feat.3.t': { es: 'Tokens y Market', en: 'Tokens & Market' },
    'feat.3.p': {
      es: 'Cada partida suma tokens. Gástalos en el Reper Market para estrenar looks.',
      en: 'Every game earns tokens. Spend them in the Reper Market on fresh looks.'
    },
    'feat.4.t': { es: 'Logros y niveles', en: 'Achievements & levels' },
    'feat.4.p': {
      es: 'XP, logros y desafíos que te empujan a moverte un poquito más cada día.',
      en: 'XP, achievements and challenges that push you to move a little more every day.'
    },
    /* pasos */
    'how.kicker': { es: 'Cómo se juega', en: 'How to play' },
    'how.title': { es: 'Tres pasos y a transpirar', en: 'Three steps and you’re sweating' },
    'how.1.t': { es: 'Arma la partida', en: 'Set up a game' },
    'how.1.p': {
      es: 'Invita a tus amigos y elige los movimientos de cada ronda.',
      en: 'Invite your friends and pick the moves for each round.'
    },
    'how.2.t': { es: 'Muévete de verdad', en: 'Actually move' },
    'how.2.p': {
      es: 'El teléfono cuenta tus repeticiones mientras compites en vivo.',
      en: 'Your phone counts your reps while you compete live.'
    },
    'how.3.t': { es: 'Gana y equípate', en: 'Win and gear up' },
    'how.3.p': {
      es: 'Suma tokens, desbloquea logros y lleva tu avatar al próximo nivel.',
      en: 'Earn tokens, unlock achievements and take your avatar to the next level.'
    },
    /* banda */
    'band.title': { es: 'Tu look, tus reglas', en: 'Your look, your rules' },
    'band.p': {
      es: 'Remeras, pantalones, zapatillas con estampados propios y accesorios. Cada partida suma tokens para ir desbloqueando piezas nuevas y armar tu look.',
      en: 'Tees, pants, sneakers with custom prints and accessories. Every game earns tokens to unlock new pieces and build your look.'
    },
    'band.c1': { es: '👟 Zapatillas con logos', en: '👟 Sneakers with logos' },
    'band.c2': { es: '🎨 Colores para todo', en: '🎨 Colors for everything' },
    'band.c3': { es: '🏆 Skins por logros', en: '🏆 Skins from achievements' },
    /* feedback */
    'fb.kicker': { es: 'Feedback', en: 'Feedback' },
    'fb.title': { es: 'Cuéntanos qué te parece', en: 'Tell us what you think' },
    'fb.sub': {
      es: 'Los Repers son amistosos: ideas, bugs, elogios — todo suma. Esta app se construye con la comunidad.',
      en: 'Repers are a friendly bunch: ideas, bugs, praise — it all counts. This app is built with its community.'
    },
    'fb.tipo': { es: '¿Qué nos quieres contar?', en: 'What do you want to tell us?' },
    'fb.t.idea': { es: '💡 Una idea', en: '💡 An idea' },
    'fb.t.bug': { es: '🐛 Un bug', en: '🐛 A bug' },
    'fb.t.elogio': { es: '❤️ Un elogio', en: '❤️ Some love' },
    'fb.t.otro': { es: '💬 Otra cosa', en: '💬 Something else' },
    'fb.msg': { es: 'Tu mensaje', en: 'Your message' },
    'fb.msg.ph': { es: 'Escribe con confianza…', en: 'Write away…' },
    'fb.contacto': { es: 'Tu mail (opcional, por si queremos responderte)', en: 'Your email (optional, in case we want to reply)' },
    'fb.enviar': { es: 'Enviar feedback', en: 'Send feedback' },
    'fb.enviando': { es: 'Enviando…', en: 'Sending…' },
    'fb.ok': { es: '¡Gracias! Tu feedback ya está con el equipo. 🎉', en: 'Thanks! Your feedback is with the team. 🎉' },
    'fb.err': {
      es: 'Ups, no se pudo enviar. Prueba de nuevo en un rato.',
      en: 'Oops, it didn’t go through. Try again in a bit.'
    },
    'fb.corto': { es: 'Cuéntanos un poquito más 🙂', en: 'Tell us a bit more 🙂' },
    'fb.nota': { es: 'Solo guardamos lo que escribes aquí. Nada más.', en: 'We only store what you write here. Nothing else.' },
    /* footer */
    'foot.beta': { es: 'Beta en TestFlight', en: 'TestFlight beta' },
    'foot.fb': { es: 'Feedback', en: 'Feedback' },
    'foot.top': { es: 'Volver arriba', en: 'Back to top' },
    'foot.note': {
      es: '© 2026 Repers. Hecho con muchas sentadillas.',
      en: '© 2026 Repers. Made with lots of squats.'
    },
    /* beta page */
    'beta.badge': { es: 'Beta cerrada · TestFlight', en: 'Closed beta · TestFlight' },
    'beta.title1': { es: 'Sé de los', en: 'Be one of the' },
    'beta.title2': { es: 'primeros.', en: 'first.' },
    'beta.sub': {
      es: 'Repers está en beta por TestFlight, la plataforma oficial de pruebas de Apple. Prueba la app antes que nadie y ayúdanos a pulirla.',
      en: 'Repers is in beta on TestFlight, Apple’s official testing platform. Try the app before anyone else and help us polish it.'
    },
    'beta.cta': { es: 'Abrir en TestFlight', en: 'Open in TestFlight' },
    'beta.note': {
      es: 'La beta es solo para iPhone por ahora. Esta página es temporal: cuando Repers llegue al App Store, el botón te va a llevar directo ahí.',
      en: 'The beta is iPhone-only for now. This page is temporary: once Repers hits the App Store, this button will take you straight there.'
    },
    'beta.how.kicker': { es: 'Cómo entrar', en: 'How to join' },
    'beta.how.title': { es: 'En tres toques ya estás jugando', en: 'Three taps and you’re in' },
    'beta.1.t': { es: 'Instala TestFlight', en: 'Install TestFlight' },
    'beta.1.p': {
      es: 'Descarga la app gratuita TestFlight desde el App Store (es de Apple).',
      en: 'Get the free TestFlight app from the App Store (it’s Apple’s).'
    },
    'beta.2.t': { es: 'Toca el botón de arriba', en: 'Tap the button above' },
    'beta.2.p': {
      es: 'El enlace de invitación abre TestFlight con Repers listo para instalar.',
      en: 'The invite link opens TestFlight with Repers ready to install.'
    },
    'beta.3.t': { es: 'Juega y cuéntanos', en: 'Play and tell us' },
    'beta.3.p': {
      es: '¿Algo raro? ¿Algo genial? Déjanos tu feedback en la página principal.',
      en: 'Something odd? Something great? Leave feedback on the main page.'
    },
    'beta.back': { es: '← Volver a la página principal', en: '← Back to the main page' },
    'beta.fb': { es: 'Dejar feedback', en: 'Leave feedback' }
  };

  /* ---------- Idioma ---------- */
  function detectLang() {
    var q = new URLSearchParams(location.search).get('lang');
    if (q === 'en' || q === 'es') return q;
    var nav = (navigator.language || 'es').toLowerCase();
    return nav.indexOf('es') === 0 ? 'es' : 'en';
  }

  var lang = detectLang();

  function applyLang(next) {
    lang = next;
    document.documentElement.lang = next;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var entry = DICT[el.getAttribute('data-i18n')];
      if (entry) el.textContent = entry[next];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var entry = DICT[el.getAttribute('data-i18n-ph')];
      if (entry) el.setAttribute('placeholder', entry[next]);
    });
    document.querySelectorAll('.lang-toggle button').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-lang') === next);
    });
    /* que los links internos entre páginas conserven el idioma */
    document.querySelectorAll('a[data-keep-lang]').forEach(function (a) {
      var href = a.getAttribute('href').split('?')[0].split('#');
      a.setAttribute('href', href[0] + '?lang=' + next + (href[1] ? '#' + href[1] : ''));
    });
  }

  document.querySelectorAll('.lang-toggle button').forEach(function (b) {
    b.addEventListener('click', function () { applyLang(b.getAttribute('data-lang')); });
  });

  /* ---------- Reveal on scroll ---------- */
  var io = ('IntersectionObserver' in window)
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
        });
      }, { threshold: 0.12 })
    : null;
  document.querySelectorAll('.reveal').forEach(function (el) {
    if (io) io.observe(el); else el.classList.add('in');
  });

  /* ---------- Partículas flotantes ---------- */
  var COLORS = ['#E8483C', '#3C6FE8', '#F2B33D', '#3DAA6E', '#0071E3'];
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var host = document.querySelector('.particles');
  if (host && !reduced) {
    for (var i = 0; i < 16; i++) {
      var p = document.createElement('span');
      p.className = 'particle';
      var size = 6 + Math.random() * 8;
      p.style.width = size + 'px';
      p.style.height = size + 'px';
      p.style.left = Math.random() * 100 + '%';
      p.style.background = COLORS[i % COLORS.length];
      p.style.animationDuration = 14 + Math.random() * 18 + 's';
      p.style.animationDelay = -Math.random() * 30 + 's';
      host.appendChild(p);
    }
  }

  /* ---------- Confetti al enviar feedback ---------- */
  function confetti() {
    if (reduced) return;
    for (var i = 0; i < 60; i++) {
      (function () {
        var c = document.createElement('span');
        c.className = 'confetti-piece';
        c.style.background = COLORS[Math.floor(Math.random() * COLORS.length)];
        c.style.left = 50 + (Math.random() - 0.5) * 30 + 'vw';
        c.style.top = '55vh';
        document.body.appendChild(c);
        var dx = (Math.random() - 0.5) * 480;
        var dy = -(180 + Math.random() * 420);
        var rot = (Math.random() - 0.5) * 900;
        c.animate([
          { transform: 'translate(0,0) rotate(0deg)', opacity: 1 },
          { transform: 'translate(' + dx + 'px,' + dy + 'px) rotate(' + rot + 'deg)', opacity: 1, offset: 0.6 },
          { transform: 'translate(' + dx * 1.3 + 'px,' + (dy + 500) + 'px) rotate(' + rot * 1.4 + 'deg)', opacity: 0 }
        ], { duration: 1600 + Math.random() * 900, easing: 'cubic-bezier(0.16,1,0.3,1)' }).onfinish = function () { c.remove(); };
      })();
    }
  }

  /* ---------- Formulario de feedback ---------- */
  var form = document.getElementById('feedback-form');
  if (form) {
    var tipo = 'idea';
    form.querySelectorAll('.chip-btn').forEach(function (b) {
      b.addEventListener('click', function () {
        form.querySelectorAll('.chip-btn').forEach(function (x) { x.classList.remove('active'); });
        b.classList.add('active');
        tipo = b.getAttribute('data-tipo');
      });
    });

    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var msgEl = document.getElementById('fb-mensaje');
      var contactoEl = document.getElementById('fb-contacto');
      var out = document.getElementById('fb-out');
      var btn = document.getElementById('fb-submit');
      var hp = document.getElementById('fb-web');
      out.className = 'form-msg';

      var mensaje = (msgEl.value || '').trim();
      if (mensaje.length < 3) {
        out.textContent = DICT['fb.corto'][lang];
        out.className = 'form-msg err';
        return;
      }
      if (hp && hp.value) return; /* honeypot: bots fuera */

      btn.disabled = true;
      btn.textContent = DICT['fb.enviando'][lang];

      fetch(SUPABASE_URL + '/rest/v1/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': 'Bearer ' + SUPABASE_ANON_KEY,
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify({
          tipo: tipo,
          mensaje: mensaje.slice(0, 2000),
          contacto: (contactoEl.value || '').trim().slice(0, 200) || null,
          idioma: lang,
          pagina: location.pathname.split('/').pop() || 'index.html'
        })
      }).then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        out.textContent = DICT['fb.ok'][lang];
        out.className = 'form-msg ok';
        form.reset();
        confetti();
      }).catch(function () {
        out.textContent = DICT['fb.err'][lang];
        out.className = 'form-msg err';
      }).finally(function () {
        btn.disabled = false;
        btn.textContent = DICT['fb.enviar'][lang];
      });
    });
  }

  /* ---------- Init ---------- */
  applyLang(lang);
})();
