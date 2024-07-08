import React, { useState } from 'react';
import { observer } from 'mobx-react';
import menuStore from '../../stores/menu/menuManagement';
import MenuPopup from '../../components/menu/menuPopup';
import './menumanagement.scss';
import image from '../../assets/no-item.png'

const MenuManagement = observer(() => {
  const [showModal, setShowModal] = useState(false);

  const handleAddItemClick = () => {
    setShowModal(true);
  };

  const handlePopupSubmit = () => {
    setShowModal(false);
  };

  return (
    <div className="menu-management">
      <header className="header">
        <h1>Menu Management</h1>
        <button onClick={handleAddItemClick} className="add-item-button">
          Add Item
        </button>
      </header>
      <section className="content">
        {menuStore.menuItems.length === 0 ? (
          <div className="empty-state">
            <img src={image} alt="No items" />
            <p>No item at this time</p>
            <small>Menu will appear here after adding it.</small>
          </div>
        ) : (
          <div className="menu-list">
            <ul>
              {menuStore.menuItems.map((item, index) => (
                <li key={index} className="menu-item">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <span>${item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
      {showModal && <MenuPopup onSubmit={handlePopupSubmit} />}
    </div>
  );
});

export default MenuManagement;
