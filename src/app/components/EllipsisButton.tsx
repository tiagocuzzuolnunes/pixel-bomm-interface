import { EllipsisVerticalIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EllipsisButton() {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="text-secondary-foreground rounded-full w-10 h-10 cursor-pointer"
    >
      <EllipsisVerticalIcon className="size-4" />
    </Button>
  );
}
