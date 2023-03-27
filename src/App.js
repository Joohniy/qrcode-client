import React from 'react';

import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';

import Generate from './Components/generate/generate';
import QRpage from './Components/qrpage/qrpage';
import User from './Components/userpage/user';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/generate" element={<Generate />} />
          <Route path="/qrpage" element={<QRpage />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
