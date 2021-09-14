import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Bug from "../Bug/Bug";

import "./Board.scss";

const Board = () => {

  const GET_ALL_BUGS = gql`
    query {
        bugs {
            title
            description
        }
    }
`
  const { loading, error, data } = useQuery(GET_ALL_BUGS);

  console.log(data);
  if(loading) return <p>Loading...</p>
  if(error) return <p>An error occured!</p>
  
  
  return (
    <div className='board'>
      <div className='fields'>
        <h4 className='title'>New</h4>
        <div className='new column'>
          {data.bugs.map(bug => <Bug data={bug} />)}
        </div>
      </div>
      <div className='fields'>
        <h4 className='title'>In-Progress</h4>
        <div className='inprogress column'>
          {/* Add filter for in-progress to the map */}
        {data.bugs.map(bug => <Bug data={bug} />)}
        </div>
      </div>
      <div className='fields'>
        <h4 className='title'>Review</h4>
        <div className='review column'>
          {/* Add filter for review to the map */}
        {data.bugs.map(bug => <Bug data={bug} />)}
        </div>
      </div>
      <div className='fields'>
        <h4 className='title'>Done</h4>
        <div className='done column'>
          {/* Add filter for done to the map */}
        {data.bugs.map(bug => <Bug data={bug} />)} 
        </div>
      </div>
    </div>
  )
}

export default Board;