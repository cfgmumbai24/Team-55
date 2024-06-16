"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import PollCard from "../poll/PollCard";

const RightBar = () => {
  const [userPolls, setUserPolls] = useState([]);

  useEffect(() => {
    const fetchUserPolls = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3002/api/user/polls",
          {
            headers: {
              Authorization: `Bearer ${getCookie("token")}`,
            },
          }
        );
        console.log(response.data);
        setUserPolls(response?.data?.data);
      } catch (error) {
        console.error("Error fetching user polls:", error);
      }
    };
    fetchUserPolls();
  }, []);

  return (
    <div className="grid gap-4 w-3/4 h-full place-items-start px-24 my-8 overflow-x-scroll">
      <p className="text-4xl text-orange-300">Your Polls</p>
      {userPolls.map((poll) => (
        <PollCard key={poll._id} poll={poll} showPercentage />
      ))}
    </div>
  );
};

export default RightBar;
