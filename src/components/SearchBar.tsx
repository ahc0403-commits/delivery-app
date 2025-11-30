import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="px-5 py-4">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          placeholder="한식, 분짜, 치킨... / Tìm món ăn"
          className="w-full pl-12 pr-4 py-3 bg-white rounded-[12px] border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow"
        />
      </div>
    </div>
  );
}
