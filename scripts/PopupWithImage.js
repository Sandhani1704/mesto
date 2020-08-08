import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        
    }

    open(name, link) {
        super.open();
        this._image = this._popup.querySelector('.popup__image');
        const image = this._image.querySelector('.popup-image__image');
        const caption = this._image.querySelector('.popup-image__caption');
        image.src = link;
        image.alt = name;
        caption.textContent = name;

    }
}