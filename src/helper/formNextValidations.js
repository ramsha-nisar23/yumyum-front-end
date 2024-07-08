import formStore from "../stores/signup/signUp";

export const isValidPhoneNumber = (phone_number) => {
    return phone_number && phone_number.length >= 11;
};

export const isValidLicenseKey = (license_key) => {
    return !!license_key;
};

export const isValidTime = (time) => {
    return !!time;
};

export const validateForm = () => {
    const { phone_number, license_key, open_time, close_time } = formStore.formData;

    if (!isValidPhoneNumber(phone_number)) {
        alert('Please enter a valid phone number with at least 13 characters.');
        return false;
    }

    if (!isValidLicenseKey(license_key)) {
        alert('Please enter a license key.');
        return false;
    }

    if (!isValidTime(open_time)) {
        alert('Please enter an opening time.');
        return false;
    }

    if (!isValidTime(close_time)) {
        alert('Please enter a closing time.');
        return false;
    }

};
