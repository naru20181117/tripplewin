import { gql } from "@apollo/client";

export default gql`
  mutation createService($params: ServiceAttributes!) {
    createService(input: { params: $params }) {
      service {
        id
        title
      }
    }
  }
`;
