import { gql } from '@apollo/client';


export const GET_USERS = gql`
  query users($search: SearchFilter!) { 
    users(search: $search, roleID: null) {
      users {
        id
        firstName
        lastName
        email
        phone
        isFinal
        isArchived
        createdAt
      }
      total
    }
  }
`;
