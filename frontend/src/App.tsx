import { useServicesQuery, useCreateServiceMutation, useDeleteServiceMutation } from "./graphql/generated";
import { useState } from "react";

function App() {
  const { data: { services = [] } = {} } = useServicesQuery();
  const [createService] = useCreateServiceMutation({ refetchQueries: ["services"] });
  const [title, setTitle] = useState("");
  const [deleteService] = useDeleteServiceMutation({ refetchQueries: ["services"] });

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
        <div key={service.id}>
          <div>{service.title}</div>
          <button onClick={() => { deleteService({ variables: { id: service.id }})}}>
            削除
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
