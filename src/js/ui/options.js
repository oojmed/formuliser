import * as Settings from '/js/info/settings';

export function init() {
  document.getElementById("install-switch").onchange = function() {
    Settings.installPrompts = document.getElementById("install-switch").checked;
  };

  document.getElementById("autochange-switch").onchange = function() {
    Settings.autoChange = document.getElementById("autochange-switch").checked;
  };

  document.getElementById("simplify-switch").onchange = function() {
    Settings.simplify = document.getElementById("simplify-switch").checked;
  };

  document.getElementById("reverse-switch").onchange = function() {
    Settings.reverse = document.getElementById("reverse-switch").checked;
  };
}