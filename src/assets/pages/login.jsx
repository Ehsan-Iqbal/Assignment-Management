import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Example login credentials
    const teacherEmail = "teacher1@gmail.com";
    const teacherPassword = "1";
    const studentEmail = "student1@gmail.com";
    const studentPassword = "1";

    // Check if it's a teacher or student based on the email
    if (email === teacherEmail && password === teacherPassword) {
      localStorage.setItem("userRole", "teacher");  // Set the user role
      alert("Teacher Login Successful!");
      navigate("/home");  // Redirect to Home for Teacher
    } else if (email === studentEmail && password === studentPassword) {
      localStorage.setItem("userRole", "student");  // Set the user role
      alert("Student Login Successful!");
      navigate("/attendance");  // Redirect to View Attendance for Student
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="w-[400px] h-[450px] bg-white p-8 rounded-xl shadow-lg border border-gray-300 flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
          <button
            type="submit"
            className="w-full cursor-pointer py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-md"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
