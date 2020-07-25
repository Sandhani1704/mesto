const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const popupImagePicture = document.querySelector('.popup-image__image');
const popupCaption = document.querySelector('.popup-image__caption');

class Card {
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
        
        this._element.querySelector('.elements__card-name').textContent = this._name;
        this._element.querySelector('.elements__card-image').src = this._link;
        this._setEventListeners() 
        return this._element;
        
    }

    _handleLikeIcon() {
    this._isLiked = !this._isLiked;
    this._element.classList.toggle('elements__card-icon_active');
    }

          
    _deleteElement() {
        this._element.querySelector('.elements__remove-button').addEventListener('click', (e) => {
            const elementsCard = e.target.closest('.elements__card');
            elementsCard.remove();
    })
} 

_handleOpenPopup() {
    popupImagePicture.src = this._link;
    popupImagePicture.alt = `Изображение ${this._name}`
    popupCaption.textContent = this._name;
    popupImagePicture.classList.add('popup_opened');
  }

_setEventListeners() {
    this._element.addEventListener('click', () => this._handleLikeIcon());
    this._element.addEventListener('click', () => this._deleteElement());
    this._element.addEventListener('click', () => this._handleOpenPopup());
  }

}

initialCards.forEach(({name, link}) => {
const card = new Card(name, link, '#element');
const cardElement = card.generateCard();
document.querySelector('.elements').prepend(cardElement);
})

