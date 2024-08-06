import React, { useState } from 'react';
import axios from 'axios';
import './Register.css'; 
import { Link } from 'react-router-dom';
import Validation from './signupValidation';
import { useNavigate } from 'react-router-dom'; 

const Register = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if (!errors.name && !errors.email && !errors.password) {
      axios.post('http://localhost:3001/register', values)
        .then(res => {
          console.log(res.data);
          navigate('/login');
        })
        .catch(err => {
          console.error(err);
        });
    }
  }

  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Бүртгүүлэх</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="E-mail" name="email" onChange={handleInput} />
          {errors.email && <span>{errors.email}</span>}
          <input type="text" placeholder="Username" name="name" onChange={handleInput} />
          {errors.name && <span>{errors.name}</span>}
          <input type="password" placeholder="Password" name="password" onChange={handleInput} />
          {errors.password && <span>{errors.password}</span>}
          <button type="submit">Бүртгүүлэх</button>
          <Link to="/login">Нэвтрэх</Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
