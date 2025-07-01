// components/RegisterForm.tsx
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import FormInput from './FormInput';

const RegisterForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: '',
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Register gagal');
            }

            alert('✅ Berhasil daftar!');
            navigate('/login');
        } catch (err: unknown) {
            if (err instanceof Error) {
                alert('❌ Error: ' + err.message);
            } else {
                alert('❌ Error tidak diketahui');
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormInput
                label="fullName"
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
            />
            <FormInput
                label="Username"
                type="text"
                id="username"
                value={formData.username}
                onChange={handleChange}
                required
            />
            <FormInput
                label="Email"
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <FormInput
                label="Password"
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                required
            />
            <div className="d-flex justify-content-end">
                <button
                    type="submit"
                    className="btn btn-success align-self-end"
                    style={{ width: '100%', maxWidth: '150px' }}
                >
                    Register
                </button>
            </div>
        </form>
    );
};

export default RegisterForm;
