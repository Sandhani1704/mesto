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
const imageOverlay = document.querySelector('.popup-image__overlay');
const popupWithImageCloseButton = document.querySelector('.popup-image__close-button');


const popupImage = document.querySelector('.popup-image');

const ElementsImage = document.querySelector('.elements__card-image');
const ElementsTitle = document.querySelector('.elements__card-name');
const popupImagePicture = document.querySelector('.popup-image__image');
const popupCaption = document.querySelector('.popup-image__caption');
const elements = document.querySelector('.elements');

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

const popupToggle = function () {
  popup.classList.toggle('popup_opened'); if 
    (popup.classList.contains('popup_opened')) {
      setPopupDetails();
      }
     }

function formSubmitHandler(evt) {
    evt.preventDefault();

    setProfileDetails();

    popupToggle();
 
}

const SecondPopupElementTogglePictures = function() {
    popupElement.classList.toggle('popup_opened');
}

const ThirdPopupToggleImages = function() {
    popupImage.classList.toggle('popup_opened');
}

// функция создания карточек
const addCard = function (item) {
    // получаем содержимое template
    const ElementTemplate = document.querySelector('#element').content;
    // клонируем содержимое тега template
    const element = ElementTemplate.cloneNode(true);
    // наполняем содержимым
    element.querySelector('.elements__card-name').textContent = item.name;
    element.querySelector('.elements__card-image').src = item.link;
    
    element.querySelector('.elements__remove-button').addEventListener('click', deleteElement);
    element.querySelector('.elements__card-icon').addEventListener('click', function (evt) {
        evt.target.classList.toggle('elements__card-icon_active');
    });
    const ElementsTitle = element.querySelector('.elements__card-name');
    const ElementsImage = element.querySelector('.elements__card-image');
    const cardImage = element.querySelector('.elements__card-image');

    cardImage.addEventListener('click', function (evt) {
       evt.target.closest('.elements__card-image');
       popupCaption.textContent = ElementsTitle.textContent;
       popupImagePicture.src = ElementsImage.src;
        ThirdPopupToggleImages();
    });
    // отображаем на странице
    elements.prepend(element);
} 

/*let imageCover = document.querySelector('.popup-image').addEventListener('click', function(event){
    ThirdPopupToggleImages();
});*/

const imageCover = document.querySelector('.popup-image__close-button').addEventListener('click', function(event){
    ThirdPopupToggleImages();
});

initialCards.forEach(item => {
    addCard(item);
});

//добавляем карточки на страницу
popupElement.addEventListener('submit', e => {
    e.preventDefault();
    const text = titleElementInput.value;
    const link = linkElementInput.value;
    titleElementInput.value = '';
    linkElementInput.value = '';
    addCard({
        name: text,
        link: link
    });
    SecondPopupElementTogglePictures();
});

//функция удаления карточек
function deleteElement (e) {
    const elementsCard = e.target.closest('.elements__card');
    elementsCard.remove();
};

popupOpenButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);
formElement.addEventListener('submit', formSubmitHandler);
popupElementOpenButton.addEventListener('click', SecondPopupElementTogglePictures);
popupElementCloseButton.addEventListener('click', SecondPopupElementTogglePictures);





 