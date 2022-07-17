import {
  useServicesQuery,
  useCreateServiceMutation,
  useDeleteServiceMutation,
  useUpdateServiceMutation
} from "./graphql/generated";
import { useState } from "react";

function App() {
  const { data: { services = [] } = {} } = useServicesQuery();
  const [createService] = useCreateServiceMutation({ refetchQueries: ["services"] });
  const [title, setTitle] = useState("");
  const [deleteService] = useDeleteServiceMutation({ refetchQueries: ["services"] });
  const [updateService] = useUpdateServiceMutation();

  return (
    <div style={{ width: "400px", margin: "40px auto" }}>
      <h1>サービス一覧</h1>
      <div style={{ display: "flex", gap: "10px", marginBottom: "40px" }}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <button
          onClick={() => {
            createService({ variables: { params: { title: title }}});
            setTitle("");
          }}
        >保存</button>
      </div>
      {services.map((service) => (
        <div
          key={service.id}
          style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
          <input value={service.title || ""}
            onChange={(e) =>
              updateService({
                variables: { id: service.id, params: { title: e.target.value }},
              })
              }
              />
          <button onClick={() => { deleteService({ variables: { id: service.id }})}}>
            削除
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
