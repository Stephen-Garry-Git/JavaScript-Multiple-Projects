'use strict';

const toggleBtn = document.getElementById('toggleBtn');
const navLinks = document.getElementById('navLinks');

if (toggleBtn && navLinks) {
  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}
