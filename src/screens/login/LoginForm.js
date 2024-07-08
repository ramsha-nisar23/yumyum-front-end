import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Link, useNavigate } from 'react-router-dom';
import './logindesign.scss';
import { validateForm } from '../../helper/formLoginValidation';
import login from '../../assets/login-back.jpg';
import { authStore } from '../../stores/login/authStore';

const LoginForm = observer(() => {
    const navigate = useNavigate();
    const { formFields, isLoggedIn, errors } = authStore;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        authStore.setFormField(name, value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            await authStore.login();
        } else {
            console.log("Form validation failed"); // Debug log
        }
    };

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/sidebar');
        }
    }, [isLoggedIn, navigate]);

    return (
        <div className='containerform'>
            <div className="forms">
                <div className="login-form">
                    <h1>YumYum</h1>
                    <h3>Welcome Back!</h3>
                    <p className='p'>Login with Restaurant name and License key!</p>
                    <form onSubmit={handleSubmit}>
                        <div className="input-boxes">
                            <div className="input-box">
                                <input
                                    placeholder="Enter your Restaurant name"
                                    type="text"
                                    name="name"
                                    value={formFields.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="input-box">
                                <input
                                    placeholder="Enter your licenseKey"
                                    type="text"
                                    name="license_key"
                                    value={formFields.license_key}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            {errors && <p className='errorStyle'>{errors}</p>}
                            <div className="button">
                                <button type='submit'>LOGIN</button>
                                <p>Don't have an account? <Link to="signup">Signup</Link></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="front">
                <img src={login} alt="not found" />
            </div>
        </div>
    );
});

export default LoginForm;
