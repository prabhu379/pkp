import React from 'react';
import { FaUserGraduate, FaCalendarAlt, FaBook, FaUsers } from 'react-icons/fa';
import logo from "../assets/assets_frontend/logo.svg";
import SideBar from '../components/SideBar';
import { NavLink, useNavigate } from "react-router-dom";
const StudentDetails = () => {
  const students = [
    { name: 'John Doe', department: 'CSE' },
    { name: 'Jane Smith', department: 'CSE' },
    { name: 'Emily Johnson', department: 'ECE' },
    { name: 'Michael Brown', department: 'AIDS' },
    { name: 'Sarah Wilson', department: 'AIDS' },
    { name: 'David Miller', department: 'CSC' },
    { name: 'Emma Davis', department: 'CSE' },
    { name: 'Chris Garcia', department: 'ECE' },
    { name: 'Sophia Martinez', department: 'CSC' },
  ];

  const navigate = useNavigate();

  return (
    <div className="flex h-screen">
      
      <SideBar />

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-50">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">All Students</h2>
          <button onClick={() => navigate("/studentAdmin")} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Add Student
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {students.map((student, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{student.name}</h3>
              <p className="text-sm text-gray-600">{student.department}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default StudentDetails;
