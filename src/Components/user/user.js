import React, { useEffect } from 'react';

import Axios from 'axios';

import { useParams } from 'react-router-dom';

import './user.css';

export default function User() {
  const [user, setUser] = React.useState(null);

  const { id } = useParams();

  useEffect(() => {
    Axios.get(`http://192.168.56.1:3001/user/${id}`)
      .then((response) => {
        setUser(response.data.locatedUserId);
      });
  }, []);

  return (
    <div className="container-user">
      <h1>{`Olá ${user?.name || ''}`}</h1>
      <button type="button" className="btn-user"><a href={user?.github || ''}>GitHub</a></button>
      <button type="button" className="btn-user"><a href={user?.linkedin || ''}>LinkedIn</a></button>
    </div>
  );
}
