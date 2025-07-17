import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Viewer from './pages/Viewer';
import VRViewer from './pages/VRViewer';
import About from './pages/About';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viewer" element={<Viewer />} />
        <Route path="/vr" element={<VRViewer />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;