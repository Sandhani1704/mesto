let popup = document.querySelector('.popup');
let popupOpenButton = document.querySelector('.profile__button-edit');
let popupCloseButton = popup.querySelector('.popup__close');
let profileUserName = document.querySelector('.profile__user');
let profileUserJob = document.querySelector('.profile__user-explorer');

let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');

let profileUserElement = document.querySelector('.profile__user');
let profileUserExplorerElement = document.querySelector('.profile__user-explorer');
let formElement = document.querySelector('.popup__container');

function setPopupDetails() {
nameInput.value = profileUserName.textContent;
jobInput.value = profileUserJob.textContent;
}

function setProfileDetails() {
profileUserElement.textContent = nameInput.value;
profileUserExplorerElement.textContent = jobInput.value;
}

let popupToggle = function () {
  popup.classList.toggle('popup_opened'); if 
    (popup.classList.contains('popup_opened')) {
      setPopupDetails();
      }
     }

popupOpenButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);



function formSubmitHandler(evt) {
    evt.preventDefault();

    setProfileDetails();

    popupToggle();
}

formElement.addEventListener('submit', formSubmitHandler);



