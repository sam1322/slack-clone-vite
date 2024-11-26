import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Modals } from "@/components/modals/Modals";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      {/* <div>Hello "__root"!</div> */}
      <Outlet />
      <Modals/>
      <Toaster richColors theme="light" position="bottom-center" />

      {/* <TanStackRouterDevtools /> */}
    </React.Fragment>
  );
}
