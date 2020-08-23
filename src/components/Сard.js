export class Card {
    //constructor(name, link, cardTemplate, handleCardClick) {
        constructor ({data, handleCardClick, handleLikeClick, handleDeleteButtonClick}, userId, cardSelector) {
        /*this._name = name;
        this._link = link;
        this._handleCardClick = handleCardClick;*/
        //this._isLiked = false;
    this._userId = userId._id;    
    this._name = data.name;
    this._link = data.link;
    this._alt = data.alt;
    this._likes = data.likes;
    this._userId = data.myID;
    this._ownerId = data.owner._id;
    this._cardId = data._id;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteButtonClick = handleDeleteButtonClick;
    this._cardSelector = cardSelector;
    }

    _getLikeCount() {
        const likesCount = this._likes == undefined || this._likes == null ? 0 : this._likes.length;
        this._element.querySelector('.elements__like-count').textContent = likesCount;
        if (this.isLiked()) {
          
          this._element.querySelector('.elements__card-icon').classList.add('elements__card-icon_active');
        } else {
          this._element.querySelector('.elements__card-icon').classList.remove('elements__card-icon_active');
        }
      }
    
      isLiked() {
        return Boolean(this._likes.find(item => item._id === this._userId));
      }
    
      id() {
        return this._cardId;
      }
    
      setLikesInfo(data) {
        this._likes = data.likes;
        this._getLikeCount();
       
      }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector).content
        .querySelector('.elements__card')
        .cloneNode(true);
        return cardElement
    }

    _renderButtons() {
        if(this._ownerId === this._userId) {
          this._element.querySelector('.elements__remove-button').classList.add('elements__remove-button_visible')
        } else {
          this._element.querySelector('.elements__remove-button').classList.add('elements__remove-button_hidden')
        }
      } 

    generateCard() {
        this._element = this._getTemplate();
        //this._deleteButton = this._element.querySelector('.elements__remove-button');
        this._likeButton = this._element.querySelector('.elements__card-icon');
        this._elementsCard = this._element.querySelector('.elements__card');
        this._image = this._element.querySelector('.elements__card-image');
        this._imageCardName = this._element.querySelector('.elements__card-name')
        this._image.src = this._link;
        this._imageCardName.textContent = this._name;
        this._image.alt = this._name;
        if (this._ownerId === this._userId)
        {this._element.querySelector('.elements__remove-button').classList.add('elements__remove-button_visible')}
        this._getLikeCount();
        //this._renderButtons();
        this._setEventListeners()
        return this._element;

    }

   /*_handleLikeIcon() {
        this._isLiked = !this._isLiked;
        this._likeButton.classList.toggle('elements__card-icon_active');
    } */

    deleteElement() {
      this._element.remove();
      this._element = null;
        //this._elementsCard.remove();
    }

   /* _setEventListeners() {
        this._likeButton.addEventListener('click', () => this._handleLikeIcon());
        this._deleteButton.addEventListener('click', () => this._deleteElement());
        this._image.addEventListener('click', () => this._handleCardClick(this._name, this._link));
    }*/

    _setEventListeners() {
      this._image.addEventListener('click', () => {
          this._handleCardClick({
            link: this._link,
            name: this._name,
            alt: this._name
      });
        });
        this._element.querySelector('.elements__card-icon').addEventListener('click', () => {
          this._handleLikeClick(this);
          //this._getLikeCount()
        });
        this._element.querySelector('.elements__remove-button').addEventListener('click', () => {
          this._handleDeleteButtonClick(this);
        });
      }
}


