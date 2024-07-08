import { authStore } from "../stores/login/authStore";

export const validateForm = () => {
  const { name, license_key } = authStore.formFields;

  if (!name || !license_key) {
    authStore.setError('Please fill in all fields');
    return false;
  }

  if (!name) {
    authStore.setError('Please enter a valid Restaurant name');
    return false;
  }

  if (!isValidLicenseKey(license_key)) {
    authStore.setError('Please enter a valid License key');
    return false;
  }
  
  authStore.setError('');
  return true;
};
const isValidLicenseKey = (license_key) => {
  // Example validation logic: Check if the license key has a minimum length of 6 characters
  return license_key.length >= 6;
};
