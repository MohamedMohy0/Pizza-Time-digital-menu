import { MapPin, Phone } from "lucide-react";
import { branches } from "@/data/menuData";
import logo from "@/assets/logo.jpg";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between py-3">
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-primary" />
          <a href="tel:15233" className="text-sm font-bold text-primary font-display">15233</a>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg font-extrabold text-foreground hidden sm:inline font-display">Pizza Time</span>
          <img src={logo} alt="Pizza Time Logo" className="h-10 w-10 rounded-full object-cover" />
        </div>
      </div>
      {/* Nav */}
      <nav className="container flex gap-4 justify-center pb-2 text-xs font-bold overflow-x-auto">
        <a href="#menu" className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">المنيو</a>
        <a href="#offers" className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">العروض</a>
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">عن المطعم</a>
        <a href="#branches" className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">الفروع</a>
      </nav>
    </header>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 text-center">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="relative container">
        <img src={logo} alt="Pizza Time" className="mx-auto h-28 w-28 sm:h-36 sm:w-36 rounded-full object-cover shadow-lg border-4 border-secondary" />
        <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold text-foreground font-display">
          Pizza <span className="text-primary">Time</span>
        </h1>
        <p className="mt-2 text-secondary-foreground font-bold text-lg">Everytime & All Time</p>
        <p className="mt-4 text-muted-foreground max-w-md mx-auto text-sm leading-relaxed">
          استمتع بأشهى البيتزا الطازجة المصنوعة بحب من أجود المكونات. بنقدملك تجربة طعم لا تُنسى في كل قطعة!
        </p>
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 text-primary" />
          <span>8 فروع في القاهرة الكبرى والمنصورة</span>
        </div>
        <a
          href="#menu"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-bold text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
        >
          اطلع على المنيو
        </a>
      </div>
    </section>
  );
}

export function BranchesSection() {
  return (
    <section id="branches" className="py-12 scroll-mt-20">
      <div className="container">
        <h2 className="text-2xl font-extrabold text-center text-foreground mb-8">
          فروعنا <span className="text-primary font-display">Branches</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
          {branches.map((b) => (
            <div key={b} className="flex items-center justify-center gap-2 rounded-lg bg-card border border-border p-3 text-center">
              <MapPin className="h-4 w-4 text-primary shrink-0" />
              <span className="text-sm font-bold text-foreground">{b}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2">
            <Phone className="h-4 w-4 text-primary-foreground" />
            <a href="tel:15233" className="text-lg font-bold text-primary-foreground font-display">15233</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-12 scroll-mt-20 bg-muted/50">
      <div className="container max-w-2xl text-center">
        <h2 className="text-2xl font-extrabold text-foreground mb-4">
          عن المطعم <span className="text-primary font-display">About Us</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed text-sm">
          بريموس بيتزا هو وجهتك المفضلة لأشهى البيتزا في مصر. نقدم لك تشكيلة واسعة من البيتزا بأنواع العجائن المختلفة
          (كلاسيك - استافت كراست - ثن - بان) مع مكونات طازجة وأجبان فاخرة. سواء كنت من عشاق اللحوم أو الفراخ أو الجبن،
          عندنا اللي يناسبك. بالإضافة للباستا والمقبلات والحلويات اللذيذة. 8 فروع تخدمك في أنحاء القاهرة الكبرى والمنصورة.
        </p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[
            { icon: "🍕", label: "بيتزا طازجة", value: "+30 نوع" },
            { icon: "🏪", label: "فروع", value: "8 فروع" },
            { icon: "🧑‍🍳", label: "4 أنواع عجين", value: "كلاسيك - استافت - ثن - بان" },
            { icon: "⭐", label: "خدمة مميزة", value: "كل يوم" },
          ].map((s) => (
            <div key={s.label} className="rounded-lg bg-card border border-border p-3">
              <span className="text-2xl">{s.icon}</span>
              <p className="text-xs font-bold text-foreground mt-1">{s.label}</p>
              <p className="text-[10px] text-muted-foreground">{s.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container text-center">
        <img src={logo} alt="Primos Pizza" className="mx-auto h-12 w-12 rounded-full object-cover mb-3" />
        <p className="font-display text-lg font-bold">Primos Pizza</p>
        <p className="text-xs text-background/60 mt-1">Everytime & All Time</p>
        <div className="mt-3 flex items-center justify-center gap-2">
          <Phone className="h-3 w-3" />
          <a href="tel:15233" className="text-sm font-bold">15233</a>
        </div>
        <p className="text-xs text-background/40 mt-4">© 2026 Primos Pizza. جميع الحقوق محفوظة</p>
      </div>
    </footer>
  );
}
