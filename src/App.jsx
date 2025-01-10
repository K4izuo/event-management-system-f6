import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';
import './index.css';
import { ProtectedRoute } from './auth/ProtectedRoute';
import LoginForm from './admin/admin_login';
import Dashboard from './main/dashboard';
import AdminRegister from './admin/admin_register';

const App = () => {
  return (
      <Router basename="/event-management-system-f6">
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/register" element={<AdminRegister />} />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            <Route path="/logout" element={<Navigate to="/" />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          </AuthProvider>
      </Router>
  );
};

export default App;