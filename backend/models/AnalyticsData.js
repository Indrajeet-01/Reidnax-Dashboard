import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js'; 

const AnalyticsData = sequelize.define('AnalyticsData', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  value: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// Create the table if it doesn't exist
sequelize.sync()
  .then(() => {
    console.log('AnalyticsData table synchronized with the database');
  })
  .catch((error) => {
    console.error('Error synchronizing AnalyticsData table:', error);
  });

export default AnalyticsData;
