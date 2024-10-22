import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUnlockAlt, FaSignOutAlt } from 'react-icons/fa';
import logo from '../asset/Afablez.png';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const logoutHandler = (e) => {
    e.preventDefault();
    navigate("./login");
  }

  return (
    <header className="header d-flex justify-content-between align-items-center p-3 bg-light">
      <div className="logo">
        <img src={logo} alt="Logo" style={{ width: '150px' }} />
      </div>
      <div className="user-info position-relative">
        <h5 className="user-name d-inline-block mb-0">Hi, <strong>Sanjay Kumar S</strong></h5>
        <button
          className="dropdown-btn ms-2 btn btn-light"
          onClick={toggleDropdown}
        >
          ▼
        </button>

        {/* Conditionally render dropdown */}
        <div className={`dropdown-menu position-absolute mt-2 p-2 bg-white border shadow-sm ${isDropdownOpen ? 'd-block' : 'd-none'}`}>
          <Link to="/changepassword" href="/change-password" className="dropdown-item d-flex align-items-center">
            <FaUnlockAlt className="me-2" /> Change Password
          </Link>
          <Link to="/logout" className="dropdown-item d-flex align-items-center" onClick={logoutHandler}>
            <FaSignOutAlt className="me-2" /> Logout
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
