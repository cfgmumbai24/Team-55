import React from 'react';
import { useState,useEffect } from 'react';
import "./survey_form.css";
import axios from 'axios';

function MyForm() {
    // Define state variables to hold form data
  
  
    // Function to handle form submission (replace with your logic)
    const [formData, setFormData] = useState({
        beneficiaryName: '',
        reportOfWork: '',
        familyIncome: '',
        goatsIncreased: '',
        image: null
    });

    const handleInputChange = (event) => {
        const { name, value, type } = event.target;
        if (type === "file") {
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: event.target.files[0]
            }));
        } else {
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: value
            }));
        }
    };

const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData();
    for (const key in formData) {
        data.append(key, formData[key]);
    }

    axios.post('http://localhost:5000/process_image', data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    .then(response => console.log(response))
    .catch(error => alert('Error submitting form'));
    };
  
    return (
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="input-container">
                <label className="label">Name of Beneficiary:
                    <input
                        type="text"
                        name="beneficiaryName"
                        value={formData.beneficiaryName}
                        onChange={handleInputChange}
                    />
                </label>
            </div>
            <div className="input-container">
            <label className="label">Image input which uploads an image:
                    <input
                        type="file"
                        name="image"
                        onChange={handleInputChange}
                    />
                </label>
            </div>
            <div>
            <label className="label">Report of work done:
                    <textarea
                        name="reportOfWork"
                        value={formData.reportOfWork}
                        onChange={handleInputChange}
                    />
                </label>
            </div>
            <div className="inputContainer">
            <label className="label">Family income of the Beneficiary:
                    <input
                        type="number"
                        name="familyIncome"
                        value={formData.familyIncome}
                        onChange={handleInputChange}
                    />
                </label>
            </div>
            <div className="inputContainer">
            <label className="label">Number of goats increased if any:
                    <input
                        type="number"
                        name="goatsIncreased"
                        value={formData.goatsIncreased}
                        onChange={handleInputChange}
                    />
                </label>
            </div>
            <button type="submit" className="submit-button">Submit</button>
      </form>
    );
  }
  
  export default MyForm;