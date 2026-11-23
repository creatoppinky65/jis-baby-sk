// 舊網址轉址（由 scripts/prepare-pages.mjs 產生，ISSUE-136）
(function () {
  var base = "/jis-baby-sk/";
  var path = location.pathname;
  var rest = path.indexOf(base) === 0 ? path.slice(base.length) : '';
  location.replace(base + '#/' + rest + location.search);
})();
