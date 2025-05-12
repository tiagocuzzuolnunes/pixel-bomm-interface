import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function HelpButton() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
