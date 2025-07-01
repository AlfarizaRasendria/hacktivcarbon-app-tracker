import { useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // misalnya: hapus token, redirect ke login, dsb
        localStorage.removeItem("access_token");
        // atau kalau pakai react-router
        navigate("/login");
    };


    return (
        <div
            className="bg-dark text-white p-3"
            style={{ minHeight: '100vh', width: '250px' }}
        >
            <h4>Dashboard</h4>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <NavLink to="/dashboard" className="nav-link text-white">
                        Electricity Estimation
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/vehicle" className="nav-link text-white">
                        Vehicle Estimation
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/flight" className="nav-link text-white">
                        Flight Estimation
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/shipping" className="nav-link text-white">
                        Shipping Estimation
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/fuel" className="nav-link text-white">
                        Fuel Combustion Estimation
                    </NavLink>
                </li>
                <hr className="bg-light" />
                <li className="nav-item">
                    <button
                        className="nav-link text-white bg-transparent border-0"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar 