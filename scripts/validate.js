const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  //errorClass: 'popup__error_visible'
  errorClass: 'popup__input-error_active'
} 

//const popupFormElement = document.querySelector('.popup__form');
//const popupInput = popupFormElement.querySelector('.popup__input');
//const formError = popupFormElement.querySelector(`#${popupInput.id}-error`); 
//const buttonElement = document.querySelector('.popup__button');

// Функция, которая добавляет класс с ошибкой
  const showError = (formElement, inputElement, errorMessage) => {
  const errorElement = document.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add('popup__input_type_error');
  errorElement.textContent = errorMessage;
  // Показываем сообщение об ошибке
  errorElement.classList.add('popup__input-error_active');
}; 

// Функция, которая удаляет класс с ошибкой
const hideError = (formElement, inputElement) => {
  const errorElement = document.querySelector(`#${inputElement.id}-error`);
  //const errorElement = document.querySelector(`#${title-input-error.id}-error`);
  inputElement.classList.remove('popup__input_type_error');
  // Скрываем сообщение об ошибке
  errorElement.classList.remove('popup__input-error_active');
  errorElement.textContent = '';
};

// Функция, которая проверяет валидность поля
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showError(formElement, inputElement, inputElement.validationMessage);
  } else {
    // Если проходит, скроем
    hideError(formElement, inputElement);
  }
};

//слушатель всех форм
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__button');
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
      
    });
    //console.log(inputElement);
  });
}



// Функция проверяющая валидность полей
const hasInvalidInput = (inputList) => {
  // проходим по этому массиву методом some
  return inputList.some((inputElement) => {
        // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся фунцкция
    // hasInvalidInput вернёт true

    return !inputElement.validity.valid;
  })
};

// функция переключения кнопки 
const toggleButtonState = (inputList, buttonElement) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
    buttonElement.classList.add('popup__button_inactive');
  } else {
        // иначе сделай кнопку активной
    buttonElement.classList.remove('popup__button_inactive');
  }
};

// функция валидации формы на основании параметров в объекте
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
  formElement.addEventListener('submit', function (evt) {
    evt.preventDefault();
  });
  setEventListeners(formElement);

  //console.log(formElement);
  });
}

enableValidation(config);

