(function () {
  console.log('LANG SWITCH HOOK LOADED (radix menuitems)');

  var LOCALES = ['en', 'ru'];
  var DEFAULT = 'en';

  function detectLocale(path) {
    var m = path.match(/^\/([a-z]{2}(?:-[A-Z]{2})?)(\/|$)/);
    return m && LOCALES.indexOf(m[1]) > -1 ? m[1] : DEFAULT;
  }

  function swapLocale(path, to) {
    var cur = detectLocale(path);
    if (cur === to) return path;
    if (LOCALES.indexOf(cur) > -1) {
      if (path === '/' + cur) return '/' + to;
      return path.replace(new RegExp('^/' + cur + '(\\/|$)'), '/' + to + '$1');
    }
    return path === '/' ? '/' + to : '/' + to + (path.startsWith('/') ? '' : '/') + path;
  }

  function getTargetLocaleFromEl(el) {
    // По id вида localization-select-item-en/ru
    var id = el.id || '';
    var m = id.match(/^localization-select-item-([a-z]{2})(?:-|$)/) || id.match(/^localization-select-item-([a-z]{2})$/);
    if (m && LOCALES.indexOf(m[1]) > -1) return m[1];

    // По data-атрибутам
    if (el.dataset && el.dataset.locale && LOCALES.indexOf(el.dataset.locale) > -1) return el.dataset.locale;

    // По тексту
    var txt = (el.textContent || '').toLowerCase();
    if (txt.includes('english') || txt.trim() === 'en') return 'en';
    if (txt.includes('рус') || txt.includes('russian') || txt.trim() === 'ru') return 'ru';

    return null;
  }

  function intercept(e) {
    var item = e.target && e.target.closest('[id^="localization-select-item-"], [role="menuitem"][id*="localization"]');
    if (!item) return;

    var to = getTargetLocaleFromEl(item);
    if (!to) return;

    // Стоп штатного поведения (редирект на корень языка)
    e.preventDefault();
    e.stopPropagation();
    if (typeof e.stopImmediatePropagation === 'function') e.stopImmediatePropagation();

    var newPath = swapLocale(location.pathname, to);
    var url = newPath + location.search + location.hash;
    console.log('[LANG] ->', to, '=>', url);
    location.assign(url);
  }

  // Радикс-меню часто триггерит на pointer/mouse/keydown — перехватим всё и в capture
  document.addEventListener('click', intercept, true);
  document.addEventListener('pointerdown', intercept, true);
  document.addEventListener('mousedown', intercept, true);
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    intercept(e);
  }, true);
})();