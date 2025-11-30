import { useState } from "react";

interface Category {
  id: string;
  labelKo: string;
  labelVi: string;
  emoji: string;
}

const categories: Category[] = [
  { id: "all", labelKo: "전체", labelVi: "Tất cả", emoji: "🍱" },
  { id: "korean", labelKo: "한식", labelVi: "Hàn Quốc", emoji: "🇰🇷" },
  { id: "vietnamese", labelKo: "베트남", labelVi: "Việt Nam", emoji: "🇻🇳" },
  { id: "bbq", labelKo: "구이", labelVi: "BBQ", emoji: "🥩" },
  { id: "noodles", labelKo: "면", labelVi: "Mì", emoji: "🍜" },
  { id: "chicken", labelKo: "치킨", labelVi: "Gà", emoji: "🍗" },
];

export function CategoryPills() {
  const [selected, setSelected] = useState("all");

  return (
    <div className="px-5 pb-4">
      <div className="flex gap-2 overflow-x-auto no-scrollbar">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelected(category.id)}
            className={`flex-shrink-0 px-4 py-2 rounded-[12px] transition-all ${
              selected === category.id
                ? "bg-primary text-white shadow-md"
                : "bg-white text-foreground hover:bg-accent"
            }`}
          >
            <span className="mr-1.5">{category.emoji}</span>
            <span className="text-[13px]">{category.labelKo}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
