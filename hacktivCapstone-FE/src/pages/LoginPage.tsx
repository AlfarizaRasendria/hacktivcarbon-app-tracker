// pages/LoginPage.tsx
import MainLayout from '../layouts/MainLayout';
import LoginForm from '../components/LoginForm';
import './CSS/Login.css';

const LoginPage = () => {
  return (
    <MainLayout>
      <div
        className="login-content d-flex justify-content-center align-items-center"
        style={{ minHeight: '70vh' }}
      >
        <div
          className="p-5 rounded shadow"
          style={{ width: '100%', maxWidth: '600px' }}
        >
          <h3 className="mb-4 text-center hero-title text-light">Login</h3>
          <p className="text-light text-center" style={{ fontSize: '1rem' }}>
            Please enter your credentials to log in!
          </p>
          <LoginForm />
        </div>
      </div>
    </MainLayout>
  );
};

export default LoginPage;
