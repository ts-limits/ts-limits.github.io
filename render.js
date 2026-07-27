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

  /* ---- 07 organizers ---- */
  $('org-grid').innerHTML = CONTENT.organizers
    .map(o => `<div class="org"><div class="name">${o.name}</div><div class="aff">${o.aff}</div></div>`).join('');
  const mail = `mailto:${CONTENT.contactEmail}`;
  $('org-contact').innerHTML = `Contact: <a href="${mail}">${CONTENT.contactEmail}</a>`;
  $('foot-email').href = mail;

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
