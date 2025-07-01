import { useState } from 'react';

export type FlightLeg = {
  departure_airport: string;
  destination_airport: string;
  cabin_class?: string;
};

export type FlightEstimationData = {
  type: 'flight';
  passengers: string;
  distance_unit: string;
  legs: FlightLeg[];
};  

type FlightEstimationFormProps = {
  onSubmit: (data: FlightEstimationData) => void;
};

const FlightEstimationForm = ({ onSubmit }: FlightEstimationFormProps) => {
  const [formData, setFormData] = useState<Omit<FlightEstimationData, 'legs'>>({
    type: 'flight',
    passengers: '',
    distance_unit: '',
  });

  const [legs, setLegs] = useState<FlightLeg[]>([
    { departure_airport: '', destination_airport: '', cabin_class: '' },
  ]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleLegChange = (index: number, key: keyof FlightLeg, value: string) => {
    const updated = [...legs];
    updated[index][key] = value;
    setLegs(updated);
  };  

  const addLeg = () => {
    setLegs([...legs, { departure_airport: '', destination_airport: '', cabin_class: '' }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result: FlightEstimationData = { ...formData, legs };
    onSubmit(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Passengers</label>
        <input
          type="number"
          id="passengers"
          className="form-control"
          value={formData.passengers}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Distance Unit</label>
        <input
          type="text"
          id="distance_unit"
          className="form-control"
          value={formData.distance_unit}
          onChange={handleChange}
          placeholder="km or mi"
          required
        />
      </div>

      <h5>Flight Legs</h5>
      {legs.map((leg, index) => (
        <div key={index} className="border p-3 mb-2 rounded">
          <div className="mb-2">
            <label className="form-label">Departure Airport</label>
            <input
              type="text"
              className="form-control"
              value={leg.departure_airport}
              onChange={(e) => handleLegChange(index, 'departure_airport', e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <label className="form-label">Destination Airport</label>
            <input
              type="text"
              className="form-control"
              value={leg.destination_airport}
              onChange={(e) => handleLegChange(index, 'destination_airport', e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <label className="form-label">Cabin Class</label>
            <input
              type="text"
              className="form-control"
              placeholder="economy or premium"
              value={leg.cabin_class}
              onChange={(e) => handleLegChange(index, 'cabin_class', e.target.value)}
            />
          </div>
        </div>
      ))}

      <button type="button" className="btn btn-outline-primary mb-3" onClick={addLeg}>
        + Add Another Leg
      </button>

      <button type="submit" className="btn btn-success">
        Estimate
      </button>
    </form>
  );
};

export default FlightEstimationForm;
