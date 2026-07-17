import { renderSite } from './render.js';

/* ==================== 1. THEME CONTROLS ==================== */

const root = document.documentElement;
const toggle = document.querySelector('#theme-toggle');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');

// Applies a theme and keeps the toggle accessible to screen-reader users.
function setTheme(theme) {
  root.dataset.theme = theme;
  toggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
}

// Use a saved choice when one exists; otherwise follow the visitor's OS setting.
setTheme(localStorage.getItem('theme') || (systemTheme.matches ? 'dark' : 'light'));

// Save a visitor's manual choice so it persists between page visits.
toggle.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', next);
  setTheme(next);
});

// Continue following OS preference changes only when the visitor has not chosen a theme.
systemTheme.addEventListener('change', event => {
  if (!localStorage.getItem('theme')) {
    setTheme(event.matches ? 'dark' : 'light');
  }
});

/* ==================== 2. SITE INITIALIZATION ==================== */

// Builds every dynamic section from the content exported by js/data.js.
renderSite();
