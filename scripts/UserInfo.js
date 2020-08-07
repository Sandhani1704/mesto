//управление отображением информации о пользователе на странице.
export default class UserInfo {
    constructor({userName, userJob}) {
      this._userName = document.querySelector(userName);
      this._userJob = document.querySelector(userJob);
    }
  
    //возвращает объект с данными пользователя
    getUserInfo() {
      const userInfo = {name: this._userName.textContent, job: this._userJob.textContent};
      return userInfo;
    }
    
  //принимает новые данные пользователя и добавляет их на страницу
    setUserInfo(name, job) {
      this._userName.textContent = name;
      this._userJob.textContent = job;
    }
  }