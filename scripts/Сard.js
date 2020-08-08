import { openPopup } from './utils.js';

export class Card {
    constructor(name, link, cardTemplate, handleCardClick) {
        this._name = name;
        this._link = link;
        this._cardTemplate = cardTemplate;
        this._isLiked = false;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardTemplate).content.cloneNode(true);
        return cardElement
    } 

    generateCard() {
        this._element = this._getTemplate();
        this._deleteButton = this._element.querySelector('.elements__remove-button');
        this._likeButton = this._element.querySelector('.elements__card-icon');
        this._elementsCard = this._element.querySelector('.elements__card');
        this._image = this._element.querySelector('.elements__card-image');
        this._imageCardName = this._element.querySelector('.elements__card-name')
        this._image.src = this._link;
        this._imageCardName.textContent = this._name;
        this._image.alt = this._name;
        this._setEventListeners()
        return this._element;

    }

    _handlePreviewPicture() {
        
        /*this._picturePopup = document.querySelector('.popup-image');
        const image = this._picturePopup.querySelector('.popup-image__image');
        const caption = this._picturePopup.querySelector('.popup-image__caption');
        image.src = this._link;
        image.alt = this._name;
        caption.textContent = this._name;*/
        //openPopup(this._picturePopup);
    }

    _handleLikeIcon() {
        this._isLiked = !this._isLiked;
        this._likeButton.classList.toggle('elements__card-icon_active');
    }


    _deleteElement() {
        this._elementsCard.remove();
    }

    _setEventListeners() {
        this._likeButton.addEventListener('click', () => this._handleLikeIcon());
        this._deleteButton.addEventListener('click', () => this._deleteElement());
        this._image.addEventListener('click', () => this._handleCardClick(this._name, this._link));
    }
}


