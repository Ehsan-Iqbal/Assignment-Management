import React, { useState } from "react";
import { FaPlus, FaFileUpload, FaCheckCircle } from "react-icons/fa";

const StudentAssignment = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  // Handle file selection
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // assignment submission
  const handleSubmit = () => {
    if (!selectedFile) {
      alert("Please select a file before submitting!");
      return;
    }
    setSubmitted(true);
    alert("Assignment submitted successfully!");
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 lg:ml-[16.66%]">
      {/* Assignment Header */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl">
        <h1 className="text-2xl font-bold text-blue-600">Student Assignment</h1>

        {/* File Upload Section */}
        <div className="mt-6 border-t pt-4">
          <h2 className="text-lg font-semibold">Your Work</h2>

          {!submitted ? (
            <div className="mt-3">
              <label className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-600">
                <FaPlus />
                Add or Create
                <input type="file" className="hidden" onChange={handleFileChange} />
              </label>

              {selectedFile && (
                <div className="mt-3 flex items-center justify-between bg-gray-200 p-3 rounded-md">
                  <span className="text-gray-700">{selectedFile.name}</span>
                  <FaFileUpload className="text-blue-500" />
                </div>
              )}

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="mt-4 w-full sm:w-auto bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              >
                Submit
              </button>
            </div>
          ) : (
            <div className="mt-4 flex items-center gap-2 text-green-600 font-semibold">
              <FaCheckCircle className="text-2xl" />
              Assignment Submitted!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentAssignment;
