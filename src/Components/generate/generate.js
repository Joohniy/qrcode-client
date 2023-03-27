import React, { useEffect } from 'react';

import { useNavigate, useLocation } from 'react-router-dom';

import Axios from 'axios';

export default function Generate() {
  const [values, setValues] = React.useState();
  const [user, setUser] = React.useState([]);

  const navigate = useNavigate();
  const { state } = useLocation();

  const handleChanges = (value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [value.target.name]: value.target.value,
    }));
  };

  const generateQR = () => {
    Axios.post('http://192.168.56.1:3001/generate', {
      name: values.name,
      linkedin: values.linkedin,
      github: values.github,
    })
      .then((response) => {
        setUser(response.data.user);
      })
      .catch((e) => console.log(e, 'something is not right'));
  };

  useEffect(() => {
    if (user._id) {
      navigate({
        pathname: '/user/:id',
      }, { state: { userName: `${user.name}`, userId: `${user._id}` } });
    }
  }, [user]);

  return (
    <div>
      <h1>QR Code Image Generator</h1>
      <input
        type="text"
        className="name"
        name="name"
        placeholder="Nome"
        onChange={handleChanges}
      />

      <input
        type="text"
        className="linkedin"
        name="linkedin"
        placeholder="LinkedIn URL"
        onChange={handleChanges}
      />

      <input
        type="text"
        className="github"
        name="github"
        placeholder="GitHub URL"
        onChange={handleChanges}
      />
      <button type="button" className="btn-generate" onClick={() => generateQR()}>Generate QR Code</button>
    </div>
  );
}
