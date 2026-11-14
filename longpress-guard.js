/* 長押しメニューの抑止は、ドラッグのつかみ所（グリップ）の上だけに限る。
   2026-11-07 作成（全面抑止）→ 2026-11-14 本人指示でグリップ限定に変更。
   グリップ以外では、コピー＆ペーストや長押しメニューなど
   ブラウザ標準の動きを一切止めない。 */
(function () {
  var GRIP = ".layout-arrange-handle, .layout-inner-handle";
  document.addEventListener(
    "contextmenu",
    function (e) {
      var t = e.target;
      if (t && t.closest && t.closest(GRIP)) {
        e.preventDefault();
      }
    },
    true
  );
})();
