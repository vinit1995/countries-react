import { useState } from 'react'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import NotFound from './pages/not-found/not-found'
import LoginGuard from './guards/LoginGuard';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<LoginGuard element={<Home />} />} />
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App
