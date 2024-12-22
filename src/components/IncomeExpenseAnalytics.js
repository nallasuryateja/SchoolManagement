// IncomeExpenseAnalytics.js
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "../styles/IncomeExpenseAnalytics.css";

// Register the necessary components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const IncomeExpenseAnalytics = () => {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const fetchData = async () => {
      const studentsResponse = await fetch(
        "http://localhost:3000/api/students"
      );
      const studentsData = await studentsResponse.json();
      const teachersResponse = await fetch(
        "http://localhost:3000/api/teachers"
      );
      const teachersData = await teachersResponse.json();

      // Calculate total income from paid students
      const totalIncome = studentsData.reduce((acc, student) => {
        return student.feesPaid
          ? acc + (student.class ? student.class.studentFees : 0)
          : acc;
      }, 0);
      setIncome(totalIncome);

      // Calculate total expenses for teachers
      const totalExpenses = teachersData.reduce(
        (acc, teacher) => acc + (teacher.salary || 0),
        0
      );
      setExpenses(totalExpenses);

      // Prepare chart data
      prepareChartData(totalIncome, totalExpenses);
    };
    fetchData();
  }, []);

  const prepareChartData = (income, expenses) => {
    setChartData({
      labels: ["Income", "Expenses"],
      datasets: [
        {
          label: "Financial Overview",
          data: [income, expenses],
          backgroundColor: ["#36A2EB", "#FF6384"],
        },
      ],
    });
  };

  return (
    <div>
      <h1>Income and Expenses Analytics</h1>
      <h2>Total Income: ${income}</h2>
      <h2>Total Expenses: ${expenses}</h2>
      <div className="chart-container">
        <Bar data={chartData} />
      </div>
    </div>
  );
};

export default IncomeExpenseAnalytics;
