"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "./Table";

const Dashboard = () => {

  const [assignments,setAssignments] = useState(null); 
  const [monthlyAssignments,setMonthlyAssignments] = useState([]);
  useEffect(() => {

    const fetchAssignments = async () => {
      try {
        const res = await axios.get("http://localhost:3002/api/assignments/")
        setAssignments(res.data)
      } catch (error) {
        console.error("Error fetching polls:", error);
      }
    };
    fetchAssignments();
    const fetchData = async () => {
      try{
        const result = await axios.get("http://localhost:3002/api/assignments/monthly")
        const labels = Array.from({ length: 12 }, (_, i) => new Date(0, i).toLocaleString('en', { month: 'long' }));
        const counts = new Array(12).fill(0);
        result.forEach(item => {
          counts[item._id - 1] = item.count;
        });
        console.error(result)
        setData({
          labels,
          datasets: [
            {
              label: 'Assignments',
              data: counts,
              backgroundColor: 'rgba(75, 192, 192, 0.6)'
            }
          ]
        });
      } catch (error) {
        console.error("Error fetching polls:", error);
      }
    }
    fetchData();

  }, []);

  return (
    <div>
      <DataTable />
    </div>
  );
};

export default Dashboard;
