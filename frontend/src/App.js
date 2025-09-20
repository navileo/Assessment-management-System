import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import ReportGenerator from './components/ReportGenerator';
import { AuthProvider, useAuth } from './components/AuthContext';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <nav className="flex justify-center mb-6">
              <Link to="/login" className="mx-2 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600">Login</Link>
              <Link to="/signup" className="mx-2 px-4 py-2 rounded-md bg-green-500 text-white hover:bg-green-600">Signup</Link>
            </nav>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/report"
                element={
                  <PrivateRoute>
                    <ReportGenerator />
                  </PrivateRoute>
                }
              />
              <Route path="/" element={<Login />} /> {/* Default route */}
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
