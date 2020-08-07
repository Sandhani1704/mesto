export default class Popup {
    constructor(popupSelector) {
        //this._popup = document.querySelector(popupSelector);
        this._popupSelector = popupSelector
    }

    open() {
      this._popupSelector.classList.add('popup_opened');
        //document.addEventListener('keydown', (e) => this._handleEscClose(e));
      }
    
    close() {
      this._popupSelector.classList.remove('popup_opened');
        //document.removeEventListener('keydown', (e) => this._handleEscClose(e));
      }

      _handleEscClose(evt) {
        if (evt.key === 'Escape') {
          this._popupSelector.classList.remove('popup_opened');
        }
    }

    setEventListeners() {
         this._popupSelector.querySelector('.popup__close').addEventListener('click', () => {
            this.close();
          });
        }
    
}


