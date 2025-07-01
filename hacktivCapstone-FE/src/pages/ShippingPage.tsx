import { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import ShippingEstimationForm from '../components/ShippingForm';
import type { ShippingEstimationData } from '../components/ShippingForm';

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

type CarbonAttributes = {
  carbon_g: number;
  carbon_kg: number;
  carbon_lb: number;
  carbon_mt: number;
};

const ShippingEstimationPage = () => {
  const [carbonData, setCarbonData] = useState<CarbonAttributes | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (data: ShippingEstimationData) => {
    setLoading(true);
    setError(null);
    setCarbonData(null);

    try {
      const response = await fetch('https://www.carboninterface.com/api/v1/estimates', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_CARBON_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      console.log('Submitting flight estimation with data:', data);
      const result = await response.json();

      if (!response.ok || !result.data) {
        console.error("Full API response:", result);
        throw new Error(result.error || result.message || 'Invalid response from API');
      }

      setCarbonData(result.data.attributes as CarbonAttributes);

    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error('API error:', err.message);
        setError(err.message);
      } else {
        console.error('Unknown error occurred.');
        setError('Unknown error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  const chartData = {
    labels: ['Grams', 'Kilograms', 'Pounds', 'Metric Tonnes'],
    datasets: [
      {
        label: 'CO₂ Emissions',
        backgroundColor: '#007bff',
        data: carbonData
          ? [
            carbonData.carbon_g,
            carbonData.carbon_kg,
            carbonData.carbon_lb,
            carbonData.carbon_mt,
          ]
          : [0, 0, 0, 0],
      },
    ],
  };

  return (
    <DashboardLayout>
      <div className="p-4" style={{ flex: 1 }}>
        <h3>Shipping Estimation</h3>
        <ShippingEstimationForm onSubmit={handleSubmit} />
      </div>

      {loading && <p className="text-info">Estimating emissions...</p>}
      {error && <p className="text-danger">Error: {error}</p>}

      {carbonData && (
        <div className="mt-4">
          <h5>Estimated Emissions</h5>
          <Bar data={chartData} />
        </div>
      )}
    </DashboardLayout>
  );
};


export default ShippingEstimationPage;