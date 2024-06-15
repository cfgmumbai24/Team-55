'use client'
import { useEffect, useState } from 'react';
import '@/app/globals.css'

const dummyBeneficiaries = [
  {
    _id: '1',
    name: 'John Doe',
    aadhar: 123456789012,
    gender: 'Male',
    age: 30,
    disabled: false,
    widowed: false,
    goats: [
      { _id: 'g1', tagno: 101, weight: 50, price: 300, age: 3 },
      { _id: 'g2', tagno: 102, weight: 45, price: 280, age: 2 },
    ],
  },
  {
    _id: '2',
    name: 'Jane Smith',
    aadhar: 123456789013,
    gender: 'Female',
    age: 25,
    disabled: true,
    widowed: false,
    goats: [
      { _id: 'g3', tagno: 103, weight: 40, price: 250, age: 1 },
    ],
  },
];

export default function Home() {
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [newBeneficiary, setNewBeneficiary] = useState({
    name: '',
    aadhar: '',
    gender: '',
    age: '',
    disabled: false,
    widowed: false,
    goats: [],
  });

  useEffect(() => {
    setBeneficiaries(dummyBeneficiaries);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewBeneficiary((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(newBeneficiary);
  };

  return (
    <div className="container">
      <h1 className="header">Beneficiaries</h1>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Aadhar</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Disabled</th>
              <th>Widowed</th>
              <th>Goats</th>
            </tr>
          </thead>
          <tbody>
            {beneficiaries.map((beneficiary) => (
              <tr key={beneficiary._id}>
                <td>{beneficiary.name}</td>
                <td>{beneficiary.aadhar}</td>
                <td>{beneficiary.gender}</td>
                <td>{beneficiary.age}</td>
                <td>{beneficiary.disabled ? 'Yes' : 'No'}</td>
                <td>{beneficiary.widowed ? 'Yes' : 'No'}</td>
                <td>
                  {beneficiary.goats.map((goat) => (
                    <div key={goat._id} className="py-1">
                      {`Tag: ${goat.tagno}, Weight: ${goat.weight} kg, Age: ${goat.age}`}
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <form onSubmit={handleSubmit} className="form-container">
        <h2 className="form-title">Add New Beneficiary</h2>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={newBeneficiary.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Aadhar</label>
          <input
            type="number"
            name="aadhar"
            value={newBeneficiary.aadhar}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select
            name="gender"
            value={newBeneficiary.gender}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={newBeneficiary.age}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Disabled</label>
          <input
            type="checkbox"
            name="disabled"
            checked={newBeneficiary.disabled}
            onChange={handleInputChange}
          />
          <span>Yes</span>
        </div>
        <div className="form-group">
          <label>Widowed</label>
          <input
            type="checkbox"
            name="widowed"
            checked={newBeneficiary.widowed}
            onChange={handleInputChange}
          />
          <span>Yes</span>
        </div>
        <button type="submit" className="form-button">
          Add Beneficiary
        </button>
      </form>
    </div>
  );
}
