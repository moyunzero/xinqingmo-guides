(function () {
  var cfg = window.XINQING || {};
  if (cfg.origin) {
    var root = cfg.origin.replace(/\/$/, "");
    var base = new URL(root + "/").pathname;
    var path = location.pathname;
    if (base !== "/" && path.indexOf(base) === 0) {
      path = path.slice(base.length - 1);
    }
    var link = document.createElement("link");
    link.rel = "canonical";
    link.href = root + path;
    document.head.appendChild(link);
  }
})();
