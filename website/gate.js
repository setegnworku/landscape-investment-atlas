/**
 * Soft password gate for the static GitHub Pages site.
 * Note: this hides the UI for casual visitors; it is not strong server-side security.
 * Password: landscape
 */
(function () {
  var STORAGE_KEY = "lia_site_unlock_v1";
  var PASSWORD = "landscape";

  function unlocked() {
    try {
      return sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch (e) {
      return false;
    }
  }

  function setUnlocked() {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch (e) {}
  }

  function revealMedia() {
    document.querySelectorAll("video[data-src]").forEach(function (video) {
      var src = video.getAttribute("data-src");
      if (!src) return;
      if (!video.querySelector("source")) {
        var source = document.createElement("source");
        source.type = "video/mp4";
        source.src = src;
        video.appendChild(source);
      } else {
        video.querySelector("source").src = src;
      }
      video.removeAttribute("data-src");
      video.load();
    });

    document.querySelectorAll("a[data-download-src]").forEach(function (link) {
      var href = link.getAttribute("data-download-src");
      if (!href) return;
      link.setAttribute("href", href);
      link.setAttribute("download", link.getAttribute("data-download-name") || "Setegn_video.mp4");
      link.removeAttribute("data-download-src");
      link.removeAttribute("data-download-name");
      link.classList.remove("is-disabled");
      link.removeAttribute("aria-disabled");
    });
  }

  function openSite() {
    document.documentElement.classList.remove("site-locked");
    var gate = document.getElementById("site-gate");
    if (gate) gate.hidden = true;
    revealMedia();
  }

  function buildGate() {
    if (document.getElementById("site-gate")) return;

    var gate = document.createElement("div");
    gate.id = "site-gate";
    gate.setAttribute("role", "dialog");
    gate.setAttribute("aria-modal", "true");
    gate.setAttribute("aria-labelledby", "site-gate-title");
    gate.innerHTML =
      '<div class="site-gate-card">' +
      '  <p class="site-gate-eyebrow">Private draft</p>' +
      '  <h1 id="site-gate-title">Landscape Investment Atlas</h1>' +
      '  <p class="site-gate-lead">Enter the site password to view the concept pages and video.</p>' +
      '  <form id="site-gate-form" class="site-gate-form" autocomplete="off">' +
      '    <label for="site-gate-password">Password</label>' +
      '    <input id="site-gate-password" name="password" type="password" required autofocus />' +
      '    <button type="submit" class="btn btn-primary">Enter site</button>' +
      '    <p id="site-gate-error" class="site-gate-error" hidden>Incorrect password. Try again.</p>' +
      "  </form>" +
      "</div>";

    document.body.prepend(gate);

    var form = document.getElementById("site-gate-form");
    var input = document.getElementById("site-gate-password");
    var error = document.getElementById("site-gate-error");

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var value = (input.value || "").trim().toLowerCase();
      if (value === PASSWORD) {
        setUnlocked();
        openSite();
        return;
      }
      error.hidden = false;
      input.value = "";
      input.focus();
    });
  }

  document.documentElement.classList.add("site-locked");

  function boot() {
    buildGate();
    if (unlocked()) {
      openSite();
    } else {
      var input = document.getElementById("site-gate-password");
      if (input) input.focus();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
