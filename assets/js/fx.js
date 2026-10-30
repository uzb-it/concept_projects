/* =========================================================
   FX — WebGL image planes: liquid hover, RGB split, scroll bend
   Any element with [data-gl] that contains an <img> is drawn here.
   ========================================================= */
import * as THREE from 'three';

const els = [...document.querySelectorAll('[data-gl]')];
if (els.length) init();

function init() {
  const canvas = document.createElement('canvas');
  canvas.className = 'gl-fx';
  document.body.prepend(canvas);

  let renderer;
  try { renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true }); }
  catch { canvas.remove(); return; }
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -10, 10);
  let W = 0, H = 0;
  function resize() {
    W = innerWidth; H = innerHeight;
    renderer.setSize(W, H, false);
    Object.assign(camera, { left: -W / 2, right: W / 2, top: H / 2, bottom: -H / 2 });
    camera.updateProjectionMatrix();
  }
  addEventListener('resize', resize); resize();

  const vertex = /* glsl */`
    uniform float uVel;
    uniform vec2 uPlane;
    varying vec2 vUv;
    void main() {
      vUv = uv;
      vec3 p = position;
      // bend the plane with scroll speed, relative to its own size
      p.y += sin(uv.x * 3.14159) * uVel * .0025;
      p.x += sin(uv.y * 3.14159) * uVel * .0008;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
    }`;
  const fragment = /* glsl */`
    uniform sampler2D uTex;
    uniform vec2 uImg, uPlane, uMouse, uShift;
    uniform float uHover, uTime, uReveal, uVel, uAlpha;
    varying vec2 vUv;
    void main() {
      vec2 ratio = vec2(
        min((uPlane.x / uPlane.y) / (uImg.x / uImg.y), 1.0),
        min((uPlane.y / uPlane.x) / (uImg.y / uImg.x), 1.0));
      vec2 uv = vec2(vUv.x * ratio.x + (1.0 - ratio.x) * .5, vUv.y * ratio.y + (1.0 - ratio.y) * .5);
      uv = (uv - .5) * (0.92 - .06 * uHover) + .5 + uShift;

      // liquid lens around the pointer
      float d = distance(vUv * uPlane / uPlane.y, uMouse * uPlane / uPlane.y);
      float f = smoothstep(.55, 0.0, d) * uHover;
      uv += (vUv - uMouse) * f * -.14;
      uv.x += sin(vUv.y * 14.0 + uTime * 2.2) * .005 * uHover;
      uv.y += cos(vUv.x * 10.0 + uTime * 1.6) * .004 * uHover;

      // chromatic split from pointer + scroll speed
      vec2 off = vec2(.006 * f + abs(uVel) * .0004, 0.0);
      vec3 col = vec3(texture2D(uTex, uv + off).r, texture2D(uTex, uv).g, texture2D(uTex, uv - off).b);

      float gray = dot(col, vec3(.299, .587, .114));
      col = mix(vec3(gray), col, .85 + .25 * uHover) * (.9 + .12 * uHover);

      // reveal from the right with a soft wavy edge
      float edge = 1.0 - uReveal + sin(vUv.y * 9.0 + uTime) * .02 * (1.0 - uReveal);
      if (vUv.x < edge) discard;
      gl_FragColor = vec4(col, uAlpha);
    }`;

  const geo = new THREE.PlaneGeometry(1, 1, 24, 24);
  const loader = new THREE.TextureLoader();
  const items = els.map(el => {
    const img = el.querySelector('img');
    const u = {
      uTex: { value: null }, uImg: { value: new THREE.Vector2(1, 1) }, uPlane: { value: new THREE.Vector2(1, 1) },
      uMouse: { value: new THREE.Vector2(.5, .5) }, uShift: { value: new THREE.Vector2() },
      uHover: { value: 0 }, uTime: { value: 0 }, uReveal: { value: 0 }, uVel: { value: 0 }, uAlpha: { value: 1 }
    };
    const mesh = new THREE.Mesh(geo, new THREE.ShaderMaterial({ uniforms: u, vertexShader: vertex, fragmentShader: fragment, transparent: true, depthTest: false }));
    mesh.visible = false;
    scene.add(mesh);
    // elements faded by an ancestor (e.g. the works corridor) mark it with data-gl-alpha
    const it = { el, mesh, u, hover: 0, target: 0, ready: false, alphaEl: el.closest('[data-gl-alpha]') };
    if (!el.closest('[data-gl-reveal]')) u.uReveal.value = 1; // no wipe-in unless asked for
    loader.load(img.currentSrc || img.src, tex => {
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.minFilter = THREE.LinearFilter;
      u.uTex.value = tex;
      u.uImg.value.set(tex.image.width, tex.image.height);
      it.ready = true;
      el.classList.add('gl-on');
    });
    el.addEventListener('pointerenter', () => { it.target = 1; });
    el.addEventListener('pointerleave', () => { it.target = 0; });
    el.addEventListener('pointermove', e => {
      const r = el.getBoundingClientRect();
      u.uMouse.value.set((e.clientX - r.left) / r.width, 1 - (e.clientY - r.top) / r.height);
    });
    return it;
  });

  let vel = 0, lastY = scrollY;
  const clock = new THREE.Clock();
  (function loop() {
    requestAnimationFrame(loop);
    const t = clock.getElapsedTime();
    const y = scrollY;
    const v = window.CP && CP.lenis ? CP.lenis.velocity : y - lastY;
    lastY = y;
    vel += (THREE.MathUtils.clamp(v, -40, 40) - vel) * .12;

    let any = false;
    for (const it of items) {
      if (!it.ready) continue;
      const r = it.el.getBoundingClientRect();
      const alpha = it.alphaEl ? +(it.alphaEl.style.opacity || 1) : 1;
      const on = alpha > .01 && r.bottom > 0 && r.top < H && r.right > 0 && r.left < W && r.width > 0;
      it.mesh.visible = on;
      if (!on) continue;
      any = true;
      // reveal: elements opt in with .is-revealed on themselves or an ancestor
      const revealed = !it.el.closest('[data-gl-reveal]') || it.el.closest('.is-revealed');
      it.u.uReveal.value += ((revealed ? 1 : 0) - it.u.uReveal.value) * .06;
      it.hover += (it.target - it.hover) * .08;
      it.u.uHover.value = it.hover;
      it.u.uTime.value = t;
      it.u.uVel.value = vel;
      it.u.uAlpha.value = alpha;
      it.mesh.renderOrder = r.width; // nearer (bigger) planes draw on top
      it.u.uPlane.value.set(r.width, r.height);
      it.u.uShift.value.set(((r.left + r.width / 2) / W - .5) * -.05, ((r.top + r.height / 2) / H - .5) * .05);
      it.mesh.scale.set(r.width, r.height, 1);
      it.mesh.position.set(r.left + r.width / 2 - W / 2, H / 2 - r.top - r.height / 2, 0);
    }
    if (any) renderer.render(scene, camera);
    else renderer.clear();
  })();
}
