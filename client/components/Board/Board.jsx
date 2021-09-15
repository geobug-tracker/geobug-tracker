import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Column from './Column';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import './Board.scss';

export const GET_ALL_BUGS = gql`
  query {
    bugs {
      title
      description
      status
    }
  }
`;
const Board = () => {
  const { loading, error, data, refetch } = useQuery(GET_ALL_BUGS);

  if(loading) return <p>Loading...</p>
  if(error) return <p>An error occured!</p>
  
  return (
    <DndProvider backend={HTML5Backend}>
    <div className='board'>
      <div className='fields'>
        <Column data={data} columnName={"new"} title={"New"} />
      </div>
      <div className='fields'>
        <Column data={data} columnName={"todo"} title={"To Do"} />
      </div>
      <div className='fields'>
        <Column data={data} columnName={"in-progress"} title={"In-Progress"} />
      </div>
      <div className='fields'>
         <Column data={data} columnName={"review"} title={"Review"} />
      </div>
      <div className='fields'>
         <Column data={data} columnName={"done"} title={"Done"} />
      </div>
    </div>
    </DndProvider>
  )
}

export default Board;
