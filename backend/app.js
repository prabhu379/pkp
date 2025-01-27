import express from 'express';
import attendanceRoutes from './routes/attendanceRoutes.js';
import studentRoutes from './routes/studentRoutes.js';
import errorHandler from './utils/errorHandler.js';

import cors from 'cors'

const app = express();




app.use(cors())

app.use(express.json());

// API routes
app.use('/api/attendance', attendanceRoutes);
app.use('/api/students', studentRoutes);


// Error handling
app.use(errorHandler);

export default app;
