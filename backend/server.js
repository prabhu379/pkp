import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import adminRouter from './routes/adminRoute.js';
import parentRouter from './routes/parentRoute.js';

import connectDB from './config/db.js';
import studentRouter from './routes/studentRouter.js';

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 4000;
connectDB();

// Enable CORS
app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.use('/api/admin', adminRouter);
app.use('/parent', parentRouter);
app.use('/api/student', studentRouter); // Add student routes

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
