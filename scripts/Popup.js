export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    //this._popupCloseButton = this._popupSelector.querySelector(popupCloseButton);

  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', (evt) => this._handleEscClose(evt));
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', (evt) => this._handleEscClose(evt));
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this._popup.classList.remove('popup_opened');
    }
  }

  setEventListeners() {
    this._popup.querySelector('.popup__close').addEventListener('click', () => {
      this.close();
    });
    this._popup.querySelector('.popup__overlay').addEventListener('click', () => {
      this.close();
    });
  }
  //закрываем попапы кликом на оверлей
  _handleOverlayClose = () => {
    if (event.target.classList.contains('popup_opened')) {
      this.close();
    }
  };
}


