import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({ handleFormSubmit }, popupSelector) {
    super(popupSelector);
    this._popupSelector = document.querySelector(popupSelector);
    this._form = this._popupSelector.querySelector('.popup__form');
    this.handleFormSubmit = handleFormSubmit;

  }
  _getInputValues() {
    // достаём все элементы полей
    this._inputList = this._form.querySelectorAll('.popup__input');
    // создаём пустой объект
    this._formValues = {};
    // добавляем в этот объект значения всех полей
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;

    });
    // возвращаем объект значений
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupSelector.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.handleFormSubmit(this._getInputValues())
      this.close();
    })
  }
  close() {
    super.close();
    this._form.reset();
  }
}
