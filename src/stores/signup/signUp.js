import { makeObservable, observable, action, computed } from 'mobx';
import { SC } from '../../services/serverCall';
import userStore from '../user/userStore'; // Import the user store

class FormStore {
  formData = {
    owner_name: '',
    name: '',
    email: '',
    address: '',
    phone_number: '',
    license_key: '',
    open_time: '',
    close_time: '',
  };

  placeholders = {
    startingTime: 'Opening Time',
    closingTime: 'Closing Time',
  };

  errors = null;

  constructor() {
    makeObservable(this, {
      formData: observable,
      placeholders: observable,
      errors: observable,
      setFormData: action,
      setPlaceholder: action,
      clearFormData: action,
      setError: action,
      currentTime: computed,
      submitForm: action,
    });
  }

  setFormData(field, value) {
    this.formData[field] = value;
  }

  setPlaceholder(field, value) {
    this.placeholders[field] = value;
  }

  clearFormData() {
    this.formData = {
      owner_name: '',
      name: '',
      email: '',
      address: '',
      phone_number: '',
      license_key: '',
      open_time: '',
      close_time: '',
    };
  }

  setError(errors) {
    this.errors = errors;
  }

  get currentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  async submitForm(navigate) {
    const { owner_name, name, email, address, phone_number, license_key, open_time, close_time } = this.formData;
    const payload = {
      owner_name: owner_name,
      name: name,
      email: email,
      address: address,
      phone_number: phone_number,
      license_key: license_key,
      open_time: open_time,
      close_time: close_time,
    };

    try {
      const response = await SC.postCall('/restaurant_signup', payload);
      if (response.data && response.data.data && response.data.data.token) {
        const { token } = response.data.data;
        localStorage.setItem('userToken', JSON.stringify({ accessToken: token }));
        userStore.setUser(name); // Set the user's name in the user store
        navigate('/sidebar');
      }
    } catch (error) {
      console.error("API call error:", error);
      this.setError('Invalid credentials. Please try again.');
    }
  }
}

const formStore = new FormStore();
export default formStore;
