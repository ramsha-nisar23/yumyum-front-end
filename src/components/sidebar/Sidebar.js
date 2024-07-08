import React from 'react';
import './Sidebar.scss';
import { observer } from 'mobx-react-lite';
import { FaChevronDown, FaChevronUp, FaTimes } from "react-icons/fa";
import { menuItem } from '../../navigations/Routes';
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { sidebarStore } from '../../stores/sidebar/sideBar';
import Header from '../../components/header/Header';
import userStore from '../../stores/user/userStore'; // Import the user store

const Sidebar = observer(() => {
  const location = useLocation();
  const isDashboardPage = location.pathname === '/sidebar';
  const closeSidebar = () => {
    sidebarStore.setSidebarOpen(false);
  };

  const toggleMenu = (index) => {
    sidebarStore.toggleMenu(index);
  };
  const handleMouseEnter = (index) => {
    sidebarStore.handleMouseEnter(index);
  };
  const handleMouseLeave = () => {
    sidebarStore.handleMouseLeave();
  };

  const userInitial = userStore.user ? userStore.user.name.charAt(0).toUpperCase() : ''; // Check if user exists
  const userName = userStore.user ? userStore.user.name : 'User'; // Fallback to 'User' if userStore.user is not defined

  return (
    <>
      <div className="grid-container">
        <Header />
        <aside id="sidebar" className={sidebarStore.sidebarOpen ? "sidebar-responsive" : ""}>
          <div className="sidebar-title">
            <span className="material-icons-outlined" onClick={closeSidebar} style={{ cursor: 'pointer' }}><FaTimes /></span>
          </div>
          <div className="user-info">
            <div className="user-initial">{userInitial}</div>
            <div className="user-name">{userName}</div>
          </div>
          <ul className="link">
            {menuItem[0].menu.map((item, index) => (
              <li key={index} onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}>
                <NavLink to={item.path} className="navlink">
                  <div className="navlink1" onClick={() => toggleMenu(index)}>
                    <div className="icon">{item.icon}</div>
                    {item.name}
                    {item.subitems && (
                      <div className="menu-item-arrow">
                        {sidebarStore.openMenus.includes(index) ? <FaChevronUp /> : <FaChevronDown />}
                      </div>
                    )}
                  </div>
                </NavLink>
                {item.subitems && sidebarStore.openMenus.includes(index) && (
                  <ul className='sub-menu'>
                    {item.subitems.map((subitems, subIndex) =>
                      <li key={subIndex} >
                        <NavLink to={subitems.path} className="navlink">
                          <div className='navlink1'>
                            {subitems.name}
                          </div>
                        </NavLink>
                      </li>)}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </aside>
        <main className={`main-container ${isDashboardPage ? 'dashboard-content' : ''}`}>
          <Outlet />
        </main>
      </div>
    </>
  );
});

export default Sidebar;
