export const initialCards = [
    {
        name: 'Новая Зеландия',
        link: 'https://vedgard.com/sites/default/files/%D0%9C%D0%BE%D0%B8%20%D1%84%D0%BE%D1%82%D0%BE%20-%201568/%D0%A4%D0%BE%D1%82%D0%BE%20%D0%B2%20%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%8F%D1%85/4077-7537.jpg'
    },
    {
        name: 'Сингапур',
        link: 'https://travelinlife.ru/uploads/666/08ca19b5eb73ebf4a3f223ea51221b25.jpg'
    },
    {
        name: 'Португалия',
        link: 'https://avatars.mds.yandex.net/get-pdb/49816/4c144206-3a95-442f-baa8-062632777265/s1200?webp=false'
    },
    {
        name: 'Багамы',
        link: 'https://funart.pro/uploads/posts/2019-10/1572171763_bagamy-kurort-bagamskie-ostrova-23.jpg'
    },
    {
        name: 'Куба',
        link: 'https://wikiway.com/upload/iblock/63f/gavana.jpg'
    },
    {
        name: 'Италия',
        link: 'https://avatars.mds.yandex.net/get-zen_doc/1860332/pub_5e1d661fd7859b00b4e69bb1_5e1d674bcddb7100b16e7fef/scale_1200'
    }
];

export const popup = document.querySelector('.popup-profile');
export const popupOpenButton = document.querySelector('.profile__button-edit');
export const nameInput = document.querySelector('.popup__input_type_name');
export const jobInput = document.querySelector('.popup__input_type_job');
export const popupElementAddButton = document.querySelector('.profile__button-add');
export const popupElement = document.querySelector('.popup-element');
export const popupEditProfileSelector = '.popup-profile';

export const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
}

export const openPopupWithImage = '.popup-image';
export const containerСardElementsSelector = '.elements';
export const popupAddPlaceSelector = '.popup-element';
export const profileNameSelector = '.profile__user';
export const profileJobSelector = '.profile__user-explorer';