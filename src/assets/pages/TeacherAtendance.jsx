import React, { useState, useEffect } from "react";

function TeacherAtendance() {
  const [attendanceList, setAttendanceList] = useState(
    JSON.parse(localStorage.getItem("attendanceList")) || []
  );
  const [newEntry, setNewEntry] = useState({
    name: "",
    date: "",
    status: "Present",
  });
  const [editIndex, setEditIndex] = useState(null);

  // Save attendance list to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("attendanceList", JSON.stringify(attendanceList));
  }, [attendanceList]);

  const handleChange = (e) => {
    setNewEntry({ ...newEntry, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!newEntry.name || !newEntry.date) {
      alert("Please fill in all fields");
      return;
    }
    setAttendanceList([...attendanceList, newEntry]);
    setNewEntry({ name: "", date: "", status: "Present" });
  };

  const handleDelete = (index) => {
    const updatedList = [...attendanceList];
    updatedList.splice(index, 1);
    setAttendanceList(updatedList);
  };

  const handleEdit = (index) => {
    setNewEntry(attendanceList[index]);
    setEditIndex(index);
  };

  const handleUpdate = () => {
    if (editIndex !== null) {
      const updatedList = [...attendanceList];
      updatedList[editIndex] = newEntry;
      setAttendanceList(updatedList);
      setNewEntry({ name: "", date: "", status: "Present" });
      setEditIndex(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 lg:ml-[16.66%]">
      <h2 className="text-2xl font-bold mb-4">Teacher Attendance Management</h2>

      <div className="mb-4 space-y-2">
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={newEntry.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="date"
          name="date"
          value={newEntry.date}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
        />
        <select
          name="status"
          value={newEntry.status}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
        >
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
        </select>
        <div className="flex gap-2">
          {editIndex === null ? (
            <button
              onClick={handleAdd}
              className="bg-green-600 cursor-pointer text-white px-4 py-2 rounded-md"
            >
              Add
            </button>
          ) : (
            <button
              onClick={handleUpdate}
              className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded-md"
            >
              Update
            </button>
          )}
        </div>
      </div>

      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {attendanceList.map((entry, index) => (
            <tr key={index} className="text-center">
              <td className="border px-4 py-2">{entry.name}</td>
              <td className="border px-4 py-2">{entry.date}</td>
              <td className="border px-4 py-2">{entry.status}</td>
              <td className="border px-4 py-2 space-x-2">
                <button
                  onClick={() => handleEdit(index)}
                  className="bg-yellow-500 cursor-pointer text-white px-2 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-600 cursor-pointer text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TeacherAtendance;
