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

      getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
          //method: 'GET',
          headers: this._headers
        })
          .then(this._handleResponse)
      }

      

      setUserAvatar(inputValue) {
            
        return fetch(`${this._baseUrl}/users/me/avatar`, {
          method: 'PATCH',
          headers: this._headers,
          body: JSON.stringify({
          avatar: inputValue.avatar
          })
        })
          .then(this._handleResponse)
      }
}