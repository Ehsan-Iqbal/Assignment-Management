import React, { useState, useEffect } from "react";

const studentList = [
  { name: "Mudassir", rollNo: "101" },
  { name: "Ali Raza", rollNo: "102" },
  { name: "Ehsan", rollNo: "103" },
  { name: "Zain Ahmed", rollNo: "104" },
];

function TeacherAttendance() {
  const [attendanceRecords, setAttendanceRecords] = useState(
    JSON.parse(localStorage.getItem("attendanceRecords")) || []
  );
  const [showModal, setShowModal] = useState(false);
  const [attendanceData, setAttendanceData] = useState({});
  const [date, setDate] = useState("");
  const [subject, setSubject] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem(
      "attendanceRecords",
      JSON.stringify(attendanceRecords)
    );
  }, [attendanceRecords]);

  const handleStatusChange = (rollNo, status) => {
    setAttendanceData({ ...attendanceData, [rollNo]: status });
  };

  const openAddModal = () => {
    setShowModal(true);
    setEditIndex(null);
    setAttendanceData({});
    setDate("");
    setSubject("");
  };

  const openEditModal = (record, index) => {
    setShowModal(true);
    setEditIndex(index);
    setDate(record.date);
    setSubject(record.subject);
    // setAttendanceData({ [record.rollNo]: record.status });
  };

  const handleSubmit = () => {
    if (!date || !subject) {
      alert("Please fill in date and subject");
      return;
    }

    if (editIndex !== null) {
      // Update existing
      const updated = [...attendanceRecords];
      updated[editIndex] = {
        ...updated[editIndex],
        date,
        subject,
        status: attendanceData[updated[editIndex].rollNo] || "Absent",
      };
      setAttendanceRecords(updated);
    } else {
      // Add new
      const newRecords = studentList.map((student) => ({
        name: student.name,
        rollNo: student.rollNo,
        date,
        subject,
        status: attendanceData[student.rollNo] || "Absent",
      }));
      setAttendanceRecords([...attendanceRecords, ...newRecords]);
    }

    setShowModal(false);
    setDate("");
    setSubject("");
    setAttendanceData({});
    setEditIndex(null);
  };

  const handleDelete = (index) => {
    const updated = [...attendanceRecords];
    updated.splice(index, 1);
    setAttendanceRecords(updated);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 lg:ml-[16.66%]">
      <h2 className="text-2xl font-bold mb-4">Teacher Attendance Management</h2>

      {/* Student List */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Student List</h3>
        <ul className="space-y-1">
          {studentList.map((student) => (
            <li
              key={student.rollNo}
              className="border p-2 rounded-md flex justify-between"
            >
              <span>
                {student.name} (Roll No: {student.rollNo})
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Add Attendance Button */}
      <button
        onClick={openAddModal}
        className="bg-blue-600 text-white px-4 py-2 rounded-md"
      >
        Mark Attendance
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-2xl p-6 rounded-lg shadow-lg relative">
            <h3 className="text-xl font-bold mb-4">
              {editIndex !== null ? "Edit" : "Mark"} Attendance
            </h3>

            <div className="mb-4 flex gap-4">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="border px-4 py-2 rounded w-1/2"
              />
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="border px-4 py-2 rounded w-1/2"
              />
            </div>

            {/* Attendance Statuses */}
            <div className="max-h-60 overflow-y-auto">
              {(editIndex !== null
                ? [attendanceRecords[editIndex]]
                : studentList
              ).map((student) => (
                <div
                  key={student.rollNo}
                  className="flex justify-between items-center mb-2"
                >
                  <span>
                    {student.name} (Roll No: {student.rollNo})
                  </span>
                  <select
                    value={attendanceData[student.rollNo] || "Present"}
                    onChange={(e) =>
                      handleStatusChange(student.rollNo, e.target.value)
                    }
                    className="border px-2 py-1 rounded"
                  >
                    <option value="Present">Present</option>
                    <option value="Absent">Absent</option>
                  </select>
                </div>
              ))}
            </div>

            {/* Modal Actions */}
            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                {editIndex !== null ? "Update" : "Submit"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Attendance Records Table */}
      {attendanceRecords.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2">Attendance Records</h3>
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Roll No</th>
                <th className="border px-4 py-2">Date</th>
                <th className="border px-4 py-2">Subject</th>
                <th className="border px-4 py-2">Status</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {attendanceRecords.map((entry, index) => (
                <tr key={index} className="text-center">
                  <td className="border px-4 py-2">{entry.name}</td>
                  <td className="border px-4 py-2">{entry.rollNo}</td>
                  <td className="border px-4 py-2">{entry.date}</td>
                  <td className="border px-4 py-2">{entry.subject}</td>
                  <td className="border px-4 py-2">{entry.status}</td>
                  <td className="border px-4 py-2 space-x-2">
                    <button
                      onClick={() => openEditModal(entry, index)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="bg-red-600 text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default TeacherAttendance;
