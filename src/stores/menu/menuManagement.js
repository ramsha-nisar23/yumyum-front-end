// MenuStore.js
import { makeAutoObservable } from 'mobx';

class MenuStore {
  menuItems = [];
  formData = {
    name: '',
    price: '',
    description: '',
    image: null,
  };
  errors = {};

  constructor() {
    makeAutoObservable(this);
  }

  setFormData(data) {
    this.formData = { ...this.formData, ...data };
  }

  setError(field, message) {
    this.errors[field] = message;
  }

  clearErrors() {
    this.errors = {};
  }

  addMenuItem(item) {
    this.menuItems.push(item);
    this.resetFormData();
  }

  resetFormData() {
    this.formData = {
      name: '',
      price: '',
      description: '',
      image: null,
    };
    this.clearErrors();
  }
}

const menuStore = new MenuStore();
export default menuStore;
