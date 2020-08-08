import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        
    }

    open(name, link) {
        super.open();
        const image = this._popup.querySelector('.popup-image__image');
        const caption = this._popup.querySelector('.popup-image__caption');
        image.src = link;
        image.alt = name;
        caption.textContent = name;

    }
}

