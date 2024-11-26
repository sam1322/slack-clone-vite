import { useEffect, useState } from "react";

import { CreateWorkspaceModal } from "./CreateWorkspaceModal";
// import { CreateWorkspaceModal } from "@/features/workspaces/components/create-workspace-modal";

export const Modals = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* for creating workspaces */}
      <CreateWorkspaceModal />

      {/* for creating channels */}
      {/* <CreateChannelModal /> */}
    </>
  );
};
