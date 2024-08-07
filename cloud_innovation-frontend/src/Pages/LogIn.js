import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/AuthReducer/action';
import { useNavigate } from 'react-router-dom';
import "../Pages/login.css";

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate]); 

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <h2>login</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LogIn;
