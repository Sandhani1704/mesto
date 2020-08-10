import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({ handleFormSubmit }, popupSelector) {
    super(popupSelector);
    this._popupSelector = document.querySelector(popupSelector);
    this._form = this._popupSelector.querySelector('.popup__form');
    //this._form = form;
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
    //const popup = document.querySelector(this._popupSelector);
    this._popupSelector.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.handleFormSubmit(this._getInputValues())
      //const InputValues = this._getInputValues();
      //console.log(this._getInputValues)
      //this.handleFormSubmit(InputValues);
      //this.submitForm(InputValues)
      this.close();
    })
  }
  close() {
    super.close();
    this._form.reset();
  }
}
