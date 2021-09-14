import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Bug from '../Bug/Bug';
import { GET_ALL_BUGS } from '../../queries';
import './Board.scss';

const Board = () => {
  const { loading, error, data } = useQuery(GET_ALL_BUGS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error occured!</p>;

  return (
    <div className="board">
      <div className="fields">
        <h4 className="title">New</h4>
        <div className="new column">
          {data.bugs.map((bug, i) => (
            <Bug key={i} data={bug} />
          ))}
        </div>
      </div>
      <div className="fields">
        <h4 className="title">In-Progress</h4>
        <div className="inprogress column">
          {data.bugs.map((bug, i) => (
            <Bug key={i} data={bug} />
          ))}
        </div>
      </div>
      <div className="fields">
        <h4 className="title">Review</h4>
        <div className="review column">
          {data.bugs.map((bug, i) => (
            <Bug key={i} data={bug} />
          ))}
        </div>
      </div>
      <div className="fields">
        <h4 className="title">Done</h4>
        <div className="done column">
          {data.bugs.map((bug, i) => (
            <Bug key={i} data={bug} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Board;

