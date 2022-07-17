import { useServicesQuery, useCreateServiceMutation } from "./graphql/generated";
import { useState } from "react";

function App() {
  const { data: { services = [] } = {} } = useServicesQuery();
  const [createService] = useCreateServiceMutation({ refetchQueries: ["services"] });
  const [title, setTitle] = useState("");

  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button
        onClick={() => {
          createService({ variables: { params: { title: title }}});
          setTitle("");
        }}
      >保存</button>
      {services.map((service) => (
        <div key={service.id}>{service.title}</div>
      ))}
    </div>
  );
}

export default App;
