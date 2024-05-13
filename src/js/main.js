import "./slick";
import "/src/scss/style.scss";
import "./drop-down-menu";
import "./modal";
import "./gallary-modal";
import "./accordion";

Array.prototype.forEach.call(
  document.querySelectorAll(".birthday__standard-options-list"),
  (el) => new SimpleBar(el, { autoHide: false })
);
