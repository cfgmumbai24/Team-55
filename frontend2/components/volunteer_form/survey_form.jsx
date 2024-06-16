import React, { useState } from "react";
import axios from "axios";
import "./survey_form.css";

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
    console.log(event, ".....");

    if (type === "file") {
      setFormData({
        ...formData,
        [name]: event.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create FormData object
    const data = new FormData();
    // Append form data to FormData object
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    console.log("xx", data);

    // Send POST request to Flask API
    axios
      .post("http://localhost:5000/process_image", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Form submitted successfully:", response);
        // Add any success handling logic here
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        alert("Error submitting form");
      });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <p className="heading"> Volunteer Survey Form</p>
      <label className="label">
        Name of Beneficiary:
        <input
          type="text"
          name="beneficiaryName"
          value={formData.beneficiaryName}
          onChange={handleInputChange}
        />
      </label>

      <label className="label">
        Upload Aadhar Card Image:
        <input type="file" name="image" onChange={handleInputChange} />
      </label>

      <label className="label">
        Report of work done:
        <textarea
          name="reportOfWork"
          value={formData.reportOfWork}
          onChange={handleInputChange}
        />
      </label>

      <label className="label">
        Family income of the Beneficiary:
        <input
          type="number"
          name="familyIncome"
          value={formData.familyIncome}
          onChange={handleInputChange}
        />
      </label>

      <label className="label">
        Number of goats increased (if any):
        <input
          type="number"
          name="goatsIncreased"
          value={formData.goatsIncreased}
          onChange={handleInputChange}
        />
      </label>

      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
}

export default MyForm;
