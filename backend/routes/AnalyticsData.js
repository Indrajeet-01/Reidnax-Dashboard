
import express from 'express';
import { insertData, getData } from '../controllers/AnalyticsData.js'; // Adjust the path

const router = express.Router();

// Route to insert data
router.post('/insertData', insertData);

// Route to get data
router.get('/getData', getData);

export default router;
