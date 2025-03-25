import React from "react";
import { FaUsers, FaClipboardList, FaBook, FaChartBar } from "react-icons/fa";
import { BsInfoCircleFill } from "react-icons/bs";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

function Home() {
  const stats = [
    { title: "Students Under Me", value: 0, icon: <FaUsers />, bg: "bg-blue-500" },
    { title: "Total Attendance", value: 0, icon: <FaClipboardList />, bg: "bg-green-500" },
    { title: "Total Leave", value: 0, icon: <FaBook />, bg: "bg-yellow-500" },
    { title: "Total Subjects", value: 0, icon: <FaChartBar />, bg: "bg-red-500" },
  ];

  const leaveChartData = {
    labels: ["Leave", "Attendance"],
    datasets: [{ label: "Leave Status", data: [3, 7], backgroundColor: ["#E74C3C", "#2ECC71"] }],
  };

  const subjectsChartData = {
    labels: ["Subjects Attended"],
    datasets: [{ label: "Subject Attend Chart", data: [5], backgroundColor: ["#2980B9"] }],
  };

  return (
    <div className="lg:ml-[16.66%] p-6">
      <h1 className="text-2xl font-semibold mb-4">Staff Home</h1>

      {/* Dashboard Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className={`${stat.bg} p-4 rounded-lg text-white flex items-center justify-between`}>
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
        {/* Leave Status Chart */}
        <div className="bg-white shadow-lg rounded-lg">
          <div className="bg-red-500 text-white p-3 flex justify-between items-center">
            <h3 className="font-semibold">Leave Status Chart</h3>
          </div>
          <div className="p-4">
            <Bar data={leaveChartData} />
          </div>
        </div>

        {/* Subjects Attend Chart */}
        <div className="bg-white shadow-lg rounded-lg">
          <div className="bg-green-500 text-white p-3 flex justify-between items-center">
            <h3 className="font-semibold">Subjects Attend Chart</h3>
          </div>
          <div className="p-4">
            <Bar data={subjectsChartData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
