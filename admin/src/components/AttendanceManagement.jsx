import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AttendanceManagement = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDepartment, setSelectedDepartment] = useState('CSE');
  const [selectedSection, setSelectedSection] = useState('A');
  const [attendanceData, setAttendanceData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const sampleData = [
      { id: 1, name: 'Rahul S', department: 'CSE', section: 'A', attendance: Array(31).fill(false) },
      { id: 2, name: 'Harry Potter', department: 'ECE', section: 'B', attendance: Array(31).fill(false) },
      { id: 3, name: 'John C', department: 'CSE', section: 'A', attendance: Array(31).fill(false) },
    ];
    setAttendanceData(sampleData);
    setFilteredData(sampleData);
  }, []);

  const handleSearch = () => {
    const filtered = attendanceData.filter(
      (student) =>
        student.department === selectedDepartment && student.section === selectedSection
    );
    setFilteredData(filtered);
  };

  const handleAttendanceChange = (studentId, dayIndex) => {
    const updatedData = attendanceData.map((student) => {
      if (student.id === studentId) {
        const updatedAttendance = [...student.attendance];
        updatedAttendance[dayIndex] = !updatedAttendance[dayIndex];
        return { ...student, attendance: updatedAttendance };
      }
      return student;
    });
    setAttendanceData(updatedData);
    setFilteredData(updatedData);
  };

  const renderTable = () => {
    const daysInMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      0
    ).getDate();

    return (
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border w-full text-center text-sm">
          <thead className="bg-blue-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2">Student ID</th>
              <th className="border border-gray-300 px-6 py-2">Name</th>
              {[...Array(daysInMonth).keys()].map((day) => (
                <th key={day + 1} className="border border-gray-300 px-4 py-2">
                  {day + 1}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{student.id}</td>
                <td className="border border-gray-300 px-4 py-2">{student.name}</td>
                {[...Array(daysInMonth).keys()].map((day) => (
                  <td key={day + 1} className="border border-gray-300 px-4 py-2">
                    <input
                      type="checkbox"
                      checked={student.attendance[day] || false}
                      onChange={() => handleAttendanceChange(student.id, day)}
                      className="form-checkbox text-blue-500"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="p-6 bg-gray-100 shadow rounded-lg">
      <h1 className="text-2xl font-semibold text-center mb-6 text-blue-700">
        Attendance Management
      </h1>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <label className="flex items-center gap-2">
            <span className="font-medium text-gray-700">Select Month:</span>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd MMMM yyyy"
              className="border border-gray-300 rounded px-2 py-1"
            />
          </label>
        </div>

        <div className="flex items-center gap-4">
          <label className="font-medium text-gray-700">Select Department:</label>
          <select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1"
          >
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="CS">CS</option>
            <option value="AIDS">AIDS</option>
          </select>
        </div>

        <div className="flex items-center gap-4">
          <label className="font-medium text-gray-700">Select Section:</label>
          <select
            value={selectedSection}
            onChange={(e) => setSelectedSection(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1"
          >
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
        </div>

        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {renderTable()}
    </div>
  );
};

export default AttendanceManagement;
