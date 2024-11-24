import Toolbar from "@/components/Toolbar";
import { Outlet } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_workspace")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="h-full">
      <Toolbar />
      <Outlet />
    </div>
  );
}
