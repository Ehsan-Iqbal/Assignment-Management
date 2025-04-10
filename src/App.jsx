import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "./assets/pages/signup";
import Login from "./assets/pages/login";
import Home from "./assets/pages/Home";
import Attendance from "./assets/pages/Attendance";
import Layout from "./assets/pages/Layout";
import Result from "./assets/pages/result";
import Leave from "./assets/pages/leave";
import Feedback from "./assets/pages/feedback";
import StudentAssignment from "./assets/pages/StudentAssignment";
import TeacherAssignment from "./assets/pages/TeacherAssignment";

function App() {
  const userRole = localStorage.getItem("userRole");

  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="result" element={<Result />} />
        <Route path="leave" element={<Leave />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="student-assignment" element={<StudentAssignment />} />
        <Route
          path="teacher-assignment"
          element={
            userRole === "teacher" ? <TeacherAssignment /> : <Navigate to="/" />
          }
        />
      </Route>
      <Route path="*" element={<Signup />} />
    </Routes>
  );
}

export default App;
