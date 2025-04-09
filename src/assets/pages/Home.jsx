import React from "react";
import {
  FaUsers,
  FaClipboardList,
  FaBook,
  FaChartBar,
  FaCheckCircle,
  FaFileAlt,
} from "react-icons/fa";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

function Home() {
  const stats = [
    {
      title: "Students Under Me",
      value: 32,
      icon: <FaUsers />,
      bg: "bg-blue-500",
    },
    {
      title: "Today's Attendance",
      value: "28 / 32",
      icon: <FaClipboardList />,
      bg: "bg-green-500",
    },
    {
      title: "Assignments Pending",
      value: 5,
      icon: <FaFileAlt />,
      bg: "bg-yellow-500",
    },
    {
      title: "Subjects",
      value: 6,
      icon: <FaBook />,
      bg: "bg-purple-500",
    },
  ];

  const attendanceChartData = {
    labels: ["Present", "Absent"],
    datasets: [
      {
        label: "Today",
        data: [28, 4],
        backgroundColor: ["#2ECC71", "#E74C3C"],
      },
    ],
  };

  const resultChartData = {
    labels: ["A+", "A", "B", "C", "D", "F"],
    datasets: [
      {
        label: "Results Distribution",
        data: [5, 10, 8, 4, 3, 2],
        backgroundColor: [
          "#1abc9c",
          "#3498db",
          "#9b59b6",
          "#f1c40f",
          "#e67e22",
          "#e74c3c",
        ],
      },
    ],
  };

  return (
    <div className="lg:ml-[16.66%] p-6">
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>

      {/* Dashboard Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`${stat.bg} p-4 rounded-lg text-white flex items-center justify-between shadow-md`}
          >
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold">{stat.title}</h3>
              <p className="text-3xl font-bold">{stat.value}</p>
            </div>
            <div className="text-4xl opacity-50">{stat.icon}</div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Attendance Chart */}
        <div className="bg-white shadow-lg rounded-lg">
          <div className="bg-green-500 text-white p-3 flex justify-between items-center">
            <h3 className="font-semibold">Today's Attendance</h3>
          </div>
          <div className="p-4">
            <Bar data={attendanceChartData} />
          </div>
        </div>

        {/* Result Chart */}
        <div className="bg-white shadow-lg rounded-lg">
          <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
            <h3 className="font-semibold">Result Summary</h3>
          </div>
          <div className="p-4">
            <Bar data={resultChartData} />
          </div>
        </div>
      </div>

      {/* Assignment Summary (Optional Section) */}
      <div className="mt-6 bg-white p-4 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-3 text-gray-800">
          Assignment Overview
        </h3>
        <ul className="list-disc ml-5 text-sm text-gray-700">
          <li>5 Assignments pending review</li>
          <li>12 Assignments submitted today</li>
          <li>Next due date: 12th April, 2025</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
