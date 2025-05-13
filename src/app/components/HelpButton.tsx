import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { HelpCircle } from "lucide-react";

export default function HelpButton() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="text-secondary-foreground rounded-full w-10 h-10 cursor-pointer"
        >
          <HelpCircle className="h-5 w-5 text-primary" />
        </Button>
      </PopoverTrigger>
      <PopoverContent></PopoverContent>
    </Popover>
  );
}
