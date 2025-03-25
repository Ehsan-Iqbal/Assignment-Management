import React, { useState } from "react";

function Attendance() {
  const [attendance, setAttendance] = useState([
    { id: 1, roll: "20BCS125", name: "Ehsan", date: "NA", status: "NA", isEditing: false },
    { id: 2, roll: "20BCS241", name: "Mudassir", date: "NA", status: "NA", isEditing: false },
    { id: 3, roll: "20BEC078", name: "Zain", date: "NA", status: "NA", isEditing: false },
  ]);

  // Enable Edit Mode
  const handleEdit = (id) => {
    setAttendance(attendance.map((s) => (s.id === id ? { ...s, isEditing: true } : s)));
  };

  // Save Edited Row
  const handleSave = (id) => {
    setAttendance(attendance.map((s) => (s.id === id ? { ...s, isEditing: false } : s)));
    alert("Attendance record saved successfully!");
  };

  // Delete Row
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      setAttendance(attendance.filter((s) => s.id !== id));
    }
  };

  // Add New Row
  const addNewRow = () => {
    const newId = attendance.length > 0 ? Math.max(...attendance.map(s => s.id)) + 1 : 1;
    setAttendance([...attendance, { id: newId, roll: "", name: "", date: "", status: "", isEditing: true }]);
  };

  return (
    <div className="lg:ml-[16.66%] p-2 sm:p-4">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4">CS2004 - Attendance</h1>

      {/* Date Picker and Button Container */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3 sm:gap-0">
        <div className="w-full sm:w-auto ">
          <label className="text-sm sm:text-base font-medium">Choose date:</label>
          <input 
            type="date" 
            className="ml-2 px-2 py-1 border rounded-md shadow-sm text-sm sm:text-base w-full sm:w-auto"
          />
        </div>
        
        <button
          onClick={addNewRow}
          className="bg-green-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-md shadow-md hover:bg-green-600 transition text-sm sm:text-base w-full sm:w-auto"
        >
          Mark Attendance
        </button>
      </div>

      {/* Attendance Table */}
      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-2 sm:p-3 text-xs sm:text-sm">S.No</th>
              <th className="p-2 sm:p-3 text-xs sm:text-sm">Roll</th>
              <th className="p-2 sm:p-3 text-xs sm:text-sm">Name</th>
              <th className="p-2 sm:p-3 text-xs sm:text-sm">Date</th>
              <th className="p-2 sm:p-3 text-xs sm:text-sm">Status</th>
              <th className="p-2 sm:p-3 text-xs sm:text-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            {attendance.map((student, index) => (
              <tr key={student.id} className="border-b bg-gray-100 even:bg-white">
                <td className="p-2 sm:p-3 text-center text-xs sm:text-sm">{index + 1}</td>
                <td className="p-2 sm:p-3 text-center text-xs sm:text-sm">
                  {student.isEditing ? (
                    <input
                      type="text"
                      value={student.roll}
                      onChange={(e) =>
                        setAttendance(attendance.map((s) => (s.id === student.id ? { ...s, roll: e.target.value } : s)))
                      }
                      placeholder="Roll No."
                      className="border px-1 sm:px-2 py-1 rounded-md w-full text-xs sm:text-sm"
                    />
                  ) : (
                    student.roll || "-"
                  )}
                </td>
                <td className="p-2 sm:p-3 text-center text-xs sm:text-sm">
                  {student.isEditing ? (
                    <input
                      type="text"
                      value={student.name}
                      onChange={(e) =>
                        setAttendance(attendance.map((s) => (s.id === student.id ? { ...s, name: e.target.value } : s)))
                      }
                      placeholder="Name"
                      className="border px-1 sm:px-2 py-1 rounded-md w-full text-xs sm:text-sm"
                    />
                  ) : (
                    student.name || "-"
                  )}
                </td>
                <td className="p-2 sm:p-3 text-center text-xs sm:text-sm">
                  {student.isEditing ? (
                    <input
                      type="date"
                      value={student.date}
                      onChange={(e) =>
                        setAttendance(attendance.map((s) => (s.id === student.id ? { ...s, date: e.target.value } : s)))
                      }
                      className="border px-1 sm:px-2 py-1 rounded-md w-full text-xs sm:text-sm"
                    />
                  ) : (
                    student.date || "-"
                  )}
                </td>
                <td className="p-2 sm:p-3 text-center text-xs sm:text-sm">
                  {student.isEditing ? (
                    <select
                      value={student.status}
                      onChange={(e) =>
                        setAttendance(attendance.map((s) => (s.id === student.id ? { ...s, status: e.target.value } : s)))
                      }
                      className="border px-1 sm:px-2 py-1 rounded-md w-full text-xs sm:text-sm"
                    >
                      <option value="">Choose</option>
                      <option value="Present">Present</option>
                      <option value="Absent">Absent</option>
                      <option value="Late">Late</option>
                    </select>
                  ) : (
                    student.status || "-"
                  )}
                </td>
                <td className="p-2 sm:p-3 text-center">
                  <div className="flex justify-center gap-1 sm:gap-2">
                    {student.isEditing ? (
                      <button 
                        onClick={() => handleSave(student.id)} 
                        className="bg-green-500 text-white px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm"
                      >
                        Save
                      </button>
                    ) : (
                      <button 
                        onClick={() => handleEdit(student.id)} 
                        className="bg-blue-500 text-white px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm"
                      >
                        Edit
                      </button>
                    )}
                    <button 
                      onClick={() => handleDelete(student.id)} 
                      className="bg-red-500 text-white px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Attendance;