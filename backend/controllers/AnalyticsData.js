
import AnalyticsData from '../models/AnalyticsData.js'; 

// Controller function to insert data
export const insertData = async (req, res) => {
  try {
    const sampleAnalyticsData = req.body; 
    await AnalyticsData.bulkCreate(sampleAnalyticsData);
    res.status(201).json({ message: 'Data inserted successfully' });
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller function to get data
export const getData = async (req, res) => {
  try {
    const data = await AnalyticsData.findAll();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error getting data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
