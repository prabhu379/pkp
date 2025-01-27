import express from 'express';
import { loginParent } from '../controllers/studentController.js';

import detailsOfParent from '../controllers/detailsController.js';
import authParent from '../middlewares/authParent.js';

const parentRouter = express.Router();

// Route for parent login
parentRouter.post('/login', loginParent);

// Route for fetching details of parent
parentRouter.get('/details',authParent, detailsOfParent);

export default parentRouter;
