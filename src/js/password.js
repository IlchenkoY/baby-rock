import openVideoHandler from "./video";

const passwordInputElements = document.querySelectorAll(".password__wrapper");
const passwordInput = document.querySelector(".password__input");
const passwordBtnClose = document.querySelector(".password__btn--close");
const openPasswordInput = document.querySelectorAll(".video__btn");
const videoPassword = import.meta.env.VITE_VIDEO_PASSWORD;

Array.from(openPasswordInput).forEach((item) =>
  item.addEventListener("click", openPasswordInputHandler)
);

passwordBtnClose.addEventListener("click", closePasswordInputHandler);

function openPasswordInputHandler(e) {
  let password = sessionStorage.getItem("password");
  if (password === videoPassword) {
    openVideoHandler(e);
    return;
  }

  passwordInput.placeholder = "password";
  passwordInput.classList.remove("error");
  passwordInput.classList.remove("animate__animated", "animate__headShake");
  passwordInputElements[0].classList.remove("is-hidden");
  passwordFormHandler();
}

function closePasswordInputHandler(e) {
  passwordInput.classList.remove("animate__animated", "animate__headShake");
  passwordForm.reset();
  passwordInput.placeholder = "password";
  passwordInput.classList.remove("error");
  passwordInputElements[0].classList.add("is-hidden");
}

function passwordFormHandler() {
  const passwordForm = document.getElementById("passwordForm");
  passwordForm.addEventListener("submit", handleSubmit);
  passwordInput.focus();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(passwordForm);
    const formDataObject = Object.fromEntries(formData.entries());
    if (formDataObject.password !== videoPassword) {
      console.log("Wrong password!");
      passwordInput.classList.remove("animate__animated", "animate__headShake");
      void passwordInput.offsetWidth;
      passwordInput.classList.add("animate__animated", "animate__headShake");
      passwordForm.reset();
      passwordInput.placeholder = "невірний пароль!";
      passwordInput.classList.add("error");
      passwordInput.focus();
      return;
    }
    if (formDataObject.password === videoPassword) {
      sessionStorage.setItem("password", formDataObject.password);
      passwordForm.reset();
      closePasswordInputHandler(passwordForm);
      openVideoHandler();
    }
  }
}
