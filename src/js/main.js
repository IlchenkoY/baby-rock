import "core-js/stable";
import "regenerator-runtime/runtime";
import "./viber-link";
import "./slick";
import "/src/scss/style.scss";
import "./drop-down-menu";
import "./modal";
import "./form";
import "./gallary-modal";
import "./accordion";
import "./password";
import "./video";
import "animate.css";

Array.prototype.forEach.call(
  document.querySelectorAll(".birthday__standard-options-list"),
  (el) => new SimpleBar(el, { autoHide: false })
);
