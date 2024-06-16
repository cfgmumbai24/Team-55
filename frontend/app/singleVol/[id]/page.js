// pages/singleVol/[id].js
"use client";

import LeftBar from "@/components/Profile/LeftBar";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";

const SingleVolPage = () => {
  const pathname = usePathname();
  const id = pathname.split("/")[2]; // Extract the id from the pathname
  console.log(id);
  const [volunteer, setVolunteer] = useState(null);

  useEffect(() => {
    if (id) {
      fetchVolunteerData(id);
    }
  }, [id]);

  const fetchVolunteerData = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:3002/api/getvolunteerbyid?id=${id}`
      );
      setVolunteer(response.data.volunteers); // Assuming the response structure
    } catch (error) {
      console.error("Error fetching volunteer:", error);
    }
  };

  return (
    <div className="flex  h-screen">
      <p>{volunteer?.user?.username}</p>
      <LeftBar volunteerId={id} />
    </div>
  );
};

export default SingleVolPage;
