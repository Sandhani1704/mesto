import {Card} from './Сard.js';
import {initialCards} from './cards-init.js';
import {FormValidator} from './FormValidator.js';

const popup = document.querySelector('.popup-profile');
const popupOpenButton = document.querySelector('.profile__button-edit');
const popupCloseButton = popup.querySelector('.popup__close');
const profileUserName = document.querySelector('.profile__user');
const profileUserJob = document.querySelector('.profile__user-explorer');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const formElement = document.querySelector('.popup__container');
const popupElementAddButton = document.querySelector('.profile__button-add');
const popupElement = document.querySelector('.popup-element');
const popupElementCloseButton = document.querySelector('.popup-element__close');
const titleElementInput = document.querySelector('.popup-element__input_type_title');
const linkElementInput = document.querySelector('.popup-element__input_type_link-img');
const popupWithImageCloseButton = document.querySelector('.popup-image__close-button');
const popupImage = document.querySelector('.popup-image');
const popupImagePicture = document.querySelector('.popup-image__image');
const popupCaption = document.querySelector('.popup-image__caption');
const profileOverlay = document.querySelector('.popup-profile__overlay');
const elementOverlay = document.querySelector('.popup-element__overlay');
const imageOverlay = document.querySelector('.popup-image__overlay');
const titleInput = popupElement.querySelector('.popup-element__input_type_title');
const linkInput = popupElement.querySelector('.popup-element__input_type_link-img');

const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
}

const popupProfileValidator = new FormValidator(config, popup);
const popupElementValidator = new FormValidator(config, popupElement);

function setPopupDetails() {
    nameInput.value = profileUserName.textContent;
    jobInput.value = profileUserJob.textContent;
}

function setProfileDetails() {
    profileUserName.textContent = nameInput.value;
    profileUserJob.textContent = jobInput.value;
}

//закрываем попапы нажатием на Escape 
function handleEsc(evt) {
    if (evt.key === 'Escape') {
        const popupOpened = document.querySelector('.popup_opened');
        popupOpened.classList.remove('popup_opened');
    }
}

const openPopup = function (popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keyup', handleEsc);
    
}

const closePopup = function (popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keyup', handleEsc);
}

function formSubmitHandler(evt) {
    evt.preventDefault();

    setProfileDetails();

    closePopup(popup);

}


export function handlePreviewPicture(data) {
    popupImagePicture.src = data.link;
    popupImagePicture.alt = `Изображение ${data.name}`;
    popupCaption.textContent = data.name;
    openPopup(popupImage);
}


initialCards.forEach(({name, link}) => {
    const card = new Card(name, link, '#element');
    const cardElement = card.generateCard();
    document.querySelector('.elements').prepend(cardElement);
})
    

//создаем новые карточки
const renderCard = function({name, link}) {
    const card = new Card(name, link, '#element');
    const cardElement = card.generateCard();
    document.querySelector('.elements').prepend(cardElement);
  }

const clearInputs = function() {
    titleInput.value = '';
    linkInput.value = '';
  }


//добавляем карточки на страницу
popupElement.addEventListener('submit', e => {
    e.preventDefault();
    const name = titleElementInput.value;
    const link = linkElementInput.value;
    titleElementInput.value = '';
    linkElementInput.value = '';
    renderCard({
        name: name,
        link: link
    });

    closePopup(popupElement);
});

//закрываем попап с изображением
popupWithImageCloseButton.addEventListener('click', function (event) {
    closePopup(popupImage);
});

popupOpenButton.addEventListener('click', () => {
    setPopupDetails();
    popupProfileValidator.openPopupAndHideErrors();
    openPopup(popup);
    popupProfileValidator.enableValidation();

});

//закрываем попапы кликом на оверлей
imageOverlay.addEventListener('click', () => closePopup(popupImage));
elementOverlay.addEventListener('click', () => closePopup(popupElement));
profileOverlay.addEventListener('click', () => closePopup(popup));

popupCloseButton.addEventListener('click', () => closePopup(popup));

formElement.addEventListener('submit', formSubmitHandler);

popupElementAddButton.addEventListener('click', () => {
    clearInputs();
    popupElementValidator.openPopupAndHideErrors();
    openPopup(popupElement);
     
    popupElementValidator.enableValidation();
});

popupElementCloseButton.addEventListener('click', () => closePopup(popupElement));





