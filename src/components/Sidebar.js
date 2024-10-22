import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaTachometerAlt, FaCog, FaUser, FaFileInvoiceDollar,
  FaAngleDown, FaAngleUp, FaIdBadge, FaCalendarAlt,
  FaCheckCircle, FaSignOutAlt, FaAlignJustify, FaArrowRight
} from 'react-icons/fa';

function Sidebar() {
  const [isEmployeeMenuOpen, setEmployeeMenuOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const toggleEmployeeMenu = () => {
    setEmployeeMenuOpen(!isEmployeeMenuOpen);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const logoutHandler = () => {
    navigate("/login");
  }

  return (
    <>
      {/* Toggle button for the sidebar */}
      <button
        className="sidebar-toggle-btn"
        onClick={toggleSidebar}
        style={{
          cursor: 'pointer',
          position: 'absolute',
          left: isSidebarOpen ? '230px' : '230px',  // Adjust position based on sidebar state
          top: '20px',
          zIndex: 999,
          border: "none",
          background: 'none',
          fontSize: '1.5rem',
        }}
      >
        {isSidebarOpen ? <FaAlignJustify style={{ fontSize: "20px", color: "#21bcff" }} /> : <FaArrowRight style={{ fontSize: "20px", color: "#21bcff" }} />}
      </button>

      {/* Sidebar */}
      <aside
        className="sidebar"
        style={{
          width: isSidebarOpen ? '250px' : '0px',
          transition: 'width 0.3s ease-in-out',
          overflow: 'hidden',
        }}
      >
        <ul className='menus'>
          <li className='sub-menus'><Link to="/"><FaTachometerAlt /> Dashboard</Link></li>
          <li className="sub-menus">
            <div onClick={toggleEmployeeMenu} style={{ cursor: 'pointer' }}>
              <FaUser /> Employee {isEmployeeMenuOpen ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {isEmployeeMenuOpen && (
              <ul className="submenu">
                <li className="sub-sub-menus"><Link to="/employee/profile"><FaIdBadge /> Employee Profile</Link></li>
                <li className="sub-sub-menus"><Link to="/employee/leave"><FaCalendarAlt /> Leave Request</Link></li>
                <li className="sub-sub-menus"><Link to="/employee/regularization"><FaCheckCircle /> Regularization</Link></li>
              </ul>
            )}
          </li>
          <li className='sub-menus'><Link to="/setting"><FaCog /> Settings</Link></li>
          <li className='sub-menus'><Link to="/payslip"><FaFileInvoiceDollar /> Payslip</Link></li>
          <li className="sub-menus" onClick={logoutHandler}><Link to="/logout"><FaSignOutAlt /> Logout</Link></li>
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;
