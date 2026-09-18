/* =========================================================
   ANAHATA MUSIC ACADEMY — V1 INTERACTION ENGINE
   Inspired by a vibrant, animated coding language:
   layered atmosphere + intentional motion + responsive UI.
   ========================================================= */

const CONFIG = {
  youtube: "YOUR_YOUTUBE_URL",
  instagramPersonal: "https://www.instagram.com/ishaansaripalli/",
  instagramMusic: "https://www.instagram.com/ishaan_vocals/"
};

const PROGRAMMES = {
  tyagaraja: {
    type: "THEMATIC CONCERT",
    title: "Śrī Sadguru Tyāgarāja Ārādhana",
    subtitle: "Thematic Concert",
    meta: "ONLINE • YOUTUBE",
    intro: "A thematic concert presented through Carnatic music, performance and deeper exploration.",
    sections: [
      ["The Experience", "The programme brings together selected Carnatic compositions and musical exploration, creating a space where listening and deeper contextual understanding can meet."],
      ["Musical Exploration", "The concert includes musical presentation with manōdharma elements such as rāga ālāpana, tānam, svara kalpanā and niraval."],
      ["Beyond Performance", "The programme also opens into deeper philosophical and spiritual insights connected with the thematic material."]
    ]
  },
  manasa: {
    type: "EXPLORATION SERIES • EPISODE 1",
    title: "Manasa Sanchara Re!",
    subtitle: "Śrī Rāma Karṇāmṛtam",
    meta: "ONLINE • YOUTUBE • APPROX. 3 HOURS",
    intro: "An extended exploration connecting Carnatic compositions, sacred literature, kṣetra traditions, Purāṇic narratives and Indian philosophical thought.",
    sections: [
      ["The Idea", "Manasa Sanchara Re! is conceived as an invitation to connect the dots — between compositions, texts, places, stories and ideas — and undertake the exploration inwardly as well."],
      ["Episode 1", "The first episode centres on Śrī Rāma Karṇāmṛtam of Śrī Ādi Śaṅkarācārya, while also exploring related compositions of Śrī Sadguru Tyāgarāja Swami and Nāda Jyoti Śrī Muthuswāmi Dīkṣitar."],
      ["A Continuing Journey", "Episode 2 is currently under process. Details will be revealed when the time is right."]
    ]
  },
  soundarya: {
    type: "ONLINE COURSE",
    title: "Soundarya Lahari",
    subtitle: "An immersive study across generations",
    meta: "GOOGLE MEET • WEDNESDAY / THURSDAY / FRIDAY",
    intro: "A structured online course exploring the ślokas of Soundarya Lahari through pronunciation, practice, textual study and deeper traditional perspectives.",
    sections: [
      ["Class Format", "Classes were conducted on Google Meet every Wednesday, Thursday and Friday from 6:00 PM to 7:00 PM IST. A dedicated doubt session followed from 7:00 PM to 7:30 PM."],
      ["Beyond the Regular Class", "Individual doubt sessions were also conducted when needed, alongside dedicated practice sessions so learners could practise the ślokas they had learned."],
      ["Across Generations", "Learners participated across generations — from people in their 20s to senior learners in their 70s and 80s."],
      ["Learning Approach", "The course included systematic word-by-word learning, pronunciation, Telugu text, practice and deeper philosophical connections with related traditional texts and perspectives."],
      ["What's Next", "A continuation of Soundarya Lahari is being planned for Google Meet. Details will be added to the website once finalised."]
    ]
  }
};

function $(selector, root = document) {
  return root.querySelector(selector);
}

function renderShell() {
  const shell = $("#site-shell");
  if (!shell) return;

  const page = document.body.dataset.page || "";

  shell.innerHTML = `
    <div class="ambient-layer" aria-hidden="true">
      <div class="aurora aurora-1"></div>
      <div class="aurora aurora-2"></div>
      <div class="aurora aurora-3"></div>
      <div class="grain"></div>
      <div id="stars"></div>
      <div class="cursor-glow"></div>
    </div>

    <header class="site-header">
      <a class="brand" href="index.html" aria-label="Anahata Music Academy home">
        <span class="brand-mark">◉</span>
        <span><strong>ANĀHATA</strong><small>MUSIC ACADEMY</small></span>
      </a>

      <nav class="desktop-nav" aria-label="Primary navigation">
        <a class="${page === "home" ? "active" : ""}" href="index.html">Home</a>
        <a class="${page === "about" ? "active" : ""}" href="about.html">About</a>
        <a class="${page === "academy" ? "active" : ""}" href="academy.html">Academy</a>
        <a class="${page === "community" ? "active" : ""}" href="community.html">Community</a>
        <a class="${page === "programmes" ? "active" : ""}" href="programmes.html">Programmes</a>
        <a class="${page === "founder" ? "active" : ""}" href="founder.html">Founder</a>
        <a class="nav-cta" href="connect.html">Connect ↗</a>
      </nav>

      <button class="mobile-menu" aria-label="Open navigation" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </header>

    <div class="mobile-nav" aria-hidden="true">
      <a href="index.html">Home</a><a href="about.html">About</a><a href="academy.html">Academy</a>
      <a href="community.html">Community</a><a href="programmes.html">Programmes</a><a href="founder.html">Founder</a>
      <a href="connect.html">Connect ↗</a>
    </div>
  `;

  const mobileButton = $(".mobile-menu");
  const mobileNav = $(".mobile-nav");

  mobileButton?.addEventListener("click", () => {
    const open = mobileButton.getAttribute("aria-expanded") === "true";
    mobileButton.setAttribute("aria-expanded", String(!open));
    mobileNav.classList.toggle("open", !open);
    mobileNav.setAttribute("aria-hidden", String(open));
  });

  mobileNav?.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      mobileButton.setAttribute("aria-expanded", "false");
    });
  });
}

function renderFooter() {
  const footer = $("#site-footer");
  if (!footer) return;

  footer.innerHTML = `
    <footer class="site-footer">
      <div class="footer-top">
        <div>
          <div class="footer-brand">ANĀHATA</div>
          <p>Where Nāda becomes a journey into knowledge.</p>
        </div>
        <div class="footer-links">
          <a href="about.html">About</a><a href="academy.html">Academy</a><a href="community.html">Community</a>
          <a href="programmes.html">Programmes</a><a href="founder.html">Founder</a><a href="connect.html">Connect</a>
        </div>
        <div class="footer-social">
          <a href="${CONFIG.instagramPersonal}" target="_blank" rel="noopener">@ishaansaripalli</a>
          <a href="${CONFIG.instagramMusic}" target="_blank" rel="noopener">@ishaan_vocals</a>
          ${CONFIG.youtube !== "YOUR_YOUTUBE_URL" ? `<a href="${CONFIG.youtube}" target="_blank" rel="noopener">YouTube</a>` : `<span>YouTube link coming soon</span>`}
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} Anahata Music Academy</span>
        <span>Indian Music • Knowledge • Tradition • Exploration</span>
      </div>
    </footer>
  `;
}

function createStars() {
  const stars = $("#stars");
  if (!stars) return;

  const count = window.innerWidth < 700 ? 55 : 100;
  const frag = document.createDocumentFragment();

  for (let i = 0; i < count; i++) {
    const star = document.createElement("i");
    star.className = "star";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    const size = Math.random() * 2.2 + .5;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.setProperty("--twinkle", `${Math.random() * 3 + 2}s`);
    star.style.animationDelay = `${Math.random() * 4}s`;
    frag.appendChild(star);
  }
  stars.appendChild(frag);
}

function initCursor() {
  const glow = $(".cursor-glow");
  if (!glow || window.matchMedia("(pointer: coarse)").matches) return;

  window.addEventListener("mousemove", e => {
    glow.style.transform = `translate(${e.clientX - 140}px, ${e.clientY - 140}px)`;
  }, { passive: true });
}

function initReveal() {
  const items = document.querySelectorAll(".reveal, .wing-card, .experience-card, .archive-card, .connect-card, .mosaic-card, .academy-block");
  if (!items.length || !("IntersectionObserver" in window)) {
    items.forEach(el => el.classList.add("in-view"));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });

  items.forEach(el => observer.observe(el));
}

function initParallax() {
  const hero = $(".hero");
  const triad = $(".sacred-triad");
  if (!hero || !triad || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  hero.addEventListener("pointermove", e => {
    const rect = hero.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - .5;
    const y = (e.clientY - rect.top) / rect.height - .5;
    triad.style.transform = `translate(${x * 8}px, ${y * 5}px)`;
  });

  hero.addEventListener("pointerleave", () => {
    triad.style.transform = "";
  });
}

function initFilters() {
  const filters = document.querySelectorAll(".filter");
  const cards = document.querySelectorAll(".archive-card[data-category]");
  if (!filters.length) return;

  filters.forEach(button => {
    button.addEventListener("click", () => {
      filters.forEach(b => b.classList.remove("active"));
      button.classList.add("active");
      const filter = button.dataset.filter;

      cards.forEach(card => {
        const visible = filter === "all" || card.dataset.category.split(" ").includes(filter);
        card.classList.toggle("filtered-out", !visible);
      });
    });
  });
}

function renderProgramme() {
  const mount = $("#programme-detail");
  if (!mount) return;

  const params = new URLSearchParams(location.search);
  const id = params.get("id") || "tyagaraja";
  const data = PROGRAMMES[id] || PROGRAMMES.tyagaraja;

  document.title = `${data.title} | Anahata Music Academy`;

  mount.innerHTML = `
    <section class="programme-hero">
      <div class="section-kicker">${data.type}</div>
      <div class="programme-meta">${data.meta}</div>
      <h1>${data.title}</h1>
      <p class="programme-subtitle">${data.subtitle}</p>
      <p class="programme-intro">${data.intro}</p>
    </section>

    <section class="section programme-body">
      <div class="programme-main">
        ${data.sections.map((s, i) => `
          <article class="programme-section reveal">
            <span>0${i + 1}</span>
            <div><h2>${s[0]}</h2><p>${s[1]}</p></div>
          </article>
        `).join("")}
      </div>

      <aside class="programme-aside">
        <div class="aside-card">
          <div class="section-kicker">ANAHATA ARCHIVE</div>
          <h3>This programme is part of Anahata's growing body of work.</h3>
          <a class="btn btn-outline" href="programmes.html">Back to Programmes ↗</a>
        </div>
        ${id === "soundarya" ? `
          <div class="aside-card accent-card">
            <div class="section-kicker">NEXT</div>
            <h3>Continuation course</h3>
            <p>Details will be updated once finalised.</p>
          </div>` : ""}
        ${id === "manasa" ? `
          <div class="aside-card accent-card">
            <div class="section-kicker">COMING SOON</div>
            <h3>Manasa Sanchara Re! — Episode 2</h3>
            <p>The next journey is under process. The details remain a surprise.</p>
          </div>` : ""}
      </aside>
    </section>
  `;

  initReveal();
}

function copyPlaceholder() {
  const text = "Hello Anahata,\n\nI would like to enquire about...";
  navigator.clipboard?.writeText(text).then(() => {
    const status = $("#copy-status");
    if (status) status.textContent = "Enquiry template copied.";
  }).catch(() => {
    const status = $("#copy-status");
    if (status) status.textContent = text;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderShell();
  renderFooter();
  createStars();
  initCursor();
  initReveal();
  initParallax();
  initFilters();
  renderProgramme();
});
