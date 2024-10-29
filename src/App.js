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
import EmployeePermission from './pages/EmployeePermission';
import Leave from './pages/Leave';
import Regularization from './pages/Regularization';
import Permission from './pages/Permission';
import Ticket from './pages/Ticket';
import ItDeclaration from './pages/ItDeclaration';
import Help from './pages/Help';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="employee" element={<Employee />} />
            <Route path="employee/profile" element={<EmployeeProfile />} />
            <Route path="employee/leave" element={<EmployeeLeave />} />
            <Route path='employee/regularization' element={<EmployeeRegularization />} />
            <Route path='employee/permission' element={<EmployeePermission />} />
            <Route path='/changepassword' element={<ChangePassword />} />
            <Route path='/attendance' element={<Attendance />} />
            <Route path='/leave' element={<Leave />} />
            <Route path='/regularization' element={<Regularization />} />
            <Route path='/permission' element={<Permission />} />
            <Route path="payslip" element={<Payslip />} />
            <Route path='/itdeclaration' element={<ItDeclaration />} />
            <Route path='/ticket' element={<Ticket />} />
            <Route path='/help' element={<Help />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>

  );

}

export default App;

