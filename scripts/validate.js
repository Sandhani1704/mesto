
//const popupFormElement = document.querySelector('.popup__form');
//const popupInput = popupFormElement.querySelector('.popup__input');
//const formError = popupFormElement.querySelector(`#${popupInput.id}-error`); 
//const buttonElement = document.querySelector('.popup__button');

// Функция, которая добавляет класс с ошибкой
  const showError = (formElement, inputElement, errorMessage, validationConfig) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(validationConfig.inputErrorClass);
  errorElement.textContent = errorMessage;
  // Показываем сообщение об ошибке
  errorElement.classList.add(validationConfig.errorClass);
}; 

// Функция, которая удаляет класс с ошибкой
const hideError = (formElement, inputElement, validationConfig) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(validationConfig.inputErrorClass);
    // Скрываем сообщение об ошибке
  errorElement.classList.remove(validationConfig.errorClass);
  errorElement.textContent = '';
};

// Функция, которая проверяет валидность поля
const checkInputValidity = (formElement, inputElement, validationConfig) => {
  if (!inputElement.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showError(formElement, inputElement, inputElement.validationMessage, validationConfig);
  } else {
    // Если проходит, скроем
    hideError(formElement, inputElement, validationConfig);
  }
};

//слушатель всех форм
const setEventListeners = (formElement, validationConfig) => {
  const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
  const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, validationConfig);
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
const enableValidation = (validationConfig) => {
  const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
  formList.forEach((formElement) => {
  formElement.addEventListener('submit', function (evt) {
    evt.preventDefault();
  });
  setEventListeners(formElement, validationConfig);

  //console.log(formElement);
  });
}



