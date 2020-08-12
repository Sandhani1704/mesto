import { Card } from '../components/Сard.js';
import { initialCards } from '../utils/constants.js';
import { FormValidator } from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import './index.css';

const popup = document.querySelector('.popup-profile');
const popupOpenButton = document.querySelector('.profile__button-edit');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const popupElementAddButton = document.querySelector('.profile__button-add');
const popupElement = document.querySelector('.popup-element');
const popupEditProfileSelector = '.popup-profile';

const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
}

const openPopupWithImage = '.popup-image';
const containerCardElementsSelector = '.elements';
const popupAddPlaceSelector = '.popup-element';
const profileNameSelector = '.profile__user';
const profileJobSelector = '.profile__user-explorer';

//открываем попап с изображением
const popupPicImage = new PopupWithImage(openPopupWithImage);
popupPicImage.setEventListeners();


const initialCardList = new Section({
    items: initialCards,

    renderer: (item) => {  // { name, link } //функция, которая отвечает за создание и отрисовку данных на странице
        const card = new Card(item.name, item.link, '#element', (name, link) => { popupPicImage.open(name, link) });
        const cardElement = card.generateCard();
        initialCardList.addItem(cardElement);

    },
},
    containerCardElementsSelector
);

initialCardList.renderItems();  // создание первоначальных карточек

//cоздаем попап добавления фотографий
const popupAddPlace = new PopupWithForm({
    handleFormSubmit: ({ name, link }) => {
        const card = new Card(name, link, '#element', (name, link) => { popupPicImage.open(name, link) });
        const cardElement = card.generateCard();
        initialCardList.addItem(cardElement);
        //elements.prepend(cardElement)
    }
}, popupAddPlaceSelector);
popupAddPlace.setEventListeners();

// Создание экземпляра класса с информацией о пользователе
const userProfile = new UserInfo({ userNameSelector: profileNameSelector, userJobSelector: profileJobSelector });

// создаем попап редактирования профиля
const popupEditProfile = new PopupWithForm({
    handleFormSubmit: ({ userJob, userName }) => {
        userProfile.setUserInfo(userName, userJob); //inputValues.name, inputValues.job
    }
}, popupEditProfileSelector)

popupEditProfile.setEventListeners();

const popupProfileValidator = new FormValidator(config, popup);
const popupElementValidator = new FormValidator(config, popupElement);

popupElementValidator.enableValidation();
popupProfileValidator.enableValidation();


popupOpenButton.addEventListener('click', () => {
    const profileInfo = userProfile.getUserInfo();

    nameInput.value = profileInfo.name;
    jobInput.value = profileInfo.job;

    popupProfileValidator.openPopupAndHideErrors();
    popupEditProfile.open()

});


popupElementAddButton.addEventListener('click', () => {

    popupElementValidator.openPopupAndHideErrors();

    popupAddPlace.open();

});






