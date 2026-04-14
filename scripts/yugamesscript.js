/* ── Slideshow ── */
var cur = 0;
var total = 5;

function goSlide(n) {
  document.querySelectorAll('.slide').forEach(function(s, i) {
    s.classList.toggle('on', i === n);
  });
  document.querySelectorAll('.dot').forEach(function(d, i) {
    d.classList.toggle('on', i === n);
  });
  cur = n;
}

setInterval(function() {
  cur = (cur + 1) % total;
  goSlide(cur);
}, 3800);

/* ── Kategorie-Filter (inkl. Favoriten) ── */
function filterCat(cat, btn) {
  document.querySelectorAll('.cat-tab').forEach(function(b) {
    b.classList.remove('on');
  });
  btn.classList.add('on');

  document.querySelectorAll('.gcard').forEach(function(c) {
    var visible;
    if (cat === 'favorites') {
      visible = c.dataset.fav === 'true';
    } else if (cat === 'all') {
      visible = true;
    } else {
      visible = c.dataset.cat === cat;
    }
    c.style.display = visible ? 'block' : 'none';
  });
}

/* ── Recruiter-Toggle ── */
var isRec = false;

function toggleRec() {
  isRec = !isRec;
  document.getElementById('vis').classList.toggle('off', isRec);
  document.getElementById('rec').classList.toggle('on', isRec);
  var label = document.getElementById('rec-label');
  label.textContent = isRec ? '← Zurück' : 'Recruiter';
  var navItem = label.closest('.nl');
  if (navItem) navItem.classList.toggle('active', isRec);
}

/* ── Sprach-Toggle (Platzhalter) ── */
var isEN = false;

function toggleLang() {
  isEN = !isEN;
  document.getElementById('lang-label').textContent = isEN ? 'EN' : 'DE';
}

/* ── Skill-Balken: Animation beim Einscrollieren ── */
function animateSkills() {
  document.querySelectorAll('.skill-bar[data-width]').forEach(function(bar) {
    var rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60 && !bar.dataset.animated) {
      bar.dataset.animated = 'true';
      bar.style.width = bar.dataset.width;
    }
  });
}

window.addEventListener('scroll', animateSkills, { passive: true });
window.addEventListener('load', animateSkills);

/* ── Footer: aktuelles Jahr automatisch ── */
var yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
