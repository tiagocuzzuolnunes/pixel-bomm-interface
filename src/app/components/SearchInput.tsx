import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import FilterButton from "./FilterButton";
export default function SearchInput() {
  return (
    <div className="flex flex-1 gap-3 justify-between">
      <div className="relative w-full">
        <Input type="search" placeholder="Buscar..." className="pl-8" />
        <Search className="absolute text-muted-foreground w-4 left-3 top-1/6" />
      </div>
      <FilterButton />
    </div>
  );
}
