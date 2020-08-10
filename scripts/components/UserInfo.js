//управление отображением информации о пользователе на странице.
export default class UserInfo {
    constructor({userNameSelector, userJobSelector}) {
      this._userNameElement = document.querySelector(userNameSelector);
      this._userJobElement = document.querySelector(userJobSelector);
    }
  
    //возвращает объект с данными пользователя. Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
    getUserInfo() {
    this._userProfileData = {};
    this._userProfileData.name = this._userNameElement.textContent;
    this._userProfileData.job = this._userJobElement.textContent;
    return this._userProfileData;
    }
    
  //принимает новые данные пользователя и добавляет их на страницу
    setUserInfo(name, job) {
      this._userNameElement.textContent = name;
      this._userJobElement.textContent = job;
      
    }
  }