"use client";
import React from "react";

const VolunterCards = ({ volunteerData }) => {
  return (
    <div className="p-10 bg-gray-100 rounded-lg shadow-md text-xl">
      <h2 className="text-xl font-bold mb-4">{volunteerData.user.username}</h2>
      <p>
        <strong>Current Location:</strong> {volunteerData.currentlocation}
      </p>
      <p>
        <strong>Number of Beneficiaries:</strong>{" "}
        {volunteerData.beneficiary.length}
      </p>
      <p>
        <strong>Number of Assignments:</strong>{" "}
        {volunteerData.assignment.length}
      </p>
      {/* Add more fields as needed */}
    </div>
  );
};

export default VolunterCards;
