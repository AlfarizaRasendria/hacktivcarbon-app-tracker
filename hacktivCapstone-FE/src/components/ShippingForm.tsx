import { useState } from 'react';

export type ShippingEstimationData = {
  type: 'shipping';
  weight_unit: 'g' | 'lb' | 'kg' | 'mt';
  weight_value: number;
  distance_unit: 'mi' | 'km';
  distance_value: number;
  transport_method: 'ship' | 'train' | 'truck' | 'plane';
};

type ShippingEstimationFormProps = {
  onSubmit: (data: ShippingEstimationData) => void;
};

const ShippingEstimationForm = ({ onSubmit }: ShippingEstimationFormProps) => {
  const [formData, setFormData] = useState<ShippingEstimationData>({
    type: 'shipping',
    weight_unit: 'kg',
    weight_value: 0,
    distance_unit: 'km',
    distance_value: 0,
    transport_method: 'ship',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [id]: id.endsWith('_value') ? parseFloat(value) : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="weight_value" className="form-label">Weight Value</label>
        <input
          type="number"
          step="any"
          id="weight_value"
          className="form-control"
          value={formData.weight_value}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="weight_unit" className="form-label">Weight Unit</label>
        <select
          id="weight_unit"
          className="form-control"
          value={formData.weight_unit}
          onChange={handleChange}
          required
        >
          <option value="g">grams (g)</option>
          <option value="lb">pounds (lb)</option>
          <option value="kg">kilograms (kg)</option>
          <option value="mt">tonnes (mt)</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="distance_value" className="form-label">Distance Value</label>
        <input
          type="number"
          step="any"
          id="distance_value"
          className="form-control"
          value={formData.distance_value}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="distance_unit" className="form-label">Distance Unit</label>
        <select
          id="distance_unit"
          className="form-control"
          value={formData.distance_unit}
          onChange={handleChange}
          required
        >
          <option value="km">kilometers (km)</option>
          <option value="mi">miles (mi)</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="transport_method" className="form-label">Transport Method</label>
        <select
          id="transport_method"
          className="form-control"
          value={formData.transport_method}
          onChange={handleChange}
          required
        >
          <option value="ship">Ship</option>
          <option value="train">Train</option>
          <option value="truck">Truck</option>
          <option value="plane">Plane</option>
        </select>
      </div>

      <button type="submit" className="btn btn-success">
        Estimate Emissions
      </button>
    </form>
  );
};

export default ShippingEstimationForm;
