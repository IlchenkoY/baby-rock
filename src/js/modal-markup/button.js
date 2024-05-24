import currentUseHref from "../current-use-href";

export const modalButtonMarkup = `<button class="button birthday-extra__button" type="button" data-type="form">
              <p class="button__description birthday__button-description">ЗАМОВИТИ СВЯТО</p>
              <svg class="button__icon birthday__button-icon">
                <use href="${currentUseHref()}.svg#icon-button-arrow"></use>;
              </svg>
            </button>`;
