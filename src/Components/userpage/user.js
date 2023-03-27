import React, { useEffect } from 'react';

import Axios from 'axios';

import { useNavigate, useLocation } from 'react-router-dom';

export default function User() {
  const navigate = useNavigate();
  const { state } = useLocation();

  Axios.get('http://192.168.56.1:3001/user')
    .then((response) => {
      console.log(response);
    });

  return (
    <div>
      <h1>User Page</h1>
    </div>
  );
}
