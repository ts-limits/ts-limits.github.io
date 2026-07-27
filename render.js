/* =====================================================================
   TS-LIMITS — RENDERER
   Reads the CONTENT object (content.js) and fills the page.
   You normally never need to edit this file; edit content.js instead.
   ===================================================================== */
(function () {
  const $ = (id) => document.getElementById(id);
  const esc = (s) => s; // content is trusted (authored by you), HTML allowed

  /* ---- banner meta chips ---- */
  $('meta-chips').innerHTML = CONTENT.meta
    .map(m => `<span class="chip"><b>${m.k}</b> · ${m.v}</span>`).join('');
  $('cd-label').innerHTML = CONTENT.countdownLabel;

  /* ---- 01 about ---- */
  $('about-body').innerHTML = CONTENT.about.map(p => `<p>${p}</p>`).join('');

  /* ---- 02 domains ---- */
  $('domains-intro').innerHTML = CONTENT.domainsIntro;
  $('domains-grid').innerHTML = CONTENT.domains
    .map(d => `<div class="domain"><h4>${d.title}</h4><p>${d.text}</p></div>`).join('');

  /* ---- 03 cfp ---- */
  $('cfp-intro').innerHTML = CONTENT.cfpIntro;
  $('cfp-rows').innerHTML = CONTENT.bottlenecks.map((b, i) =>
    `<div class="row"><div class="n">${String(i + 1).padStart(2, '0')}</div>` +
    `<div class="c"><h3>${b.title}</h3><p>${b.text}</p></div></div>`).join('');

  /* ---- 04 topics ---- */
  $('topics-list').innerHTML = CONTENT.topics.map(t => `<li>${t}</li>`).join('');

  /* ---- 05 dates ---- */
  $('dates-rows').innerHTML = CONTENT.dates.map(d =>
    `<div class="tl-row${d.hl ? ' hl' : ''}"><span class="tl-date">${d.date}</span>` +
    `<span class="tl-what">${d.what}</span><span class="tl-tag">${d.tag}</span></div>`).join('');
  $('dates-note').innerHTML = CONTENT.datesNote;

  /* ---- 06 submit ---- */
  $('submit-h').textContent = CONTENT.submit.heading;
  $('submit-p').textContent = CONTENT.submit.text;
  const btn = $('submit-btn');
  btn.textContent = CONTENT.submit.buttonLabel;
  if (CONTENT.submit.buttonUrl && CONTENT.submit.buttonUrl !== '#') {
    btn.href = CONTENT.submit.buttonUrl;
    btn.removeAttribute('onclick');
  }

  /* ---- initials fallback for missing photos ---- */
  const initials = (name) => name.replace(/[^\p{L}\s]/gu, '').split(/\s+/)
    .filter(Boolean).map(w => w[0]).slice(0, 2).join('').toUpperCase();
  // Show the image; if it's missing or fails to load, reveal the initials placeholder.
  const photoBlock = (photo, name, cls) =>
    `<div class="${cls}-photo"><img src="${photo}" alt="${name}" loading="lazy" ` +
    `onload="this.nextElementSibling.style.display='none';" ` +
    `onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">` +
    `<span class="${cls}-ph" style="display:flex;">${initials(name)}</span></div>`;

  /* ---- 05 speakers ---- */
  $('speakers-grid').innerHTML = CONTENT.speakers.map(s => {
    const tag = s.status
      ? `<span class="spk-status ${s.status}">${s.status}</span>` : '';
    const talk = s.talk ? `<div class="spk-talk">“${s.talk}”</div>` : '';
    return `<div class="spk">
      ${photoBlock(s.photo, s.name, 'spk')}
      <div class="spk-body">
        <div class="spk-head"><span class="spk-name">${s.name}</span>${tag}</div>
        <div class="spk-role">${s.role}</div>
        ${talk}
        <p class="spk-bio">${s.bio}</p>
      </div>
    </div>`;
  }).join('');

  /* ---- 07 organizers ---- */
  $('org-grid').innerHTML = CONTENT.organizers.map(o =>
    `<div class="org">
      ${photoBlock(o.photo, o.name, 'org')}
      <div class="org-name">${o.name}</div>
      <div class="org-aff">${o.aff}</div>
      ${o.bio ? `<p class="org-bio">${o.bio}</p>` : ''}
    </div>`).join('');
  const mail = `mailto:${CONTENT.contactEmail}`;
  $('org-contact').innerHTML = `Contact: <a href="${mail}">${CONTENT.contactEmail}</a>`;
  $('foot-email').href = mail;
  if (CONTENT.tagline) $('tagline').textContent = CONTENT.tagline;

  /* ---- scroll reveal ---- */
  const io = new IntersectionObserver((es) => {
    es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  /* ---- countdown ---- */
  const d = CONTENT.deadline;
  // AoE (UTC-12): local deadline hour at UTC-12 == UTC + 12h. Convert to a UTC instant.
  const target = Date.UTC(d.year, d.month - 1, d.day, d.hour, d.minute) + 12 * 3600 * 1000;
  const dEl = $('cd-d'), hEl = $('cd-h'), mEl = $('cd-m'), sEl = $('cd-s'), units = $('cd-units');
  const pad = (n) => String(n).padStart(2, '0');
  function tick() {
    const diff = target - Date.now();
    if (diff <= 0) { units.innerHTML = '<span class="cd-closed">Submissions closed</span>'; return; }
    const s = Math.floor(diff / 1000);
    dEl.textContent = Math.floor(s / 86400);
    hEl.textContent = pad(Math.floor((s % 86400) / 3600));
    mEl.textContent = pad(Math.floor((s % 3600) / 60));
    sEl.textContent = pad(s % 60);
    setTimeout(tick, 1000);
  }
  tick();
})();