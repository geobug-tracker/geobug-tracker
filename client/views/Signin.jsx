import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Signin.scss';

const Signin = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [teamName, setTeamName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();


  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  }

  const handleTeamNameChange = (event) => {
    setTeamName(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSignup = async() => {
    // const user = await addUser({

    // })
    console.log(`sign up data`, firstName, lastName, teamName, email, password);
    history.push('/');
  }
  return (
    <div className="signin">
      <div className="signinHeader">
        <h2>Sign-up Form</h2>
      </div>
      <form className="signinForm">
        <div className="input">
          <label>First Name:</label>
          <input type="text" id="firstName" name="firstName" onChange={handleFirstNameChange} value={firstName} />
        </div>
        <div className="input">
          <label>Last Name:</label>
          <input type="text" id="lastName" name="lastName" onChange={handleLastNameChange} value={lastName}/>
        </div>
        <div className="input">
          <label>Team Name:</label>
          <input type="text" id="teamName" name="teamName" onChange={handleTeamNameChange} value={teamName}/>
        </div>
        <div className="input">
          <label>E-mail:</label>
          <input type="text" id="email" name="email" onChange={handleEmailChange} value={email} />
        </div>
        <div className="input">
          <label>Password:</label>
          <input type="password" id="password" name="password" onChange={handlePasswordChange} value={password}/>
        </div>
      </form>
      <button onClick={handleSignup}>Sign-up</button>
    </div>
  );
};

export default Signin;
