import React, { useState } from 'react';

function CarbonCreditCalculator() {
  // State variables to store form values and result
  const [vehicleType, setVehicleType] = useState('car');
  const [distance, setDistance] = useState('');
  const [fuelType, setFuelType] = useState('petrol');
  const [result, setResult] = useState('');

  // Function to handle form submission
  const calculateCarbonCredits = () => {
    // Assuming carbon emissions for different vehicle types and fuel types
    const carbonEmissionsPerKm = {
      car: {
        petrol: 0.2, // in kg/km
        diesel: 0.15,
        electric: 0.05,
        hybrid: 0.1
      },
      motorcycle: {
        petrol: 0.1,
        diesel: 0.08,
        electric: 0.03,
        hybrid: 0.05
      },
      bus: {
        petrol: 0.3,
        diesel: 0.25,
        electric: 0.1,
        hybrid: 0.2
      },
      truck: {
        petrol: 0.4,
        diesel: 0.35,
        electric: 0.15,
        hybrid: 0.3
      }
    };

    // Calculating total carbon emissions
    const carbonEmissions = distance * carbonEmissionsPerKm[vehicleType][fuelType];

    // Assuming conversion factor to carbon credits (e.g., 1 ton of CO2 = 1 carbon credit)
    const carbonCredits = carbonEmissions;

    // Setting the result
    setResult(
      `<p>Total Carbon Emissions: ${carbonEmissions.toFixed(2)} kg</p>` +
      `<p>Carbon Credits Earned: ${carbonCredits.toFixed(2)} credits</p>`
    );
  };

  return (
    <div className='flex flex-col justify-center'>
      <h1 className='text-3xl text-transparent bg-clip-text bg-gradient-to-r from-green-200 from-0% via-yellow-100 via-50% to-green-200 to-95% my-5'>Carbon Credit Calculator</h1>
      <form onSubmit={(e) => { e.preventDefault(); calculateCarbonCredits(); }} className='flex flex-col '>
        <div className='flex justify-between mx-5 p-3 rounded-lg min-w-[45%] mb-10 text-white bg-slate-800 placeholder-white '>
        <label htmlFor="vehicleType">Vehicle Type:</label>
        <select id="vehicleType" name="vehicleType" className='w-[50%] text-black text-center' value={vehicleType} onChange={(e) => setVehicleType(e.target.value)}>
          <option value="car">Car</option>
          <option value="motorcycle">Motorcycle</option>
          <option value="bus">Bus</option>
          <option value="truck">Truck</option>
        </select>
        </div>
        <div className='flex justify-between mx-5 p-3 rounded-lg min-w-[45%] mb-10 text-white bg-slate-800 placeholder-white'>
        <label htmlFor="distance">Distance (in kilometers):</label>
        <input type="number" id="distance" name="distance" className='w-[50%] text-black text-center' value={distance} onChange={(e) => setDistance(parseFloat(e.target.value))} required />
        </div>
        <div className='flex justify-between mx-5 p-3 rounded-lg min-w-[45%] mb-10 text-white bg-slate-800 placeholder-white'>
        <label htmlFor="fuelType">Fuel Type:</label>
        <select id="fuelType" name="fuelType" value={fuelType} className='w-[50%] text-black text-center' onChange={(e) => setFuelType(e.target.value)}>
          <option value="petrol">Petrol</option>
          <option value="diesel">Diesel</option>
          <option value="electric">Electric</option>
          <option value="hybrid">Hybrid</option>
        </select>
        </div>
        <div className='self-center'>
            <button type="submit" className='mx-5 p-3 rounded-lg w-[200px] mb-10 text-white bg-slate-800 placeholder-white'>Calculate</button>
        </div>
      </form>

      <div className="flex flex-col text-center mx-5 p-3 rounded-lg min-w-[45%] mb-10 text-white bg-slate-800 placeholder-white " id="result" dangerouslySetInnerHTML={{ __html: result }}></div>
    </div>
  );
}

export default CarbonCreditCalculator;
