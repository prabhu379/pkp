import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    // Local source of attendance data
    const localData = [
      { date: '2025-01-01', timeIn: '08:45', timeOut: '17:00', breakHours: '1', workingHours: '7', status: '' },
      { date: '2025-01-02', timeIn: '09:15', timeOut: '17:00', breakHours: '1', workingHours: '7', status: '' },
      { date: '2025-01-03', timeIn: '', timeOut: '', breakHours: '1', workingHours: '0', status: '' },
      { date: '2025-01-04', timeIn: '09:00', timeOut: '17:00', breakHours: '1', workingHours: '7', status: '' },
    ];

    const updatedData = localData.map((record) => ({
      ...record,
      status: record.timeIn ? (isLate(record.timeIn) ? 'Late' : 'Present') : 'Absent',
    }));

    setAttendanceData(updatedData);
  }, []);

  const isLate = (timeIn) => {
    const allowedTime = new Date();
    allowedTime.setHours(9, 0, 0); // Set allowed time to 9:00 AM
    const checkTime = new Date(`1970-01-01T${timeIn}`);
    return checkTime > allowedTime;
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-4">Attendance Report</h1>
      <table className="min-w-full table-auto">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 text-left">Date</th>
            <th className="px-4 py-2 text-left">Time In</th>
            <th className="px-4 py-2 text-left">Time Out</th>
            <th className="px-4 py-2 text-left">Break Hours</th>
            <th className="px-4 py-2 text-left">Working Hours</th>
            <th className="px-4 py-2 text-left">Status (Absent/Present)</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((record, index) => (
            <tr key={index} className={`border-t ${record.status === 'Absent' ? 'bg-red-100' : ''}`}>
              <td className="px-4 py-2">{record.date}</td>
              <td className="px-4 py-2">{record.timeIn || '-'}</td>
              <td className="px-4 py-2">{record.timeOut || '-'}</td>
              <td className="px-4 py-2">{record.breakHours || '-'}</td>
              <td className="px-4 py-2">{record.workingHours || '-'}</td>
              <td className={`px-4 py-2 font-bold ${record.status === 'Present' ? 'text-green-500' : 'text-red-500'}`}>
                {record.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
