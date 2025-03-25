import React, { useState } from "react";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    studentId: "",
    grade: "",
    rating: 0,
    suggestions: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRating = (ratingValue) => {
    setFormData({ ...formData, rating: ratingValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("studentFeedback", JSON.stringify(formData));
    alert("Feedback submitted successfully!");
    setFormData({
      firstName: "",
      lastName: "",
      studentId: "",
      grade: "",
      rating: 0,
      suggestions: "",
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen lg:ml-[16.0%] p-4 sm:p-6 bg-gray-900">
      <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-md text-white">
        <h2 className="text-xl sm:text-2xl font-bold text-center">Student Feedback</h2>
        <p className="text-xs sm:text-sm text-center mb-3 sm:mb-4">Please rate your experience with the faculty</p>

        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          <div>
            <label className="block text-xs sm:text-sm">Student Name</label>
            <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-3 sm:space-y-0">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full sm:w-1/2 p-2 bg-gray-700 rounded text-xs sm:text-sm"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full sm:w-1/2 p-2 bg-gray-700 rounded text-xs sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs sm:text-sm">Student ID</label>
            <input
              type="text"
              name="studentId"
              placeholder="Enter ID"
              value={formData.studentId}
              onChange={handleChange}
              required
              className="w-full p-2 bg-gray-700 rounded text-xs sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm">Grade</label>
            <select
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              required
              className="w-full p-2 bg-gray-700 rounded text-xs sm:text-sm"
            >
              <option value="">Select Grade</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="F">F</option>
            </select>
          </div>

          <div>
            <label className="block text-xs sm:text-sm">Rate your overall experience</label>
            <div className="flex justify-center sm:justify-start space-x-1 sm:space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleRating(star)}
                  className={`p-1 sm:p-2 text-base sm:text-lg ${
                    formData.rating >= star ? "text-yellow-400" : "text-gray-400"
                  }`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs sm:text-sm">Suggestions</label>
            <textarea
              name="suggestions"
              placeholder="Do you have any suggestions?"
              value={formData.suggestions}
              onChange={handleChange}
              className="w-full p-2 bg-gray-700 rounded text-xs sm:text-sm"
              rows="3"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded text-sm sm:text-base"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;