import { gql } from "@apollo/client";

export default gql`
  mutation updateService($id: ID!, $params: ServiceAttributes!) {
    updateService(input: { id: $id, params: $params }) {
      service {
        id
        title
      }
    }
  }
`;
