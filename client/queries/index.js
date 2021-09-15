import { gql } from '@apollo/client';

export const GET_ALL_BUGS = gql`
  query {
    bugs {
      title
      description
    }
  }
`;
