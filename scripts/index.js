import {Card} from './card';
import {initialCards} from './cards-init.js';
//import {Card} from './сard.js';

const popup = document.querySelector('.popup-profile');
const popupOpenButton = document.querySelector('.profile__button-edit');
const popupCloseButton = popup.querySelector('.popup__close');
const profileUserName = document.querySelector('.profile__user');
const profileUserJob = document.querySelector('.profile__user-explorer');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const formElement = document.querySelector('.popup__container');
const popupElementOpenButton = document.querySelector('.profile__button-add');
const popupElement = document.querySelector('.popup-element');
const popupElementCloseButton = document.querySelector('.popup-element__close');
const titleElementInput = document.querySelector('.popup-element__input_type_title');
const linkElementInput = document.querySelector('.popup-element__input_type_link-img');
const popupWithImageCloseButton = document.querySelector('.popup-image__close-button');
const popupImage = document.querySelector('.popup-image');
const popupImagePicture = document.querySelector('.popup-image__image');
const popupCaption = document.querySelector('.popup-image__caption');
const elements = document.querySelector('.elements');
const cardTemplate = document.querySelector('#element');
const likeIcon = document.querySelector('.elements__card-icon');
const profileOverlay = document.querySelector('.popup-profile__overlay');
const elementOverlay = document.querySelector('.popup-element__overlay');
const imageOverlay = document.querySelector('.popup-image__overlay');

const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
}

function setPopupDetails() {
    nameInput.value = profileUserName.textContent;
    jobInput.value = profileUserJob.textContent;
}

function setProfileDetails() {
    profileUserName.textContent = nameInput.value;
    profileUserJob.textContent = jobInput.value;
}

//скрываем ошибки при закрытии
/*const openPopupAndHideErrors = function (popup, config) {
    const formElement = popup.querySelector(config.formSelector);
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    inputList.forEach((inputElement) => {
        hideError(formElement, inputElement, config);
        inputElement.value = '';
    });
};*/

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

// функция создания карточек
/*const addCard = function (item) {
    // клонируем содержимое тега template
    const element = cardTemplate.content.cloneNode(true);
    const cardTitle = element.querySelector('.elements__card-name');
    const cardImage = element.querySelector('.elements__card-image');
    // наполняем содержимым
    cardTitle.textContent = item.name;
    cardImage.src = item.link;
    cardImage.alt = item.name;

    //element.querySelector('.elements__remove-button').addEventListener('click', deleteElement);
    //element.querySelector('.elements__card-icon').addEventListener('click', handleLikeIcon);

    //открываем pop-up с картинкой
    //cardImage.addEventListener('click', () => handlePreviewPicture(item));

    return element;
}*/

export function handlePreviewPicture(data) {
    popupImagePicture.src = data.link;
    popupImagePicture.alt = `Изображение ${data.name}`;
    popupCaption.textContent = data.name;
    openPopup(popupImage);
}

/*function renderCard(item) {
    let element = generateCard(item);
    elements.prepend(element);
} */
//создаем новые карточки
const renderCard = function(name, link, cardTemplate) {
    const card = new Card(name, link, cardTemplate);
    const cardElement = card.generateCard();
    document.querySelector('.elements').prepend(cardElement);
  }

// ставим лайки
/*function handleLikeIcon(evt) {
    evt.target.classList.toggle('elements__card-icon_active');
}*/

/*initialCards.forEach(item => {
    renderCard(item);
});*/

//добавляем карточки на страницу
popupElement.addEventListener('submit', e => {
    e.preventDefault();
    const text = titleElementInput.value;
    const link = linkElementInput.value;
    titleElementInput.value = '';
    linkElementInput.value = '';
    generateCard({
        //name: text,
        //link: link
        link: this._link, name: this._name
    });
    closePopup(popupElement);
});

//функция удаления карточек
/*function deleteElement(e) {
    const elementsCard = e.target.closest('.elements__card');
    elementsCard.remove();
};*/

// вызываем функцию валидации формы на основании параметров в объекте
//enableValidation(config);

//закрываем попап с изображением
popupWithImageCloseButton.addEventListener('click', function (event) {
    closePopup(popupImage);
});

popupOpenButton.addEventListener('click', () => {
    //openPopupAndHideErrors(popup, config);
    setPopupDetails();
    openPopup(popup);
    //const formElement = popup.querySelector('.popup__form')
    //const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    //const buttonElement = formElement.querySelector('.popup__button');
    //toggleButtonState(inputList, buttonElement);

});

//закрываем попапы кликом на оверлей
imageOverlay.addEventListener('click', () => closePopup(popupImage));
elementOverlay.addEventListener('click', () => closePopup(popupElement));
profileOverlay.addEventListener('click', () => closePopup(popup));

popupCloseButton.addEventListener('click', () => closePopup(popup));

formElement.addEventListener('submit', formSubmitHandler);

popupElementOpenButton.addEventListener('click', () => {
    //openPopupAndHideErrors(popupElement, config);
    openPopup(popupElement);
    //const formElement = popupElement.querySelector('.popup__form')
    //const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    //const buttonElement = formElement.querySelector('.popup__button');
    //toggleButtonState(inputList, buttonElement);
    
}
);

popupElementCloseButton.addEventListener('click', () => closePopup(popupElement));





