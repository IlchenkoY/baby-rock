import { modalHandler } from "./modal";

const menuBtn = document.querySelector(".header__nav-btm--notdesktop");
const menu = document.querySelector(".header__menu-nav");
const menuWrapper = document.querySelector(".header__menu-nav-wrapper");
const menuNavList = document.querySelector(".header__menu-nav-list");
const videoPassword = import.meta.env.VITE_VIDEO_PASSWORD;

menuBtn.addEventListener("click", toggleMenuHandler);
menuNavList.addEventListener("click", toggleMenuHandler);

function toggleMenuHandler(e) {
  const btnType = e.target.dataset.video;
  window.scrollTo(0, 0);
  menu.classList.toggle("is-open");
  menuBtn.classList.toggle("is-open");
  menuWrapper.classList.toggle("is-open");

  if (e.target.textContent === "НАШІ ПРАВИЛА") {
    setTimeout(() => modalHandler(e, ".rules__wrapper"), 500);
  }

  document.querySelector("body").style.overflow = menu.classList.contains(
    "is-open"
  )
    ? "hidden"
    : "auto";

  let password = sessionStorage.getItem("password");
  if (password === videoPassword && btnType) {
    document.querySelector("body").style.overflow = "hidden";
    return;
  }
}
