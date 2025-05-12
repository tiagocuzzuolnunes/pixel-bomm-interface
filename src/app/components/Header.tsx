import AvatarButton from "./AvatarButton";
import HelpButton from "./HelpButton";
import NotificationButton from "./NotificationButton";
// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
export default function Header() {
  return (
    // <SidebarProvider>
    <header className="flex justify-end items-center h-18 w-full">
      {/* <SidebarTrigger /> */}
      <HelpButton />
      <NotificationButton />
      <AvatarButton />
    </header>
    // </SidebarProvider>
  );
}
