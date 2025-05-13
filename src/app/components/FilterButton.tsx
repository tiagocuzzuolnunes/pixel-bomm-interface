import { Button } from "@/components/ui/button";
import { ListFilter } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
export default function FilterButton() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="text-secondary-foreground rounded-full w-10 h-10 cursor-pointer"
        >
          <ListFilter className="h-5 w-5 text-primary" />
        </Button>
      </PopoverTrigger>
      <PopoverContent></PopoverContent>
    </Popover>
  );
}
