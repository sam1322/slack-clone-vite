import { useLocation } from "@tanstack/react-router";
import { SidebarButton } from "./SidebarButton";
import WorkspaceSwitcher from "./WorkspaceSwitcher";
import { Bell, Home, MessagesSquare, MoreHorizontal } from "lucide-react";
import { UserButton } from "../auth/UserButton";

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <aside className="w-[70px] h-full bg-[#481349] flex flex-col gap-y-4 items-center pt-[9px] pb-4">
      <WorkspaceSwitcher />
      <SidebarButton
        icon={Home}
        label="Home"
        isActive={pathname.includes("/workspace")}
      />
      <SidebarButton icon={MessagesSquare} label="DMs" />
      <SidebarButton icon={Bell} label="Activity" />
      <SidebarButton icon={MoreHorizontal} label="More" />
      <div className="flex flex-col items-center justify-center gap-y-1 mt-auto">
        <UserButton />
      </div>
    </aside>
  );
};

export default Sidebar;
