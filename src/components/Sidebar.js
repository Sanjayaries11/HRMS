import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaTachometerAlt, FaUser, FaFileInvoiceDollar,
  FaAngleDown, FaAngleUp, FaIdBadge, FaCalendarAlt,
  FaCheckCircle, FaSignOutAlt, FaAlignJustify, FaArrowRight,
  FaFileAlt, FaClipboardCheck, FaPlaneDeparture, FaLock, FaTicketAlt, FaDollarSign, FaQuestionCircle, FaSignature
} from 'react-icons/fa';
import '../css/Sidebar.css';

function Sidebar() {
  const [isEmployeeMenuOpen, setEmployeeMenuOpen] = useState(false);
  const [isReportMenuOpen, setReportMenuOpen] = useState(false);
  const [isPayrollMenuOpen, setPayrollMenuOpen] = useState(false)
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const toggleEmployeeMenu = () => {
    setEmployeeMenuOpen(!isEmployeeMenuOpen);
  };

  const toggleReportsMenuOpen = () => {
    setReportMenuOpen(!isReportMenuOpen);
  };
  const togglePayrollMenuOpen = () => {
    setPayrollMenuOpen(!isPayrollMenuOpen);
  }

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const logoutHandler = () => {
    navigate("/login");
  };

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
              <FaUser /> Employee {isEmployeeMenuOpen ? <FaAngleUp className='menu-arrow' /> : <FaAngleDown className='menu-arrow' />}
            </div>
            {isEmployeeMenuOpen && (
              <ul className="submenu">
                <li className="sub-sub-menus"><Link to="/employee/profile"><FaIdBadge /> Employee Profile</Link></li>
                <li className="sub-sub-menus"><Link to="/employee/leave"><FaCalendarAlt /> Leave Request</Link></li>
                <li className="sub-sub-menus"><Link to="/employee/regularization"><FaCheckCircle /> Regularization</Link></li>
                <li className='sub-sub-menus'><Link to="/employee/permission"><FaLock /> Permission</Link></li>
              </ul>
            )}
          </li>
          <li className='sub-menus'>
            <div onClick={toggleReportsMenuOpen} style={{ cursor: "pointer" }}>
              <FaFileAlt /> Reports {isReportMenuOpen ? <FaAngleUp className='menu-arrow' /> : <FaAngleDown className='menu-arrow' />}
            </div>
            {isReportMenuOpen && (
              <ul className='submenu'>
                <li className='sub-sub-menus'><Link to="/attendance"><FaClipboardCheck /> Attendance</Link></li>
                <li className='sub-sub-menus'><Link to=""><FaPlaneDeparture /> Leave</Link></li>
                <li className='sub-sub-menus'><Link to=""><FaCheckCircle /> Regularization</Link></li>
                <li className='sub-sub-menus'><Link to=""><FaLock /> Permission</Link></li>
              </ul>
            )}
          </li>
          <li className='sub-menus'>
            <div onClick={togglePayrollMenuOpen} style={{ cursor: "pointer" }}>
              <FaDollarSign /> Payroll {isPayrollMenuOpen ? <FaAngleUp className='menu-arrow' /> : <FaAngleDown className='menu-arrow' />}
            </div>
            {isPayrollMenuOpen && (
              <ul className='submenu'>
                <li className='sub-sub-menus'><Link to="/payslip"><FaFileInvoiceDollar /> Payslip</Link></li>
                <li className='sub-sub-menus'><Link to="/payslip"><FaSignature /> IT Declaration</Link></li>
              </ul>
            )}
          </li>
          <li className="sub-menus"><Link to=""><FaTicketAlt /> Ticket</Link></li>
          <li className="sub-menus"><Link to=""><FaQuestionCircle />Help</Link></li>
          <li className="sub-menus" onClick={logoutHandler}><Link to="/logout"><FaSignOutAlt /> Logout</Link></li>
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;
