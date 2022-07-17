import { useQuery, gql } from "@apollo/client";

const FETCH_SERVICES = gql`
  query {
    services {
      id
      title
    }
  }
`;

interface Service {
  id: string;
  title: string;
}

function App() {
  const { data: { services } = {} } = useQuery(FETCH_SERVICES);

  return (
    <div>
      {services.map((service: Service) => (
        <div key={service.id}>{service.title}</div>
      ))}
    </div>
  );
}

export default App;
