import React, { useEffect } from 'react';

import Axios from 'axios';

import QRCode from 'react-qr-code';

import { useNavigate, useLocation, useParams } from 'react-router-dom';

export default function User() {
  const { state } = useLocation();

  const { id } = useParams();

  console.log(id);

  Axios.get('http://192.168.56.1:3001/user/:id')
    .then((response) => {
      console.log(response);
    });

  return (
    <div>
      <h1>User Page</h1>
      <QRCode
        value={`http://192.168.56.1:3000/user/:id${state.userId}`}
      />
    </div>
  );
}
