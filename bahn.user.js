// ==UserScript==
// @name            Save Search values for bahn.de
// @name:de         Speichere Suchangaben auf bahn.de
// @namespace       https://marie.cologne
// @match           https://www.bahn.de/
// @grant           none
// @version         1.0
// @author          Marie Ramlow
// @source          https://codeberg.org/marie/bahn.de-search-userscript
// @description     Save search values for the search on https://bahn.de
// @description:de  Speichert die Suchangaben in der Suche auf https://bahn.de
// @license         GPL-3.0-or-later
// @run-at          document-start
// ==/UserScript==

if (localStorage.getItem("vuex") !== null) {
  console.log("[Userscript] loading old data")
  sessionStorage.setItem("vuex", localStorage.getItem("vuex"));
}

let { setItem } = Storage.prototype;

window.Storage.prototype.setItem = function (key, value) {
  if (this === window.sessionStorage && key === "vuex") {
    console.log("[Userscript] saving data");
    localStorage.setItem(key, value);
  }
  setItem.apply(this, arguments);
}
