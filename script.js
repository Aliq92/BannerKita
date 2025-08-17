// Banner Kita interactivity — GitHub Pages safe (no frameworks)

// Mobile nav
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Editable price table stored in localStorage
const priceTable = document.getElementById('priceTable');
const editToggle = document.getElementById('editToggle');
const saveBtn = document.getElementById('savePrices');
const resetBtn = document.getElementById('resetPrices');

const STORAGE_KEY = 'bannerKitaPricesV1';

function getCells() {
  return priceTable ? priceTable.querySelectorAll('tbody td') : [];
}

function setEditable(enabled) {
  getCells().forEach(td => td.setAttribute('contenteditable', enabled ? 'true' : 'false'));
  editToggle?.setAttribute('aria-pressed', enabled ? 'true' : 'false');
  if (saveBtn) saveBtn.disabled = !enabled;
}

function saveToStorage() {
  if (!priceTable) return;
  const rows = Array.from(priceTable.querySelectorAll('tbody tr')).map(tr => 
    Array.from(tr.children).map(td => td.textContent.trim())
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(rows));
}

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw || !priceTable) return;
    const rows = JSON.parse(raw);
    const tbody = priceTable.querySelector('tbody');
    tbody.innerHTML = '';
    rows.forEach(cols => {
      const tr = document.createElement('tr');
      cols.forEach(text => {
        const td = document.createElement('td');
        td.textContent = text;
        td.setAttribute('contenteditable', 'false');
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
  } catch (e) {
    console.warn('Failed to load saved prices', e);
  }
}

function resetPrices() {
  localStorage.removeItem(STORAGE_KEY);
  location.reload();
}

editToggle?.addEventListener('click', () => {
  const enabled = editToggle.getAttribute('aria-pressed') !== 'true';
  setEditable(enabled);
});

saveBtn?.addEventListener('click', () => {
  saveToStorage();
  setEditable(false);
});

resetBtn?.addEventListener('click', () => {
  if (confirm('Reset the price list to defaults?')) resetPrices();
});

// Load saved prices at startup
loadFromStorage();

// Ensure links are easy to change without editing HTML everywhere
(function quickLinkOverrides() {
  const stored = localStorage.getItem('bannerKitaLinksV1');
  if (!stored) return;
  try {
    const cfg = JSON.parse(stored);
    const wa = document.getElementById('whatsappBtn');
    const fb = document.getElementById('facebookBtn');
    if (wa && cfg.whatsapp) wa.href = cfg.whatsapp;
    if (fb && cfg.facebook) fb.href = cfg.facebook;
  } catch {}
})();
