import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js'; // Replace with the correct path

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Create the table if it doesn't exist
sequelize.sync()
  .then(() => {
    console.log('User table synchronized with the database');
  })
  .catch((error) => {
    console.error('Error synchronizing User table:', error);
  });

export default User;
