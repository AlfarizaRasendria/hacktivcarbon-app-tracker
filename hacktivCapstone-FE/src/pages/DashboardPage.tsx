// DashboardPage.tsx
import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardLayout from '../layouts/DashboardLayout';

import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// Type definitions
type CarbonAttributes = {
    carbon_g: number;
    carbon_kg: number;
    carbon_lb: number;
    carbon_mt: number;
};

const DashboardPage = () => {
    const [electricityValue, setElectricityValue] = useState('');
    const [country, setCountry] = useState('us');
    const [state] = useState('');
    const [carbonData, setCarbonData] = useState<CarbonAttributes | null>(null);

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch('https://www.carboninterface.com/api/v1/estimates', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_CARBON_API_KEY}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    type: 'electricity',
                    electricity_unit: 'mwh',
                    electricity_value: parseFloat(electricityValue),
                    country,
                    state,
                }),
            });

            const result = await res.json();
            setCarbonData(result.data.attributes);
        } catch (error) {
            console.error('API error:', error);
            setCarbonData(null);
        }
    };


    // ChartJS Data
    const chartData = {
        labels: ['Grams', 'Kilograms', 'Tonnes'],
        datasets: [
            {   
                label: 'Carbon Emissions',
                backgroundColor: '#28a745',
                data: carbonData
                    ? [carbonData.carbon_g, carbonData.carbon_kg, carbonData.carbon_mt]
                    : [0, 0, 0],
            },
        ],
    };

    return (
        <DashboardLayout>
                {/* Main Content */}
                
                    <h3>Electricity Emission Estimation</h3>
                    <form className="mb-4" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Electricity Value (MWh)</label>
                            <input
                                type="number"
                                className="form-control"
                                value={electricityValue}
                                onChange={(e) => setElectricityValue(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Country Code (e.g., us)</label>
                            <input
                                type="text"
                                className="form-control"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                required
                            />
                            <small className="text-muted">
                                You can see the country code list{' '}
                                <span
                                    style={{ color: '#0d6efd', cursor: 'pointer', textDecoration: 'underline' }}
                                    onClick={() =>
                                        window.open(
                                            'https://faint-class-d56.notion.site/4b4f41db73254b4b915ba01d55eba7e7?v=4ad0efe7763540ab801fadd9f3bf1ce0',
                                            '_blank'
                                        )
                                    }
                                >
                                    here
                                </span>.
                            </small>


                        </div>
                        {/* <div className="mb-3">
                        <label className="form-label">State Code (optional)</label>
                        <input
                            type="text"
                            className="form-control"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        />
                    </div> */}
                        <button type="submit" className="btn btn-success">
                            Estimate
                        </button>
                    </form>

                    {/* Chart Display */}
                    {carbonData && (
                        <div>
                            <h5>Emissions Results:</h5>
                            <Bar data={chartData} />
                        </div>
                    )}
        </DashboardLayout>
    );
};

export default DashboardPage;
