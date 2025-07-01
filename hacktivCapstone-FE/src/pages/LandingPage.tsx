import { useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import '../pages/CSS/LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="landing-content text-start">
        <p className="hero-title">
          Predict Tomorrow's Emissions<br />Act Today
        </p>
        <p className="hero-desc">
          Our CO₂ Emission Prediction Apps empowers you to forecast future
          emissions across key activities like electricity usage, air travel,
          shipping, vehicle movement, and fuel combustion.
        </p>
        <div className="d-flex gap-3">
          <button type="button" className="btn btn-success px-4" onClick={() => navigate('/login')}>
            Login
          </button>
          <button type="button" className="btn btn-success px-4" onClick={() => navigate('/register')}>
            Register
          </button>
        </div>
      </div>
    </MainLayout>
  );
}

export default LandingPage;
