import React from 'react';
import './nextform.scss';
import image from '../../assets/sig.png';
import signup from '../../assets/sign.png';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import formStore from '../../stores/signup/signUp';
import { validateNextForm } from '../../helper/formSignupValidation';

const NextForm = observer(() => {
    const navigate = useNavigate();
    const { formData, placeholders } = formStore;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        formStore.setFormData(name, value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateNextForm()) {
            console.log("Form validated");
            await formStore.submitForm(navigate);
        } else {
            console.log("Form validation failed");
        }
    };

    const handleBack = () => {
        navigate(-1);
    };

    const handleFocus = (field) => {
        formStore.setPlaceholder(field, '');
    };

    const handleBlur = (field, placeholderText) => {
        if (!formData[field]) {
            formStore.setPlaceholder(field, placeholderText);
        }
    };

    return (
        <div className="container">
            <div className="left">
                <img src={signup} alt='' />
            </div>
            <div className="form-container">
                <h2>Boost Your Business</h2>
                <form className="form" onSubmit={handleSubmit}>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phone_number"
                        placeholder="Phone Number"
                        onChange={handleInputChange}
                        value={formData.phone_number}
                        required
                    />
                    <input
                        type="text"
                        name="license_key"
                        placeholder="License Key"
                        value={formData.license_key}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="time"
                        name="open_time"
                        value={formData.open_time || ''}
                        onChange={handleInputChange}
                        placeholder={placeholders.startingTime}
                        onFocus={() => handleFocus('open_time')}
                        onBlur={() => handleBlur('open_time', 'Opening Time')}
                    />
                    <input
                        type="time"
                        name="close_time"
                        value={formData.close_time || ''}
                        onChange={handleInputChange}
                        placeholder={placeholders.closingTime}
                        onFocus={() => handleFocus('close_time')}
                        onBlur={() => handleBlur('close_time', 'Closing Time')}
                        required
                    />
                    <div className="button-row">
                        <button className='back' type="button" onClick={handleBack}>Back</button>
                        <button className='submit' type="submit">Get Started</button>
                    </div>
                </form>
            </div>
            <div className="right">
                <img src={image} alt='' />
            </div>
        </div>
    );
});

export default NextForm;
