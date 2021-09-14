import React from "react";
import { useHistory } from "react-router-dom";

const Header = (props) => {
  const history = useHistory();
  const signup = () => history.push('/signup')
  const home = () => history.push('/')
  return (
    <div className='navbar'>
      <div className='createbug'>
        <a onClick={home}><i class="fas fa-home"></i></a>
        <button>Create Bug</button>
      </div>
      <div className='account'>
        <button>Login</button>
        <button onClick={signup} >Sign-up</button>
      </div>

    </div>
  );
};

export default Header;

//TO DO
//Creater header component
//Create 'Create Bug' Button
//Create 'Login' button
//create 'sign-in' button
