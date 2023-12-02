import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserAuth from "./pages/UserAuth";


function App() {
  return (
    <Router>
      <UserAuth/>

      <Routes>
        
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;
