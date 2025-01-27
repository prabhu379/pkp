import express from 'express';
import { loginAdmin } from '../controllers/adminController.js';
import authAdmin from '../middlewares/authAdmin.js';
import addParent from '../controllers/parentController.js';
import { addMarks } from '../controllers/MarksController.js';
import { getStudentDetails } from '../controllers/StudentDetailsController.js';
import { predictDropout } from '../controllers/dropoutController.js';
import { predictDropoutBasedOnSocialMedia } from '../controllers/socialmediaController.js';

const adminRouter = express.Router();

// Public route
adminRouter.post('/login', loginAdmin);

// Protected route
adminRouter.get('/protected', authAdmin, (req, res) => {
  res.json({ success: true, message: "Access granted to protected route." });
});

adminRouter.post('/add-parent',addParent)
adminRouter.post('/add-Marks',addMarks)

// Fetch student details route
adminRouter.get('/students', getStudentDetails);
adminRouter.get("/predict/:rollno", predictDropout);
// Add the new route for predicting dropout based on social media data
adminRouter.get("/predict-dropout-social-media", predictDropoutBasedOnSocialMedia)

export default adminRouter;
