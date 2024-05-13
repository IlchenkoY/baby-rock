import infoCardMarkup from "./info-card";
import accordion from "./accordion";

const modal = document.querySelector(".modal");
const birthdayOptionsList = document.querySelector(".birthday__options-list");
const aboutBtn = document.querySelector(".about__btn");
const closeBtn = document.querySelector(".modal__btn--close");
const backdrop = document.querySelector(".backdrop");

aboutBtn.addEventListener("click", openBtnClickHandler);
birthdayOptionsList.addEventListener("click", openBtnClickHandler);
backdrop.addEventListener("click", closeModalHandler);

function toggleModal() {
  backdrop.classList.toggle("is-hidden");
  document.querySelector("body").style.overflow =
    document.querySelector("body").style.overflow === "hidden"
      ? "auto"
      : "hidden";
}

function escKeyHandler(e) {
  if (e.code === "Escape") {
    toggleModal();
    window.removeEventListener("keydown", escKeyHandler);
  }
}

function openBtnClickHandler(e) {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }
  if (e.target.textContent === "НАШІ ПРАВИЛА") {
    modalHandler(e, ".rules__wrapper");
    return;
  }
  const type = e.target.dataset.type;
  if (e.target.textContent === "СЦЕНАРІЇ СВЯТА*") {
    modalHandler(e, ".accordion__wrapper", type);
    accordion();
    return;
  }
  if (e.target.textContent === "ДОДАТКОВІ ПОСЛУГИ") {
    modalHandler(e, ".birthday-extra__wrapper", type);
    return;
  }
}

function modalHandler(event, text, type) {
  modal.innerHTML = infoCardMarkup(event.target.textContent, type);
  Array.prototype.forEach.call(
    document.querySelectorAll(text),
    (el) => new SimpleBar(el, { autoHide: false })
  );
  window.addEventListener("keydown", escKeyHandler);
  toggleModal();
}

function closeModalHandler(e) {
  if (
    e.target === e.currentTarget ||
    e.target === closeBtn ||
    e.target.nodeName === "svg" ||
    e.target.nodeName === "use"
  ) {
    window.removeEventListener("keydown", escKeyHandler);
    toggleModal();
  }
}
