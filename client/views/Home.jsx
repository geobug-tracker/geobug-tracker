import React from 'react';
import Board from '../components/Board/Board';
import { useQuery, gql } from '@apollo/client';
import Header from '../components/Header/Header';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export const GET_ALL_BUGS = gql`
  query {
    bugs {
      id
      title
      description
      status
      priority
    }
  }
`;

const Home = () => {
  const { loading, error, data, refetch } = useQuery(GET_ALL_BUGS);
  return (
    <DndProvider backend={HTML5Backend}>
      <Header refetch={refetch} />
      <Board loading={loading} data={data} error={error} refetch={refetch} />
    </DndProvider>
  );
};

export default Home;
