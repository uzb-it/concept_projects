/* =========================================================
   CONCEPT PROJECTS — project page
   ========================================================= */
(() => {
  const { $, $$ } = CP;
  const PROJECTS = window.CP_PROJECTS, MAT = window.CP_MATERIALS;
  const slug = new URLSearchParams(location.search).get('p');
  const idx = Math.max(0, PROJECTS.findIndex(p => p.slug === slug));
  const p = PROJECTS[idx], next = PROJECTS[(idx + 1) % PROJECTS.length];
  const src = `assets/img/${p.img}.jpg`;

  /* ---------------- static content ---------------- */
  document.title = `${p.name} — Concept Projects`;
  $('#ppIdx').textContent = String(idx + 1).padStart(2, '0');
  $('#ppTitle').innerHTML = p.name.split(' ').map(w =>
    `<span class="line"><span class="word">${[...w].map(c => `<span class="char">${c}</span>`).join('')}</span></span>`).join(' ');
  $('#ppYear').textContent = p.year;
  $('#ppImg').src = src; $('#ppImg').alt = p.name;
  $('#ppFull').src = src; $('#ppFull').alt = p.name;
  $('#ppWord').textContent = `${p.name} · ${p.name} · `;
  $('#ppNextName').textContent = next.name;
  $('#ppNextImg').src = `assets/img/${next.img}.jpg`;
  $('#ppNext').href = `project.html?p=${next.slug}`;
  $('#ppNext').dataset.label = next.name;

  // detail crops: focal point + zoom
  const CROPS = [[22, 30, 2.2], [78, 55, 2.5], [45, 92, 2.1]];
  $('#ppDetails').innerHTML = CROPS.map(([x, y, z], i) => `
    <figure class="crop crop--${i}">
      <div class="crop__img"><img src="${src}" alt="" style="transform-origin:${x}% ${y}%;--z:${z}"></div>
      <figcaption>0${i + 1}</figcaption>
    </figure>`).join('');

  function renderLang() {
    $('#ppCat').textContent = CP.pick(p.cat);
    $('#ppMetaCat').textContent = CP.pick(p.cat);
    $('#ppDesc').textContent = CP.pick(p.desc);
    $('#ppMaterials').innerHTML = p.mat.map((m, i) => `<li><em>0${i + 1}</em><span>${CP.pick(MAT[m])}</span></li>`).join('');
  }
  CP.onLang(renderLang);
  CP.setLang(CP.lang, false);

  /* ---------------- palette extracted from the image (k-means) ---------------- */
  function extractPalette(img, k = 5) {
    const c = document.createElement('canvas'), w = 48, h = 60;
    c.width = w; c.height = h;
    const x = c.getContext('2d', { willReadFrequently: true });
    x.drawImage(img, 0, 0, w, h);
    const d = x.getImageData(0, 0, w, h).data, px = [];
    for (let i = 0; i < d.length; i += 4) px.push([d[i], d[i + 1], d[i + 2]]);
    let cents = Array.from({ length: k }, (_, i) => px[Math.floor((i + .5) / k * px.length)].slice());
    let counts;
    for (let it = 0; it < 10; it++) {
      const sum = cents.map(() => [0, 0, 0]); counts = cents.map(() => 0);
      for (const q of px) {
        let best = 0, bd = Infinity;
        cents.forEach((cc, j) => { const dd = (q[0] - cc[0]) ** 2 + (q[1] - cc[1]) ** 2 + (q[2] - cc[2]) ** 2; if (dd < bd) { bd = dd; best = j; } });
        sum[best][0] += q[0]; sum[best][1] += q[1]; sum[best][2] += q[2]; counts[best]++;
      }
      cents = cents.map((cc, j) => counts[j] ? sum[j].map(v => v / counts[j]) : cc);
    }
    const total = counts.reduce((a, b) => a + b, 0);
    return cents.map((cc, j) => ({ rgb: cc.map(Math.round), share: counts[j] / total }))
      .filter(s => s.share > .02)
      .sort((a, b) => (a.rgb[0] + a.rgb[1] + a.rgb[2]) - (b.rgb[0] + b.rgb[1] + b.rgb[2]));
  }
  const hex = rgb => '#' + rgb.map(v => v.toString(16).padStart(2, '0')).join('').toUpperCase();
  const paletteImg = new Image();
  paletteImg.onload = () => {
    const sw = extractPalette(paletteImg);
    $('#ppSwatches').innerHTML = sw.map(s => {
      const light = (s.rgb[0] * .299 + s.rgb[1] * .587 + s.rgb[2] * .114) > 140;
      return `<div class="swatch${light ? ' swatch--light' : ''}" style="--c:${hex(s.rgb)};flex-grow:${(s.share * 100).toFixed(1)}">
        <span>${hex(s.rgb)}</span><small>${Math.round(s.share * 100)}%</small></div>`;
    }).join('');
    if (CP.hasGsap) gsap.from('.swatch', { scaleY: 0, transformOrigin: 'bottom', duration: 1.4, stagger: .08, ease: 'expo.out',
      scrollTrigger: { trigger: '#ppSwatches', start: 'top 85%' } });
  };
  paletteImg.src = src;

  /* ---------------- next project: preview follows the pointer ---------------- */
  const nextEl = $('#ppNext'), prev = $('.pp-next__preview');
  if (!CP.isTouch && CP.hasGsap) {
    const px = gsap.quickTo(prev, 'x', { duration: .7, ease: 'power3' }), py = gsap.quickTo(prev, 'y', { duration: .7, ease: 'power3' });
    nextEl.addEventListener('pointermove', e => {
      const r = nextEl.getBoundingClientRect();
      px(e.clientX - r.left); py(e.clientY - r.top);
    });
  }

  if (!CP.hasGsap) return;

  /* ================= GSAP-powered ================= */
  const lenis = CP.lenis;
  lenis && lenis.stop();
  const intro = gsap.timeline({ paused: true })
    .from('.pp-title .char', { yPercent: 120, rotate: 8, duration: 1.4, stagger: .025, ease: 'expo.out' }, 0)
    .fromTo('.pp-hero__media', { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.6, ease: 'expo.inOut' }, 0)
    .from('.pp-hero__media img', { scale: 1.4, duration: 2.2, ease: 'expo.out' }, .2)
    .from(['.pp-back', '.pp-hero__idx', '.pp-hero .eyebrow', '.pp-hero__scroll'], { autoAlpha: 0, y: 20, duration: 1, stagger: .08, ease: 'expo.out' }, .5)
    .fromTo('.header', { yPercent: -100 }, { yPercent: 0, duration: 1.2, ease: 'expo.out', clearProps: 'transform' }, .4);
  CP.enter().then(() => { lenis && lenis.start(); intro.play(); });

  gsap.to('.pp-hero__media img', { yPercent: 12, ease: 'none', scrollTrigger: { trigger: '.pp-hero', start: 'top top', end: 'bottom top', scrub: true } });
  gsap.to('.pp-hero__text', { yPercent: -30, autoAlpha: .2, ease: 'none', scrollTrigger: { trigger: '.pp-hero', start: 'top top', end: 'bottom top', scrub: true } });

  gsap.from('.pp-meta > div', { autoAlpha: 0, y: 30, stagger: .08, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: '.pp-meta', start: 'top 90%' } });

  // description: words rise line by line
  const desc = $('#ppDesc');
  const splitDesc = () => { desc.innerHTML = desc.textContent.split(/\s+/).map(w => `<span class="w"><span>${w}</span></span>`).join(' '); };
  splitDesc(); CP.onLang(splitDesc);
  gsap.from('.pp-desc .w > span', { yPercent: 110, duration: 1.2, stagger: .012, ease: 'expo.out', scrollTrigger: { trigger: desc, start: 'top 80%' } });
  gsap.from('.pp-story__mark', { rotate: -180, scale: .3, autoAlpha: 0, duration: 2, ease: 'expo.out', scrollTrigger: { trigger: '.pp-story', start: 'top 80%' } });

  gsap.from('.pp-materials li', { autoAlpha: 0, x: -30, stagger: .07, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: '#ppMaterials', start: 'top 90%' } });

  $$('.crop').forEach((c, i) => {
    gsap.fromTo($('.crop__img', c), { clipPath: 'inset(0% 0% 100% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.6, ease: 'expo.inOut', scrollTrigger: { trigger: c, start: 'top 85%' } });
    gsap.fromTo(c, { y: 60 * (i % 2 ? 1 : -.5) }, { y: -60 * (i % 2 ? 1 : -.5), ease: 'none', scrollTrigger: { trigger: '.pp-details', start: 'top bottom', end: 'bottom top', scrub: true } });
  });

  gsap.fromTo('#ppWord', { xPercent: 0 }, { xPercent: -40, ease: 'none', scrollTrigger: { trigger: '.pp-full', start: 'top bottom', end: 'bottom top', scrub: true } });
  CP.reveal($$('.pp-cta .h2, .pp-palette__head, .footer__big'));
  gsap.from('.pp-next__name', { yPercent: 60, autoAlpha: 0, duration: 1.4, ease: 'expo.out', scrollTrigger: { trigger: '.pp-next', start: 'top 85%' } });
  gsap.from('.footer__word span', { yPercent: 60, autoAlpha: 0, duration: 1.6, ease: 'expo.out', scrollTrigger: { trigger: '.footer__word', start: 'top 95%' } });
})();
