// components/Profile/LeftBar.js
"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BriefcaseBusiness, Phone } from "lucide-react";

const LeftBar = ({ volunteerId, data }) => {
  console.log(data);
  const [volunteer, setVolunteer] = useState(null);

  useEffect(() => {
    if (volunteerId) {
      fetchVolunteerData(volunteerId);
    }
  }, [volunteerId]);

  const fetchVolunteerData = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:3002/api/volunteers/${id}`
      );
      setVolunteer(response.data.volunteers); // Assuming the response structure
    } catch (error) {
      console.error("Error fetching volunteer:", error);
    }
  };
  useEffect(() => {
    console.log(volunteer);
  }, [volunteer]);

  return (
    <div className="flex flex-col gap-4 text-white bg-gray-500 font-semibold text-2xl items-center shadow-2xl rounded-xl mx-10 my-8">
      <div className="px-20 py-8  flex flex-col justify-center items-center">
        {volunteer?.imageUrl ? (
          <img src={volunteer?.imageUrl} alt="" width={50} height={50} />
        ) : (
          <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
        )}
        <p className="text-white font-semibold text-2xl pt-4">
          {volunteer?.user?.username || "Loading..."}
        </p>
        <button className="bg-orange-500 py-3 px-14 text-lg rounded-lg text-white bg-opacity-50 mt-4">
          Edit Profile
        </button>
      </div>
      <div className="border-t-2 border-orange-300 w-full h-4" />
      <div className="px-2 py-4 flex flex-col gap-4">
        <span className="flex gap-3 items-center">
          <Phone color="wheat" className="font-semibold" size={24} />
          <p>{volunteer?.user?.mobileNo || "Loading..."}</p>
        </span>
        <span className="flex gap-3 items-center">
          <BriefcaseBusiness
            color="wheat"
            className="font-semibold"
            size={24}
          />
          <p>{volunteer?.user?.role || "Loading..."}</p>
        </span>
        {/* Add more details as per your schema */}
      </div>
    </div>
  );
};

export default LeftBar;
