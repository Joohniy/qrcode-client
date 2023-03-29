import React from 'react';

import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';

import CreateUser from './Components/createUser/createUser';
import CreateQrCode from './Components/createQr/createQr';
import User from './Components/user/user';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/createuser" element={<CreateUser />} />
          <Route path="/userqrcode" element={<CreateQrCode />} />
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
