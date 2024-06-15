"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "./Table";
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [assignments, setAssignments] = useState(null); 
  const [monthlyAssignments, setMonthlyAssignments] = useState(null);

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const res = await axios.get("http://localhost:3002/api/assignments/");
        setAssignments(res.data);
      } catch (error) {
        console.error("Error fetching Assignments", error);
      }
    };

    const fetchMonthlyAssignments = async () => {
      try {
        const res = await axios.get("http://localhost:3002/api/assignments/monthly");
        const result = res.data;

        const labels = result.map(item => `${item.month}/${item.year}`);
        const counts = result.map(item => item.count);
        const backgroundColors = counts.map(() => `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.6)`);

        setMonthlyAssignments({
          labels,
          datasets: [
            {
              label: 'Assignments',
              data: counts,
              backgroundColor: backgroundColors,
              borderColor: backgroundColors.map(color => color.replace('0.6', '1')),
              borderWidth: 1
            }
          ]
        });
      } catch (error) {
        console.error("Error fetching monthly assignments", error);
      }
    };

    fetchAssignments();
    fetchMonthlyAssignments();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <DataTable data={assignments} />

      {monthlyAssignments && (
        <div style={{ width: '80%', margin: '50px auto' }}>
          <Bar data={monthlyAssignments} options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Assignments per Month for the Last 12 Months',
              },
            },
          }} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
