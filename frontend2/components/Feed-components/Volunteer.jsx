"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "./Table";

const Volunteer = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from API
    const fetchVolunteers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3002/api/volunteers"
        ); // Update with your API endpoint
        setVolunteers(response.data.volunteers);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching volunteers:", error);
        setLoading(false);
      }
    };

    fetchVolunteers();
  }, []);

  return (
    <div>
      <p className="text-3xl font-semibold">
        Meet Your Organization's Volunteers
      </p>
      <div className="flex h-full py-20">
        {loading ? <p>Loading...</p> : <DataTable data={volunteers} />}
      </div>
    </div>
  );
};

export default Volunteer;
