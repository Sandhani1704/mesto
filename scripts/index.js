import { Card } from './Сard.js';
import { initialCards } from './cards-init.js';
import { FormValidator } from './FormValidator.js';
import Section from './Section.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import UserInfo from './UserInfo.js';

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
const profileOverlay = document.querySelector('.popup-profile__overlay');
const elementOverlay = document.querySelector('.popup-element__overlay');
const imageOverlay = document.querySelector('.popup-image__overlay');
const titleInput = popupElement.querySelector('.popup-element__input_type_title');
const linkInput = popupElement.querySelector('.popup-element__input_type_link-img');
const elements = document.querySelector('.elements')


const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'

}

// Создание экземпляра класса с информацией о пользователе
const profileNameSelector = '.popup__input_type_name';
const profileJobSelector = '.popup__input_type_job';
const userProfile = new UserInfo({ userName: profileNameSelector, userJob: profileJobSelector });

const containerСardElementsSelector = '.elements';
//создаем попап с картинкой
const openPopupWithImage = '.popup-image';
//const popupImageSelector ='.popup-image__image'
const popupPicImage = new PopupWithImage(openPopupWithImage);
popupPicImage.setEventListeners();

const initialCardList = new Section({
    items: initialCards,

    renderer: (item) => {  // { name, link } //функция, которая отвечает за создание и отрисовку данных на странице
        const card = new Card(item.name, item.link, '#element', (name, link) => { popupPicImage.open(name, link) });
        const cardElement = card.generateCard();
        initialCardList.addItem(cardElement);
        //console.log(cardElement)
    },
},
    containerСardElementsSelector
);

initialCardList.renderItems();  // создание первоначальных карточек

// Создание экземпляров попапов всех видов
const editFormSubmitHandler = ({ name, job }) => { // сохранение данных, введенных пользователем
    userProfile.setUserInfo(name, job);
    popupEditProfile.close();
}

//cоздание попапа добавления фотографий
const addPlaceSubmit = ({ name, link }) => { //создание карточек по введенным данным пользователя
    const card = createCard({ name, link });
    initialCardList.addItem(cardElement);
    popupAddPlace.close();
}
const popupAddPlaceSelector = '.popup-element';
const addPlaceForm = document.querySelector('.popup-element__form');
const popupAddPlace = new PopupWithForm({ addPlaceSubmit }, popupAddPlaceSelector);
popupAddPlace.close();


// создаем попап редактирования профиля
const popupEditProfileSelector = '.popup-profile';
const editProfileForm = document.querySelector('.popup__form_edit-profile');
//const popupEditProfile = new PopupWithForm(popupEditProfileSelector, editProfileForm);
//popupEditProfile.setEventListeners();

const popupEditProfile = new PopupWithForm({
    handleFormSubmit: (inputValues) => {
        userProfile.setUserInfo(inputValues.name, inputValues.job);
        
        popupEditProfile.close();
}}, popupEditProfileSelector)


// Добавляем новые карточки
/*const popupWithImageSelector = '.popup-image';
const popupImageSelector = new PopupWithForm({popupSelector: popupWithImageSelector,
    handleFormSubmit: (name, link) => {
        const newCard = new Card (name, link, '#element', () => {popupImageSelector.close()});
        const cardElement = newCard.generateCard();
        popupImageSelector.close();
    }
});
popupImageSelector.setEventListeners()*/

const popupProfileValidator = new FormValidator(config, popup);
const popupElementValidator = new FormValidator(config, popupElement);

popupElementValidator.enableValidation();
popupProfileValidator.enableValidation();

/*function setPopupDetails() {
    nameInput.value = profileUserName.textContent;
    jobInput.value = profileUserJob.textContent;
}

function setProfileDetails() {
    profileUserName.textContent = nameInput.value;
    profileUserJob.textContent = jobInput.value;
}*/

/*function formSubmitHandler(evt) {
    evt.preventDefault();

    setProfileDetails();

    closePopup(popup);

} */

/*    initialCards.forEach(({ name, link }) => {
    const card = new Card(name, link, '#element');
    const cardElement = card.generateCard();
    elements.prepend(cardElement);
}) */


//создаем новые карточки
const renderCard = function ({ name, link }) {
    const card = new Card(name, link, '#element');
    const cardElement = card.generateCard();
    elements.prepend(cardElement);
}

const clearInputs = function () {
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
    //closePopup(popupImage);
    popupPicImage.setEventListeners()
});

popupOpenButton.addEventListener('click', () => {
    //setPopupDetails();
    nameInput.value = userProfile.getUserInfo().name;
    jobInput.value = userProfile.getUserInfo().job;

    popupProfileValidator.openPopupAndHideErrors();
    popupEditProfile.open()
    //openPopup(popup);
});

//закрываем попапы кликом на оверлей
/*imageOverlay.addEventListener('click', () => closePopup(popupImage));
elementOverlay.addEventListener('click', () => closePopup(popupElement));
profileOverlay.addEventListener('click', () => closePopup(popup));*/

popupCloseButton.addEventListener('click', () => popupEditProfile.setEventListeners()); //closePopup(popup)

//formElement.addEventListener('submit', formSubmitHandler);

popupElementAddButton.addEventListener('click', () => {
    clearInputs();
    popupElementValidator.openPopupAndHideErrors();
    //openPopup(popupElement);
    popupPicImage.open();

});

popupElementCloseButton.addEventListener('click', () => closePopup(popupElement));




