import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_workspace/workspace/$workspaceId")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>'Hello /_workspace/workspace/$workspaceId!'</div>;
}
