import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

export default function HelpButton() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Avatar className="w-10 h-10 cursor-pointer">
          <AvatarImage src="/image.png" />
          <AvatarFallback>PB</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent></PopoverContent>
    </Popover>
  );
}
