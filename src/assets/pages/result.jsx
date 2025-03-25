import React, { useState } from "react";

const Result = () => {
  const [data, setData] = useState([
    {
      id: 1,
      exam: "BSc 1st Semester 2020",
      class: "BS1st Semester 2020",
      student: "Ehsan",
      percentage: "73.00%",
      addedBy: "Panter",
      status: true,
    },
    {
      id: 2,
      exam: "BSc 1st Semester 2020",
      class: "BSc 1st Semester 2020",
      student: "Adeel",
      percentage: "90.75%",
      addedBy: "Panter",
      status: true,
    },
    {
      id: 3,
      exam: "BSc 1st Semester 2020",
      class: "BSc 1st Semester 2020",
      student: "Rizwan",
      percentage: "76.75%",
      addedBy: "Panter",
      status: true,
    },
    {
      id: 4,
      exam: "BSc 1st Semester 2020",
      class: "BSc 1st Semester 2020",
      student: "Naeem",
      percentage: "47.00%",
      addedBy: "Panter",
      status: true,
    },
    {
      id: 5,
      exam: "BSc 1st Semester 2020",
      class: "BSc 1st Semester 2020",
      student: "Adnan",
      percentage: "71.00%",
      addedBy: "Panter",
      status: true,
    },
    {
      id: 6,
      exam: "BSc 1st Semester 2020",
      class: "BSc 1st Semester 2020",
      student: "Shoaib",
      percentage: "62.00%",
      addedBy: "Panter",
      status: true,
    },
    {
      id: 7,
      exam: "BSc 1st Semester 2020",
      class: "BSc 1st Semester 2020",
      student: "Amir",
      percentage: "78.00%",
      addedBy: "Panter",
      status: true,
    },
    {
      id: 8,
      exam: "BSc 1st Semester 2020",
      class: "BSc 1st Semester 2020",
      student: "Waseem",
      percentage: "87.75%",
      addedBy: "Panter",
      status: true,
    },
    {
      id: 9,
      exam: "BSc 1st Semester 2020",
      class: "BSc 1st Semester 2020",
      student: "Azam",
      percentage: "84.75%",
      addedBy: "Panter",
      status: true,
    },
    {
      id: 10,
      exam: "BSc 1st Semester 2020",
      class: "BSc 1st Semester 2020",
      student: "Irshad",
      percentage: "68.25%",
      addedBy: "Panter",
      status: true,
    },
    {
      id: 11,
      exam: "BSc 1st Semester 2020",
      class: "BSc 1st Semester 2020",
      student: "Irfan",
      percentage: "88.00%",
      addedBy: "Panter",
      status: true,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [editingItem, setEditingItem] = useState(null);
  const recordsPerPage = 10;

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      setData(data.filter((item) => item.id !== id));
    }
  };

  const toggleStatus = (id) => {
    setData(
      data.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
  };

  const handleEdit = (item) => {
    setEditingItem(item);
  };

  const handleSave = () => {
    setData(
      data.map((item) => (item.id === editingItem.id ? editingItem : item))
    );
    setEditingItem(null);
  };

  const filteredData = data.filter((item) =>
    item.student.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / recordsPerPage);
  const currentRecords = filteredData.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  return (
    <div className="lg:ml-[16.99%] p-2 sm:p-4">
      <div className="w-full bg-white p-4 sm:p-6 rounded-lg shadow-lg">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Result List</h2>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2 sm:gap-0">
          <input
            type="text"
            placeholder="Search"
            className="border px-3 py-2 rounded-md w-full sm:w-1/3 text-sm sm:text-base"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="p-2 sm:p-3 text-xs sm:text-sm">Exam</th>
                <th className="p-2 sm:p-3 text-xs sm:text-sm">Class</th>
                <th className="p-2 sm:p-3 text-xs sm:text-sm">Student</th>
                <th className="p-2 sm:p-3 text-xs sm:text-sm">Percentage</th>
                <th className="p-2 sm:p-3 text-xs sm:text-sm">Added By</th>
                <th className="p-2 sm:p-3 text-xs sm:text-sm">Status</th>
                <th className="p-2 sm:p-3 text-xs sm:text-sm">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentRecords.map((item) => (
                <tr key={item.id} className="border-b bg-gray-100 even:bg-white">
                  <td className="p-2 sm:p-3 text-center text-xs sm:text-sm">{item.exam}</td>
                  <td className="p-2 sm:p-3 text-center text-xs sm:text-sm">{item.class}</td>
                  <td className="p-2 sm:p-3 text-center text-xs sm:text-sm">{item.student}</td>
                  <td className="p-2 sm:p-3 text-center text-xs sm:text-sm">{item.percentage}</td>
                  <td className="p-2 sm:p-3 text-center text-xs sm:text-sm">{item.addedBy}</td>
                  <td className="p-2 sm:p-3 text-center">
                    <button
                      onClick={() => toggleStatus(item.id)}
                      className={`px-2 sm:px-4 py-1 rounded-md text-xs sm:text-sm ${
                        item.status ? "bg-blue-500" : "bg-red-500"
                      } text-white`}
                    >
                      {item.status ? "Enable" : "Disable"}
                    </button>
                  </td>
                  <td className="p-2 sm:p-3 text-center">
                    <div className="flex justify-center gap-1 sm:gap-2">
                      <button
                        onClick={() => handleEdit(item)}
                        className="bg-yellow-500 text-white px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm"
                      >
                        ✏️
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="bg-red-500 text-white px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm"
                      >
                        ❌
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Edit Form */}
        {editingItem && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-2 sm:p-4">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-md">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">Edit Result</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSave();
                }}
              >
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Exam</label>
                  <input
                    type="text"
                    className="border px-3 py-2 rounded-md w-full"
                    value={editingItem.exam}
                    onChange={(e) =>
                      setEditingItem({ ...editingItem, exam: e.target.value })
                    }
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Class
                  </label>
                  <input
                    type="text"
                    className="border px-3 py-2 rounded-md w-full"
                    value={editingItem.class}
                    onChange={(e) =>
                      setEditingItem({ ...editingItem, class: e.target.value })
                    }
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Student
                  </label>
                  <input
                    type="text"
                    className="border px-3 py-2 rounded-md w-full"
                    value={editingItem.student}
                    onChange={(e) =>
                      setEditingItem({
                        ...editingItem,
                        student: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Percentage
                  </label>
                  <input
                    type="text"
                    className="border px-3 py-2 rounded-md w-full"
                    value={editingItem.percentage}
                    onChange={(e) =>
                      setEditingItem({
                        ...editingItem,
                        percentage: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Added By
                  </label>
                  <input
                    type="text"
                    className="border px-3 py-2 rounded-md w-full"
                    value={editingItem.addedBy}
                    onChange={(e) =>
                      setEditingItem({
                        ...editingItem,
                        addedBy: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => setEditingItem(null)}
                    className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-2 sm:gap-0">
          <span className="text-xs sm:text-sm">
            Showing {currentRecords.length} of {filteredData.length} entries
          </span>
          <div className="flex">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="bg-gray-300 px-2 sm:px-3 py-1 rounded-md mx-1 text-xs sm:text-sm"
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm">{currentPage}</span>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              className="bg-gray-300 px-2 sm:px-3 py-1 rounded-md mx-1 text-xs sm:text-sm"
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;