import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "./Table2";
import { Bar} from 'react-chartjs-2';
import { PieChart } from '@mui/x-charts/PieChart';
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
  const [goatsMortality, setGoatsMortality] = useState(null);
  const [projects,setProjects] = useState(null);

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

        const labels = result.map(item => {
          const date = new Date(item.year, item.month - 1, 1);
          const monthAbbr = date.toLocaleString('en', { month: 'short' });
          return `${monthAbbr}\n${item.year}`;
        });
        const counts = result.map(item => item.count);
        const backgroundColors = counts.map(() => `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.6)`);

        setMonthlyAssignments({
          labels,
          datasets: [
            {
              label: 'Assignments',
              data: counts,
              backgroundColor: backgroundColors,
              borderWidth: 1
            }
          ]
        });
      } catch (error) {
        console.error("Error fetching monthly assignments", error);
      }
    };

    const fetchGoatMortality = async () => {
      try {
        const res = await axios.get("http://localhost:3002/api/goats/mortality");
        setGoatsMortality(res.data);
      } catch (error) {
        console.error("Error fetching Goat Mortality", error);
      }
    };

    const fetchProjects = async () => {
      try {
        const res = await axios.get("http://localhost:3002/api/assignments/"); 
        console.error(res.data)
        setProjects(res.data);
      } catch (error) {
        console.error("Error fetching Goat Mortality", error);
      }
    };

    fetchAssignments();
    fetchMonthlyAssignments();
    fetchGoatMortality();
    fetchProjects();
  }, []);

  return (
    <div>
        <DataTable />
      <div className="flex justify-center items-center gap-20">

        {monthlyAssignments && (
          <div style={{ width: '80%', margin: '50px auto' }}>
            <h1 className="font-semibold text-2xl flex justify-center">Projects Completed per Month for the Last 12 Months</h1>
            <Bar data={monthlyAssignments} options={{
              responsive: true,
              scales: {
                x: {
                  ticks: {
                    autoSkip: false,
                    font: {
                      size: 14, // Adjust font size as needed
                    }
                  }
                },
              }
            }} />
          </div>
        )}
        <div>

          <h1 className="flex justify-center font-semibold text-2xl mb-4">Mortality of Goats with Seasons</h1>
          {goatsMortality && (<div className="flex">
            <PieChart
            series={[
              {
                data: goatsMortality.map((item, index) => ({
                  id: index,
                  value: item.count,
                  label: item.season
                })),
              },
            ]}  
            width={400}
            height={200}
          />
          </div>
          )

          }
        </div>
      </div>
    </div>

  );
};

export default Dashboard;
