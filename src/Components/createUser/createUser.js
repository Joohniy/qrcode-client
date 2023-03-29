import React, { useEffect } from 'react';

import { useNavigate, useLocation } from 'react-router-dom';

import Axios from 'axios';

import './createuser.css';

export default function CreateUser() {
  const [values, setValues] = React.useState();
  const [userDB, setUserDB] = React.useState([]);

  const navigate = useNavigate();

  const handleChanges = (value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [value.target.name]: value.target.value,
    }));
  };

  const createUser = () => {
    Axios.post('http://192.168.56.1:3001/createuser', {
      name: values.name,
      linkedin: values.linkedin,
      github: values.github,
    })
      .then((response) => {
        setUserDB(response.data.user);
      })
      .catch((e) => console.log(e, 'something is not right'));
  };

  useEffect(() => {
    if (userDB._id) {
      console.log(userDB._id);
      navigate({
        pathname: '/userqrcode',
      }, { state: { userName: `${userDB.name}`, userId: `${userDB._id}` } });
    }
  }, [userDB]);

  return (
    <div className="container-create-user">
      <h1>QR Code Image Generator</h1>
      <input
        type="text"
        className="create-user-input"
        name="name"
        placeholder="Nome"
        data-testid="name-input"
        onChange={handleChanges}
      />

      <input
        type="text"
        className="create-user-input"
        name="linkedin"
        placeholder="LinkedIn URL"
        data-testid="linkedin-input"
        onChange={handleChanges}
      />

      <input
        type="text"
        className="create-user-input"
        name="github"
        placeholder="GitHub URL"
        data-testid="github-input"
        onChange={handleChanges}
      />
      <button type="button" className="btn-generate" data-testid="btn-create" onClick={() => createUser()}>Generate QR Code</button>
    </div>
  );
}
