import './signup.scss';
import image from '../../assets/sig.png';
import signup from '../../assets/sign.png';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import formStore from '../../stores/signup/signUp';
import { validateSignupForm } from '../../helper/formSignupValidation';

const Signup = observer(() => {
  const navigate = useNavigate();
  const { formData } = formStore;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    formStore.setFormData(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateSignupForm()) {
      navigate('/proceed'); 
    } else {
      console.log("There is something wrong!");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <img src={signup} alt='' />
      </div>
      <div className="signup-form-container">
        <h2>Let’s start!</h2>
        <p>It should only take a few minutes</p>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Restaurant Owner Name"
            value={formData.owner_name}
            onChange={handleInputChange}
            name="owner_name" 
            required
          />
          <input
            type="text"
            placeholder="Restaurant Name"
            value={formData.name}
            onChange={handleInputChange}
            name="name" 
            required
          />
          <input
            type="email"
            placeholder="Restaurant Email"
            value={formData.email}
            onChange={handleInputChange}
            name="email" 
            required
          />
          <input
            type="text"
            placeholder="Address"
            value={formData.address}
            onChange={handleInputChange}
            name="address" 
            required
          />
          <button type="submit">Proceed</button>
        </form>
      </div>
      <div className="signup-right">
        <img src={image} alt='' />
      </div>
    </div>
  );
});

export default Signup;
