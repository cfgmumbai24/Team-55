"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import NavContainer from "./NavContainer";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import axios from "axios";
import { pollAddStore } from "@/store/isAddPoll";

const ParentContainer = () => {
  const [polls, setPolls] = useState([]);
  // const setAllPolls = pollAddStore((state) => state.setAllPolls);

  useEffect(() => {
    const fetchPolls = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3002/api/fetchPolls",
          {
            headers: {
              Authorization: `Bearer ${getCookie("token")}`,
            },
          }
        );
        console.log(response);
        const { data } = response.data;
        setPolls(data);
        // setAllPolls(data);
      } catch (error) {
        console.error("Error fetching polls:", error);
      }
    };

    fetchPolls();
  }, []);

  return (
    <div className="grid grid-cols-[320px,1fr]">
      <Sidebar polls={polls} />
      <NavContainer polls={polls} />
    </div>
  );
};

export default ParentContainer;
