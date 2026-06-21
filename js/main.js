/* Chola Mandala Mahaa Samsthaanam — interactions */
(function () {
  'use strict';

  /* ---- sticky nav ---- */
  var nav = document.getElementById('nav');
  var onScroll = function () {
    if (window.scrollY > 40) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- mobile menu ---- */
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  var closeMenu = function () { links.classList.remove('open'); toggle.classList.remove('open'); };
  toggle.addEventListener('click', function () {
    links.classList.toggle('open');
    toggle.classList.toggle('open');
  });
  Array.prototype.forEach.call(links.querySelectorAll('a'), function (a) {
    a.addEventListener('click', closeMenu);
  });

  /* ---- scroll reveal ---- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---- animated counters ---- */
  var counters = document.querySelectorAll('.num[data-count]');
  var fmt = function (n) { return n.toLocaleString('en-IN'); };
  var runCount = function (el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    var plain = el.getAttribute('data-plain'); // years: no grouping
    var suffix = el.getAttribute('data-suffix') || '';
    var dur = 1600, start = null;
    var step = function (ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = Math.floor(eased * target);
      el.textContent = (plain ? String(val) : fmt(val)) + (p === 1 ? suffix : '');
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = (plain ? String(target) : fmt(target)) + suffix;
    };
    requestAnimationFrame(step);
  };
  if ('IntersectionObserver' in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { runCount(e.target); cio.unobserve(e.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { cio.observe(el); });
  } else {
    counters.forEach(runCount);
  }

  /* ---- contact form (front-end only; no backend yet) ---- */
  var form = document.getElementById('contactForm');
  var note = document.getElementById('formNote');
  if (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var name = document.getElementById('fn').value.trim();
      var email = document.getElementById('fe').value.trim();
      var msg = document.getElementById('fm').value.trim();
      if (!name || !email || !msg) {
        note.textContent = 'Please share your name, email and a message.';
        note.style.color = '#e6c45e';
        return;
      }
      // Placeholder behaviour — wire to email/CRM when contact details are available.
      note.textContent = 'Thank you, ' + name.split(' ')[0] + '. Your message has been received. 🙏';
      note.style.color = '#e6c45e';
      form.reset();
    });
  }

  /* ---- footer year ---- */
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();
})();
