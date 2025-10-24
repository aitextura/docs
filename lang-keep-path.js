(function () {
  console.log('LANG SWITCH HOOK LOADED');

  var LOCALES = ['en', 'ru'];
  var DEFAULT = 'en';

  function detectLocale(path) {
    var m = path.match(/^\/([a-z]{2}(?:-[A-Z]{2})?)(\/|$)/);
    if (m && LOCALES.indexOf(m[1]) > -1) return m[1];
    return DEFAULT;
  }

  function swapLocale(path, to) {
    var cur = detectLocale(path);
    if (cur === to) return path;

    if (LOCALES.indexOf(cur) > -1) {
      if (path === '/' + cur) return '/' + to;
      return path.replace(new RegExp('^/' + cur + '(\\/|$)'), '/' + to + '$1');
    }
    if (path === '/') return '/' + to;
    return '/' + to + (path.startsWith('/') ? '' : '/') + path;
  }

  function handle(e) {
    // Любая ссылка внутри документа
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a) return;

    // Берём pathname целевого href (без домена)
    var hrefPath = a.getAttribute('href');
    if (!hrefPath) return;

    // Нормализуем на случай относительных
    try {
      hrefPath = new URL(hrefPath, location.origin).pathname;
    } catch (_) { return; }

    // Реагируем ТОЛЬКО на переключатели языка (ссылки ровно на /en или /ru)
    var m = hrefPath.match(/^\/(en|ru)\/?$/);
    if (!m) return;

    var to = m[1];

    // Готовим новый путь: тот же current pathname, но с другой локалью
    var newPath = swapLocale(location.pathname, to);
    var url = newPath + location.search + location.hash;

    // Блокируем стандартную навигацию Mintlify
    e.preventDefault();
    e.stopPropagation();
    if (typeof e.stopImmediatePropagation === 'function') e.stopImmediatePropagation();

    // Переходим на нужный URL
    location.assign(url);
  }

  // Вешаемся максимально рано и на все основные типы взаимодействий
  document.addEventListener('click', handle, true);
  document.addEventListener('mousedown', handle, true);
  document.addEventListener('touchstart', handle, true);
})();