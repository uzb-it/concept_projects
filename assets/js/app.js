/* =========================================================
   CONCEPT PROJECTS — home page
   ========================================================= */
(() => {
  const { $, $$, session } = CP;
  const PROJECTS = window.CP_PROJECTS;

  /* ---------------- split helpers ---------------- */
  function splitHero() {
    $$('.hero__title .split').forEach(el => {
      el.innerHTML = [...el.textContent].map(c => c === ' ' ? ' ' : `<span class="char">${c}</span>`).join('');
    });
  }
  let manifestWords = [];
  function splitManifest() {
    const el = $('#manifestText');
    el.innerHTML = el.textContent.split(/\s+/).map(w => `<span class="w">${w}</span>`).join(' ');
    manifestWords = $$('.w', el);
  }

  /* ---------------- works ---------------- */
  const track = $('#worksTrack');
  track.innerHTML = PROJECTS.map((p, i) => `
    <a class="work" href="project.html?p=${p.slug}" data-label="${p.name}" data-cursor="open" data-index="${i}">
      <span class="work__num">${String(i + 1).padStart(2, '0')}</span>
      <div class="work__img" data-gl><img src="assets/img/${p.img}.jpg" alt="${p.name}" loading="lazy"></div>
      <div class="work__cap"><b>${p.name}</b><span class="work__cat"></span></div>
    </a>`).join('');
  function renderWorksCaptions() {
    $$('.work').forEach((w, i) => { $('.work__cat', w).textContent = CP.pick(PROJECTS[i].cat) + ' · ' + PROJECTS[i].year; });
  }

  CP.onLang((l, animate) => {
    renderWorksCaptions();
    splitHero(); splitManifest();
    if (animate && CP.hasGsap) gsap.fromTo('.hero__title .char', { yPercent: 110 }, { yPercent: 0, duration: 1, stagger: .015, ease: 'expo.out' });
  });
  CP.setLang(CP.lang, false);

  /* ---------------- form ---------------- */
  const form = $('#form'), steps = $$('.form__step', form), dots = $$('.form__dots i', form);
  const next = $('#formNext'), back = $('#formBack');
  let step = 0;
  const area = $('#area'), areaOut = $('#areaOut');
  area.addEventListener('input', () => { areaOut.textContent = area.value; });
  function go(s) {
    step = s;
    steps.forEach((el, i) => el.classList.toggle('is-active', i === s));
    dots.forEach((d, i) => d.classList.toggle('is-active', i <= s));
    back.style.visibility = s > 0 && s < 3 ? 'visible' : 'hidden';
    $('span', next).dataset.i18n = s === 2 ? 'f.send' : 'f.next';
    $('span', next).innerHTML = CP.t($('span', next).dataset.i18n);
    $('.form__nav', form).style.display = s === 3 ? 'none' : '';
  }
  next.addEventListener('click', () => {
    if (step < 2) return go(step + 1);
    const fields = [$('#fName'), $('#fPhone')];
    let ok = true;
    fields.forEach(f => {
      const bad = f.id === 'fPhone' ? f.value.replace(/\D/g, '').length < 9 : !f.value.trim();
      f.parentElement.classList.toggle('is-error', bad); if (bad) ok = false;
    });
    if (!ok) return;
    const d = Object.fromEntries(new FormData(form));
    const text = `Concept Projects — заявка\nОбъект: ${d.type}\nПлощадь: ${d.area} м²\nФормат: ${d.scope}\nИмя: ${d.name}\nТелефон: ${d.phone}`;
    // Без сервера: копируем заявку в буфер. Подключите бота/CRM через событие cp:lead.
    navigator.clipboard && navigator.clipboard.writeText(text).catch(() => {});
    window.dispatchEvent(new CustomEvent('cp:lead', { detail: d }));
    go(3);
  });
  back.addEventListener('click', () => go(Math.max(0, step - 1)));

  /* ---------------- globe (2D canvas, dotted land) ---------------- */
  const CITIES = [
    [41.30, 69.24], [30.27, 120.15], [23.13, 113.26], [41.01, 28.98], [25.20, 55.27], [24.71, 46.68], [43.24, 76.89]
  ];
  const globe = $('#globe'), gx = globe.getContext('2d');
  let dots3 = [], activeCity = -1, gRot = { lon: 72, lat: 28 }, gDrag = null, gVisible = false;
  const rad = d => d * Math.PI / 180;
  const toXYZ = (lat, lon) => [Math.cos(rad(lat)) * Math.sin(rad(lon)), Math.sin(rad(lat)), Math.cos(rad(lat)) * Math.cos(rad(lon))];

  function buildDots(mask) {
    const N = 16000, out = [];
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2, r = Math.sqrt(1 - y * y), th = Math.PI * (3 - Math.sqrt(5)) * i;
      const p = [Math.cos(th) * r, y, Math.sin(th) * r];
      const lat = Math.asin(p[1]) * 180 / Math.PI, lon = Math.atan2(p[0], p[2]) * 180 / Math.PI;
      if (mask) {
        const mx = Math.floor((lon + 180) / 360 * mask.w), my = Math.floor((90 - lat) / 180 * mask.h);
        if (!mask.data[(my * mask.w + mx) * 4 + 3]) continue;
      } else if (i % 3) continue;
      out.push(p);
    }
    dots3 = out;
  }
  function loadLand() {
    buildDots(null);
    const s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/topojson-client@3.1.0/dist/topojson-client.min.js';
    s.onload = () => fetch('https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/land-110m.json').then(r => r.json()).then(topo => {
      const land = topojson.feature(topo, topo.objects.land);
      const w = 720, h = 360, c = document.createElement('canvas'); c.width = w; c.height = h;
      const x = c.getContext('2d'); x.fillStyle = '#000';
      land.features.forEach(f => {
        const polys = f.geometry.type === 'Polygon' ? [f.geometry.coordinates] : f.geometry.coordinates;
        polys.forEach(poly => {
          x.beginPath();
          poly.forEach(ring => ring.forEach(([lo, la], k) => {
            const px = (lo + 180) / 360 * w, py = (90 - la) / 180 * h;
            k ? x.lineTo(px, py) : x.moveTo(px, py);
          }));
          x.fill('evenodd');
        });
      });
      buildDots({ w, h, data: x.getImageData(0, 0, w, h).data });
    }).catch(() => {});
    document.head.appendChild(s);
  }
  loadLand();

  function project(p, R, cx, cy) {
    const lo = rad(gRot.lon), la = rad(gRot.lat);
    // rotate around Y (longitude) then X (latitude)
    let x = p[0] * Math.cos(-lo) + p[2] * Math.sin(-lo), z = -p[0] * Math.sin(-lo) + p[2] * Math.cos(-lo), y = p[1];
    const y2 = y * Math.cos(la) - z * Math.sin(la), z2 = y * Math.sin(la) + z * Math.cos(la);
    return [cx + x * R, cy - y2 * R, z2];
  }
  function slerp(a, b, t) {
    const d = Math.acos(Math.min(1, a[0] * b[0] + a[1] * b[1] + a[2] * b[2])), s = Math.sin(d);
    const k1 = Math.sin((1 - t) * d) / s, k2 = Math.sin(t * d) / s;
    return [a[0] * k1 + b[0] * k2, a[1] * k1 + b[1] * k2, a[2] * k1 + b[2] * k2];
  }
  function drawGlobe(time) {
    requestAnimationFrame(drawGlobe);
    if (!gVisible) return;
    const dpr = Math.min(devicePixelRatio, 2), W = globe.clientWidth, H = globe.clientHeight;
    if (globe.width !== W * dpr) { globe.width = W * dpr; globe.height = H * dpr; }
    gx.setTransform(dpr, 0, 0, dpr, 0, 0); gx.clearRect(0, 0, W, H);
    const R = Math.min(W, H) * .42, cx = W / 2, cy = H / 2;
    if (!gDrag) gRot.lon += Math.sin(time / 6000) * .02;

    const halo = gx.createRadialGradient(cx, cy, R * .7, cx, cy, R * 1.25);
    halo.addColorStop(0, 'rgba(201,176,110,.10)'); halo.addColorStop(1, 'rgba(201,176,110,0)');
    gx.fillStyle = halo; gx.beginPath(); gx.arc(cx, cy, R * 1.25, 0, 7); gx.fill();
    gx.strokeStyle = 'rgba(201,176,110,.22)'; gx.lineWidth = 1; gx.beginPath(); gx.arc(cx, cy, R, 0, 7); gx.stroke();

    for (const p of dots3) {
      const [x, y, z] = project(p, R, cx, cy);
      if (z < 0) continue;
      gx.fillStyle = `rgba(232,214,164,${.18 + z * .55})`;
      gx.fillRect(x - .8, y - .8, 1.6, 1.6);
    }
    const home = toXYZ(...CITIES[0]);
    CITIES.forEach((c, i) => {
      const p3 = toXYZ(...c);
      if (i > 0) {
        gx.beginPath();
        const steps = 48, hl = activeCity === i;
        for (let s = 0; s <= steps; s++) {
          const tt = s / steps, q = slerp(home, p3, tt), lift = 1 + Math.sin(Math.PI * tt) * .22;
          const [x, y] = project([q[0] * lift, q[1] * lift, q[2] * lift], R, cx, cy);
          s ? gx.lineTo(x, y) : gx.moveTo(x, y);
        }
        gx.strokeStyle = hl ? 'rgba(232,214,164,.95)' : 'rgba(201,176,110,.45)';
        gx.lineWidth = hl ? 1.6 : 1;
        gx.setLineDash([4, 6]); gx.lineDashOffset = -time / 40; gx.stroke(); gx.setLineDash([]);
      }
      const [x, y, z] = project(p3, R, cx, cy);
      if (z < -.05) return;
      const pulse = (time / 1400 + i * .3) % 1;
      gx.strokeStyle = `rgba(201,176,110,${1 - pulse})`; gx.beginPath(); gx.arc(x, y, 4 + pulse * 16, 0, 7); gx.stroke();
      gx.fillStyle = i === 0 || activeCity === i ? '#e8d6a4' : '#c9b06e';
      gx.beginPath(); gx.arc(x, y, i === 0 ? 4.5 : 3, 0, 7); gx.fill();
      if (i === 0 || activeCity === i) {
        gx.font = '500 10px Manrope, sans-serif'; gx.fillStyle = '#efe8da';
        gx.fillText($$('#cities b')[i].textContent.toUpperCase(), x + 10, y - 8);
      }
    });
  }
  requestAnimationFrame(drawGlobe);
  new IntersectionObserver(([e]) => { gVisible = e.isIntersecting; }).observe(globe);
  globe.addEventListener('pointerdown', e => { gDrag = { x: e.clientX, y: e.clientY, lon: gRot.lon, lat: gRot.lat }; globe.setPointerCapture(e.pointerId); });
  globe.addEventListener('pointermove', e => {
    if (!gDrag) return;
    gRot.lon = gDrag.lon - (e.clientX - gDrag.x) * .3;
    gRot.lat = Math.max(-60, Math.min(70, gDrag.lat + (e.clientY - gDrag.y) * .3));
  });
  globe.addEventListener('pointerup', () => { gDrag = null; });
  $$('#cities li').forEach(li => {
    li.addEventListener('mouseenter', () => {
      activeCity = +li.dataset.city; li.classList.add('is-on');
      const [la, lo] = CITIES[activeCity];
      CP.hasGsap && gsap.to(gRot, { lon: lo, lat: Math.max(10, la - 5), duration: 1.4, ease: 'expo.out' });
    });
    li.addEventListener('mouseleave', () => { activeCity = -1; li.classList.remove('is-on'); });
  });

  /* ---------------- compare: drawing → interior ---------------- */
  const cmpStage = $('#compare'), cmpCanvas = $('#compareDraw'), cmpPhoto = $('#comparePhoto');
  // Turn a photo into a gold "blueprint": Sobel edges over a drafting grid.
  function drawBlueprint(img) {
    const w = Math.round(cmpStage.clientWidth * Math.min(devicePixelRatio, 2)), h = Math.round(w * 5 / 4);
    cmpCanvas.width = w; cmpCanvas.height = h;
    const x = cmpCanvas.getContext('2d', { willReadFrequently: true });
    x.drawImage(img, 0, 0, w, h);
    const src = x.getImageData(0, 0, w, h).data, g = new Float32Array(w * h);
    for (let i = 0; i < w * h; i++) g[i] = src[i * 4] * .299 + src[i * 4 + 1] * .587 + src[i * 4 + 2] * .114;
    const out = x.createImageData(w, h), o = out.data;
    for (let yy = 1; yy < h - 1; yy++) for (let xx = 1; xx < w - 1; xx++) {
      const i = yy * w + xx;
      const gx = -g[i - w - 1] - 2 * g[i - 1] - g[i + w - 1] + g[i - w + 1] + 2 * g[i + 1] + g[i + w + 1];
      const gy = -g[i - w - 1] - 2 * g[i - w] - g[i - w + 1] + g[i + w - 1] + 2 * g[i + w] + g[i + w + 1];
      const m = Math.min(1, Math.max(0, (Math.hypot(gx, gy) - 40) / 160));
      const grid = (xx % 40 === 0 || yy % 40 === 0) ? .12 : 0;
      const a = Math.max(m, grid);
      o[i * 4] = 14 + (232 - 14) * a; o[i * 4 + 1] = 48 + (214 - 48) * a; o[i * 4 + 2] = 34 + (164 - 34) * a; o[i * 4 + 3] = 255;
    }
    x.putImageData(out, 0, 0);
  }
  function loadCompare(name) {
    const img = new Image();
    img.onload = () => { cmpPhoto.src = img.src; drawBlueprint(img); };
    img.src = `assets/img/${name}.jpg`;
  }
  loadCompare('p04');
  const setCmp = v => cmpStage.style.setProperty('--x', (Math.max(0, Math.min(1, v)) * 100) + '%');
  let cmpDrag = false;
  const cmpMove = e => { const r = cmpStage.getBoundingClientRect(); setCmp((e.clientX - r.left) / r.width); };
  cmpStage.addEventListener('pointerdown', e => { cmpDrag = true; cmpStage.setPointerCapture(e.pointerId); cmpMove(e); });
  cmpStage.addEventListener('pointermove', e => { if (cmpDrag || !CP.isTouch) cmpMove(e); });
  cmpStage.addEventListener('pointerup', () => { cmpDrag = false; });
  $$('#compareTabs button').forEach(b => b.addEventListener('click', () => {
    $$('#compareTabs button').forEach(x => x.classList.toggle('is-active', x === b));
    loadCompare(b.dataset.img);
  }));
  let cmpW = cmpStage.clientWidth;
  addEventListener('resize', () => { if (Math.abs(cmpStage.clientWidth - cmpW) > 40) { cmpW = cmpStage.clientWidth; loadCompare($('#compareTabs .is-active').dataset.img); } });

  /* ---------------- first screen: full-bleed film, played by scrolling ---------------- */
  const heroBg = $('#heroBg'), heroName = $('#heroReelName'), heroIdx = $('#heroIdx');
  let heroVideo = null, frames = [];
  if (window.CP_REEL_VIDEO) {
    heroBg.innerHTML = `<video src="${window.CP_REEL_VIDEO}" muted playsinline preload="auto"></video>`;
    heroVideo = $('video', heroBg);
  } else {
    heroBg.innerHTML = PROJECTS.map(p => `<img src="assets/img/${p.img}.jpg" alt="">`).join('');
    frames = $$('img', heroBg);
  }
  // p: 0 → 1 across the whole film
  function setFilm(p) {
    const pad = v => String(v).padStart(2, '0');
    const scrub = $('#heroScrub'); if (scrub) scrub.style.transform = `scaleX(${p})`;
    if (heroVideo) { if (heroVideo.duration) heroVideo.currentTime = p * heroVideo.duration; return; }
    const pos = p * (frames.length - 1), cur = Math.round(pos);
    frames.forEach((im, i) => {
      const d = pos - i;
      im.style.opacity = Math.max(0, 1 - Math.abs(d) * 1.6);
      // every shot drifts and pushes in while it is on screen, like a camera move
      im.style.transform = `scale(${1.16 - Math.max(-1, Math.min(1, d)) * .08}) translateX(${(i % 2 ? 1 : -1) * d * 2.5}%)`;
    });
    heroIdx.textContent = pad(cur + 1);
    heroName.textContent = PROJECTS[cur].name;
  }
  setFilm(0);

  // fullscreen film: a real video if CP_REEL_VIDEO is set in data.js, otherwise a cut of the projects
  const film = $('#film'), frame = $('#filmFrame');
  let filmTimer = null, filmI = 0;
  function filmShow(i) {
    filmI = i % PROJECTS.length;
    $$('img', frame).forEach((im, j) => im.classList.toggle('is-on', j === filmI));
    $('#filmNum').textContent = String(filmI + 1).padStart(2, '0');
    $('#filmName').textContent = PROJECTS[filmI].name;
    CP.hasGsap && gsap.fromTo('#filmBar', { scaleX: filmI / PROJECTS.length }, { scaleX: (filmI + 1) / PROJECTS.length, duration: 3.6, ease: 'none' });
  }
  function openFilm() {
    film.classList.add('is-open'); film.setAttribute('aria-hidden', 'false');
    CP.lenis && CP.lenis.stop();
    if (window.CP_REEL_VIDEO) {
      frame.innerHTML = `<video src="${window.CP_REEL_VIDEO}" autoplay playsinline controls></video>`;
      return;
    }
    frame.innerHTML = PROJECTS.map(p => `<img src="assets/img/${p.img}.jpg" alt="">`).join('');
    filmShow(0);
    filmTimer = setInterval(() => filmShow(filmI + 1), 3600);
  }
  function closeFilm() {
    film.classList.remove('is-open'); film.setAttribute('aria-hidden', 'true');
    clearInterval(filmTimer); frame.innerHTML = '';
    CP.lenis && CP.lenis.start();
  }
  $('#reelPlay').addEventListener('click', openFilm);
  $('#filmClose').addEventListener('click', closeFilm);
  addEventListener('keydown', e => { if (e.key === 'Escape' && film.classList.contains('is-open')) closeFilm(); });

  /* ---------------- reviews ---------------- */
  const reviews = $$('.review');
  let revI = 0, revTimer;
  function showReview(i) {
    revI = (i + reviews.length) % reviews.length;
    reviews.forEach((r, j) => r.classList.toggle('is-active', j === revI));
    $('#revIdx').textContent = String(revI + 1).padStart(2, '0');
    if (CP.hasGsap) gsap.fromTo($('blockquote', reviews[revI]), { y: 30, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1, ease: 'expo.out' });
    clearInterval(revTimer); revTimer = setInterval(() => showReview(revI + 1), 8000);
  }
  $('#revPrev').addEventListener('click', () => showReview(revI - 1));
  $('#revNext').addEventListener('click', () => showReview(revI + 1));
  revTimer = setInterval(() => showReview(revI + 1), 8000);

  /* ---------------- faq: one open at a time ---------------- */
  $$('.qa').forEach(d => d.addEventListener('toggle', () => {
    if (d.open) $$('.qa').forEach(o => { if (o !== d) o.open = false; });
    CP.hasGsap && ScrollTrigger.refresh();
  }));

  /* ---------------- without GSAP: show everything ---------------- */
  if (!CP.hasGsap) {
    document.body.classList.remove('is-loading');
    $('#loader').remove();
    manifestWords.forEach(w => { w.style.opacity = 1; });
    $$('.work').forEach(w => w.classList.add('is-revealed'));
    return;
  }

  /* ================= GSAP-powered ================= */
  const lenis = CP.lenis;
  lenis && lenis.stop();

  /* ---------------- intro: full loader once per visit, short reveal afterwards ---------------- */
  const heroIn = tl => tl
    .from('.hero__title .char', { yPercent: 115, rotate: 6, duration: 1.4, stagger: .022, ease: 'expo.out' }, 0)
    .from(['.hero .eyebrow', '.hero__meta', '.hero__bottom'], { autoAlpha: 0, y: 24, duration: 1.2, stagger: .1, ease: 'expo.out' }, .4)
    .from('.hero__bg', { scale: 1.25, duration: 2.4, ease: 'expo.out' }, 0)
    .from('.hero__hud', { autoAlpha: 0, y: -20, duration: 1, ease: 'expo.out' }, .9)
    .fromTo('.header', { yPercent: -100 }, { yPercent: 0, duration: 1.2, ease: 'expo.out', clearProps: 'transform' }, .3);
  const start = () => {
    document.body.classList.remove('is-loading');
    lenis && lenis.start();
    window.dispatchEvent(new Event('cp:ready'));
    if (location.hash && $(location.hash)) {
      ScrollTrigger.refresh();
      lenis ? lenis.scrollTo(location.hash, { immediate: true }) : $(location.hash).scrollIntoView();
    }
  };

  if (session.get('cp-seen') || CP.fromTransition) {
    $('#loader').style.display = 'none';
    const tl = gsap.timeline({ paused: true });
    heroIn(tl);
    CP.enter().then(() => { start(); tl.play(); });
  } else {
    session.set('cp-seen', '1');
    const loaderPaths = $$('.loader__mark path');
    loaderPaths.forEach(p => { const l = p.getTotalLength(); p.style.strokeDasharray = l; p.style.strokeDashoffset = l; });
    const counter = { v: 0 };
    const intro = gsap.timeline({ delay: .2 });
    intro
      .to(loaderPaths, { strokeDashoffset: 0, duration: 1.4, stagger: .12, ease: 'power2.inOut' }, 0)
      .to(counter, { v: 100, duration: 2.2, ease: 'power2.inOut', onUpdate: () => {
        $('#loaderCount').textContent = String(Math.round(counter.v)).padStart(3, '0');
      } }, 0)
      .to('#loaderLine', { scaleX: 1, duration: 2.2, ease: 'power2.inOut' }, 0)
      .to(loaderPaths, { fill: '#c9b06e', strokeWidth: 0, duration: .6, stagger: .05 }, 1.5)
      .to('.loader__mark', { rotate: 120, scale: .8, duration: 1, ease: 'expo.inOut' }, 2.2)
      .to(['.loader__word', '.loader__count', '.loader__line'], { autoAlpha: 0, y: -10, duration: .5, stagger: .05 }, 2.3)
      .to('.loader__mark', { autoAlpha: 0, duration: .4 }, 2.8)
      .to('.loader__panel--top', { yPercent: -100, duration: 1.2, ease: 'expo.inOut' }, 2.9)
      .to('.loader__panel--bottom', { yPercent: 100, duration: 1.2, ease: 'expo.inOut' }, 2.9)
      .add(start, 3.1)
      .add(heroIn(gsap.timeline()), 3.1)
      .set('#loader', { display: 'none' });
  }

  /* ---------------- hero ---------------- */
  const pillars = $$('#pillars li'); let pi = 0;
  setInterval(() => { pillars.forEach((p, i) => p.classList.toggle('is-on', i === pi)); pi = (pi + 1) % pillars.length; }, 1400);
  // the hero stays on screen while the scroll plays the film, then lets go
  ScrollTrigger.create({
    trigger: '#hero', start: 'top top', end: () => '+=' + innerHeight * (CP.isTouch ? 2.5 : 4), pin: true, scrub: true,
    onUpdate: self => {
      setFilm(self.progress);
      // the title steps aside during the first part of the film
      const k = Math.min(1, self.progress * 5);
      gsap.set('.hero__content', { autoAlpha: 1 - k, yPercent: -30 * k });
    }
  });

  /* ---------------- marquee (scroll-reactive) ---------------- */
  const mq = $('#marquee');
  mq.innerHTML += mq.innerHTML;
  let mqX = 0, mqDir = 1;
  gsap.ticker.add(() => {
    const v = lenis ? lenis.velocity : 0;
    if (Math.abs(v) > .1) mqDir = Math.sign(v);
    mqX -= (0.6 + Math.min(Math.abs(v) * .25, 10)) * mqDir;
    const half = mq.scrollWidth / 2;
    if (mqX <= -half) mqX += half; if (mqX > 0) mqX -= half;
    mq.style.transform = `translate3d(${mqX}px,0,0)`;
  });

  /* ---------------- manifest words light up ---------------- */
  ScrollTrigger.create({
    trigger: '#manifestText', start: 'top 80%', end: 'bottom 40%', scrub: true,
    onUpdate: self => {
      const n = Math.round(self.progress * manifestWords.length);
      manifestWords.forEach((w, i) => { w.style.opacity = i < n ? 1 : .14; });
    }
  });
  gsap.from('.manifest__sign', { autoAlpha: 0, y: 30, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: '.manifest__sign', start: 'top 90%' } });

  /* ---------------- stats counters ---------------- */
  $$('[data-count]').forEach(el => {
    const o = { v: 0 }, to = +el.dataset.count, pre = el.dataset.prefix || '';
    const suf = () => el.dataset.i18nSuffix ? CP.t(el.dataset.i18nSuffix) : (el.dataset.suffix || '');
    gsap.to(o, { v: to, duration: 2.2, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%' },
      onUpdate: () => { el.textContent = pre + Math.round(o.v) + suf(); } });
  });

  /* ---------------- works: a 3D corridor you walk through ---------------- */
  const mm = gsap.matchMedia();
  const works = $$('.work'), N = works.length;
  works.forEach(w => { w.dataset.glAlpha = ''; w.classList.add('is-revealed'); });
  let lastP = 0;
  function corridor(p) {
    lastP = p;
    const mobile = innerWidth < 861, D = mobile ? 650 : 800, T = (N - 1) * D + 1600;
    const travel = p * T - 300;
    let near = 0, best = Infinity;
    works.forEach((w, i) => {
      const z = travel - i * D;
      const side = i % 2 ? 1 : -1;
      const x = side * innerWidth * (mobile ? .12 : .17), y = ((i % 3) - 1) * innerHeight * .07;
      // fade in from the depth, fade out once it passes the viewer
      const a = z < -5200 ? 0 : z < -3600 ? (z + 5200) / 1600 : z < 260 ? 1 : z < 700 ? 1 - (z - 260) / 440 : 0;
      gsap.set(w, { x, y, z, opacity: a, visibility: a > 0 ? 'visible' : 'hidden', pointerEvents: a > .6 ? 'auto' : 'none' });
      const dist = Math.abs(z - 120);
      if (dist < best) { best = dist; near = i; }
    });
    $('#worksIdx').textContent = String(near + 1).padStart(2, '0');
    $('#worksName').textContent = PROJECTS[near].name;
    $('#worksCat').textContent = CP.pick(PROJECTS[near].cat) + ' · ' + PROJECTS[near].year;
    $('#worksOpen').href = `project.html?p=${PROJECTS[near].slug}`;
    $('#worksOpen').dataset.label = PROJECTS[near].name;
    gsap.set('#worksHead', { autoAlpha: 1 - Math.min(1, p * 9), y: -p * 400 });
    gsap.set('.works__hud', { autoAlpha: Math.min(1, Math.max(0, p * 9 - .5)) });
  }
  works.forEach(w => gsap.set(w, { xPercent: -50, yPercent: -50 }));
  gsap.set('#worksHead', { yPercent: -50 });
  corridor(0);
  ScrollTrigger.create({
    trigger: '#worksPin', start: 'top top', end: () => '+=' + innerHeight * N * .75, pin: true, scrub: 1,
    onUpdate: self => corridor(self.progress), onRefresh: self => corridor(self.progress)
  });
  CP.onLang(() => corridor(lastP));

  /* ---------------- method stacked cards ---------------- */
  mm.add('(min-width: 861px)', () => {
    // sticky cards report their stuck position, so measure from flow sentinels instead
    const cards = $$('.mcard');
    const marks = cards.map(c => { const s = document.createElement('div'); c.before(s); return s; });
    cards.forEach((c, i) => {
      if (i === cards.length - 1) return;
      gsap.fromTo(c, { scale: 1, filter: 'brightness(1)' }, { scale: .92 + i * .015, filter: 'brightness(.72)', ease: 'none',
        scrollTrigger: { trigger: marks[i + 1], start: 'top bottom', end: 'top 20%', scrub: true } });
    });
    return () => marks.forEach(s => s.remove());
  });

  /* ---------------- expanding image ---------------- */
  gsap.timeline({ scrollTrigger: { trigger: '.expand', start: 'top top', end: '+=160%', pin: '.expand__pin', scrub: 1 } })
    .fromTo('.expand__media', { clipPath: 'inset(30% 37% 30% 37%)' }, { clipPath: 'inset(0% 0% 0% 0%)', ease: 'power2.inOut', duration: 1 }, 0)
    .fromTo('.expand__media img', { scale: 1.5 }, { scale: 1, ease: 'power2.inOut', duration: 1 }, 0)
    .to('.expand__words span:first-child', { xPercent: -70, ease: 'power2.inOut', duration: 1 }, 0)
    .to('.expand__words span:last-child', { xPercent: 70, ease: 'power2.inOut', duration: 1 }, 0)
    .to('.expand__words', { autoAlpha: 0, duration: .3 }, .7)
    .fromTo('.expand__caption', { autoAlpha: 0, y: 60 }, { autoAlpha: 1, y: 0, duration: .4 }, .75);

  /* ---------------- process line ---------------- */
  const stepsEl = $('#steps'), stepEls = $$('.step');
  ScrollTrigger.create({
    trigger: stepsEl, start: 'top 65%', end: 'bottom 65%', scrub: true,
    onUpdate: self => {
      stepsEl.style.setProperty('--p', self.progress);
      stepEls.forEach((st, i) => st.classList.toggle('is-on', self.progress >= i / stepEls.length));
    }
  });
  gsap.from('.step', { autoAlpha: 0, x: 40, stagger: .08, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: stepsEl, start: 'top 80%' } });

  /* ---------------- compare: sweep once to show it moves ---------------- */
  const sweep = { v: .5 };
  gsap.timeline({ scrollTrigger: { trigger: '#compare', start: 'top 60%', once: true } })
    .to(sweep, { v: .15, duration: 1, ease: 'power2.inOut', onUpdate: () => setCmp(sweep.v) })
    .to(sweep, { v: .85, duration: 1.4, ease: 'power2.inOut', onUpdate: () => setCmp(sweep.v) })
    .to(sweep, { v: .5, duration: 1, ease: 'power2.inOut', onUpdate: () => setCmp(sweep.v) });
  gsap.from('.compare__stage', { clipPath: 'inset(0% 0% 100% 0%)', duration: 1.6, ease: 'expo.inOut', scrollTrigger: { trigger: '#compare', start: 'top 70%' } });

  /* ---------------- partners, faq ---------------- */
  gsap.from('.partner', { autoAlpha: 0, y: 40, stagger: .07, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: '.partners__grid', start: 'top 85%' } });
  gsap.from('.qa', { autoAlpha: 0, y: 30, stagger: .06, duration: 1.1, ease: 'expo.out', scrollTrigger: { trigger: '#faqList', start: 'top 85%' } });
  gsap.from('.reviews__mark', { rotate: -90, autoAlpha: 0, duration: 2, ease: 'expo.out', scrollTrigger: { trigger: '.reviews', start: 'top 75%' } });

  /* ---------------- chapter dial ---------------- */
  const CHAPTERS = [['#hero', 'Intro'], ['#manifest', 'tag.manifest'], ['#works', 'tag.works'], ['#method', 'tag.method'],
    ['#process', 'tag.process'], ['#compare', 'tag.compare'], ['#founder', 'tag.founder'], ['#partners', 'tag.partners'],
    ['#geo', 'tag.geo'], ['#reviews', 'tag.reviews'], ['#faq', 'FAQ'], ['#access', 'Private access']].filter(([s]) => !$(s).hidden);
  const dial = document.createElement('nav');
  dial.className = 'dial'; dial.setAttribute('aria-label', 'Chapters');
  dial.innerHTML = `<span class="dial__num" id="dialNum">00</span><div class="dial__rail">${CHAPTERS.map((c, i) =>
    `<a class="dial__tick" href="${c[0]}" data-i="${i}"><span></span></a>`).join('')}<svg class="dial__mark"><use href="#mark"/></svg></div><span class="dial__name" id="dialName"></span>`;
  document.body.appendChild(dial);
  const ticks = $$('.dial__tick', dial), dialMark = $('.dial__mark', dial);
  let chapter = 0;
  const nameOf = i => CP.t(CHAPTERS[i][1]);
  function setChapter(i) {
    chapter = i;
    ticks.forEach((t, k) => t.classList.toggle('is-on', k === i));
    $('#dialNum').textContent = String(i).padStart(2, '0');
    $('#dialName').textContent = nameOf(i);
    document.body.classList.toggle('on-light', $(CHAPTERS[i][0]).classList.contains('tone-light'));
  }
  function layoutTicks() {
    const max = ScrollTrigger.maxScroll(window) || 1;
    CHAPTERS.forEach(([sel], i) => {
      const top = Math.min(max, $(sel).getBoundingClientRect().top + scrollY);
      ticks[i].style.top = (top / max * 100) + '%';
      $('span', ticks[i]).textContent = nameOf(i);
    });
  }
  CHAPTERS.forEach(([sel], i) => ScrollTrigger.create({
    trigger: sel, start: 'top 55%', end: 'bottom 55%',
    onToggle: self => { if (self.isActive) setChapter(i); }
  }));
  ScrollTrigger.create({ start: 0, end: 'max', onUpdate: self => gsap.set(dialMark, { top: self.progress * 100 + '%', rotate: self.progress * 720 }) });
  ticks.forEach(t => t.addEventListener('click', e => {
    e.preventDefault();
    const target = $(CHAPTERS[+t.dataset.i][0]);
    lenis ? lenis.scrollTo(target, { duration: 1.8 }) : target.scrollIntoView({ behavior: 'smooth' });
  }));
  ScrollTrigger.addEventListener('refresh', layoutTicks);
  CP.onLang(() => { layoutTicks(); setChapter(chapter); });
  setChapter(0);

  /* ---------------- weight: headings lean with scroll speed ---------------- */
  const skewSet = $$('.h2, .work, .partner b, .review blockquote, .founder__name').map(el => gsap.quickSetter(el, 'skewY', 'deg'));
  let skew = 0;
  gsap.ticker.add(() => {
    const target = lenis ? gsap.utils.clamp(-3.5, 3.5, -lenis.velocity * .12) : 0;
    skew += (target - skew) * .12;
    if (Math.abs(skew) < .005) skew = 0;
    skewSet.forEach(s => s(skew));
  });

  /* ---------------- generic reveals ---------------- */
  CP.reveal($$('.h2, .founder__name, .lead, .muted, .cities li, .founder__links a, .footer__big')
    .filter(el => !el.closest('.hero, .works__head, .expand, .compare__text .section-tag')));
  gsap.from('.founder__frame', { scale: .7, autoAlpha: 0, rotate: -30, duration: 1.8, ease: 'expo.out', scrollTrigger: { trigger: '.founder', start: 'top 65%' } });
  gsap.to('.access__bg img', { yPercent: -12, ease: 'none', scrollTrigger: { trigger: '.access', start: 'top bottom', end: 'bottom top', scrub: true } });
  gsap.from('.access__card', { y: 80, autoAlpha: 0, duration: 1.4, ease: 'expo.out', scrollTrigger: { trigger: '.access', start: 'top 60%' } });
  gsap.from('.footer__word span', { yPercent: 60, autoAlpha: 0, duration: 1.6, ease: 'expo.out', scrollTrigger: { trigger: '.footer__word', start: 'top 95%' } });
  gsap.from('.footer__word svg', { rotate: -180, scale: .4, duration: 1.8, ease: 'expo.out', scrollTrigger: { trigger: '.footer__word', start: 'top 95%' } });
})();
