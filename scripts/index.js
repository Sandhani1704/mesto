let popup = document.querySelector('.popup')
let popupOpenButton = document.querySelector('.popup__open')
let popupCloseButton = popup.querySelector('.popup__close')


let popupToggle = function() {
    if (popup.classList.toggle('popup_opened')) {
      let profileUserName = document.querySelector('.profile__user')
      let profileUserJob = document.querySelector('.profile__user-explorer')
     
      let nameInput = document.querySelector('.popup__input_type_name')
      let jobInput = document.querySelector('.popup__input_type_job')
     
      nameInput.value = profileUserName.textContent
      jobInput.value = profileUserJob.textContent
    }
}

    popupOpenButton.addEventListener('click', popupToggle)
    popupCloseButton.addEventListener('click', popupToggle)

// Находим форму в DOM
   let formElement = document.querySelector('.popup__container')

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Находим поля формы в DOM
    let nameInput = document.querySelector('.popup__input_type_name')// Воспользуйтесь инструментом .querySelector()
    let jobInput = document.querySelector('.popup__input_type_job')// Воспользуйтесь инструментом .querySelector()

    // Получите значение полей из свойства value
    nameInput.getAttribute('value')
    jobInput.getAttribute('value')

    // Выберите элементы, куда должны быть вставлены значения полей
    nameInput = document.querySelector('.popup__input_type_name')
    jobInput = document.querySelector('.popup__input_type_job')

    // Вставьте новые значения с помощью textContent
    

    let profileUserElement = document.querySelector('.profile__user')
    let profileUserExplorerElement = document.querySelector('.profile__user-explorer')
    profileUserElement.textContent = nameInput.value
    profileUserExplorerElement.textContent = jobInput.value

    popup.classList.toggle('popup_opened')
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
 

formElement.addEventListener('submit', formSubmitHandler);



