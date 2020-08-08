import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor({popupSelector, handleFormSubmit}) {
        super(popupSelector);
        this.popupSelector = document.querySelector(popupSelector);
        this.handleFormSubmit = handleFormSubmit;
        
        //this.submitForm = submitForm;
        //this.form = form;
    }
    _getInputValues() {
  // достаём все элементы полей
  this._inputList = this._popupSelector.querySelectorAll('.popup__input');
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
            //this.submitForm(InputValues)
    })
}
close() {
    super.close();
    this._popupSelector.querySelector('.popup__form').reset(); 
}
}
