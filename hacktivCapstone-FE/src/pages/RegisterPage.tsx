import MainLayout from '../layouts/MainLayout';
import RegisterForm from '../components/RegisterForm';
import './CSS/Login.css';

const RegisterPage = () => {
  return (
    <MainLayout>
      <div className="login-content d-flex justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
        <div className="p-5 rounded shadow" style={{ width: '100%', maxWidth: '600px' }}>
          <h3 className="mb-4 text-center hero-title text-light">Register</h3>
          <p className="text-light text-center" style={{ fontSize: '1rem' }}>
            Please fill in all the required data below to register!
          </p>
          <RegisterForm />
        </div>
      </div>
    </MainLayout>
  );
};

export default RegisterPage;
