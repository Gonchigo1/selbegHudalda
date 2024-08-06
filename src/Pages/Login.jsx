import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'; 
import Validation from './loginValiditaion';

function Login() {
  const [values, setValues] = useState({
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
    const validationErrors = Validation(values);
    setErrors(validationErrors);
  
    if (Object.keys(validationErrors).length === 0) {
      axios.post('http://localhost:3001/api/login', values)
        .then(response => {
          console.log(response.data); 
          if (response.data.success) {
            navigate('/');
          } else {
            setErrors({ general: response.data.message });
          }
        })
        .catch(error => {
          console.error('Login error:', error); 
          setErrors({ general: 'нууц үг эсвэл и-мейл буруу байна' });
        });
    }
  }
  
  const Validation = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Email is required';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    }
    return errors;
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Нэвтрэх</h2>
        <form action="" onSubmit={handleSubmit} >
          <input type="email" placeholder="Email" name='email' onChange={handleInput}/>
          {errors.email && <span>{errors.email}</span>}
          <input type="password" placeholder="Password" name='password' onChange={handleInput}/>
          {errors.password && <span>{errors.password}</span>}
          {errors.general && <span>{errors.general}</span>}
          <button type="submit">Нэвтрэх</button>
          <div className='forgotPassword'>  

          <a href='/forgtetPass'>Нууц үг мартсан?</a>
          <Link ></Link>
          </div>
          
          <div className='reg'>
            {/* <Link to="/register">Бүртгүүлэх</Link> */}
            <a href="/register">Бүртгүүлэх</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
