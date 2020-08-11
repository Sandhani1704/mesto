import { Card } from '../components/Сard.js';
import {
    initialCards, popup, popupOpenButton, nameInput, jobInput, popupElementAddButton,
    popupElement, popupEditProfileSelector, config, openPopupWithImage, containerСardElementsSelector,
    popupAddPlaceSelector, profileNameSelector, profileJobSelector
} from '../utils/constants.js';
import { FormValidator } from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import './index.css';

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
    containerСardElementsSelector
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

    nameInput.value = userProfile.getUserInfo().name;

    jobInput.value = userProfile.getUserInfo().job;

    popupProfileValidator.openPopupAndHideErrors();
    popupEditProfile.open()

});


popupElementAddButton.addEventListener('click', () => {

    popupElementValidator.openPopupAndHideErrors();

    popupAddPlace.open();

});






