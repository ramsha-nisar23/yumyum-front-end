import { makeObservable, observable, action } from 'mobx';
import { SC } from '../../services/serverCall';  // Ensure you import your server call module

class AuthStore {
    isLoggedIn = false;
    formFields = {
        name: '',
        license_key: '',
    };
    errors = '';

    constructor() {
        makeObservable(this, {
            formFields: observable,
            errors: observable,
            isLoggedIn: observable,
            setFormField: action,
            clearFormFields: action,
            setError: action,
            login: action,
            setLoggedIn: action,
        });
    }

    setFormField(field, value) {
        this.formFields[field] = value;
    }

    clearFormFields() {
        this.formFields = {
            name: '',
            license_key: '',
        };
    }

    setError(errors) {
        this.errors = errors;
    }

    setLoggedIn(loggedIn) {
        this.isLoggedIn = loggedIn;
    }

    async login() {
        const { name, license_key } = this.formFields;
        const payload = {
            name,
            license_key
        };

        try {
            const response = await SC.postCall('/restaurant_login', payload);
            console.log("response:", response); 
            if (response.data && response.data.data && response.data.data.token) {
                const {token} = response.data.data;
                localStorage.setItem('userToken', JSON.stringify({ accessToken: token }));
                this.setLoggedIn(true);
                console.log("Stored token:", token); 
            } else {
                this.setError('Invalid response from server');
                console.log("Invalid response data:", response.data); 
            }
        } catch (error) {
            this.setError('Invalid credentials. Please try again.');
            console.log("API call error:", error); 
        }
    }
}

export const authStore = new AuthStore();
