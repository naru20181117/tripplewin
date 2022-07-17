import { useServicesQuery } from "./graphql/generated";

function App() {
  const { data: { services = [] } = {} } = useServicesQuery();

  return (
    <div>
      {services.map((service) => (
        <div key={service.id}>{service.title}</div>
      ))}
    </div>
  );
}

export default App;
