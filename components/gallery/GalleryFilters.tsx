
import { LayoutGrid, BookOpen, Trophy, Palette, CalendarDays } from "lucide-react";
import type { GalleryCategory } from "@/content/gallery";

export type GalleryFilter = "All" | GalleryCategory;

interface GalleryFiltersProps {
  activeFilter: GalleryFilter;
  onFilterChange: (filter: GalleryFilter) => void;
}

const filters: {
  label: GalleryFilter;
  icon: React.ElementType;
}[] = [
  { label: "All", icon: LayoutGrid },
  { label: "Classroom", icon: BookOpen },
  { label: "Sports", icon: Trophy },
  { label: "Activities", icon: Palette },
  { label: "Events", icon: CalendarDays },
];

export default function GalleryFilters({
  activeFilter,
  onFilterChange,
}: GalleryFiltersProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {filters.map((filter) => {
        const Icon = filter.icon;
        const isActive = activeFilter === filter.label;

        return (
          <button
            key={filter.label}
            type="button"
            onClick={() => onFilterChange(filter.label)}
            className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-all duration-300 ${
              isActive
                ? "bg-[#102B50] text-white shadow-lg shadow-[#102B50]/20"
                : "border border-slate-200 bg-white text-slate-600 hover:border-[#D5A63C] hover:text-[#102B50]"
            }`}
          >
            <Icon size={16} />
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
