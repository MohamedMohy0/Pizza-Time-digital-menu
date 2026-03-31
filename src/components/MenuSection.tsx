import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { menuData, type MenuCategory } from "@/data/menuData";

const MenuItemCard = ({ item }: { item: MenuCategory["items"][0] }) => (
  <div className="group rounded-lg border border-border bg-card p-4 transition-all hover:shadow-md hover:border-primary/30">
    <div className="flex items-start justify-between gap-3">
      <div className="flex-1 text-right">
        <h3 className="font-bold text-foreground text-base leading-tight">{item.nameAr}</h3>
        <p className="text-xs font-semibold text-muted-foreground mt-0.5">{item.nameEn}</p>
        {item.description && (
          <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{item.description}</p>
        )}
      </div>
    </div>
    <div className="flex items-center justify-end gap-2 mt-3 flex-wrap">
      {item.prices.map((p, i) => (
        <div key={i} className="flex items-center gap-1">
          {p.label && (
            <span className="text-[10px] font-bold text-muted-foreground">{p.label}</span>
          )}
          <span className="inline-flex items-center rounded-md bg-primary px-2.5 py-0.5 text-sm font-bold text-primary-foreground">
            {p.price}
          </span>
        </div>
      ))}
      <span className="text-[10px] text-muted-foreground">جنيه</span>
    </div>
  </div>
);

const CategorySection = ({ category }: { category: MenuCategory }) => (
  <section id={category.id} className="scroll-mt-24">
    <div className="flex items-center gap-3 mb-4 justify-end">
      <div className="text-right">
        <h2 className="text-xl font-extrabold text-foreground">{category.nameAr}</h2>
        <p className="text-sm font-bold text-primary">{category.nameEn}</p>
      </div>
      <span className="text-3xl">{category.icon}</span>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {category.items.map((item) => (
        <MenuItemCard key={item.id} item={item} />
      ))}
    </div>
  </section>
);

export default function MenuSection() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredData = useMemo(() => {
    const q = search.trim().toLowerCase();
    let data = menuData;

    if (activeCategory) {
      data = data.filter((c) => c.id === activeCategory);
    }

    if (!q) return data;

    return data
      .map((cat) => ({
        ...cat,
        items: cat.items.filter(
          (item) =>
            item.nameAr.toLowerCase().includes(q) ||
            item.nameEn.toLowerCase().includes(q) ||
            item.description?.toLowerCase().includes(q)
        ),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [search, activeCategory]);

  return (
    <div id="menu" className="py-12 scroll-mt-20">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-foreground">
          المنيو <span className="text-primary font-display">Menu</span>
        </h2>
        <p className="text-muted-foreground mt-1">الأسعار شاملة الضريبة</p>
      </div>

      {/* Search */}
      <div className="max-w-md mx-auto mb-6">
        <div className="relative">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="ابحث عن وجبتك المفضلة..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-input bg-card pr-10 pl-4 py-2.5 text-sm text-right placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
            dir="rtl"
          />
        </div>
      </div>

      {/* Category pills */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        <button
          onClick={() => setActiveCategory(null)}
          className={`rounded-full px-4 py-1.5 text-xs font-bold transition-colors ${
            !activeCategory
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:bg-primary/10"
          }`}
        >
          الكل
        </button>
        {menuData.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
            className={`rounded-full px-4 py-1.5 text-xs font-bold transition-colors ${
              activeCategory === cat.id
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-primary/10"
            }`}
          >
            {cat.icon} {cat.nameAr}
          </button>
        ))}
      </div>

      {/* Menu items */}
      <div className="space-y-10">
        {filteredData.length > 0 ? (
          filteredData.map((cat) => <CategorySection key={cat.id} category={cat} />)
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            <p className="text-lg">لا توجد نتائج</p>
            <p className="text-sm mt-1">جرب البحث بكلمة مختلفة</p>
          </div>
        )}
      </div>
    </div>
  );
}
