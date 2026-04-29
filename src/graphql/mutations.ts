import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      username
      email
      isAdmin
      accessToken
    }
  }
`;

export const CREATE_ARTIST = gql`
  mutation CreateArtist($name: String!) {
    createArtist(name: $name) {
      id
      name
    }
  }
`;

export const CREATE_PRINT_FORMAT = gql`
  mutation CreatePrintFormat($name: String!, $description: String) {
    createPrintFormat(name: $name, description: $description) {
      id
      name
      description
    }
  }
`;

export const CREATE_PUBLISHER = gql`
  mutation CreatePublisher($name: String!) {
    createPublisher(name: $name) {
      id
      name
    }
  }
`;
