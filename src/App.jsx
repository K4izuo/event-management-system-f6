import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';
import './index.css';
import { ProtectedRoute } from './auth/ProtectedRoute';
import LoginForm from './admin/admin_login';
import Dashboard from './main/dashboard';
import AdminRegister from './admin/admin_register';

const App = () => {
  return (
    <AuthProvider>
      <Router basename="/event-management-system-f6">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<AdminRegister />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/logout" element={<LoginForm />} /> */}
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;