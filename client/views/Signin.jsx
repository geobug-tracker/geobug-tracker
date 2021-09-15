import React from 'react';
import './Signin.scss';

const Signin = () => {
  return (
    <div className="signin">
      <div className="signinHeader">
        <h2>Sign-in Form</h2>
      </div>
      <form className="signinForm">
        <div className="input">
          <label>First Name:</label>
          <input type="text" id="firstName" name="firstName" />
        </div>
        <div className="input">
          <label>Last Name:</label>
          <input type="text" id="lastName" name="lastName" />
        </div>
        <div className="input">
          <label>Team Name:</label>
          <input type="text" id="teamName" name="teamName" />
        </div>
        <div className="input">
          <label>E-mail:</label>
          <input type="text" id="email" name="email" />
        </div>
        <div className="input">
          <label>Password:</label>
          <input type="password" id="password" name="password" />
        </div>
      </form>
    </div>
  );
};

export default Signin;
