import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Employee from './pages/Employee';
import Payslip from './pages/Payslip';
import './App.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import EmployeeProfile from './pages/EmployeeProfile';
import EmployeeLeave from './pages/EmployeeLeave';
import EmployeeRegularization from './pages/EmployeeRegularization';
import { HelmetProvider } from 'react-helmet-async';
import ChangePassword from './pages/ChangePassword';
import Attendance from './pages/Attendance';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="employee" element={<Employee />} />
            <Route path="payslip" element={<Payslip />} />
            <Route path="employee/profile" element={<EmployeeProfile />} />
            <Route path="employee/leave" element={<EmployeeLeave />} />
            <Route path='employee/regularization' element={<EmployeeRegularization />} />
            <Route path='/changepassword' element={<ChangePassword />} />
            <Route path='/attendance' element={<Attendance />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>

  );

}

export default App;

