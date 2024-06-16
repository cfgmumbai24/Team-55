import React from "react";
import { useState, useEffect } from "react";
import "./survey_form.css";
import axios from "axios";
// import image from './image.png';

function MyForm() {
  const [formData, setFormData] = useState({
    beneficiaryName: "",
    reportOfWork: "",
    familyIncome: "",
    goatsIncreased: "",
    image: null,
  });

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;
    console.log(event.target.files[0]);
    if (type === "image/png") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [image]: event.target.files[0],
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    axios
      .post("http://localhost:5000/process_image", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => console.log(response))
      .catch((error) => alert("Error submitting form"));
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      {/* <img src={image} /> */}
      <p className="heading">Volunteer Survey Form</p>
      <label>
        Name of Beneficiary:
        <input
          type="text"
          name="beneficiaryName"
          value={formData.beneficiaryName}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Upload Aadhar Card Image:
        <input type="file" name="aadharImage" onChange={handleInputChange} />
      </label>

      <label>
        Report of Work Done:
        <textarea
          name="reportOfWork"
          value={formData.reportOfWork}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Family Income of Beneficiary:
        <input
          type="number"
          name="familyIncome"
          value={formData.familyIncome}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Number of Goats Increased (if any):
        <input
          type="number"
          name="goatsIncreased"
          value={formData.goatsIncreased}
          onChange={handleInputChange}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
