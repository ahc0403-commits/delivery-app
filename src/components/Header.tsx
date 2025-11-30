import { MapPin, Bell } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white shadow-sm px-5 py-4 sticky top-0 z-50">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-primary" />
          <div>
            <div className="text-[11px] text-muted-foreground">여기로 보내드릴게요</div>
            <div className="text-[13px]">District 1, HCMC</div>
          </div>
        </div>
        <button className="relative p-2 hover:bg-secondary rounded-full transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
        </button>
      </div>
      <h1 className="text-[28px] tracking-tight">
        Deliberry <span className="text-primary">Nara</span>
      </h1>
    </header>
  );
}
