import React from 'react';

import QRCode from 'react-qr-code';

import { useLocation } from 'react-router-dom';

import './createqr.css';

export default function CreateQrCode() {
  const { state } = useLocation();

  return (
    <div className="container-create-qr">
      <h1>{state.userName}</h1>
      <QRCode
        value={`http://172.20.3.200:3000/user/${state.userId}`}
      />
    </div>
  );
}
