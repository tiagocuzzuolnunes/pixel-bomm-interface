import AvatarButton from "./AvatarButton";
import HelpButton from "./HelpButton";
import NotificationButton from "./NotificationButton";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Header() {
  return (
    <header className="sticky top-0 bg-white z-100">
      <div className="flex justify-between p-4 items-center h-18 w-full border-b-1">
        <SidebarTrigger />
        <div className="flex gap-3">
          <HelpButton />
          <NotificationButton />
          <AvatarButton />
        </div>
      </div>
    </header>
  );
}
