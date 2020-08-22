export default class Api {
    constructor({ baseUrl, headers}) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }

    _handleResponse(res) {
        if(res.ok) {
          return res.json();
        } else {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
      }

      getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
          headers: this._headers
        })
          .then(this._handleResponse)
      }

      setUserInfo( {name, about} ) {
        //renderLoading(true);
        return fetch(`${this._baseUrl}/users/me`, {
          method: 'PATCH',
          headers: this._headers,
          body: JSON.stringify({
            name,
            about
          })
        })
          .then(this._handleResponse)
      }

      getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
          //method: 'GET',
          headers: this._headers
        })
          .then(this._handleResponse)
      }

      

      setUserAvatar({ avatar }) {
            
        return fetch(`${this._baseUrl}/users/me/avatar`, {
          method: 'PATCH',
          headers: this._headers,
          body: JSON.stringify({
            avatar
          })
        })
          .then(this._handleResponse)
      }

      addCard({ name, link, alt }) {
        //renderLoading(true);
        return fetch(`${this._baseUrl}/cards`, {
          method: 'POST',
          headers: this._headers,
          body: JSON.stringify({
            name,
            link,
            alt
          })
        })
          .then(this._handleResponse)
      }

      putLike(cardID) {
        return fetch(`${this._baseUrl}/cards/likes/${cardID}`, {
          method: 'PUT',
          headers: this._headers,
        })
          .then(this._handleResponse)
      }

      removeLike(cardID) {
        return fetch(`${this._baseUrl}/cards/likes/${cardID}`, {
          method: 'DELETE',
          headers: this._headers,
        })
          .then(this._handleResponse)
      } 
}