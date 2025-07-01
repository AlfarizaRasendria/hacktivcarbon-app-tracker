// components/LoginForm.tsx
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import FormInput from './FormInput';

const LoginForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            console.log("Backend URL:", import.meta.env.VITE_BACKEND_URL);

            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Login failed');
            }

            // Misalnya backend kirim status sukses saja
            alert('Login sukses!');
            navigate('/dashboard');
        } catch (err: unknown) {
            if (err instanceof Error) {
                alert(`Error ${err.message}`);
            } else {
                alert('Unknown error occurred');
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormInput
                label="Email"
                type="text"
                id="email"
                value={formData.email}
                onChange={handleChange}
            />
            <FormInput
                label="Password"
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
            />

            <div className="d-flex justify-content-end">
                <button
                    type="submit"
                    className="btn btn-success"
                    style={{ width: '100%', maxWidth: '100px' }}
                >
                    Login
                </button>
            </div>
        </form>

    );
};

export default LoginForm;
