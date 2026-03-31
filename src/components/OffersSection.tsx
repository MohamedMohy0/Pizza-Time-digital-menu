import { offers } from "@/data/menuData";
import { Flame } from "lucide-react";

export default function OffersSection() {
  return (
    <section id="offers" className="py-12 scroll-mt-20">
      <div className="container">
        <h2 className="text-2xl font-extrabold text-center text-foreground mb-2">
          العروض الحالية <span className="text-primary font-display">Offers</span>
        </h2>
        <p className="text-center text-muted-foreground text-sm mb-8">عروض حصرية لفترة محدودة!</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="relative overflow-hidden rounded-xl border-2 border-primary/20 bg-card p-5 hover:border-primary/50 transition-colors"
            >
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 rounded-bl-lg text-xs font-bold flex items-center gap-1">
                <Flame className="h-3 w-3" />
                عرض
              </div>
              <div className="text-right mt-4">
                <h3 className="text-lg font-extrabold text-foreground">{offer.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{offer.description}</p>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{offer.items}</p>
              </div>
              <div className="flex items-center justify-end gap-3 mt-4">
                <span className="text-sm text-muted-foreground line-through">{offer.originalPrice} جنيه</span>
                <span className="inline-flex items-center rounded-lg bg-secondary px-4 py-1.5 text-lg font-extrabold text-secondary-foreground">
                  {offer.offerPrice} جنيه
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
