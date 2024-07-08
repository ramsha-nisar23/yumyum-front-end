import { observer } from 'mobx-react';
import menuStore from '../../stores/menu/menuManagement';
import { RiAddCircleLine } from 'react-icons/ri';
import './popupstyle.scss';

const MenuPopup = observer(({ onSubmit, menuId }) => {
  const { formData, errors } = menuStore;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    menuStore.setFormData({ [name]: value });
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    menuStore.setFormData({ image: file });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const isValid = true; 
    if (isValid) {
      menuStore.addMenuItem(formData);
      onSubmit();
      menuStore.resetFormData();
    } else {
      // Handle validation errors
    }
  };

  const handleClose = () => {
    menuStore.resetFormData();
  };

  const handleAnotherItem = () => {
    menuStore.resetFormData();
  };

  return (
    <div className="popup-container">
      <div className="popup-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <div className="menu-popup-form">
          <h1>Add Menu Item</h1>
          <form onSubmit={handleFormSubmit}>
            <div className="form-row">
              <label className="form-label" htmlFor='name'>
                Name<span className="required-field">*</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  id='name'
                  onChange={handleInputChange}
                  required
                />
                {errors.name && (
                  <div className="error-message">{errors.name}</div>
                )}
              </label>
              <label className="form-label" htmlFor='price'>
                Price<span className="required-field">*</span>
                <input
                  type="text"
                  name="price"
                  value={formData.price}
                  id='price'
                  onChange={handleInputChange}
                  required
                />
                {errors.price && (
                  <div className="error-message">{errors.price}</div>
                )}
              </label>
            </div>
            <div className="form-row">
              <label className="form-label" htmlFor='description'>
                Description<span className="required-field">*</span>
                <textarea
                  name="description"
                  value={formData.description}
                  id='description'
                  onChange={handleInputChange}
                  required
                />
                {errors.description && (
                  <div className="error-message">{errors.description}</div>
                )}
              </label>
              <label className="form-label" htmlFor='image'>
                Image<span className="required-field">*</span>
                <input
                  type="file"
                  name="image"
                  id='image'
                  accept="image/*"
                  onChange={handleFileInputChange}
                  required
                />
                {errors.image && (
                  <div className="error-message">{errors.image}</div>
                )}
              </label>
            </div>
            <div className="popup-btn-section">
              <button type="button" className="another-popup" onClick={handleAnotherItem}>
                <RiAddCircleLine />
                Add Another
              </button>
              <button type="submit" className="add-popup">
                Add Item
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
});

export default MenuPopup;
