import React from 'react';
import { observer } from 'mobx-react-lite';
import { FaBars, FaBell, FaEnvelope,FaRocketchat} from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { sidebarStore } from '../../stores/sidebar/sideBar';
import './header.scss'

const Header = observer(() => {
  const location = useLocation();
  const isDashboardPage = location.pathname === '/sidebar';


  return (
    <>
      <header className={`header ${isDashboardPage ? 'dashboard-header' : ''}`}>
        <div className="menu-icon" onClick={() => sidebarStore.setSidebarOpen(true)}>
          <span className="material-icons-outlined" style={{ cursor: 'pointer' }}><FaBars /></span>
        </div>

        <div className="header-left">
        </div>
        <div className={`header-right ${isDashboardPage ? 'dashboard-header-right' : ''}`}>
          <FaRocketchat style={{ marginRight: '10px' }}/>
          <FaEnvelope style={{ marginRight: '10px' }} />
          <FaBell />
        </div>
      </header>
    </>
  );
});

export default Header;
