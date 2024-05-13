export default function additionalServisesMarkup(type) {
  return `<div class="birthday-extra__wrapper">
                <h4 class="birthday-extra__title">Додаткові послуги</h4>
            <ul class="birthday-extra__list">
              <li class="birthday-extra__item">
                <p class="bithday-extra__description">Додаткова 1 година свята</p>
                <p class="bithday-extra__description">300 грн за 1 дитину</p>
              </li>
              <li class="birthday-extra__item">
                <p class="bithday-extra__description">Фотограф для свята</p>
                <p class="bithday-extra__description">600 грн година</p>
              </li>
              <li class="birthday-extra__item">
                <p class="bithday-extra__description">Відеозйомка свята</p>
                <p class="bithday-extra__description">1500 грн година</p>
              </li>
              <li class="birthday-extra__item">
                <p class="bithday-extra__description">Dj</p>
                <p class="bithday-extra__description">2000 грн</p>
              </li>
              <li class="birthday-extra__item">
                <p class="bithday-extra__description">Запрошення</p>
                <p class="bithday-extra__description">30 грн шт</p>
              </li>
              <li class="birthday-extra__item">
                <p class="bithday-extra__description">Хлопавка</p>
                <p class="bithday-extra__description">120 грн шт</p>
              </li>
              <li class="birthday-extra__item">
                <p class="bithday-extra__description">Феєрверк у торт</p>
                <p class="bithday-extra__description">70 грн шт</p>
              </li>
              <li class="birthday-extra__item">
                <p class="bithday-extra__description">Гелеві кульки</p>
                <p class="bithday-extra__description">1000 грн 20 шт</p>
              </li>
              <li class="birthday-extra__item">
                <p class="bithday-extra__description">Костюмований аніматор</p>
                <p class="bithday-extra__description">200 грн</p>
              </li>
            </ul>
            <h4 class="birthday-extra__title">Додатково до святкового столу</h4>
            <ul class="birthday-extra__list">
              <li class="birthday-extra__item">
                <p class="bithday-extra__description">Торт (бісквітний або шокладний)</p>
                <p class="bithday-extra__description">1000 грн 1 кг</p>
              </li>
              <li class="birthday-extra__item">
                <p class="bithday-extra__description">Морозиво</p>
                <p class="bithday-extra__description">70 грн порція</p>
              </li>
              <li class="birthday-extra__item">
                <p class="bithday-extra__description">Фруктова нарізка</p>
                <p class="bithday-extra__description">140 грн порція</p>
              </li>
              <li class="birthday-extra__item">
                <p class="bithday-extra__description">Вафельні трубочки з кремом</p>
                <p class="bithday-extra__description">70 грн 3 шт — порція</p>
              </li>
              <li class="birthday-extra__item">
                <p class="bithday-extra__description">Піньята</p>
                <p class="bithday-extra__description">1100 грн</p>
              </li>
              <li class="birthday-extra__item">
                <p class="bithday-extra__description">Станція Поп Корн</p>
                <p class="bithday-extra__description">1000 грн</p>
              </li>
              <li class="birthday-extra__item">
                <p class="bithday-extra__description">Дитяче шампанське</p>
                <p class="bithday-extra__description">200 грн 1 пляшка</p>
              </li>
              <li class="birthday-extra__item">
                <p class="bithday-extra__description">Дитячий безлім бар та майстер-клас коктейлів</p>
                <p class="bithday-extra__description">250 грн за 1 дитину</p>
              </li>
              <li class="birthday-extra__item">
                <p class="bithday-extra__description">Candy Bar</p>
                <p class="bithday-extra__description">4500 грн</p>
              </li>
            </ul>
            <h4 class="birthday-extra__title">Додаткові шоу-програми</h4>
            ${
              type === "diamond"
                ? `<ul class="birthday-extra__list">
              <li class="birthday-extra__item">
                <p class="bithday-extra__description">Ебру (мистецтво малювання на воді)</p>
                <p class="bithday-extra__description">4500 грн</p>
              </li>
              <li class="birthday-extra__item">
                <p class="bithday-extra__description">Тесла Шоу</p>
                <p class="bithday-extra__description">5000 грн</p>
              </li>
              <li class="birthday-extra__item">
                <p class="bithday-extra__description">5 Елемент</p>
                <p class="bithday-extra__description">5000 грн</p>
              </li>
              <li class="birthday-extra__item">
                <p class="bithday-extra__description">Паперова Дискотека</p>
                <p class="bithday-extra__description">7000 грн</p>
              </li>
            </ul>`
                : `<ul class="birthday-extra__list">
              <li class="birthday-extra__item">
                <p class="bithday-extra__description">Шоу мильних бульбашок </p>
                <p class="bithday-extra__description">4200 грн</p>
              </li>
              <li class="birthday-extra__item">
                <p class="bithday-extra__description">Неонове шоу мильних бульбашок</p>
                <p class="bithday-extra__description">6500 грн</p>
              </li>
              <li class="birthday-extra__item">
                <p class="bithday-extra__description">Ебру (мистецтво малювання на воді)</p>
                <p class="bithday-extra__description">4500 грн</p>
              </li>
              <li class="birthday-extra__item">
                <p class="bithday-extra__description">Кріо Шоу</p>
                <p class="bithday-extra__description">5000 грн</p>
              </li>
              <li class="birthday-extra__item">
                <p class="bithday-extra__description">Тесла Шоу</p>
                <p class="bithday-extra__description">5000 грн</p>
              </li>
              <li class="birthday-extra__item">
                <p class="bithday-extra__description">5 Елемент</p>
                <p class="bithday-extra__description">5000 грн</p>
              </li>
              <li class="birthday-extra__item">
                <p class="bithday-extra__description">Чарівник- ілюзіоніст</p>
                <p class="bithday-extra__description">5000 грн</p>
              </li>
              <li class="birthday-extra__item">
                <p class="bithday-extra__description">Паперова Дискотека</p>
                <p class="bithday-extra__description">7000 грн</p>
              </li>
              <li class="birthday-extra__item">
                <p class="bithday-extra__description">Шоу 3 в 1 (Кріо Шоу, Мильні бульбашки,  Ілюзионіст)</p>
                <p class="bithday-extra__description">9000 грн</p>
              </li>
            </ul>`
            }
            </div>`;
}
