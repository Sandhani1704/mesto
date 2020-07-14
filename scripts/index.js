const popup = document.querySelector('.popup-profile');
const popupOpenButton = document.querySelector('.profile__button-edit');
const popupCloseButton = popup.querySelector('.popup__close');
const profileUserName = document.querySelector('.profile__user');
const profileUserJob = document.querySelector('.profile__user-explorer');

const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');

const formElement = document.querySelector('.popup__container');
//const formElementPictures = document.querySelector('.popup-element__container');

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
//const elementsImage = document.querySelector('.elements__card-image');
//const elementsTitle = document.querySelector('.elements__card-name');
const likeIcon = document.querySelector('.elements__card-icon');
//const overlayClose = document.querySelector('.popup__overlay'); 
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

function setPopupDetails() {
nameInput.value = profileUserName.textContent;
jobInput.value = profileUserJob.textContent;
}

function setProfileDetails() {
profileUserName.textContent = nameInput.value;
profileUserJob.textContent = jobInput.value;
}

//const togglePopup = function (popup) 
const openPopup = function (popup) {
    popup.classList.add('popup_opened');
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    const buttonElement = formElement.querySelector('.popup__button'); 
    toggleButtonState(inputList, buttonElement);
       
}

const closePopup = function (popup) {
    popup.classList.remove('popup_opened'); 
    closePopupAndHideErrors (popup, config);
}

function formSubmitHandler(evt) {
    evt.preventDefault();

    setProfileDetails();

    closePopup(popup);
 
}

// функция создания карточек
const addCard = function (item) {
    // клонируем содержимое тега template
    const element = cardTemplate.content.cloneNode(true);
    const cardTitle = element.querySelector('.elements__card-name');
    const cardImage = element.querySelector('.elements__card-image');
    // наполняем содержимым
    cardTitle.textContent = item.name;
    cardImage.src = item.link;
    cardImage.alt = item.name;

    element.querySelector('.elements__remove-button').addEventListener('click', deleteElement);
    element.querySelector('.elements__card-icon').addEventListener('click', handleLikeIcon); 
    
    //открываем pop-up с картинкой
    cardImage.addEventListener('click', function (evt) { 
    const data = evt.target;
    evt.target.closest('.elements__card-image');  
    handlePreviewPicture({
        name: data.alt,
        link: data.src
    });
     
    }); 
    
    return element;
 } 

 function handlePreviewPicture(data) {
    popupImagePicture.src = data.link;
    popupImagePicture.alt = `Изображение ${data.name}`;
    popupCaption.textContent = data.name; 
    //togglePopup(popupImage);
    openPopup(popupImage); 
 }

function renderCard(item) {
  let element = addCard(item);
  elements.prepend(element);
}

// ставим лайки
function handleLikeIcon (evt) {
    evt.target.classList.toggle('elements__card-icon_active');
}

initialCards.forEach(item => {
    renderCard(item);
});

//добавляем карточки на страницу
popupElement.addEventListener('submit', e => {
    e.preventDefault();
    const text = titleElementInput.value;
    const link = linkElementInput.value;
    titleElementInput.value = '';
    linkElementInput.value = '';
    renderCard({
        name: text,
        link: link
    });
    //togglePopup(popupElement);
    closePopup(popupElement);
});

//функция удаления карточек
function deleteElement (e) {
    const elementsCard = e.target.closest('.elements__card');
    elementsCard.remove();
};

//закрываем попап с изображением
const imageCover = document.querySelector('.popup-image__close-button').addEventListener('click', function(event){
    //togglePopup(popupImage);
    closePopup(popupImage);
});

popupOpenButton.addEventListener('click', () => { 
    setPopupDetails(); 
    //togglePopup(popup);
    openPopup(popup);
});


//закрываем попапы кликом на оверлей
imageOverlay.addEventListener('click', () => closePopup(popupImage));
elementOverlay.addEventListener('click', () => closePopup(popupElement));
profileOverlay.addEventListener('click', () => closePopup(popup));

popupCloseButton.addEventListener('click', () => closePopup(popup));

formElement.addEventListener('submit', formSubmitHandler);
popupElementOpenButton.addEventListener('click', () => {
    openPopup(popupElement);
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    const buttonElement = formElement.querySelector('.popup__button'); 
    toggleButtonState(inputList, buttonElement);
});
popupElementCloseButton.addEventListener('click', () => closePopup(popupElement));
//popupElementCloseButton.addEventListener('click', () => closePopupAndHideErrors(popupElement, config));

//закрываем попапы нажатием на Escape
document.addEventListener('keydown', (evt) => {
    //const key = event.key;
    if (evt.key === 'Escape') {
        if (popupImage.classList.contains('popup_opened')) {
        closePopup(popupImage);
    };
    if (popupElement.classList.contains('popup_opened')) {
        closePopup(popupElement);
        popupElement.reset()
    };
    if (popup.classList.contains('popup_opened')) {
        closePopup(popup);
    };
    };
});

enableValidation(config);

  const closePopupAndHideErrors = function(popup, config) {
    const formElement = popup.querySelector(config.formSelector);
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    inputList.forEach((inputElement) => {
        hideError(formElement, inputElement, config);
        inputElement.value = '';
    });
   // popup.classList.remove('popup_opened');
    //toggleButtonState (inputList, buttonElement);
};

/*function findAllPopups() {
    const allPopup = Array.from(document.querySelectorAll('.popup'));
    return allPopup;
}

function findCloseButton(popupElement) {
    return popupElement.querySelector('.popup__close')
}



findAllPopups().forEach(p => findCloseButton(p).addEventListener('click', () => closePopupAndHideErrors(p, config)));*/

//popupCloseButton.addEventListener('click', () => closePopupAndHideErrors(popup, config));
//popupElementCloseButton.addEventListener('click', () => closePopupAndHideErrors(popupElement, config));