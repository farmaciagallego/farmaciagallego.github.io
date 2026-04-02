(function () {
  var STORAGE_KEY = 'farmacia-lang';

  function setLang(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    document.querySelectorAll('[data-lang-toggle]').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.langToggle === lang);
    });
  }

  function detectLang() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return saved;
    var nav = navigator.language || navigator.userLanguage || '';
    return nav.startsWith('en') ? 'en' : 'es';
  }

  document.addEventListener('DOMContentLoaded', function () {
    setLang(detectLang());

    document.querySelectorAll('[data-lang-toggle]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLang(this.dataset.langToggle);
      });
    });
  });
})();
