export default function formMarkup() {
  return `<div class="form-container">
        <form id="eventForm">
            <div class="form-group">
                <label for="name">Ім'я:</label>
                <input type="text" id="name" name="name">
            </div>
            <div class="form-group">
                <label for="phone">Номер телефону: <span>*</span></label>
                <input class="input-phone" type="tel" id="phone" name="phone" required>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email">
            </div>
            <div class="form-group">
                <label for="date">Дата заходу:</label>
                <input type="date" id="date" name="date">
            </div>
            <div class="form-group">
                <label for="guests">Кількість дітей:</label>
                <input type="number" id="guests" name="guests" min="1" max="25">
            </div>
            <div class="form-group">
                <label for="theme">Тема заходу:</label>
                <select id="theme" name="theme">
                    <option value="Standard">Standard</option>
                    <option value="All Inclusive">All Inclusive</option>
                    <option value="VIP">VIP</option>
                    <option value="DIAMOND">DIAMOND</option>
                </select>
            </div>
            <div class="form-group">
                <label for="theme">Побажання:</label>
                <textarea name="message" rows="2" placeholder="Ви можете залишити додаткову інформацію для адміністратора в цьому полі"></textarea>
            </div>
            <div class="form-group">
                <button type="submit">ВІДПРАВИТИ</button>
            </div>
        </form>
        </div>`;
}
