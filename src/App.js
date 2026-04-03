
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './auth/Login';
import Header from './components/header';
import Register from './auth/Register';
import Dashboard from './pages/Dashboard';
import GustRoute from './Routes/GustRoute';
import ProtectedRoute from './Routes/ProtectedRoute';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div>
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/register" element=
            {
              <GustRoute>
               <Register />
             </GustRoute>
            } />
            <Route path="/login" element={
                  <GustRoute>
              <Login />
            </GustRoute>
              } />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
          </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
