(function () {
  "use strict";

  var CONTENT = window.SITE_CONTENT;
  var LANGS = ["pl", "en", "de"];
  var STORAGE_KEY = "wojtas_lang";

  var currentLang = "en";
  var currentFilter = "all";

  function detectLang() {
    var stored = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      stored = null;
    }
    if (stored && LANGS.indexOf(stored) !== -1) return stored;

    var browserLang = (navigator.language || "en").slice(0, 2).toLowerCase();
    if (LANGS.indexOf(browserLang) !== -1) return browserLang;

    return "en";
  }

  function saveLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* localStorage unavailable, ignore */
    }
  }

  // Resolves a value that may be a plain string or an object keyed by
  // language (e.g. { en: "...", pl: "...", de: "" }). Falls back to English
  // when the current language's string is empty (used for de placeholders).
  function localize(value) {
    if (typeof value === "string") return value;
    return value[currentLang] || value.en || "";
  }

  function t(uiKey) {
    return (CONTENT.ui[currentLang] && CONTENT.ui[currentLang][uiKey]) || CONTENT.ui.en[uiKey] || "";
  }

  function categoryLabel(categoryId) {
    var cat = CONTENT.categories.filter(function (c) { return c.id === categoryId; })[0];
    return cat ? t(cat.key) : categoryId;
  }

  function stripProtocol(url) {
    return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  }

  /* ===== Static text bound with data-i18n / data-field ===== */

  function applyStaticText() {
    document.documentElement.lang = currentLang;
    document.title = localize(CONTENT.meta.title);

    var descEl = document.querySelector('meta[name="description"]');
    if (descEl) descEl.setAttribute("content", localize(CONTENT.meta.description));

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });

    document.querySelectorAll("[data-field]").forEach(function (el) {
      var field = el.getAttribute("data-field");
      el.textContent = localize(CONTENT[field]);
    });
  }

  /* ===== Language switcher ===== */

  function renderLangSwitch() {
    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      var lang = btn.getAttribute("data-lang-btn");
      btn.setAttribute("aria-pressed", String(lang === currentLang));
      btn.onclick = function () {
        if (lang === currentLang) return;
        currentLang = lang;
        saveLang(lang);
        renderAll();
      };
    });
  }

  /* ===== Filters ===== */

  function renderFilters() {
    var container = document.getElementById("filters");
    container.innerHTML = "";
    container.appendChild(buildFilterButton("all", t("filterAll")));
    CONTENT.categories.forEach(function (cat) {
      container.appendChild(buildFilterButton(cat.id, t(cat.key)));
    });
  }

  function buildFilterButton(id, label) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "filter-btn";
    btn.textContent = label;
    btn.setAttribute("aria-pressed", String(currentFilter === id));
    btn.addEventListener("click", function () {
      if (currentFilter === id) return;
      currentFilter = id;
      renderFilters();
      renderProjects();
    });
    return btn;
  }

  /* ===== Projects grid ===== */

  function renderProjects() {
    var grid = document.getElementById("projects-grid");
    grid.innerHTML = "";

    var list = CONTENT.projects.filter(function (p) {
      return currentFilter === "all" || p.categories.indexOf(currentFilter) !== -1;
    });

    list.forEach(function (project) {
      grid.appendChild(buildCard(project));
    });
  }

  function buildCard(project) {
    var card = document.createElement("article");
    card.className = "project-card";

    var top = document.createElement("div");
    top.className = "card-top";

    var index = document.createElement("span");
    index.className = "card-index mono";
    index.textContent = project.index;
    top.appendChild(index);

    var badges = document.createElement("div");
    badges.className = "card-badges";
    project.categories.forEach(function (catId) {
      var badge = document.createElement("span");
      badge.className = "card-badge";
      badge.textContent = categoryLabel(catId);
      badges.appendChild(badge);
    });
    top.appendChild(badges);
    card.appendChild(top);

    var name = document.createElement("h3");
    name.className = "card-name";
    name.textContent = project.name;
    card.appendChild(name);

    var hook = document.createElement("p");
    hook.className = "card-hook";
    hook.textContent = localize(project.hook);
    card.appendChild(hook);

    var imageWrap = document.createElement("div");
    imageWrap.className = "card-image-wrap";
    var img = document.createElement("img");
    img.src = project.image;
    img.alt = localize(project.imageAlt);
    img.decoding = "async";
    imageWrap.appendChild(img);
    card.appendChild(imageWrap);

    var desc = document.createElement("p");
    desc.className = "card-desc";
    desc.textContent = localize(project.description);
    card.appendChild(desc);

    var tech = document.createElement("div");
    tech.className = "card-tech";
    project.tech.forEach(function (item) {
      var tag = document.createElement("span");
      tag.className = "tech-tag";
      tag.textContent = item;
      tech.appendChild(tag);
    });
    card.appendChild(tech);

    var links = document.createElement("div");
    links.className = "card-links";

    var repoLink = document.createElement("a");
    repoLink.href = project.repo;
    repoLink.target = "_blank";
    repoLink.rel = "noopener";
    repoLink.textContent = t("viewRepo");
    links.appendChild(repoLink);

    if (project.demo) {
      var demoLink = document.createElement("a");
      demoLink.href = project.demo;
      demoLink.target = "_blank";
      demoLink.rel = "noopener";
      demoLink.textContent = t("liveDemo");
      links.appendChild(demoLink);
    }

    card.appendChild(links);

    return card;
  }

  /* ===== Contact ===== */

  function renderContact() {
    var panel = document.getElementById("contact-panel");
    panel.innerHTML = "";

    panel.appendChild(buildContactRow(t("contactEmailLabel"), CONTENT.contact.email, "mailto:" + CONTENT.contact.email));

    if (CONTENT.contact.phone) {
      var telHref = "tel:" + CONTENT.contact.phone.replace(/[^+\d]/g, "");
      panel.appendChild(buildContactRow(t("contactPhoneLabel"), CONTENT.contact.phone, telHref));
    }

    panel.appendChild(buildContactRow(t("contactGithubLabel"), stripProtocol(CONTENT.contact.github), CONTENT.contact.github));

    if (CONTENT.contact.linkedin) {
      panel.appendChild(buildContactRow(t("contactLinkedinLabel"), stripProtocol(CONTENT.contact.linkedin), CONTENT.contact.linkedin));
    }
  }

  function buildContactRow(label, valueText, href) {
    var row = document.createElement("div");
    row.className = "contact-row";

    var dt = document.createElement("dt");
    dt.textContent = label;
    row.appendChild(dt);

    var dd = document.createElement("dd");
    var link = document.createElement("a");
    link.href = href;
    link.textContent = valueText;
    if (href.indexOf("http") === 0) {
      link.target = "_blank";
      link.rel = "noopener";
    }
    dd.appendChild(link);
    row.appendChild(dd);

    return row;
  }

  /* ===== Init ===== */

  function renderAll() {
    applyStaticText();
    renderLangSwitch();
    renderFilters();
    renderProjects();
    renderContact();
  }

  document.addEventListener("DOMContentLoaded", function () {
    currentLang = detectLang();
    renderAll();
  });
})();
