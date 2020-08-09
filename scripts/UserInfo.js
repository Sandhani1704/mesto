//управление отображением информации о пользователе на странице.
export default class UserInfo {
    constructor({userName, userJob}) {
      this._userName = userName;
      this._userJob = userJob;
    }
  
    //возвращает объект с данными пользователя. Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
    getUserInfo() {
    this._userProfileData = {};
    this._userProfileData.name = this._userName.textContent;
    this._userProfileData.job = this._userJob.textContent;
    return this._userProfileData;
    }
    
  //принимает новые данные пользователя и добавляет их на страницу
    setUserInfo(name, job) {
      this._userName.textContent = name;
      this._userJob.textContent = job;
    }
  }