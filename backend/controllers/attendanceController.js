import Attendance from "../models/Attendance.js";

export const getAttendance = async (req, res) => {
  try {
    const { grade, month } = req.query;

    // Validate required query parameters
    if (!grade || !month) {
      return res.status(400).json({
        success: false,
        message: "Grade and month are required query parameters.",
      });
    }

    // Fetch attendance records
    const attendance = await Attendance.find({ grade, month });

    // Check if attendance records exist
    if (!attendance.length) {
      return res.status(404).json({
        success: false,
        message: "No attendance records found for the specified grade and month.",
      });
    }

    return res.status(200).json({
      success: true,
      data: attendance,
    });
  } catch (error) {
    console.error("Error fetching attendance:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while fetching attendance records.",
      error: error.message,
    });
  }
};

export const createAttendance = async (req, res) => {
  try {
    
    // Validate required fields
    const { studentId, grade, month, date, present } = req.body;

  const missingFields = [];
  
  // Check each field and add to missingFields if not provided
  if (!studentId) missingFields.push("studentId");
  if (!grade) missingFields.push("grade");
  if (!month) missingFields.push("month");
  if (!date) missingFields.push("date");
  if (present === undefined) missingFields.push("present");

  // If any fields are missing, return an error response
  if (missingFields.length > 0) {
    return res.status(400).json({
      success: false,
      message: `The following fields are missing or invalid: ${missingFields.join(", ")}`,
    });
  }


    // Validate day is within range
    if (date < 1 || date > 31) {
      return res.status(400).json({
        success: false,
        message: "Day must be a valid number between 1 and 31.",
      });
    }

    // Create a new attendance record
    const newAttendance = new Attendance({
      studentId,
      grade,
      month,
      date,
      present,
    });

    await newAttendance.save();

    return res.status(201).json({
      success: true,
      message: "Attendance record created successfully.",
      data: newAttendance,
    });
  } catch (error) {
    console.error("Error creating attendance:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while creating attendance records.",
      error: error.message,
    });
  }
};
