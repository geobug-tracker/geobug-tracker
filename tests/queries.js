const { gql } = require('@apollo/client');

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

export const GET_BUG_BY_ID = gql`
  query {
    bug(id: 1) {
      id
      title
      description
      status
      priority
    }
  }
`;
