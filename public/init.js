(function() {
// Register GSAP plugins safely
if (window.gsap) {
  if (window.ScrollTrigger) window.gsap.registerPlugin(window.ScrollTrigger);
  if (window.TextPlugin) window.gsap.registerPlugin(window.TextPlugin);
  if (window.ScrollToPlugin) window.gsap.registerPlugin(window.ScrollToPlugin);
}

var isTouch = window.matchMedia('(any-pointer: coarse)').matches;

  // 1. PREMIUM CUSTOM CURSOR
window.initCursor = function() {
  const mainDot = document.querySelector('.main-dot');
  const ringDot = document.querySelector('.ring-dot');
  const container = document.getElementById('cursor-container');

  if (!isTouch && container && mainDot && ringDot) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let isHovered = false;

    window.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function updateCursor() {
      // Main dot instantly follows mouse
      gsap.set(mainDot, { x: mouseX, y: mouseY, xPercent: -50, yPercent: -50 });

      // Ring lags slightly
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      gsap.set(ringDot, { x: ringX, y: ringY, xPercent: -50, yPercent: -50 });

      requestAnimationFrame(updateCursor);
    }
    requestAnimationFrame(updateCursor);

    // Interactive Hover Bindings
    document.querySelectorAll('a, button, .sk-card, .pr-card, .ach-card, .ex-item, .sv-card, .ph-pillar, .nav-cta').forEach(el => {
      el.addEventListener('mouseenter', () => {
        isHovered = true;
        // Shift colors from Gold to Platinum dynamically
        gsap.to(dots, {
          duration: 0.3,
          backgroundColor: 'var(--accent3)',
          stagger: 0.03,
          overwrite: "auto"
        });
      });
      el.addEventListener('mouseleave', () => {
        isHovered = false;
        // Shift back to gold
        gsap.to(dots, {
          duration: 0.3,
          backgroundColor: 'var(--accent)',
          stagger: 0.03,
          overwrite: "auto"
        });
      });
    });
  } else {
    if (container) container.style.display = 'none';
  }
};

// 2. SCROLL NAV
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 60);
});

// 3. MOUSE GLOW & TILT (GSAP optimized)
window.addEventListener('mousemove', e => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;
  document.documentElement.style.setProperty('--glow-x', x + '%');
  document.documentElement.style.setProperty('--glow-y', y + '%');
});

const handleTilt = (e, el) => {
  const rect = el.getBoundingClientRect(), x = e.clientX - rect.left, y = e.clientY - rect.top;
  const rx = ((y / rect.height) - 0.5) * -15, ry = ((x / rect.width) - 0.5) * 15;
  gsap.to(el, {
    duration: 0.3,
    '--rx': rx + 'deg',
    '--ry': ry + 'deg',
    ease: "power2.out",
    overwrite: "auto"
  });
};

document.querySelectorAll('.sk-card, .pr-card, .ach-card, .sv-card').forEach(el => {
  if (!isTouch) {
    el.addEventListener('mousemove', e => handleTilt(e, el));
    el.addEventListener('mouseleave', () => {
      gsap.to(el, { duration: 0.5, '--rx': '0deg', '--ry': '0deg', ease: "power2.out" });
    });
  }
});

// 4. MAGNETIC BUTTONS (GSAP optimized)
const handleMagnetic = (e, el) => {
  if (window.innerWidth < 900 || isTouch) return;
  const rect = el.getBoundingClientRect(), x = e.clientX - rect.left, y = e.clientY - rect.top;
  const mx = (x - (rect.width / 2)) * 0.35, my = (y - (rect.height / 2)) * 0.35;
  gsap.to(el, { duration: 0.3, x: mx, y: my, ease: "power2.out" });
};

document.querySelectorAll('.nav-cta, .btn-p, .btn-o').forEach(el => {
  el.addEventListener('mousemove', e => handleMagnetic(e, el));
  el.addEventListener('mouseleave', () => {
    gsap.to(el, { duration: 0.5, x: 0, y: 0, ease: "power2.out" });
  });
});

// 5. THREE.JS HERO CANVAS (Interactive Gold & Platinum Neural Particle Network)
const heroCanvas = document.getElementById('hero-canvas');
if (heroCanvas) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, heroCanvas.clientWidth / heroCanvas.clientHeight, 0.1, 1000);
  camera.position.z = 250;

  const renderer = new THREE.WebGLRenderer({ canvas: heroCanvas, alpha: true, antialias: true });
  renderer.setSize(heroCanvas.clientWidth, heroCanvas.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const particleCount = window.innerWidth < 768 ? 50 : 110;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const velocities = [];

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 550;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 550;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 300;
    
    velocities.push({
      x: (Math.random() - 0.5) * 0.35,
      y: (Math.random() - 0.5) * 0.35,
      z: (Math.random() - 0.5) * 0.35
    });
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const createCircleTexture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
    // Indigo accent
    grad.addColorStop(0, 'rgba(99, 102, 241, 1)');
    grad.addColorStop(0.3, 'rgba(99, 102, 241, 0.7)');
    grad.addColorStop(1, 'rgba(99, 102, 241, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 16, 16);
    return new THREE.CanvasTexture(canvas);
  };

  const material = new THREE.PointsMaterial({
    size: 5.5,
    map: createCircleTexture(),
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  });

  const particles = new THREE.Points(geometry, material);
  scene.add(particles);

  const maxConnections = particleCount * 2;
  const linePositions = new Float32Array(maxConnections * 2 * 3);
  const lineColors = new Float32Array(maxConnections * 2 * 3);

  const lineGeometry = new THREE.BufferGeometry();
  lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
  lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

  const lineMaterial = new THREE.LineBasicMaterial({
    vertexColors: true,
    transparent: true,
    opacity: 0.15,
    blending: THREE.AdditiveBlending
  });

  const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
  scene.add(lines);

  let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
  window.addEventListener('mousemove', e => {
    mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 140;
    mouse.targetY = -(e.clientY / window.innerHeight - 0.5) * 140;
  });

  window.addEventListener('resize', () => {
    camera.aspect = heroCanvas.clientWidth / heroCanvas.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(heroCanvas.clientWidth, heroCanvas.clientHeight);
  });

  let heroInView = true;
  if (heroCanvas) {
    const observer = new IntersectionObserver((entries) => {
      heroInView = entries[0].isIntersecting;
    });
    observer.observe(heroCanvas);
  }

  function animate() {
    requestAnimationFrame(animate);
    if (!heroInView) return;

    mouse.x += (mouse.targetX - mouse.x) * 0.05;
    mouse.y += (mouse.targetY - mouse.y) * 0.05;

    particles.rotation.y += 0.0006;
    particles.rotation.x += 0.0002;
    lines.rotation.y = particles.rotation.y;
    lines.rotation.x = particles.rotation.x;

    const pos = geometry.attributes.position.array;
    let lineIdx = 0;

    const linePosAttr = lineGeometry.attributes.position.array;
    const lineColAttr = lineGeometry.attributes.color.array;
    linePosAttr.fill(0);
    lineColAttr.fill(0);

    for (let i = 0; i < particleCount; i++) {
      let px = pos[i * 3];
      let py = pos[i * 3 + 1];
      let pz = pos[i * 3 + 2];

      px += velocities[i].x;
      py += velocities[i].y;
      pz += velocities[i].z;

      if (Math.abs(px) > 280) velocities[i].x *= -1;
      if (Math.abs(py) > 280) velocities[i].y *= -1;
      if (Math.abs(pz) > 200) velocities[i].z *= -1;

      const dx = mouse.x - px;
      const dy = mouse.y - py;
      const distToMouse = Math.sqrt(dx*dx + dy*dy);
      if (distToMouse < 180) {
        px += dx * 0.006;
        py += dy * 0.006;
      }

      pos[i * 3] = px;
      pos[i * 3 + 1] = py;
      pos[i * 3 + 2] = pz;
    }

    geometry.attributes.position.needsUpdate = true;

    for (let i = 0; i < particleCount; i++) {
      const x1 = pos[i * 3];
      const y1 = pos[i * 3 + 1];
      const z1 = pos[i * 3 + 2];
      let conn = 0;

      for (let j = i + 1; j < particleCount; j++) {
        if (conn > 2 || lineIdx >= maxConnections) break;

        const x2 = pos[j * 3];
        const y2 = pos[j * 3 + 1];
        const z2 = pos[j * 3 + 2];

        const dist = Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2) + (z1-z2)*(z1-z2));

        if (dist < 110) {
          const segIdx = lineIdx * 6;
          linePosAttr[segIdx] = x1;
          linePosAttr[segIdx + 1] = y1;
          linePosAttr[segIdx + 2] = z1;
          linePosAttr[segIdx + 3] = x2;
          linePosAttr[segIdx + 4] = y2;
          linePosAttr[segIdx + 5] = z2;

          const alpha = 1.0 - (dist / 110);
          // Mix Indigo and Cyan dynamically based on node distance
          const rColor = (99 * alpha + 6 * (1 - alpha)) / 255;
          const gColor = (102 * alpha + 182 * (1 - alpha)) / 255;
          const bColor = (241 * alpha + 212 * (1 - alpha)) / 255;

          lineColAttr[segIdx] = rColor;
          lineColAttr[segIdx + 1] = gColor;
          lineColAttr[segIdx + 2] = bColor;
          lineColAttr[segIdx + 3] = rColor;
          lineColAttr[segIdx + 4] = gColor;
          lineColAttr[segIdx + 5] = bColor;

          lineIdx++;
          conn++;
        }
      }
    }

    lineGeometry.attributes.position.needsUpdate = true;
    lineGeometry.attributes.color.needsUpdate = true;

    renderer.render(scene, camera);
  }
  animate();

  gsap.to(heroCanvas, {
    y: 120,
    opacity: 0.1,
    scrollTrigger: {
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  });
}

// 6. THREE.JS FEATURED PROJECT BLOCKCHAIN OBJECT (Gold & Platinum Mesh)
const projCanvasContainer = document.getElementById('blockchain-canvas-container');
if (projCanvasContainer) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, projCanvasContainer.clientWidth / projCanvasContainer.clientHeight, 0.1, 100);
  camera.position.z = 8;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(projCanvasContainer.clientWidth, projCanvasContainer.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  projCanvasContainer.appendChild(renderer.domElement);

  renderer.domElement.style.position = 'absolute';
  renderer.domElement.style.inset = '0';
  renderer.domElement.style.width = '100%';
  renderer.domElement.style.height = '100%';

  const geometry = new THREE.TorusKnotGeometry(1.5, 0.4, 100, 16);
  const material = new THREE.MeshBasicMaterial({
    color: 0x06b6d4, // Cyber Cyan
    wireframe: true,
    transparent: true,
    opacity: 0.5
  });
  const torusKnot = new THREE.Mesh(geometry, material);
  scene.add(torusKnot);

  const innerMat = new THREE.MeshBasicMaterial({
    color: 0x94a3b8, // Light Slate
    wireframe: true,
    transparent: true,
    opacity: 0.2
  });
  const innerTorus = new THREE.Mesh(geometry, innerMat);
  innerTorus.scale.set(0.97, 0.97, 0.97);
  scene.add(innerTorus);

  let rotSpeed = 0.005, targetRotSpeed = 0.005;

  const featCard = projCanvasContainer.closest('.pr-card.feat');
  if (featCard) {
    featCard.addEventListener('mouseenter', () => {
      targetRotSpeed = 0.022;
      gsap.to(material, { duration: 0.4, opacity: 0.9 });
      gsap.to(innerMat, { duration: 0.4, opacity: 0.55 });
      gsap.to(torusKnot.scale, { duration: 0.4, x: 1.12, y: 1.12, z: 1.12 });
    });
    featCard.addEventListener('mouseleave', () => {
      targetRotSpeed = 0.005;
      gsap.to(material, { duration: 0.4, opacity: 0.5 });
      gsap.to(innerMat, { duration: 0.4, opacity: 0.2 });
      gsap.to(torusKnot.scale, { duration: 0.4, x: 1.0, y: 1.0, z: 1.0 });
    });
  }

  window.addEventListener('resize', () => {
    camera.aspect = projCanvasContainer.clientWidth / projCanvasContainer.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(projCanvasContainer.clientWidth, projCanvasContainer.clientHeight);
  });

  let torusInView = true;
  if (projCanvasContainer) {
    const observer = new IntersectionObserver((entries) => {
      torusInView = entries[0].isIntersecting;
    });
    observer.observe(projCanvasContainer);
  }

  function renderProj() {
    requestAnimationFrame(renderProj);
    if (!torusInView) return;
    rotSpeed += (targetRotSpeed - rotSpeed) * 0.08;
    torusKnot.rotation.x += rotSpeed;
    torusKnot.rotation.y += rotSpeed * 1.4;
    innerTorus.rotation.x -= rotSpeed * 0.4;
    innerTorus.rotation.y -= rotSpeed * 0.6;
    renderer.render(scene, camera);
  }
  renderProj();
}
// 8. GSAP PAGE-LOAD & SCROLL-TRIGGERED REVEAL SYSTEM
let animationsInitialized = false;
window.initAnimations = function() {
    if (animationsInitialized) return;
    animationsInitialized = true;

    // Lenis Smooth Scroll Setup
    if (window.Lenis) {
      const lenis = new window.Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
        direction: 'vertical',
        smooth: true,
      });

      lenis.on('scroll', window.ScrollTrigger.update);
      window.gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      window.gsap.ticker.lagSmoothing(0);
    }

    // Global Section Headings Wipe
    document.querySelectorAll('.s-title').forEach(title => {
      // Avoid conflict if there is already an inline style or specific animation
      if (title.closest('#about')) return; 
      
      window.gsap.fromTo(title,
        { clipPath: "inset(0% 100% 0% 0%)" },
        { 
          clipPath: "inset(0% 0% 0% 0%)", 
          duration: 1.2, 
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: title.closest('.s-head') || title.closest('section'),
            start: "top 85%",
            once: true
          }
        }
      );
    });

    // Hero Entrance Sequence with Loader
    const tl = window.gsap.timeline();
    
    const loader = document.getElementById('global-loader');
    if (loader) {
      tl.to(loader, {
        duration: 0.8,
        yPercent: -100,
        ease: "power4.inOut",
        delay: 0.6
      })
      .set(loader, { display: "none" }, "-=0.2");
    }

    tl.fromTo('.char', { opacity: 0, x: -10 }, { duration: 0.05, opacity: 1, x: 0, stagger: 0.03, ease: 'none', delay: 0 }, "-=0.2")
      .to('.hero-tag', { duration: 1.5, text: "AI Engineer & Full-Stack Developer", ease: "none" }, '-=0.2')
    .fromTo('.hero-desc', { y: 25, opacity: 0 }, { duration: 0.75, y: 0, opacity: 1, ease: 'power4.out' }, '-=0.5')
    .fromTo('.hero-actions > a', { y: 20, opacity: 0 }, { duration: 0.6, y: 0, opacity: 1, stagger: 0.15, ease: 'back.out(1.5)' }, '-=0.4')
    .fromTo('.hero-stats > div', { y: 25, opacity: 0 }, { duration: 0.7, y: 0, opacity: 1, stagger: 0.12, ease: 'back.out(1.5)' }, '-=0.65')
    .fromTo('.scroll-hint', { opacity: 0 }, { duration: 1, opacity: 1, ease: 'power2.inOut' }, '-=0.2')
    .fromTo('.hero-avatar-wrap', { x: 50, opacity: 0 }, { duration: 1.2, x: 0, opacity: 1, ease: 'power3.out' }, '-=2.0');

  // Stats Counters
  gsap.utils.toArray('.counter').forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'), 10);
    gsap.to(counter, {
      innerHTML: target,
      duration: 2,
      snap: { innerHTML: 1 },
      ease: "power2.out",
      scrollTrigger: {
        trigger: '.hero-stats',
        start: 'top 95%'
      }
    });
  });

  // CTA Pulse
  gsap.to('.btn-p', { scale: 1.03, duration: 0.8, repeat: -1, yoyo: true, ease: 'sine.inOut' });

  // Avatar slide-in
  gsap.fromTo('.hero-avatar-wrap', 
    { x: 100, opacity: 0 }, 
    { duration: 1, x: 0, opacity: 1, ease: 'power3.out', delay: 0.5 }
  );

  // Marquee Animation
  const marqueeTl = gsap.to('.mq-track', {
    x: "-50%",
    repeat: -1,
    ease: "none",
    duration: 20
  });

  document.querySelector('.marquee-wrap')?.addEventListener('mouseenter', () => {
    gsap.to(marqueeTl, { timeScale: 0.3, duration: 0.5 });
  });
  document.querySelector('.marquee-wrap')?.addEventListener('mouseleave', () => {
    gsap.to(marqueeTl, { timeScale: 1, duration: 0.5 });
  });

  // Section Headers Reveal
  document.querySelectorAll('section').forEach(sec => {
    const head = sec.querySelector('.s-head');
    if (head) {
      gsap.fromTo(head,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: head,
            start: "top 88%",
            toggleActions: "play none none none"
          }
        }
      );
    }
  });

  // Staggered reveals for other content blocks
  const triggerReveal = (selector, startTrigger = "86%") => {
    const elGroup = document.querySelectorAll(selector);
    if (elGroup.length > 0) {
      gsap.fromTo(elGroup,
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: elGroup[0],
            start: `top ${startTrigger}`,
            toggleActions: "play none none none"
          }
        }
      );
    }
  };

  // Skills Section Custom Animations
  // Category card flip / slide up
  gsap.from('.sk-card', {
    y: 50,
    rotationX: -15,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out",
    transformOrigin: "center top",
    scrollTrigger: {
      trigger: '.sk-grid',
      start: "top 85%"
    }
  });

  // Skill pills stagger entrance
  gsap.from('.sk-tag', {
    scale: 0.8,
    opacity: 0,
    duration: 0.5,
    stagger: 0.03,
    ease: "back.out(1.5)",
    scrollTrigger: {
      trigger: '.sk-grid',
      start: "top 80%"
    }
  });

  // Hover highlight on skill pill using GSAP tween
  document.querySelectorAll('.sk-tag').forEach(tag => {
    tag.addEventListener('mouseenter', () => {
      gsap.to(tag, { borderColor: '#0ea5e9', duration: 0.2 });
    });
    tag.addEventListener('mouseleave', () => {
      gsap.to(tag, { borderColor: 'rgba(14, 165, 233, 0.15)', duration: 0.4 });
    });
  });

  // Projects Section Custom Animations
  // Scroll reveal staggered entrance
  gsap.from('.pr-card', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: '.pr-grid',
      start: "top 80%"
    }
  });

  // Image hover zoom
  document.querySelectorAll('.pr-card').forEach(card => {
    const img = card.querySelector('.pr-visual img, .pr-visual svg');
    if (img) {
      if (!isTouch) {
        card.addEventListener('mouseenter', () => {
          gsap.to(img, { scale: 1.05, duration: 0.5, ease: "power2.out" });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(img, { scale: 1, duration: 0.5, ease: "power2.out" });
        });
      }
    }
  });

  // View on GitHub button hover fill
  document.querySelectorAll('.pr-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
      gsap.to(link, { backgroundColor: 'rgba(14, 165, 233, 0.15)', color: '#7dd3fc', duration: 0.3 });
    });
    link.addEventListener('mouseleave', () => {
      gsap.to(link, { backgroundColor: 'transparent', color: '#38bdf8', duration: 0.3 });
    });
  });

  // Featured badge shimmer
  gsap.to('.feat-badge', {
    boxShadow: "0 0 15px rgba(14, 165, 233, 0.6)",
    borderColor: "rgba(14, 165, 233, 0.8)",
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  // Experience Section Custom Animations
  // Timeline reveal
  gsap.from('.ex-item', {
    x: -40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: '.exp-list',
      start: "top 85%"
    }
  });

  // Bullet point draw
  gsap.from('.ex-bullets li', {
    x: -10,
    opacity: 0,
    duration: 0.6,
    stagger: 0.08,
    ease: "power2.out",
    scrollTrigger: {
      trigger: '.exp-list',
      start: "top 75%"
    }
  });

  // Company link hover underline draw
  document.querySelectorAll('.ex-company-link').forEach(link => {
    const underline = link.querySelector('.ex-underline');
    if (underline) {
      link.addEventListener('mouseenter', () => {
        gsap.to(underline, { scaleX: 1, duration: 0.3, ease: "power2.out" });
      });
      link.addEventListener('mouseleave', () => {
        gsap.to(underline, { scaleX: 0, duration: 0.3, ease: "power2.out" });
      });
    }
  });

  // Achievements Section Custom Animations
  // Card pop-in
  gsap.utils.toArray('.ach-card').forEach((card, i) => {
    gsap.fromTo(card, 
      { scale: 0.9, autoAlpha: 0 },
      {
        scale: 1,
        autoAlpha: 1,
        duration: 0.6,
        delay: (i % 3) * 0.15,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: card,
          start: "top 90%"
        }
      }
    );
  });

  // Trophy/icon bounce on hover
  document.querySelectorAll('.ach-card').forEach(card => {
    const icon = card.querySelector('.ach-ico');
    if (icon) {
      card.addEventListener('mouseenter', () => {
        gsap.to(icon, { y: -5, duration: 0.2, yoyo: true, repeat: 1, ease: "power1.inOut" });
      });
    }
  });

  // Number count-up
  const achNums = document.querySelectorAll('.ach-num');
  if (achNums.length > 0) {
    ScrollTrigger.create({
      trigger: '.ach-grid',
      start: "top 80%",
      once: true,
      onEnter: () => {
        achNums.forEach(num => {
          const target = parseInt(num.getAttribute('data-target') || "0", 10);
          gsap.to(num, {
            innerHTML: target,
            duration: 1.5,
            snap: { innerHTML: 1 },
            ease: "power2.out"
          });
        });
      }
    });
  }
  // About Section Custom Animations
  // Photo slides in from the left
  gsap.from('.ab-profile-card', {
    x: -60,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: { trigger: '.about-grid', start: "top 85%" }
  });

  // Paragraphs fade in from the right
  gsap.from('.ab-text p', {
    x: 30,
    opacity: 0,
    stagger: 0.15,
    duration: 0.85,
    ease: "power2.out",
    scrollTrigger: { trigger: '.ab-text', start: "top 85%" }
  });

  // Sidebar rows slide up into view
  gsap.from('.ib', {
    y: 30,
    opacity: 0,
    stagger: 0.12,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: { trigger: '.ab-aside', start: "top 85%" }
  });

  // Badge pills pop in with bounce
  gsap.from('.bdg', {
    scale: 0,
    opacity: 0,
    stagger: 0.08,
    duration: 0.6,
    ease: "back.out(1.8)",
    scrollTrigger: { trigger: '.badges', start: "top 90%" }
  });

  // "About Me" heading left-to-right wipe reveal
  gsap.fromTo('#about .s-title',
    { clipPath: "inset(0% 100% 0% 0%)" },
    { 
      clipPath: "inset(0% 0% 0% 0%)", 
      duration: 1, 
      ease: "power3.inOut",
      scrollTrigger: { trigger: '#about .s-head', start: "top 85%" }
    }
  );

  // Status dot pulse
  gsap.to('.status-dot', {
    scale: 1.4,
    opacity: 0,
    repeat: -1,
    duration: 1.5,
    ease: "power1.inOut"
  });

  // Section heading underline draw (applied globally to all section lines)
  gsap.utils.toArray('.s-head').forEach(head => {
    const line = head.querySelector('.s-line');
    if (line) {
      gsap.fromTo(line, 
        { scaleX: 0, transformOrigin: "left center" },
        { 
          scaleX: 1, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: head,
            start: "top 85%"
          }
        }
      );
    }
  });
  // Contact Section Animations
  gsap.fromTo('.ct-left', 
    { y: 40, autoAlpha: 0 },
    {
      y: 0,
      autoAlpha: 1,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: { trigger: '.ct-left', start: "top 85%" }
    }
  );

  gsap.fromTo('.ct-card', 
    { y: 40, autoAlpha: 0 },
    {
      y: 0,
      autoAlpha: 1,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: { trigger: '.ct-card', start: "top 80%" }
    }
  );

  gsap.to('.ct-status-pulse', {
    scale: 1.8,
    opacity: 0,
    repeat: -1,
    duration: 1.5,
    ease: "power2.out"
  });

  document.querySelectorAll('.ct-social-btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, { y: -4, duration: 0.2, ease: "power1.out" });
    });
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { y: 0, duration: 0.3, ease: "bounce.out" });
    });
  });

  triggerReveal('.sv-card');

  // 3D Tilt Effect for Cards
  const cards = document.querySelectorAll('.sv-card, .pr-card, .sk-card, .ach-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const xPct = x / rect.width - 0.5;
      const yPct = y / rect.height - 0.5;
      
      gsap.to(card, {
        '--rx': `${-yPct * 15}deg`,
        '--ry': `${xPct * 15}deg`,
        duration: 0.1,
        ease: 'power2.out'
      });
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        '--rx': '0deg',
        '--ry': '0deg',
        duration: 0.5,
        ease: 'power3.out'
      });
    });
  });

  // 9. ACTIVE NAV SLIDING UNDERLINE TRACKER
  const underline = document.getElementById('nav-underline');
  let activeLink = null;

  function moveUnderline(el) {
    if (!underline) return;
    if (!el) {
      gsap.to(underline, { duration: 0.4, opacity: 0, width: 0, ease: "power2.out" });
      return;
    }

    activeLink = el;

    const trackRect = document.querySelector('.nav-links').getBoundingClientRect();
    const elRect = el.getBoundingClientRect();

    const left = elRect.left - trackRect.left;
    const width = elRect.width;

    gsap.to(underline, {
      duration: 0.45,
      left: left,
      width: width,
      opacity: 1,
      ease: "power2.out",
      overwrite: "auto"
    });
  }

  // Set up hover links tracking
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('mouseenter', e => {
      moveUnderline(e.target);
    });
    link.addEventListener('mouseleave', () => {
      moveUnderline(activeLink);
    });
  });

  // ScrollTriggers for section nav tracking
  const sections = ['about', 'skills', 'projects', 'experience', 'achievements', 'contact'];
  sections.forEach(id => {
    const sec = document.getElementById(id);
    if (sec) {
      ScrollTrigger.create({
        trigger: sec,
        start: "top 45%",
        end: "bottom 45%",
        onToggle: self => {
          if (self.isActive) {
            const link = document.querySelector(`.nav-links a[href="#${id}"]`);
            moveUnderline(link);
            
            document.querySelectorAll('.nav-links a').forEach(a => a.style.color = '#e2e8f0');
            if (link) link.style.color = '#22D3EE';
          }
        }
      });
    }
  });

  // Track Hero entry to clear navigation underline
  ScrollTrigger.create({
    trigger: '#hero',
    start: "top top",
    end: "bottom 45%",
    onToggle: self => {
      if (self.isActive) {
        moveUnderline(null);
        document.querySelectorAll('.nav-links a').forEach(a => a.style.color = '#e2e8f0');
      }
    }
  });

  // Hero Avatar Mouse Parallax
  const avatar = document.getElementById('hero-avatar');
  if (avatar && !isTouch) {
    window.addEventListener('mousemove', e => {
      const x = (e.clientX - window.innerWidth / 2) * 0.04;
      const y = (e.clientY - window.innerHeight / 2) * 0.04;
      gsap.to(avatar, {
        duration: 0.8,
        x: x,
        y: y,
        rotation: x * 0.1,
        ease: "power2.out",
        overwrite: "auto"
      });
    });
  }

  const contactSec = document.getElementById('contact');
  const cursor = document.getElementById('cursor-container');

  // Back to top button GSAP
  const backBtn = document.querySelector('.ft-back');
  if (backBtn) {
    gsap.to(backBtn, {
      opacity: 1,
      pointerEvents: "auto",
      scrollTrigger: {
        trigger: document.body, 
        start: "300px top",
        toggleActions: "play none none reverse"
      }
    });

    backBtn.addEventListener('click', (e) => {
      e.preventDefault();
      gsap.to(window, { scrollTo: 0, duration: 1, ease: "power3.inOut" });
    });
  }

  // Smooth scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '#hero') return; 
      
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        gsap.to(window, { scrollTo: target, duration: 1, ease: "power3.inOut" });
      }
    });
  });

  // Initialize Rive Boy Animation
  const RiveEngine = (typeof rive !== 'undefined') ? rive : ((typeof Rive !== 'undefined') ? Rive : null);
  if (RiveEngine && RiveEngine.Rive) {
    if (RiveEngine.RuntimeLoader) {
      RiveEngine.RuntimeLoader.setWasmUrl('rive.wasm?v=1');
    }
    const r = new RiveEngine.Rive({
      src: 'boy.riv?v=1',
      canvas: document.getElementById('hero-avatar'),
      autoplay: true,
      stateMachines: 'State Machine 1',
      onLoad: () => {
        r.resizeDrawingSurfaceToCanvas();
      }
    });
  } else {
    console.warn("Rive Canvas Web SDK not found. Retrying in 1s...");
    setTimeout(() => {
      const RiveRetry = (typeof rive !== 'undefined') ? rive : ((typeof Rive !== 'undefined') ? Rive : null);
      if (RiveRetry && RiveRetry.Rive) {
        if (RiveRetry.RuntimeLoader) {
          RiveRetry.RuntimeLoader.setWasmUrl('rive.wasm?v=1');
        }
        const r2 = new RiveRetry.Rive({
          src: 'boy.riv?v=1',
          canvas: document.getElementById('hero-avatar'),
          autoplay: true,
          stateMachines: 'State Machine 1',
          onLoad: () => {
            r2.resizeDrawingSurfaceToCanvas();
          }
        });
      }
    }, 1000);
  }
};
})();
