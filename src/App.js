import React from 'react';
import JobList from './components/JobList';
import AdminPanel from './components/AdminPanel';
// import AuthForm from './components/AuthForm';
import Register from './components/Register'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<JobList />} />
          <Route path="/admin" element={<AdminPanel />} />
          {/* <Route path="/auth" element={<AuthForm />} /> */}
          <Route path="/about" element={<About/>}/>
          <Route path="/register" element={<Register />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
