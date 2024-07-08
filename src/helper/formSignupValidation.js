import formStore from '../stores/signup/signUp';

export const validateSignupForm = () => {
    const { formData } = formStore;

    if (!formData.owner_name || !formData.name || !formData.email || !formData.address) {
        formStore.setError('Please fill in all fields');
        return false;
    }
    if (!formData.email.includes('@')) {
        formStore.setError('Please enter a valid email address');
        return false;
    }
    return true;
};

export const isValidPhoneNumber = (phone_number) => {
    return phone_number && phone_number.length >= 11;
};

export const isValidLicenseKey = (license_key) => {
    return !!license_key;
};

export const isValidTime = (time) => {
    return !!time;
};

export const validateNextForm = () => {
    const { phone_number, license_key, open_time, close_time } = formStore.formData;

    if (!isValidPhoneNumber(phone_number)) {
        formStore.setError('Please enter a valid phone number with at least 11 characters.');
        return false;
    }

    if (!isValidLicenseKey(license_key)) {
        formStore.setError('Please enter a license key.');
        return false;
    }

    if (!isValidTime(open_time)) {
        formStore.setError('Please enter an opening time.');
        return false;
    }

    if (!isValidTime(close_time)) {
        formStore.setError('Please enter a closing time.');
        return false;
    }

    return true;
};
