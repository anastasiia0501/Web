
const screens = ['onb1','onb2','onb3','login','register'];

function show(name) {
    screens.forEach(s => {
    const el = document.getElementById('screen-' + s);
    if (!el) return;
    if (s === name) {
        el.classList.remove('hidden');
        requestAnimationFrame(() => el.classList.add('show'));
    } else {
        el.classList.remove('show');
        el.classList.add('hidden');
    }
    });
    window.scrollTo({ top: 0, behavior: 'auto' });
}

document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-goto]');
    if (!btn) return;
    e.preventDefault();
    const to = btn.getAttribute('data-goto');
    if (screens.includes(to)) show(to);
});

// старт — Екран 1
show('onb1');
