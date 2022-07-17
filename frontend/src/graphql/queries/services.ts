import { gql } from "@apollo/client";

export default gql`
  query services {
    services {
      id
      title
    }
  }
`;
