import React, { useState } from "react";

const TeacherAssignment = () => {
  const [assignments, setAssignments] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    deadline: "",
    maxMarks: "",
  });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation
    if (!form.title || !form.description || !form.deadline || !form.maxMarks) {
      alert("All fields are required.");
      return;
    }

    if (editingIndex !== null) {
      // Edit existing assignment
      const updatedAssignments = [...assignments];
      updatedAssignments[editingIndex] = form;
      setAssignments(updatedAssignments);
      setEditingIndex(null);
    } else {
      // Create new assignment
      setAssignments([...assignments, form]);
    }

    setForm({ title: "", description: "", deadline: "", maxMarks: "" });
  };

  const handleEdit = (index) => {
    setForm(assignments[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    setAssignments(assignments.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-3xl flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-lg lg:ml-[30.66%]">
      <h2 className="text-2xl font-bold text-center mb-4">
        Assignment Management
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4 w-full">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <input
          type="date"
          name="deadline"
          value={form.deadline}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          name="maxMarks"
          placeholder="Maximum Marks"
          value={form.maxMarks}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition cursor-pointer"
        >
          {editingIndex !== null ? "Update" : "Create"} Assignment
        </button>
      </form>

      {/* Assignments List */}
      <h3 className="text-xl font-semibold mt-6">Assignments</h3>
      <ul className="space-y-4 mt-4 w-full">
        {assignments.map((assignment, index) => (
          <li
            key={index}
            className="p-4 bg-gray-100 rounded flex justify-between items-center"
          >
            <div>
              <strong>{assignment.title}</strong> - {assignment.description}{" "}
              (Due: {assignment.deadline}, Marks: {assignment.maxMarks})
            </div>
            <div className="space-x-2">
              <button
                className="bg-yellow-500 text-white px-3 py-1 rounded cursor-pointer hover:bg-yellow-600 transition"
                onClick={() => handleEdit(index)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white cursor-pointer px-3 py-1 rounded hover:bg-red-600 transition"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeacherAssignment;
