import { useState } from "react";

export type FuelEstimationData = {
    type : 'fuel_combustion';
    fuel_source_type : string;
    fuel_source_unit : string;
    fuel_source_value : number;
}

type Props = {
  onSubmit: (data: FuelEstimationData) => void;
};

const FuelEstimationForm = ({ onSubmit }: Props) => {
  const [formData, setFormData] = useState<FuelEstimationData>({
    type: 'fuel_combustion',
    fuel_source_type: '',
    fuel_source_unit: '',
    fuel_source_value: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

   return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Fuel Source Type</label>
        <input
          type="text"
          id="fuel_source_type"
          className="form-control"
          value={formData.fuel_source_type}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Fuel Source Unit</label>
        <input
          type="text"
          id="fuel_source_unit"
          className="form-control"
          value={formData.fuel_source_unit}
          onChange={handleChange}
          placeholder="e.g. gallon, btu, btu"
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Fuel Source Value</label>
        <input
          type="number"
          step="any"
          id="fuel_source_value"
          className="form-control"
          value={formData.fuel_source_value}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="btn btn-success">
        Estimate
      </button>
    </form>
  );
}

export default FuelEstimationForm;

