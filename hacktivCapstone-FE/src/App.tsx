// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import VehiclePage from './pages/VehiclePage';
import FlightPage from './pages/FlightEstimationPage';
import ShippingPage from './pages/ShippingPage';
import FuelPage from './pages/FuelPage';
// import halaman lain kalau ada, misalnya LoginPage, etc.

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/vehicle" element={<VehiclePage />} />
      <Route path="/flight" element={<FlightPage />} />
      <Route path="/shipping" element={<ShippingPage />} />
      <Route path="/fuel" element={<FuelPage />} />
      {/* tambahkan route lain di sini */}
    </Routes>
  );
}

export default App;
