const menuMobile = document.querySelector(".menu-mobile-container");

setInterval(
  function () {
    if (window.innerWidth <= 1280) {
      document.querySelector(
        ".accessibility-container-items .accessibility-item svg"
      ).style.display = "none";
      document.querySelector(
        ".accessibility-container-items .accessibility-item p"
      ).style.display = "none";
      document.querySelector(
        ".accessibility-container-items #number-accessibility"
      ).style.display = "none ";
    } else {
      document.querySelector(
        ".accessibility-container-items .accessibility-item svg"
      ).style.display = "block";
      document.querySelector(
        ".accessibility-container-items .accessibility-item p"
      ).style.display = "none";
      document.querySelector(
        ".accessibility-container-items #number-accessibility"
      ).style.display = "block";
    }
  },

  0
);

document.addEventListener("click", function (event) {
  if (event.target.getAttribute("data") === "submenu") {
    event.target.style.background = "rgba(179, 220, 197, 1)";
    event.target.style.color = "rgba(0, 139, 60, 1)";
    event.target.firstElementChild.style.borderTop =
      "1px solid rgba(0, 139, 60, 1)";
    event.target.firstElementChild.style.display = "block";
  }
});

const menu = document.querySelector(".menu");

function showMenuMobile() {
  if (menuMobile.style.display == "block") {
    menuMobile.style.display = "none";
    document.querySelector("body").style.overflow = "unset";
  } else {
    menuMobile.style.display = "block";
    document.querySelector("body").style.overflow = "hidden";
  }
}
