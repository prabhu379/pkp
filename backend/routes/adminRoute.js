import express from 'express';
import { loginAdmin } from '../controllers/adminController.js';
import authAdmin from '../middlewares/authAdmin.js';
import addParent from '../controllers/parentController.js';

const adminRouter = express.Router();

// Public route
adminRouter.post('/login', loginAdmin);

// Protected route
adminRouter.get('/protected', authAdmin, (req, res) => {
  res.json({ success: true, message: "Access granted to protected route." });
});

adminRouter.post('/add-parent',addParent)

export default adminRouter;
