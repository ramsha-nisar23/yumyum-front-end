import { makeAutoObservable } from 'mobx';

class UserStore {
  user = {
    name: 'Owner Name', 
  };

  constructor() {
    makeAutoObservable(this);
  }

  setUser(name) {
    this.user.name = name;
  }
}

const userStore = new UserStore();
export default userStore;
