import { useState } from 'react';

export type VehicleEstimationData = {
    type : 'vehicle';
    distance_unit : 'mi' | 'km';
    distance_value : number;
    vehicle_model_id : string;
}

type VehicleEstimateFormProps = {
  onSubmit: (data: VehicleEstimationData) => void;
};

const VehicleForm = ({onSubmit} : VehicleEstimateFormProps) => {
  const [formData, setFormData] = useState<VehicleEstimationData>({
    type : 'vehicle',
    distance_unit : 'km',
    distance_value : 0,
    vehicle_model_id :''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: id === 'distance_value' ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

   return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="vehicle_model_id" className="form-label">Vehicle Model ID</label>
        <input
          type="text"
          id="vehicle_model_id"
          className="form-control"
          value={formData.vehicle_model_id}
          onChange={handleChange}
          required
        />
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

      <button type="submit" className="btn btn-success">Estimate</button>
    </form>
  );
};

export default VehicleForm;





