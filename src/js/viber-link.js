import getDeviceType from "./devise-type";

document.addEventListener("DOMContentLoaded", viberLinkHandler);

function viberLinkHandler() {
  const deviceType = getDeviceType();
  const navSocialList = document.querySelector(".navigation--social");
  const footerSocialList = document.querySelector(".footer__social-list");

  if (deviceType !== "Desktop") {
    navSocialList.children[2].style.display = "none";
    footerSocialList.children[2].style.display = "none";
  }
}
