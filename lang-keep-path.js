(function () {
  // настрой под свои локали
  var LOCALES = ['en', 'ru'];
  var DEFAULT = 'en';

  function detectLocale(path) {
    var m = path.match(/^\/([a-z]{2}(?:-[A-Z]{2})?)(\/|$)/);
    if (m && LOCALES.includes(m[1])) return m[1];
    return DEFAULT;
  }

  function swapLocale(path, to) {
    var cur = detectLocale(path);
    if (cur === to) return path;

    if (LOCALES.includes(cur)) {
      if (path === '/' + cur) return '/' + to;
      return path.replace(new RegExp('^/' + cur + '(\\/|$)'), '/' + to + '$1');
    }
    // если без префикса — добавим
    if (path === '/') return '/' + to;
    return '/' + to + (path.startsWith('/') ? '' : '/') + path;
  }

  // перехват кликов по элементам свитчера языка
  document.addEventListener('click', function (e) {
    var el = e.target.closest('a,button,[role="menuitem"],[data-locale]');
    if (!el) return;

    // пробуем вытащить целевую локаль из атрибутов/текста
    var target =
      el.getAttribute('data-locale') ||
      el.getAttribute('data-lang') ||
      (el.dataset ? el.dataset.locale : '');

    if (!target) {
      var txt = (el.textContent || '').trim().toLowerCase();
      if (txt === 'en' || txt.includes('english')) target = 'en';
      if (txt === 'ru' || txt.includes('рус') || txt.includes('russian')) target = 'ru';
    }

    if (!target || !LOCALES.includes(target)) return;

    // ограничим перехват только меню языка (классы Mintlify могут меняться,
    // поэтому берём несколько эвристик)
    var isLangUI = el.closest(
      '.option-dropdown, [id*="lang"], [class*="lang"], [aria-label*="Language"], [aria-label*="язык"]'
    );
    if (!isLangUI) return;

    e.preventDefault();
    var newPath = swapLocale(location.pathname, target);
    var url = newPath + location.search + location.hash;
    location.assign(url);
  }, true);
})();