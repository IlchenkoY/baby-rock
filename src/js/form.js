import emailjs from "@emailjs/browser";
import swal from "sweetalert";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

import formMarkup from "./modal-markup/form-markup";
import formNumberValidator from "./form-number-validator";
import { escKeyHandler, toggleModal } from "./modal";

const publicKey = import.meta.env.VITE_PUBLIC_KEY;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const serviceId = import.meta.env.VITE_SERVICE_ID;
emailjs.init(publicKey);

const formButton = document.querySelectorAll(".button");
const modal = document.querySelector(".modal");

Array.from(formButton)
  .filter((item) => item.dataset.type === "form")
  .forEach((item) => item.addEventListener("click", openForm));

function openForm(e) {
  modal.innerHTML = formMarkup();

  Array.prototype.forEach.call(
    document.querySelectorAll(".form-container"),
    (el) => new SimpleBar(el, { autoHide: true })
  );
  formNumberValidator(".input-phone");
  window.addEventListener("keydown", escKeyHandler);
  toggleModal();
  formHandler();

  const nameInput = document.getElementById("name");
  nameInput.focus();
}

function formHandler() {
  const form = document.getElementById("eventForm");

  form.addEventListener("submit", handleSubmit);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const formDataObject = Object.fromEntries(formData.entries());

    if (formDataObject.phone.length < 19) {
      Toastify({
        text: "Введіть правильний номер телефону",
        duration: 4000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background:
            "linear-gradient(to right, rgb(40, 110, 115), rgb(183, 82, 153))",
        },
      }).showToast();
      return;
    }
    emailjs.send(serviceId, templateId, formDataObject).then(
      () => {
        window.removeEventListener("keydown", escKeyHandler);
        toggleModal();
        swal({
          title: "Дякую за замовлення!",
          text: "Чекайте на відповідь менеджера!",
          icon: "success",
        });
      },
      (error) => {
        console.log(error);
        swal({
          title: "Щось пішло не за планом :(",
          text: "зв'яжіться з нами за номером телефону",
          icon: "error",
        });
      }
    );
  }
}
