import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CreateBug from '../CreateBug/CreateBug';
import './Header.scss';

const Header = ({ refetch }) => {
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();
  const signup = () => history.push('/signup');
  const home = () => history.push('/');
  return (
    <div className="navbar">
      <div className="createbug">
        <a onClick={home}>
          <i className="fas fa-home"></i>
        </a>
        <button onClick={() => setShowModal(!showModal)}>Create Bug</button>
      </div>
      {showModal && <CreateBug setShowModal={setShowModal} refetch={refetch} />}
      <div className="account">
        <button>Login</button>
        <button onClick={signup}>Sign-up</button>
      </div>
    </div>
  );
};

export default Header;
