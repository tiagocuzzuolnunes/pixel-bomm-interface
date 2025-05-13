import PaginationComponent from "./PaginationComponent";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export default function PageContentFooter() {
  return (
    <div className="flex items-center mt-5">
      <p className="text-muted-foreground whitespace-nowrap text-sm">
        5 de 294 itens
      </p>
      <PaginationComponent />
      <div className="flex flex-nowrap items-center gap-2 whitespace-nowrap text-muted-foreground text-sm">
        Itens por página{" "}
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center py-2 px-3 rounded-lg gap-4 border-1">
            <span className="text-primary">10</span>{" "}
            <ChevronDown className="size-2" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>10</DropdownMenuItem>
            <DropdownMenuItem>25</DropdownMenuItem>
            <DropdownMenuItem>50</DropdownMenuItem>
            <DropdownMenuItem>100</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
