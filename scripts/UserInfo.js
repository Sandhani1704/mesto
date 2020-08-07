export default class UserInfo {
    constructor({userName, userJob}) {
      this._userName = document.querySelector(userName);
      this._userJob = document.querySelector(userJob);
    }
  
    getUserInfo() {
      const userInfo = {name: this._userName.textContent, job: this._userJob.textContent};
      return userInfo;
    }
  
    setUserInfo(name, job) {
      this._userName.textContent = name;
      this._userJob.textContent = job;
    }
  }