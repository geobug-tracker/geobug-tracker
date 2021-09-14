import React from 'react';
import "./Bug.scss";

const Bug = ({ data }) => {
  return (
      <div className='bug-card'>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
      </div>
  );
};

export default Bug
