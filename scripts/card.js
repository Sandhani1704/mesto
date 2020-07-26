import {initialCards} from './cards-init.js';
import {handlePreviewPicture} from './index.js';

export class Card {
    constructor (name, link, cardTemplate) {
    this._name = name;
    this._link = link;
    this._cardTemplate = cardTemplate;
    this._isLiked = false;
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
        this._element.querySelector('.elements__card-name').textContent = this._name;
        this._element.querySelector('.elements__card-image').src = this._link;
        this._setEventListeners() 
        return this._element;
        
    }

    _handleLikeIcon() {
    this._isLiked = !this._isLiked;
    this._likeButton.classList.toggle('elements__card-icon_active');
    }

          
    _deleteElement() {
    this._elementsCard.remove();
    } 

_handleOpenPopup() {
   handlePreviewPicture({link: this._link, name: this._name})
  }

_setEventListeners() {
    this._likeButton.addEventListener('click', () => this._handleLikeIcon());
    this._deleteButton.addEventListener('click', () => this._deleteElement());
    this._image.addEventListener('click', () => this._handleOpenPopup());
  }

}

initialCards.forEach(({name, link}) => {
const card = new Card(name, link, '#element');
const cardElement = card.generateCard();
document.querySelector('.elements').prepend(cardElement);
})

