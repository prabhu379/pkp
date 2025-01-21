import mongoose from 'mongoose';

const AttendanceSchema = new mongoose.Schema({
  studentId: { type: Number, required: true },
  grade: { type: String, required: true },
  month: { type: String, required: true },
  date: { type: Number, required: true },
  present: { type: Boolean, default: false },
});


export default mongoose.model('Attendance', AttendanceSchema);

