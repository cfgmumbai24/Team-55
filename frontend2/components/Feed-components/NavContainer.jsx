"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Polls from "../poll/Polls";
import { tabsStore } from "@/store/tabState";
import { getCookie } from "cookies-next";
import axios from "axios";

const NavContainer = ({ polls }) => {
  const tab = tabsStore((state) => state.tab);

  const [categoryPolls, setCategoryPolls] = useState([]);
  // const setAllPolls = pollAddStore((state) => state.setAllPolls);

  useEffect(() => {
    const fetchPolls = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3002/api/fetchPolls/${tab}`,
          {
            headers: {
              Authorization: `Bearer ${getCookie("token")}`,
            },
          }
        );
        console.log(response);
        const { data } = response.data;
        setCategoryPolls(data);
        // setAllPolls(data);
      } catch (error) {
        console.error("Error fetching polls:", error);
      }
    };

    fetchPolls();
  }, [tab]);
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-[1fr,350px] px-14 py-8 main h-[calc(100vh-90px)] gap-14 overflow-scroll">
        {tab === "Home" ? (
          <Polls polls={polls} />
        ) : (
          <Polls polls={categoryPolls} />
        )}
      </div>
    </div>
  );
};

export default NavContainer;
