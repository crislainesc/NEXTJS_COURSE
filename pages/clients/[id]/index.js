import { useRouter } from "next/router";

function ClientProjectPage() {
  const router = useRouter();

  function loadProjectHandler() {
    router.push({
      pathname: "clients/[id]/[clientProjectId]",
      query: { id: "max", clientProjectId: "projecta" },
    });
  }

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectPage;
