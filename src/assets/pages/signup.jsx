import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    // Save data in localStorage
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Signup Successful!");
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center lg:ml-[16.66%] bg-gray-200">
      <div className="w-[400px] h-[450px] bg-white p-8 rounded-xl shadow-lg border border-gray-300 flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Signup</h2>
        <form onSubmit={handleSignup} className="space-y-6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
          />
          <button
            type="submit"
            className="w-full py-3 cursor-pointer bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all shadow-md"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
