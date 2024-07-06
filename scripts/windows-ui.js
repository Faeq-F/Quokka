// From https://cdn.jsdelivr.net/npm/windows-ui-fabric@4.0.2/dist/windows-ui.min.js
const lc_storage_theme_key = "WinAppLocalTheme";
var root_ = document.documentElement;
function setDarkScheme() {
  root_.setAttribute("data-theme", "dark"),
    document.body.classList.add("dark-theme"),
    document.getElementById("app-navbar-theme-switch") &&
      (document.getElementById("app-navbar-theme-switch").checked = !0),
    localStorage.setItem(lc_storage_theme_key, "dark");
}
let _getCurrTheme_ = localStorage.getItem(lc_storage_theme_key);
const getColorScheme = () => {
  return window
    .getComputedStyle(root_)
    .getPropertyValue("color-scheme")
    .toString();
};
function setLightScheme() {
  root_.setAttribute("data-theme", "light"),
    document.body.classList.remove("dark-theme"),
    document.getElementById("app-navbar-theme-switch") &&
      (document.getElementById("app-navbar-theme-switch").checked = !1),
    localStorage.setItem(lc_storage_theme_key, "light");
}
function setSystemScheme() {
  localStorage.setItem(lc_storage_theme_key, "system"),
    (window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? setDarkScheme
      : setLightScheme)();
}
function toggleDayNight() {
  ("dark" === getColorScheme() ? setLightScheme : setDarkScheme)();
}
"dark" == _getCurrTheme_ && setDarkScheme(),
  window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches &&
    null == _getCurrTheme_ &&
    setDarkScheme(),
  "light" == _getCurrTheme_ && setLightScheme();
const DayNightSwitch = document.querySelectorAll("#app-navbar-theme-switch"),
  Appearance =
    (DayNightSwitch.forEach((e) => e.addEventListener("click", toggleDayNight)),
    {
      setDarkScheme: setDarkScheme,
      setLightScheme: setLightScheme,
      setSystemScheme: setSystemScheme,
      getColorScheme: getColorScheme,
    });
function getScreenOffset(e) {
  return window.innerHeight / 2 < e.getBoundingClientRect().top;
}
const AlertBarDismissals = document.querySelectorAll(
  '[data-win-dismiss="alert"]'
);
for (const a of AlertBarDismissals)
  a.addEventListener("click", () => {
    var e = a.closest(".app-alert-bar");
    e.parentNode.removeChild(e);
  });
const CollapseTriggers = document.querySelectorAll(
  '[data-win-toggle="collapse"]'
);
for (const a of CollapseTriggers) {
  let e = a.getAttribute("data-win-target"),
    t = document.querySelector(e);
  a.addEventListener("click", () => {
    if (t.classList.contains("show"))
      t.classList.remove("show"),
        (t.style.height = ""),
        a.setAttribute("aria-expanded", !1);
    else {
      t.classList.add("show"), a.setAttribute("aria-expanded", !0);
      let s = 0;
      t.childNodes.forEach((e) => {
        var t;
        void 0 !== e.clientHeight &&
          ((t =
            parseInt(window.getComputedStyle(e).marginTop) +
            parseInt(window.getComputedStyle(e).marginBottom)),
          (s += e.clientHeight + t));
      }),
        (t.style.height = s + "px");
    }
  });
}
const DropdownTriggers = document.querySelectorAll(
  '[data-win-toggle="dropdown"]'
);
for (const a of DropdownTriggers) {
  const b = a.getAttribute("data-win-target"),
    c = document.querySelector(b),
    d = c.querySelectorAll("li"),
    e = c.querySelector('input[type="search"]'),
    f = () => {
      c.classList.add("show"), document.addEventListener("mousedown", h);
    },
    g = () => {
      c.classList.remove("show"), document.removeEventListener("mousedown", h);
    },
    h = (e) => {
      c.contains(e.target) ||
        a.contains(e.target) ||
        !c.classList.contains("show") ||
        g();
    };
  a.addEventListener("click", (e) => {
    getScreenOffset(a)
      ? c.classList.add("reverse")
      : c.classList.remove("reverse"),
      (c.classList.contains("show") ? g : f)();
  });
  for (const k of d)
    k.addEventListener("click", () => {
      var e = c.parentNode.classList;
      (e.contains("app-select-text") || e.contains("app-select-menu")) &&
        ([].forEach.call(d, (e) => e.classList.remove("selected")),
        k.classList.add("selected"),
        (a.textContent = k.textContent)),
        k.getElementsByTagName("a")[0]?.getAttribute("data-win-target") || g();
    });
  e &&
    e.addEventListener("keyup", () => {
      for (var t, s = e.value.toUpperCase(), n = 0; n < d.length; n++)
        -1 <
        ((t = d[n].getElementsByTagName("a")[0]).textContent || t.innerText)
          .toUpperCase()
          .indexOf(s)
          ? (d[n].style.display = "")
          : (d[n].style.display = "none");
    });
}
const PwdTogglers = document.querySelectorAll('[data-win-toggle="password"]');
for (const a of PwdTogglers) {
  const b = a.getAttribute("data-win-target");
  a.addEventListener("click", () => {
    var t = document.querySelector(b);
    "password" === t.type ? (t.type = "text") : (t.type = "password");
  });
}
const TxtClearers = document.querySelectorAll('[data-win-clear="text"]');
for (const d of TxtClearers) {
  const e = d.getAttribute("data-win-target"),
    f = document.querySelector(e);
  f.addEventListener("input", () => {
    "" !== f.value
      ? (d.style.visibility = "visible")
      : (d.style.visibility = "hidden");
  }),
    d.addEventListener("click", () => {
      (f.value = ""), f.focus(), (d.style.visibility = "hidden");
    });
}
const LoaderProgress = document.querySelectorAll("Loader [data-win-progress]");
for (const a of LoaderProgress)
  window.addEventListener("load", function () {
    var e = a.getAttribute("data-win-progress"),
      t = a.getElementsByTagName("circle")[0];
    t && (t.style.strokeDasharray = e / 2.4 + "px, 43.97px"),
      a.addEventListener("contentchange", function () {
        console.log("Captured content change event");
      });
  });
const LoaderBusy =
    '<svg viewBox="0 0 16 16"><circle class="app-ldr-busy" cx="8px" cy="8px" r="7px"></circle></svg>',
  LoaderBusys = document.querySelectorAll(".app-loader-busy");
for (const a of LoaderBusys) a.innerHTML = LoaderBusy;
const LoaderBar =
    '<div class="app-ldr-bar ball-1"></div><div class="app-ldr-bar ball-2"></div><div class="app-ldr-bar ball-3"></div><div class="app-ldr-bar ball-4"></div>',
  LoaderBars = document.querySelectorAll(".app-loader-bar");
for (const b of LoaderBars) b.innerHTML = LoaderBar;
const ModalTriggers = document.querySelectorAll('[data-win-toggle="modal"]');
for (const a of ModalTriggers) {
  const b = a.getAttribute("data-win-target");
  a.onclick = function (t) {
    (t.target !== this &&
      (a.classList.contains("app-alert") ||
        a.classList.contains("app-dialog"))) ||
      document.querySelector(b).classList.toggle("show");
  };
}
const NavBarTogglers = document.querySelectorAll(
  '[data-win-toggle="navbar-left"]'
);
let NavBarOverlay = document.createElement("div");
for (const a of NavBarTogglers) {
  const b = document.querySelector(a.getAttribute("data-win-target"));
  function toggleNavBarMobile() {
    null === document.querySelector(".app-navbar-overlay") &&
      ((NavBarOverlay.className = "app-navbar-overlay"),
      b.appendChild(NavBarOverlay)),
      b.classList.toggle("collapsed-float"),
      NavBarOverlay.classList.toggle("show");
  }
  function toggleNavBar() {
    (window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth) < 760
      ? toggleNavBarMobile()
      : b.classList.toggle("collapsed");
  }
  a.addEventListener("click", toggleNavBar);
}
NavBarOverlay.addEventListener("click", toggleNavBar);
// Causing issues since I don't have nav:
// const NavBar_ = document.querySelector(".app-navbar-wrap"),
//   NavBar_Nav = NavBar_.querySelector("nav"),
//   NavBar_List = document.getElementById("app-navbar-list"),
//   Navbar_Header = NavBar_.querySelector(".app-navbar-header");
// function ResizedWin() {
//   (NavBar_.style.transition = ""), (NavBar_Nav.style.transition = "");
// }
// var on_resizew;
// NavBar_List.addEventListener("scroll", (e) => {
//   e = e.target.scrollTop;
//   Navbar_Header.style.boxShadow = e < 50 ? "none" : "0 4px 8px -8px #77777777";
// }),
//   (window.onresize = function () {
//     clearTimeout(on_resizew),
//       (NavBar_.style.transition = "unset"),
//       (NavBar_Nav.style.transition = "unset"),
//       (on_resizew = setTimeout(ResizedWin, 100));
//   });
const SliderSettings = {
    fill: "var(--color-primary-adaptive)",
    background: "#999999",
  },
  Sliders = document.querySelectorAll(".app-range-slider");
for (const a of Sliders) {
  const b = a.querySelector("input"),
    c = b.getAttribute("max");
  b.addEventListener("input", (e) => {
    var l = e.target.value;
    document.querySelectorAll(`[for="${b.id}"]`).forEach((e) => {
      (e.innerHTML = l),
        e.matches(".app-range-slider-popup") &&
          ((e.style.left = (l / c) * 72 + "%"),
          (e.style.visibility = "visible"),
          (e.style.opacity = 1));
    }),
      applyFill(e.target);
  }),
    applyFill(b),
    b.addEventListener("mouseleave", () => {
      var e = b.nextElementSibling;
      if (e) {
        "app-range-slider-popup" == e.className &&
          ((e.style.visibility = "hidden"), (e.style.opacity = 0));
      }
    });
}
function applyFill(e) {
  var l = (100 * (e.value - e.min)) / (e.max - e.min),
    l = `linear-gradient(90deg, ${SliderSettings.fill} ${l}%, ${
      SliderSettings.background
    } ${0.1 + l}%)`;
  e.style.background = l;
}
