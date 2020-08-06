class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }

    open() {
        this._popup.classList.add('popup_opened');
        //document.addEventListener('keydown', (e) => this._handleEscClose(e));
      }
    
    close() {
        this._popup.classList.remove('popup_opened');
        //document.removeEventListener('keydown', (e) => this._handleEscClose(e));
      }

      _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this._popup.classList.remove('popup_opened');
        }
    }

    setEventListeners () {
        this._popupSelector.querySelector('.popup__close').addEventListener('click', () => {
            this.close();
          });
        }
    
}


