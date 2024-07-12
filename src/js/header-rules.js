import { modalHandler } from "./modal";

const rulesLinkEl = document.querySelector(".navigation__sub-link");

rulesLinkEl.addEventListener("click", rulesLinkHandler);

function rulesLinkHandler(e) {
  setTimeout(() => modalHandler(e, ".rules__wrapper"), 500);
}
