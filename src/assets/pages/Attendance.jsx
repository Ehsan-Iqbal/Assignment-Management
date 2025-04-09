import React, { useState } from "react";

function StudentAttendanceView() {
  const [attendance] = useState([
    { id: 1, roll: "20BCS125", name: "Ehsan", date: "2024-04-08", subject: "CS2004", status: "Present" },
    { id: 2, roll: "20BCS125", name: "Roman", date: "2024-04-09", subject: "CS2005", status: "Absent" },
    { id: 3, roll: "20BCS125", name: "Ehsan", date: "2024-04-08", subject: "CS2004", status: "Present" },
    { id: 4, roll: "20BCS125", name: "Roman", date: "2024-04-09", subject: "CS2005", status: "Absent" },
    { id: 5, roll: "20BCS125", name: "Ehsan", date: "2024-04-08", subject: "CS2004", status: "Present" },
    { id: 6, roll: "20BCS125", name: "Roman", date: "2024-04-09", subject: "CS2005", status: "Absent" },
    { id: 7, roll: "20BCS125", name: "Ehsan", date: "2024-04-08", subject: "CS2004", status: "Present" },
    { id: 8, roll: "20BCS125", name: "Roman", date: "2024-04-09", subject: "CS2005", status: "Absent" },
  ]);

  const studentRoll = "20BCS125";

  const filteredAttendance = attendance.filter(
    (entry) => entry.roll === studentRoll
  );

  return (
    <div className="flex flex-col items-center justify-center p-4 lg:ml-[16.66%]">
      <h1 className="text-2xl font-bold mb-4 text-center">My Attendance</h1>

      <div className="overflow-x-auto shadow-lg rounded-lg mx-auto w-full lg:w-3/4">
        <table className="w-full border-collapse table-auto">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-3">S.No</th>
              <th className="p-3">Date</th>
              <th className="p-3">Subject</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredAttendance.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center p-4">
                  No attendance records found.
                </td>
              </tr>
            ) : (
              filteredAttendance.map((entry, index) => (
                <tr
                  key={entry.id}
                  className="even:bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                >
                  <td className="text-center p-3">{index + 1}</td>
                  <td className="text-center p-3">{entry.date}</td>
                  <td className="text-center p-3">{entry.subject}</td>
                  <td
                    className={`text-center p-3 font-semibold ${
                      entry.status === "Present" ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {entry.status}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentAttendanceView;
