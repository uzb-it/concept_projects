/* =========================================================
   CONCEPT PROJECTS — shared core (every page)
   i18n · smooth scroll · header · cursor · page transitions
   ========================================================= */
window.CP = (() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const isTouch = matchMedia('(hover: none), (pointer: coarse)').matches;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch {} }
  };
  const session = {
    get(k) { try { return sessionStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { sessionStorage.setItem(k, v); } catch {} },
    del(k) { try { sessionStorage.removeItem(k); } catch {} }
  };
  const hasGsap = !!window.gsap;
  const CP = { $, $$, isTouch, reduced, store, session, lenis: null, hasGsap };

  /* ---------------- i18n ---------------- */
  const I18N = window.CP_I18N;
  $$('[data-i18n]').forEach(el => { if (!(el.dataset.i18n in I18N.ru)) I18N.ru[el.dataset.i18n] = el.innerHTML; });
  const langHooks = [];
  CP.lang = store.get('cp-lang') || 'ru';
  const FB = window.CP_FALLBACK || {};
  const chain = l => { const out = []; for (let x = l; x && !out.includes(x); x = FB[x]) out.push(x); if (!out.includes('ru')) out.push('ru'); return out; };
  CP.t = k => { for (const l of chain(CP.lang)) if (I18N[l] && I18N[l][k]) return I18N[l][k]; return k; };
  // pick a value from a { ru, uz, en, ... } object for the current language
  CP.pick = o => { for (const l of chain(CP.lang)) if (o[l]) return o[l]; return ''; };
  CP.onLang = fn => langHooks.push(fn);
  CP.setLang = (l, animate) => {
    CP.lang = l; store.set('cp-lang', l);
    document.documentElement.lang = l;
    $$('[data-lang]').forEach(b => b.classList.toggle('is-active', b.dataset.lang === l));
    $$('[data-i18n]').forEach(el => { el.innerHTML = CP.t(el.dataset.i18n); });
    langHooks.forEach(fn => fn(l, animate));
    if (animate && hasGsap) ScrollTrigger.refresh();
  };

  /* ---------------- clock ---------------- */
  const clock = $('#clock');
  if (clock) {
    const tick = () => {
      clock.textContent = new Intl.DateTimeFormat('ru-RU', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Tashkent' }).format(new Date());
    };
    tick(); setInterval(tick, 15000);
  }

  /* ---------------- language buttons + mobile menu ---------------- */
  const langBox = $('#lang');
  if (langBox && $('.menu__foot')) $('.menu__foot').prepend(langBox.cloneNode(true));
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-lang]');
    if (b && b.dataset.lang !== CP.lang) CP.setLang(b.dataset.lang, true);
  });
  const burger = $('#burger');
  burger && burger.addEventListener('click', () => document.body.classList.toggle('menu-open'));
  $$('.menu a').forEach(a => a.addEventListener('click', () => document.body.classList.remove('menu-open')));

  /* ---------------- page transitions ---------------- */
  const pt = document.createElement('div');
  pt.className = 'pt';
  pt.innerHTML = '<div class="pt__panel"></div><div class="pt__inner"><svg class="pt__mark"><use href="#mark"/></svg><span class="pt__label"></span></div>';
  document.body.appendChild(pt);
  CP.fromTransition = session.get('cp-pt') === '1';
  session.del('cp-pt');
  if (CP.fromTransition) pt.classList.add('is-cover');
  document.documentElement.classList.remove('is-pt');

  CP.go = (url, label) => {
    if (!hasGsap || reduced) { location.href = url; return; }
    session.set('cp-pt', '1');
    CP.lenis && CP.lenis.stop();
    $('.pt__label', pt).textContent = label || '';
    const x = (CP.pointer ? CP.pointer.x : innerWidth / 2) / innerWidth * 100;
    const y = (CP.pointer ? CP.pointer.y : innerHeight / 2) / innerHeight * 100;
    pt.classList.add('is-active');
    gsap.timeline({ onComplete: () => { location.href = url; } })
      .fromTo('.pt__panel', { clipPath: `circle(0% at ${x}% ${y}%)` }, { clipPath: `circle(150% at ${x}% ${y}%)`, duration: 1, ease: 'expo.inOut' })
      .fromTo('.pt__inner', { autoAlpha: 0, scale: .8 }, { autoAlpha: 1, scale: 1, duration: .6, ease: 'expo.out' }, .5)
      .fromTo('.pt__mark', { rotate: -120 }, { rotate: 0, duration: 1, ease: 'expo.out' }, .5);
  };
  // Reveal after arriving through a transition; resolves when the page is visible.
  CP.enter = () => new Promise(res => {
    if (!CP.fromTransition || !hasGsap) { pt.classList.remove('is-cover'); return res(); }
    gsap.timeline({ onComplete: () => { pt.classList.remove('is-cover', 'is-active'); res(); } })
      .set('.pt__inner', { autoAlpha: 1 })
      .to('.pt__mark', { rotate: 120, duration: .9, ease: 'expo.inOut' })
      .to('.pt__inner', { autoAlpha: 0, duration: .3 }, .5)
      .fromTo('.pt__panel', { clipPath: 'inset(0% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 100% 0%)', duration: 1.1, ease: 'expo.inOut' }, .6);
  });
  addEventListener('pageshow', e => { if (e.persisted) { pt.classList.remove('is-cover', 'is-active'); CP.lenis && CP.lenis.start(); } });

  // intercept internal page links
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href]');
    if (!a || a.target === '_blank' || e.metaKey || e.ctrlKey || e.shiftKey) return;
    const href = a.getAttribute('href');
    if (!/\.html(\?|#|$)/.test(href)) return;
    e.preventDefault();
    CP.go(href, a.dataset.label);
  });

  /* ---------------- CAD dimension lines around [data-dim] ---------------- */
  const NS = 'http://www.w3.org/2000/svg';
  const mm = px => (Math.round(px * 7.5 / 10) * 10).toLocaleString('ru-RU');
  CP.dims = (root = document) => {
    $$('[data-dim]', root).forEach(el => {
      if (el._dim) return; el._dim = true;
      const svg = cls => { const s = document.createElementNS(NS, 'svg'); s.setAttribute('class', 'dim ' + cls); el.appendChild(s); return s; };
      const hz = svg('dim--h'), vt = svg('dim--v');
      const seg = (x1, y1, x2, y2) => `<line class="seg" style="--l:${Math.hypot(x2 - x1, y2 - y1)}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`;
      const draw = () => {
        const w = el.offsetWidth, h = el.offsetHeight, g = 38;
        hz.setAttribute('viewBox', `0 0 ${w} 30`);
        hz.innerHTML = seg(0, 0, 0, 24) + seg(w, 0, w, 24) + seg(0, 16, w / 2 - g, 16) + seg(w, 16, w / 2 + g, 16)
          + seg(-5, 21, 5, 11) + seg(w - 5, 21, w + 5, 11)
          + `<text x="${w / 2}" y="20" text-anchor="middle">${mm(w)}</text>`;
        vt.setAttribute('viewBox', `0 0 30 ${h}`);
        vt.innerHTML = seg(0, 0, 24, 0) + seg(0, h, 24, h) + seg(16, 0, 16, h / 2 - g) + seg(16, h, 16, h / 2 + g)
          + seg(11, -5, 21, 5) + seg(11, h - 5, 21, h + 5)
          + `<text x="${h / 2}" y="-12" text-anchor="middle" transform="rotate(90)">${mm(h)}</text>`;
      };
      draw();
      new ResizeObserver(draw).observe(el);
      new IntersectionObserver(([e], io) => {
        if (!e.isIntersecting) return;
        el.classList.add('dim-in'); io.disconnect();
      }, { threshold: .4 }).observe(el);
    });
  };
  CP.dims();

  if (!hasGsap) return CP;

  /* ================= GSAP-powered ================= */
  gsap.registerPlugin(ScrollTrigger);

  if (window.Lenis && !reduced) {
    CP.lenis = new Lenis({ duration: 1.25, easing: x => Math.min(1, 1.001 - Math.pow(2, -10 * x)) });
    CP.lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(time => CP.lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
    // pinned sections change the page height after Lenis measured it
    ScrollTrigger.addEventListener('refresh', () => CP.lenis.resize());
  }

  // in-page anchors through Lenis
  $$('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
    const id = a.getAttribute('href'); const target = id === '#top' ? 0 : $(id);
    if (target === null) return;
    e.preventDefault();
    CP.lenis ? CP.lenis.scrollTo(target, { duration: 1.6 }) : (target === 0 ? scrollTo(0, 0) : target.scrollIntoView({ behavior: 'smooth' }));
  }));

  /* ---------------- header behaviour + progress ---------------- */
  const header = $('#header'); let lastY = 0;
  ScrollTrigger.create({
    start: 0, end: 'max',
    onUpdate: self => {
      const y = self.scroll();
      header.classList.toggle('is-scrolled', y > 40);
      header.classList.toggle('is-hidden', y > 400 && y > lastY && !document.body.classList.contains('menu-open'));
      lastY = y;
      gsap.set('#progress', { scaleX: self.progress });
    }
  });

  /* ---------------- cursor + magnetic ---------------- */
  addEventListener('pointermove', e => { CP.pointer = { x: e.clientX, y: e.clientY }; document.body.classList.add('has-pointer'); }, { passive: true });
  CP.initMagnetic = (root = document) => {
    if (isTouch) return;
    $$('[data-magnetic]', root).forEach(el => {
      if (el._mag) return; el._mag = true;
      const xTo = gsap.quickTo(el, 'x', { duration: .8, ease: 'elastic.out(1,.4)' });
      const yTo = gsap.quickTo(el, 'y', { duration: .8, ease: 'elastic.out(1,.4)' });
      el.addEventListener('pointermove', e => {
        const r = el.getBoundingClientRect();
        xTo((e.clientX - r.left - r.width / 2) * .3); yTo((e.clientY - r.top - r.height / 2) * .3);
      });
      el.addEventListener('pointerleave', () => { xTo(0); yTo(0); });
    });
  };
  if (!isTouch) {
    const cur = $('#cursor'), dot = $('#cursorDot'), label = $('#cursorLabel');
    const cx = gsap.quickTo(cur, 'x', { duration: .55, ease: 'power3' }), cy = gsap.quickTo(cur, 'y', { duration: .55, ease: 'power3' });
    const dx = gsap.quickTo(dot, 'x', { duration: .1 }), dy = gsap.quickTo(dot, 'y', { duration: .1 });
    addEventListener('pointermove', e => { cx(e.clientX); cy(e.clientY); dx(e.clientX); dy(e.clientY); });
    document.addEventListener('pointerover', e => {
      const view = e.target.closest('[data-cursor]');
      const hov = e.target.closest('a, button, label, input, #globe');
      if (view) label.textContent = CP.t(view.dataset.cursor);
      cur.classList.toggle('is-view', !!view);
      cur.classList.toggle('is-hover', !view && !!hov);
    });
    CP.initMagnetic();
  }

  /* ---------------- shared reveals ---------------- */
  CP.reveal = (els, opts = {}) => els.forEach(el => gsap.from(el, Object.assign(
    { autoAlpha: 0, y: 40, duration: 1.3, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 90%' } }, opts)));

  addEventListener('load', () => ScrollTrigger.refresh());
  return CP;
})();
