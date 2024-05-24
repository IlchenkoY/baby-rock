import { escKeyHandler, toggleModal } from "./modal";
import { videoMarkup } from "./modal-markup/video-markup";

const modal = document.querySelector(".modal");

export default function openVideoHandler(e) {
  modal.innerHTML = videoMarkup;
  window.addEventListener("keydown", escKeyHandler);
  e?.target?.dataset?.video
    ? toggleModal(e.target.dataset.video)
    : toggleModal();
}
