import React, { useState } from "react";

const LeaveApplication = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    leaveType: "",
    leaveDate: "",
    returnDate: "",
    proof: null,
    signature: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save data to local storage
    let savedApplications =
      JSON.parse(localStorage.getItem("leaveApplications")) || [];
    savedApplications.push(formData);
    localStorage.setItem(
      "leaveApplications",
      JSON.stringify(savedApplications)
    );

    alert("Leave application submitted successfully!");

    // Reset form fields
    setFormData({
      firstName: "",
      lastName: "",
      leaveType: "",
      leaveDate: "",
      returnDate: "",
      proof: null,
      signature: "",
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen lg:ml-[16.99%] p-4 sm:p-6 bg-gray-100">
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-xl sm:text-2xl font-bold text-center">
          Leave Application
        </h2>
        <p className="text-xs sm:text-sm text-center mb-3 sm:mb-4">
          For leave where an entitlement is due, staff must submit this form.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-3 sm:space-y-0">
            <div className="w-full sm:w-1/2">
              <label className="block text-xs sm:text-sm font-semibold">
                First Name *
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded text-xs sm:text-sm"
                placeholder="Enter First Name"
              />
            </div>

            <div className="w-full sm:w-1/2">
              <label className="block text-xs sm:text-sm font-semibold">
                Last Name *
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded text-xs sm:text-sm"
                placeholder="Enter Last Name"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-semibold">
              Type of Leave *
            </label>
            <select
              name="leaveType"
              value={formData.leaveType}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded text-xs sm:text-sm"
            >
              <option value="">Select Leave Type</option>
              <option value="Sick Leave">Sick Leave</option>
              <option value="Casual Leave">Casual Leave</option>
              <option value="Annual Leave">Annual Leave</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-3 sm:space-y-0">
            <div className="w-full sm:w-1/2">
              <label className="block text-xs sm:text-sm font-semibold">
                Date of Leave *
              </label>
              <input
                type="date"
                name="leaveDate"
                value={formData.leaveDate}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded text-xs sm:text-sm"
              />
            </div>

            <div className="w-full sm:w-1/2">
              <label className="block text-xs sm:text-sm font-semibold">
                Date of Return *
              </label>
              <input
                type="date"
                name="returnDate"
                value={formData.returnDate}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded text-xs sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-semibold">
              Upload Relevant Proof
            </label>
            <input
              type="file"
              name="proof"
              accept="image/*,application/pdf"
              onChange={handleChange}
              className="w-full p-2 border rounded text-xs sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-semibold">
              Signature *
            </label>
            <textarea
              name="signature"
              value={formData.signature}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded text-xs sm:text-sm"
              placeholder="Enter your signature"
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

export default LeaveApplication;
