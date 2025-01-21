import React from "react";
import { FaUserGraduate, FaCalendarAlt, FaBook, FaUsers } from "react-icons/fa";
import logo from "../assets/assets_frontend/logo.svg";
import SideBar from "../components/SideBar";

const StudentMarks = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      {/* <aside className="w-64 bg-gray-100 shadow-lg">
        <div className="p-4">
          <img src={logo} alt="Logo" className="max-w-full mx-auto" />
        </div>
        <nav className="mt-8">
          <ul className="space-y-4">
            <li className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:text-blue-500 cursor-pointer">
              <FaCalendarAlt className="text-blue-500" />
              Attendance
            </li>
            <li className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:text-blue-500 cursor-pointer">
              <FaBook className="text-blue-500" />
              Add Students
            </li>
            <li className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:text-blue-500 cursor-pointer">
              <FaUsers className="text-blue-500" />
              Students List
            </li>
            <li className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:text-blue-500 cursor-pointer">
              <FaUsers className="text-blue-500" />
              Students Marks
            </li>
          </ul>
        </nav>
      </aside> */}

      <SideBar />

      {/* Main Content */}
      <div className="flex-1 bg-white p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Student's Marks
        </h1>

        <div className="space-y-4">
          <div className="flex flex-col">
            <label
              htmlFor="studentName"
              className="font-semibold text-gray-600"
            >
              Student Name
            </label>
            <input
              type="text"
              id="studentName"
              name="studentName"
              placeholder="Name"
              className="border border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="registerNumber"
              className="font-semibold text-gray-600"
            >
              Register Number
            </label>
            <input
              type="text"
              id="registerNumber"
              name="registerNumber"
              placeholder="Number"
              className="border border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="department"
              className="font-semibold text-gray-600"
            >
              Department
            </label>
            <input
              type="text"
              id="department"
              name="department"
              placeholder="Department"
              className="border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>

        <table className="w-full mt-6 border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2">#</th>
              <th className="border border-gray-300 px-4 py-2">Subject Code</th>
              <th className="border border-gray-300 px-4 py-2">Subject Name</th>
              <th className="border border-gray-300 px-4 py-2">Marks</th>
              <th className="border border-gray-300 px-4 py-2">Grades</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                id: 1,
                code: "22CS512",
                name: "Internship/Seminar",
                marks: 85,
                grade: "A+",
              },
              {
                id: 2,
                code: "22CS909",
                name: "Software Testing and Automation (Lab Integrated)",
                marks: 75,
                grade: "A",
              },
              {
                id: 3,
                code: "22CS938",
                name: "REST Application Development using Spring Boot and JPA (Lab Integrated)",
                marks: 64,
                grade: "B+",
              },
              { id: 4, code: "22EC002", name: "Embedded Systems", marks: 80, grade: "A" },
              { id: 5, code: "22AI401", name: "Machine Learning (Lab Integrated)", marks: 78, grade: "A" },
              { id: 6, code: "22CS502", name: "Theory of Computation (Lab Integrated)", marks: 76, grade: "A" },
              { id: 7, code: "22CS501", name: "Computer Networks (Lab Integrated)", marks: 60, grade: "B+" },
              { id: 8, code: "22CS511", name: "Advanced Aptitude and Coding Skills-1", marks: 84, grade: "A+" },
              { id: 9, code: "22CS935", name: "H_DataExploration and Visualization", marks: 63, grade: "B+" },

            ].map((subject, index) => (
              <tr key={subject.id} className="even:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {index + 1}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {subject.code}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {subject.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <input
                    type="number"
                    defaultValue={subject.marks}
                    className="border border-gray-300 rounded-md p-1 w-full"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <input
                    type="text"
                    defaultValue={subject.grade}
                    maxLength="2"
                    className="border border-gray-300 rounded-md p-1 w-full"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="block mx-auto mt-6 px-6 py-2 bg-green-500 text-white font-bold rounded-md hover:bg-green-600">
          Save
        </button>
      </div>
    </div>
  );
};

export default StudentMarks;
