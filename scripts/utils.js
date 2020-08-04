export const openPopup = function (popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keyup', handleEsc);

}

export const closePopup = function (popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keyup', handleEsc);
}

//закрываем попапы нажатием на Escape 
function handleEsc(evt) {
    if (evt.key === 'Escape') {
        const popupOpened = document.querySelector('.popup_opened');
        popupOpened.classList.remove('popup_opened');
    }
}
