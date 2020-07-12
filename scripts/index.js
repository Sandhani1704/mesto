const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__button-edit');
const popupCloseButton = popup.querySelector('.popup__close');
const profileUserName = document.querySelector('.profile__user');
const profileUserJob = document.querySelector('.profile__user-explorer');

const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');

const formElement = document.querySelector('.popup__container');
const formElementPictures = document.querySelector('.popup-element__container');

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

const togglePopup = function (popup) {
    popup.classList.toggle('popup_opened'); 
}

function formSubmitHandler(evt) {
    evt.preventDefault();

    setProfileDetails();

    togglePopup(popup);
 
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
    togglePopup(popupImage); 
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
    togglePopup(popupElement);
});

//функция удаления карточек
function deleteElement (e) {
    const elementsCard = e.target.closest('.elements__card');
    elementsCard.remove();
};

//закрываем попап с изображением
const imageCover = document.querySelector('.popup-image__close-button').addEventListener('click', function(event){
    togglePopup(popupImage);
});

popupOpenButton.addEventListener('click', () => { 
    setPopupDetails(); 
    togglePopup(popup);
});



//закрываем попапы кликом на оверлей
imageOverlay.addEventListener('click', () => togglePopup(popupImage));
elementOverlay.addEventListener('click', () => togglePopup(popupElement));
profileOverlay.addEventListener('click', () => togglePopup(popup));

popupCloseButton.addEventListener('click', () => togglePopup(popup));
formElement.addEventListener('submit', formSubmitHandler);
popupElementOpenButton.addEventListener('click', () => togglePopup(popupElement));
popupElementCloseButton.addEventListener('click', () => togglePopup(popupElement));

//закрываем попапы нажатием на Escape
document.addEventListener('keydown', (evt) => {
    //const key = event.key;
    if (evt.key === 'Escape') {
        if (popupImage.classList.contains('popup_opened')) {
        togglePopup(popupImage);
    };
    if (popupElement.classList.contains('popup_opened')) {
        togglePopup(popupElement);
        popupElement.reset()
    };
    if (popup.classList.contains('popup_opened')) {
        togglePopup(popup);
    };
    };
});



