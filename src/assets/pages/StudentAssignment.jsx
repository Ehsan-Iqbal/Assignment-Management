import React, { useState } from "react";
import { FaPlus, FaFileUpload, FaCheckCircle, FaStar } from "react-icons/fa";

const StudentAssignment = () => {
  // State for uploaded file, submission status, and marks feedback
  const [selectedFile, setSelectedFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [marks, setMarks] = useState(null);
  const [feedback, setFeedback] = useState("");
  // Status could be 'Pending' or 'Evaluated'
  const [status, setStatus] = useState("Pending");
  const [assignmentData, setAssignmentData] = useState(null);
  // New state for student name
  const [studentName, setStudentName] = useState("");
  // New state for submission date/time
  const [submissionDate, setSubmissionDate] = useState(null);
  // New state for student comments
  const [comments, setComments] = useState("");

  // Handle file selection
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Handle student name change
  const handleNameChange = (event) => {
    setStudentName(event.target.value);
  };

  // Handle the assignment submission
  const handleSubmit = () => {
    if (!selectedFile || !studentName) {
      alert("Please enter your name and select a file before submitting!");
      return;
    }

    const newAssignment = {
      studentName,
      file: selectedFile,
      status: "Pending",
      marks: null,
      feedback: "",
      comments,
      submissionDate: new Date().toLocaleString(),
    };

    setAssignmentData(newAssignment);
    setSubmitted(true);
    setSubmissionDate(newAssignment.submissionDate);
    alert("Assignment submitted successfully!");
  };

  // Simulate teacher's evaluation by setting marks and feedback
  const evaluateAssignment = () => {
    setMarks(85);
    setFeedback("Great work! Keep it up!");
    setStatus("Evaluated");
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 lg:ml-[16.66%]">
      {/* Assignment Header */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl">
        <h1 className="text-2xl font-bold text-blue-600">Student Assignment</h1>

        {/* Student Name and Assignment File Upload Section */}
        <div className="mt-6 border-t pt-4">
          <h2 className="text-lg font-semibold">Your Work</h2>

          {!submitted ? (
            <div className="mt-3">
              <div className="mb-4">
                <label className="block text-xs sm:text-sm">Student Name</label>
                <input
                  type="text"
                  value={studentName}
                  onChange={handleNameChange}
                  placeholder="Enter Your Name"
                  className="w-full p-2 border bg-gray-100 border-gray-400 rounded text-xs sm:text-sm"
                />
              </div>
              <label className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-600">
                <FaPlus />
                Add or Create
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>

              {selectedFile && (
                <div className="mt-3 flex items-center justify-between bg-gray-200 p-3 rounded-md">
                  <span className="text-gray-700">{selectedFile.name}</span>
                  <FaFileUpload className="text-blue-500" />
                </div>
              )}

              <div className="mt-3">
                <label className="block text-xs sm:text-sm">Comments</label>
                <textarea
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  placeholder="Add any additional comments"
                  className="w-full p-2 bg-gray-100 border border-gray-400 rounded text-xs sm:text-sm"
                  rows="3"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="mt-4 w-full sm:w-auto bg-green-500 text-white px-4 py-2 cursor-pointer rounded-md hover:bg-green-600"
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

        {/* After Submission: View Marks and Feedback */}
        {submitted && assignmentData && (
          <div className="mt-6 border-t pt-4">
            <h2 className="text-lg font-semibold">Assignment Details</h2>

            {/* Display Submitted Assignment */}
            <div className="mt-3">
              <h3 className="font-semibold">Student Name:</h3>
              <p>{assignmentData.studentName}</p>
              <h3 className="font-semibold mt-4">Submitted File:</h3>
              <div className="mt-2">
                <span className="text-sm text-gray-700">
                  {assignmentData.file.name}
                </span>
              </div>
              <h3 className="font-semibold mt-4">Submission Date/Time:</h3>
              <p>{submissionDate}</p>
              <h3 className="font-semibold mt-4">Comments:</h3>
              <p>{assignmentData.comments}</p>
            </div>

            {/* Marks and Feedback (Only after Evaluation) */}
            {status === "Evaluated" ? (
              <div className="mt-4">
                <h3 className="font-semibold">Marks Assigned:</h3>
                <p className="text-lg font-semibold text-green-600">{marks}</p>

                <h3 className="font-semibold mt-4">Feedback:</h3>
                <p>{feedback}</p>
              </div>
            ) : (
              <div className="mt-4 text-yellow-600">
                <p>Assignment is still Pending for evaluation.</p>
              </div>
            )}

            {/* Evaluation Button (Simulating Teacher's Evaluation) */}
            {status === "Pending" && (
              <button
                onClick={evaluateAssignment}
                className="mt-4 bg-blue-500 text-white px-4 py-2 cursor-pointer rounded-md hover:bg-blue-600"
              >
                Mark as Evaluated
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentAssignment;
