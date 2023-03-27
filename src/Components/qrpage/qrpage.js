import React, { useEffect } from 'react';

import QRCode from 'react-qr-code';

import Axios from 'axios';

import { useNavigate, useLocation } from 'react-router-dom';

export default function QRpage() {
  const [locatedUser, setLocatedUser] = React.useState([]);

  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    Axios.post('http://192.168.56.1:3001/qrpage', {
      id: state.userId,
    })
      .then((response) => {
        setLocatedUser(response.data.locatedUserId._id);
      });
  }, [locatedUser]);
  console.log(locatedUser);
  return (

    <div>
      <h1>
        { `QR ${state.userName}` }
      </h1>
      <QRCode
        value={`http://192.168.56.1:3000/user/${state.userId}`}
      />
    </div>

  );
}
