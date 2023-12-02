
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { AppBar, Drawer, Tab, Tabs } from '@material-ui/core';
import Analytics from '../components/Analytics';
import Data from '../components/Data';
import '../styles/dashboard.css'; 


const Dashboard = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [analyticsData, setAnalyticsData] = useState([]);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a GET request to fetch data from the backend
        const response = await axios.get('http://localhost:8500/getData'); 
        setAnalyticsData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
        <div className="tabs-container">
        <AppBar position="static">
        <Tabs value={tabIndex} onChange={handleTabChange}>
          <Tab label="Analytics" />
          <Tab label="Data" />
        </Tabs>
      </AppBar>

        </div>
      
      <div className="content-container">
      <Drawer variant="permanent" className="drawer-container">
        {tabIndex === 0 && <Analytics data={analyticsData} />}
        {tabIndex === 1 && <Data data={analyticsData} />}
      </Drawer>

      </div>
       
    </div>
  );
};

export default Dashboard;
