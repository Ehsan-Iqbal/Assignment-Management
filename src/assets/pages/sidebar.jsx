import React, { useState } from "react";
import { MdOutlineDashboard, MdMenu, MdClose } from "react-icons/md";
import { HiViewBoards } from "react-icons/hi";
import { RiMessageFill } from "react-icons/ri";
import { MdOutlinePreview } from "react-icons/md";
import { TbMessageCircleFilled } from "react-icons/tb";
import { PiStudentFill } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { useNavigate, useLocation } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false); // Close sidebar after navigation on mobile
  };

  const handleLogout = () => {
    if (window.confirm("Do you really want to log out?")) {
      localStorage.removeItem("userEmail");
      localStorage.removeItem("userPassword");
      navigate("/");
    }
  };

  return (
    <>
      {/* 🔹 Toggle Button for Mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-[#82c043] text-white p-2 rounded-lg shadow-lg"
      >
        {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
      </button>

      {/* 🔹 Sidebar */}
      <aside
        className={`fixed top-0 left-0 w-56 bg-black h-screen flex flex-col justify-between z-50 transition-transform duration-300 md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:flex`}
      >
        <div>
          {/* User Info */}
          <div className="flex items-center py-6 px-4 space-x-4">
            <div className="w-12 h-[47px] bg-[#82c043] flex items-center justify-center rounded-full text-lg font-bold text-white">
              E
            </div>
            <div>
              <h3 className="text-sm text-gray-400">MY DASHBOARD</h3>
              <p className="text-md text-white font-bold">Ehsan</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="px-4 space-y-4">
          {[
  { path: "/home", label: "Home", icon: <MdOutlineDashboard /> },
  { path: "/attendance", label: "View Attendance", icon: <MdOutlinePreview /> },
  { path: "/result", label: "View Result", icon: <HiViewBoards /> },
  { path: "/leave", label: "Apply for Leave", icon: <RiMessageFill /> },
  { path: "/feedback", label: "Send Feedback", icon: <TbMessageCircleFilled /> },
  { path: "/teacher-assignment", label: "Teacher Assignment", icon: <GiTeacher /> },
  { path: "/student-assignment", label: "Student Assignment", icon: <PiStudentFill /> },
].map((item) => (
  <a
    key={item.path}
    onClick={() => handleNavigation(item.path)}
    className={`flex items-center text-sm gap-2 px-4 py-1.5 rounded-lg cursor-pointer ${
      location.pathname === item.path ? "bg-[#82c043]" : "bg-gray-700 hover:bg-gray-800"
    }`}
  >
    <span className="text-white">{item.icon}</span>
    <span className="text-white">{item.label}</span>
  </a>
))}

          </nav>
        </div>

        {/* Logout Button */}
        <div className="px-4 py-4">
          <button
            onClick={handleLogout}
            className="w-full py-2 cursor-pointer rounded-lg bg-[#82c043] hover:bg-[#6c9c34] text-white"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* 🔹 Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Sidebar;
