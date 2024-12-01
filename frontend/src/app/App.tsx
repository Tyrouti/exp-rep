import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from '../widgets/NavBar/NavBar';
import { LoginForm } from '../features/auth/ui/LoginForm';
import { SignupForm } from '../features/auth/ui/SignupForm';
import HomePage from '../pages/HomePage';
import { ProfilePage } from '../pages/ProfilePage';
import { ActionPage } from '../pages/ActionPage';

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} /> {/* Новый маршрут для регистрации */}
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/action" element={<ActionPage />} />
      </Routes>
    </Router>
  );
};

export default App;
