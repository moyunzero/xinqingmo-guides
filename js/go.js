(function () {
  var cfg = window.XINQING || {};
  var store = cfg.store || "https://apps.apple.com/cn/app/心晴mo/id6759703686";
  var link = document.getElementById("store");
  if (link) link.href = store;
  window.setTimeout(function () {
    location.replace(store);
  }, 700);
})();
