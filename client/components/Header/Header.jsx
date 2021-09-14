import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import CreateBug from "../CreateBug/CreateBug";

const Header = (props) => {
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();
  const signup = () => history.push('/signup')
  const home = () => history.push('/')
  return (
    <div className='navbar'>
      <div className='createbug'>
        <a onClick={home}><i className="fas fa-home"></i></a>
        <button onClick={() => setShowModal(!showModal)}>Create Bug</button>
      </div>
      <div className='account'>
        <button>Login</button>
        <button onClick={signup} >Sign-up</button>
      </div>
      {showModal && <CreateBug setShowModal={setShowModal}/>};
    </div>
  );
};

export default Header;

//TO DO
//Creater header component
//Create 'Create Bug' Button
//Create 'Login' button
//create 'sign-in' button
