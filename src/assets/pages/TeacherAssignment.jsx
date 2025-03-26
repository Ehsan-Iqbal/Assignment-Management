import React, { useState, useEffect } from "react";
import { FaPlus, FaRegFileAlt } from "react-icons/fa";

const AssignmentManager = () => {
  const [assignments, setAssignments] = useState({
    Zoology: [],
  });

  const [showForm, setShowForm] = useState(false);
  const [newAssignment, setNewAssignment] = useState({
    title: "",
    dueDate: "",
    category: "Zoology",
  });

  const calculateTimeRemaining = (dueDate) => {
    const due = new Date(dueDate).getTime();
    const now = new Date().getTime();
    const diff = due - now;

    if (diff <= 0) return "Expired";

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    return `${days}d ${hours}h ${minutes}m left`;
  };

  const [timeLeft, setTimeLeft] = useState({});
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(
        Object.fromEntries(
          Object.entries(assignments).map(([category, tasks]) => [
            category,
            tasks.map((task) => calculateTimeRemaining(task.dueDate)),
          ])
        )
      );
    }, 60000);

    return () => clearInterval(interval);
  }, [assignments]);

  const handleAddAssignment = () => {
    if (!newAssignment.title || !newAssignment.dueDate) return;
    setAssignments((prev) => ({
      ...prev,
      [newAssignment.category]: [
        ...prev[newAssignment.category],
        { title: newAssignment.title, dueDate: newAssignment.dueDate },
      ],
    }));
    setShowForm(false);
    setNewAssignment({ title: "", dueDate: "", category: "Zoology" });
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-60 p-4">
        <h2 className="text-lg font-bold text-gray-700">Zoology</h2>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Create Assignments</h1>
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            <FaPlus /> Create
          </button>
        </div>

        <div className="mt-6">
          {assignments.Zoology.length === 0 ? (
            <p className="text-gray-500 mt-2">Assignments ...</p>
          ) : (
            assignments.Zoology.map((assignment, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-white shadow-md rounded-lg mt-2"
              >
                <div className="flex items-center gap-3">
                  <FaRegFileAlt className="text-blue-500" />
                  <span>{assignment.title}</span>
                </div>
                <div className="text-gray-500 text-sm text-right">
                  <p>Due: {new Date(assignment.dueDate).toLocaleString()}</p>
                  <p className="text-red-500 font-semibold">
                    {timeLeft.Zoology ? timeLeft.Zoology[index] : calculateTimeRemaining(assignment.dueDate)}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Create Zoology Assignment</h2>
            <input
              type="text"
              placeholder="Title"
              value={newAssignment.title}
              onChange={(e) => setNewAssignment({ ...newAssignment, title: e.target.value })}
              className="w-full p-2 border rounded-md mb-2"
            />
            <input
              type="datetime-local"
              value={newAssignment.dueDate}
              onChange={(e) => setNewAssignment({ ...newAssignment, dueDate: e.target.value })}
              className="w-full p-2 border rounded-md mb-4"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowForm(false)}
                className="bg-gray-300 px-4 py-2 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleAddAssignment}
                className="bg-green-500 text-white px-4 py-2 rounded-md"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignmentManager;
