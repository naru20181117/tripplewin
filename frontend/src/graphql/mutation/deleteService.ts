import { gql } from "@apollo/client";

export default gql`
  mutation deleteService($id: ID!) {
    deleteService(input: { id: $id }) {
      id
    }
  }
`;
