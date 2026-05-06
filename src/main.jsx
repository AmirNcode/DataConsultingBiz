import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CalendarCheck,
  ChartNoAxesCombined,
  Check,
  ChevronRight,
  ClipboardList,
  Gem,
  HeartPulse,
  LineChart,
  Menu,
  PackageSearch,
  Pill,
  Repeat2,
  Rocket,
  Scissors,
  ShoppingBag,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import "./styles.css";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "How It Works", href: "#dashboard" },
  { label: "Contact", href: "#contact" },
];

const dashboardThemes = {
  pharmacy: {
    shell: "bg-gradient-to-br from-blue-950/92 via-slate-900/92 to-red-900/82",
    tab: "bg-gradient-to-r from-blue-100 to-red-100 text-slate-950",
    icon: "bg-gradient-to-br from-blue-100 to-red-100 text-blue-800",
    card: "bg-blue-50/80",
    trend: "text-blue-700",
    bar: "from-blue-400 via-white/70 to-red-300",
    panel: "bg-blue-900/22",
    insight: "bg-white/[0.10]",
    spark: "text-red-100",
  },
  beauty: {
    shell: "bg-gradient-to-br from-orange-950/88 via-amber-900/82 to-yellow-600/62",
    tab: "bg-gradient-to-r from-yellow-100 to-orange-200 text-slate-950",
    icon: "bg-gradient-to-br from-yellow-100 to-orange-200 text-orange-800",
    card: "bg-orange-50/85",
    trend: "text-orange-700",
    bar: "from-orange-500 via-amber-300 to-yellow-100",
    panel: "bg-orange-900/20",
    insight: "bg-white/[0.12]",
    spark: "text-yellow-100",
  },
  retail: {
    shell: "bg-gradient-to-br from-black via-zinc-900 to-zinc-700",
    tab: "bg-white text-zinc-950",
    icon: "bg-zinc-100 text-zinc-950",
    card: "bg-zinc-50",
    trend: "text-zinc-800",
    bar: "from-zinc-900 via-zinc-400 to-white",
    panel: "bg-white/[0.08]",
    insight: "bg-white/[0.10]",
    spark: "text-white",
  },
};

const dashboardProfiles = {
  pharmacy: {
    label: "Pharmacy",
    icon: Pill,
    accent: "teal",
    kpis: [
      { label: "Refill retention", value: 78, suffix: "%", trend: "+8% vs last month" },
      { label: "Active patients", value: 1240, suffix: "", trend: "+96 this quarter" },
      { label: "Revenue by category", value: 42, suffix: "% Rx", trend: "Front-shop growth flagged" },
      { label: "Inventory movement", value: 31, suffix: " days", trend: "Slow movers down 12%" },
    ],
    insights: [
      "Refill reminders are strongest for chronic care patients aged 45+.",
      "High-margin OTC categories are under-promoted on weekdays.",
      "Three slow-moving product groups are tying up avoidable cash.",
    ],
  },
  beauty: {
    label: "Beauty",
    icon: Scissors,
    accent: "rose",
    kpis: [
      { label: "Rebooking rate", value: 64, suffix: "%", trend: "+11% after follow-ups" },
      { label: "Client retention", value: 71, suffix: "%", trend: "Strongest in skincare" },
      { label: "Revenue by service", value: 38, suffix: "%", trend: "Facials leading growth" },
      { label: "No-show rate", value: 7, suffix: "%", trend: "-3% after reminders" },
    ],
    insights: [
      "First-time clients who rebook within 14 days spend 2.3x more over 90 days.",
      "Two service categories have high demand but low staff availability.",
      "Reminder timing is reducing no-shows for evening appointments.",
    ],
  },
  retail: {
    label: "Retail",
    icon: ShoppingBag,
    accent: "teal",
    kpis: [
      { label: "Repeat purchase rate", value: 36, suffix: "%", trend: "+6% from loyalty offers" },
      { label: "Top products", value: 18, suffix: "", trend: "Drive 54% of sales" },
      { label: "Inventory turnover", value: 5.2, suffix: "x", trend: "Healthy in best sellers" },
      { label: "Margin by category", value: 47, suffix: "%", trend: "Bundles lifting margin" },
    ],
    insights: [
      "Repeat buyers respond best to replenishment offers after 32 days.",
      "Top five products should be protected from stockouts before weekend peaks.",
      "Low-margin promo items are pulling down blended profitability.",
    ],
  },
};

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-hidden bg-[#FFFAF0] text-slate-950">
      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <main>
        <Hero />
        <ProblemSection />
        <IndustriesSection />
        <ServicesSection />
        <SampleDashboard />
        <PricingSection />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

function Header({ mobileOpen, setMobileOpen }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-[#FFFAF0]/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-2xl bg-gradient-to-br from-teal-600 to-sky-500 text-white shadow-lg shadow-teal-900/15">
            <ChartNoAxesCombined size={20} />
          </span>
          <span>
            <span className="block text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">GrowthLens</span>
            <span className="block text-xs font-medium text-slate-500">Retail & Wellness Intelligence</span>
          </span>
        </a>
        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-slate-950">
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden rounded-full bg-gradient-to-r from-teal-600 to-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-900/15 transition hover:-translate-y-0.5 hover:from-teal-700 hover:to-rose-400 lg:inline-flex"
        >
          Book a Discovery Call
        </a>
        <button
          aria-label="Open navigation"
          className="grid size-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-900 lg:hidden"
          onClick={() => setMobileOpen((value) => !value)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-slate-200 bg-[#FFFAF0] px-5 py-4 lg:hidden"
        >
          <div className="mx-auto grid max-w-7xl gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-hero-pattern pt-28">
      <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.24),transparent_55%)]" />
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-10 lg:px-8 lg:pb-24 lg:pt-20">
        <FadeIn className="relative z-10 max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-900/10 bg-white/75 px-4 py-2 text-sm font-semibold text-teal-800 shadow-sm">
            <Sparkles size={16} />
            Retail & Wellness Intelligence
          </div>
          <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] text-slate-950 sm:text-6xl lg:text-7xl">
            Most businesses have the data - they just don't know how to use it.
          </h1>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn-primary">
              Book a Discovery Call
              <ArrowRight size={18} />
            </a>
            <a href="#dashboard" className="btn-secondary">
              See How It Works
              <ChevronRight size={18} />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Counter({ to, suffix = "" }) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1400, bounce: 0 });
  const rounded = useTransform(spring, (latest) => {
    const decimals = Number.isInteger(to) ? 0 : 1;
    return latest.toLocaleString(undefined, {
      maximumFractionDigits: decimals,
      minimumFractionDigits: decimals,
    });
  });

  useEffect(() => {
    if (inView) motionValue.set(to);
  }, [inView, motionValue, to]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

function ProblemSection() {
  const problems = [
    {
      icon: ClipboardList,
      title: "Scattered reports",
      text: "POS systems, booking tools, Shopify, spreadsheets, and accounting platforms all tell a different part of the story.",
    },
    {
      icon: Users,
      title: "Retention is hard to see",
      text: "Owners know loyal customers matter, but repeat behaviour, lapsed customers, and rebooking patterns are rarely clear.",
    },
    {
      icon: Target,
      title: "Growth signals stay hidden",
      text: "Revenue is visible, while profitability, product movement, margin trends, and missed opportunities take more digging.",
    },
    {
      icon: CalendarCheck,
      title: "Reactive decisions",
      text: "Without a monthly insights rhythm, decisions are often made after problems show up instead of before growth is missed.",
    },
  ];

  return (
    <Section id="problem" eyebrow="The gap" title="Most small businesses have the data - they just do not have the time to use it.">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {problems.map((problem, index) => (
          <FadeIn key={problem.title} delay={index * 0.08}>
            <InfoCard icon={problem.icon} title={problem.title} text={problem.text} />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

function IndustriesSection() {
  const industries = [
    {
      icon: Pill,
      title: "Pharmacies",
      kpis: "Patient retention, refill behaviour, revenue trends, payer mix, inventory movement",
      insights: ["Which patients are likely to lapse", "Where refill reminders can lift retention", "Which front-shop categories deserve attention"],
    },
    {
      icon: HeartPulse,
      title: "Beauty & Wellness",
      kpis: "Rebooking rates, client retention, service revenue, staff performance, no-shows",
      insights: ["Which services drive repeat visits", "Where staff capacity is limiting revenue", "How no-shows affect monthly performance"],
    },
    {
      icon: PackageSearch,
      title: "Retail & E-commerce",
      kpis: "Repeat customers, product performance, inventory, margins, sales trends, marketing ROI",
      insights: ["Which products create loyal customers", "Where inventory is moving too slowly", "Which campaigns attract profitable buyers"],
    },
  ];

  return (
    <Section id="industries" eyebrow="Industries served" title="Built for customer-focused businesses">
      <div className="grid gap-5 lg:grid-cols-3">
        {industries.map((industry, index) => (
          <FadeIn key={industry.title} delay={index * 0.1}>
            <IndustryCard {...industry} />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

function IndustryCard({ icon: Icon, title, kpis, insights }) {
  return (
    <motion.article whileHover={{ y: -8 }} className="group h-full rounded-[2rem] border border-slate-200/80 bg-white p-6 shadow-soft transition hover:shadow-lift">
      <div className="flex items-start justify-between gap-4">
        <span className="grid size-14 place-items-center rounded-3xl bg-cyan-50 text-teal-700 transition group-hover:bg-teal-600 group-hover:text-white">
          <Icon size={24} />
        </span>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Focus</span>
      </div>
      <h3 className="mt-6 text-2xl font-bold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm font-semibold leading-6 text-teal-700">{kpis}</p>
      <div className="mt-6 rounded-3xl bg-[#FFF7ED] p-4">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Sample insights</p>
        <ul className="space-y-3">
          {insights.map((insight) => (
            <li key={insight} className="flex gap-3 text-sm leading-6 text-slate-650">
              <Check className="mt-0.5 shrink-0 text-teal-600" size={16} />
              {insight}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: BarChart3,
      title: "Dashboard Setup",
      text: "A clean view of the numbers that matter most, designed around how you actually run the business.",
    },
    {
      icon: LineChart,
      title: "Monthly Business Insights",
      text: "A concise monthly readout that turns performance changes into plain-language takeaways and next steps.",
    },
    {
      icon: Repeat2,
      title: "Customer & Retention Analysis",
      text: "Understand who comes back, who is slipping away, and what patterns can strengthen loyalty.",
    },
    {
      icon: Rocket,
      title: "Growth Opportunity Reporting",
      text: "Spot practical opportunities across products, services, staffing, inventory, campaigns, and margins.",
    },
  ];

  return (
    <Section id="services" eyebrow="Services" title="Analytics support without the complexity">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <FadeIn key={service.title} delay={index * 0.08}>
            <InfoCard icon={service.icon} title={service.title} text={service.text} />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

function SampleDashboard() {
  const [active, setActive] = useState("pharmacy");
  const profile = dashboardProfiles[active];
  const theme = dashboardThemes[active];
  const Icon = profile.icon;

  const chartBars = useMemo(() => {
    const values = {
      pharmacy: [52, 66, 58, 74, 81, 76],
      beauty: [38, 51, 64, 59, 72, 79],
      retail: [45, 48, 62, 70, 67, 84],
    };
    return values[active];
  }, [active]);

  return (
    <Section id="dashboard" eyebrow="How it works" title="See how monthly insights change by business type">
      <div className={`rounded-[2rem] p-4 shadow-2xl shadow-sky-950/20 transition-colors duration-500 sm:p-6 lg:p-8 ${theme.shell}`}>
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-100">Interactive preview</p>
            <h3 className="mt-2 text-2xl font-bold text-white">Select an industry to see the dashboard adapt</h3>
          </div>
          <div className="grid gap-2 rounded-full bg-white/[0.08] p-1 sm:inline-grid sm:grid-cols-3">
            {Object.entries(dashboardProfiles).map(([key, item]) => {
              const TabIcon = item.icon;
              return (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition ${
                    active === key ? dashboardThemes[key].tab : "text-slate-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <TabIcon size={16} />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="rounded-[1.6rem] bg-white/[0.92] p-5 backdrop-blur">
            <div className="mb-5 flex items-center gap-3">
              <span className={`grid size-12 place-items-center rounded-2xl ${theme.icon}`}>
                <Icon size={22} />
              </span>
              <div>
                <p className="text-sm font-bold text-slate-950">{profile.label} dashboard</p>
                <p className="text-xs text-slate-500">Sample KPIs and opportunities</p>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {profile.kpis.map((kpi) => (
                <div key={kpi.label} className={`rounded-3xl border border-slate-100 p-4 transition-colors duration-500 ${theme.card}`}>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{kpi.label}</p>
                  <div className="mt-2 text-2xl font-bold text-slate-950">
                    <Counter to={kpi.value} suffix={kpi.suffix} />
                  </div>
                  <p className={`mt-2 text-xs font-semibold ${theme.trend}`}>{kpi.trend}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={`rounded-[1.6rem] p-5 transition-colors duration-500 ${theme.panel}`}>
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-white">Trend view</p>
                <p className="text-xs text-slate-300">Six-month performance pattern</p>
              </div>
              <TrendingUp className="text-cyan-100" size={22} />
            </div>
            <div className="flex h-48 items-end gap-3 rounded-3xl bg-black/15 p-4">
              {chartBars.map((height, index) => (
                <motion.div
                  key={`${active}-${index}`}
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ delay: index * 0.04, duration: 0.55, ease: "easeOut" }}
                  className={`flex-1 rounded-t-2xl bg-gradient-to-t ${theme.bar}`}
                />
              ))}
            </div>
            <div className="mt-5 grid gap-3">
              {profile.insights.map((insight) => (
                <div key={insight} className={`flex gap-3 rounded-2xl p-3 text-sm leading-6 text-slate-100 ${theme.insight}`}>
                  <Sparkles className={`mt-0.5 shrink-0 ${theme.spark}`} size={16} />
                  {insight}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function PricingSection() {
  const packages = [
    {
      icon: BarChart3,
      name: "Starter Dashboard",
      line: "Starting from a focused monthly dashboard",
      text: "Monthly dashboard refresh, short written summary, and a clean view of your priority metrics.",
      features: ["Core KPI dashboard", "Monthly refresh", "Plain-language summary"],
    },
    {
      icon: TrendingUp,
      name: "Growth Insights",
      line: "Monthly support for owners who want momentum",
      text: "Dashboard plus a monthly insight review call to discuss what changed and what to do next.",
      features: ["Everything in Starter", "Monthly review call", "Retention and revenue opportunities"],
      featured: true,
    },
    {
      icon: Gem,
      name: "Premium Analytics Partner",
      line: "Custom monthly support",
      text: "Deeper analysis, recommendations, and ongoing support for teams ready to make insights part of operations.",
      features: ["Deeper analysis", "Recommendations", "Ongoing advisory support"],
    },
  ];

  return (
    <Section id="pricing" eyebrow="Packages" title="Start simple. Scale when you are ready.">
      <div className="grid gap-5 lg:grid-cols-3">
        {packages.map((plan, index) => (
          <FadeIn key={plan.name} delay={index * 0.1}>
            <PricingCard {...plan} />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

function PricingCard({ icon: Icon, name, line, text, features, featured }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      className={`relative h-full rounded-[2rem] p-6 shadow-soft ${
        featured ? "bg-[#102033] text-white ring-4 ring-cyan-100/70" : "border border-slate-200 bg-white text-slate-950"
      }`}
    >
      {featured && (
        <span className="absolute right-6 top-6 rounded-full bg-amber-200 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-950">
          Popular
        </span>
      )}
      <span className={`grid size-14 place-items-center rounded-3xl ${featured ? "bg-white/10 text-cyan-100" : "bg-cyan-50 text-teal-700"}`}>
        <Icon size={24} />
      </span>
      <h3 className="mt-6 text-2xl font-bold">{name}</h3>
      <p className={`mt-2 text-sm font-semibold ${featured ? "text-cyan-100" : "text-teal-700"}`}>{line}</p>
      <p className={`mt-4 leading-7 ${featured ? "text-slate-300" : "text-slate-600"}`}>{text}</p>
      <ul className="mt-6 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex gap-3 text-sm font-medium">
            <Check className={`mt-0.5 shrink-0 ${featured ? "text-cyan-100" : "text-teal-600"}`} size={17} />
            {feature}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

function FinalCta() {
  return (
    <section id="contact" className="px-5 py-20 lg:px-8 lg:py-28">
      <FadeIn className="mx-auto max-w-6xl overflow-hidden rounded-[2.2rem] bg-gradient-to-br from-[#102033] via-teal-900 to-sky-800 p-8 text-white shadow-2xl shadow-sky-950/20 sm:p-12 lg:p-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-100">Discovery call</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">Want to see what your business data is telling you?</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Book a short discovery call to understand what you are currently tracking, what is missing, and whether a dashboard could help.
            </p>
          </div>
          <a href="mailto:hello@growthlensanalytics.ca" className="btn-light">
            Book a Discovery Call
            <ArrowRight size={18} />
          </a>
        </div>
      </FadeIn>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/55 px-5 py-10 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-2xl bg-gradient-to-br from-teal-600 to-sky-500 text-white">
              <ChartNoAxesCombined size={20} />
            </span>
            <span className="font-bold text-slate-950">GrowthLens Analytics</span>
          </div>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
            Retail & Wellness Intelligence for small businesses that want clearer decisions, stronger retention, and smarter growth.
          </p>
          <a className="mt-3 inline-block text-sm font-semibold text-teal-700" href="mailto:hello@growthlensanalytics.ca">
            hello@growthlensanalytics.ca
          </a>
        </div>
        <div className="flex flex-wrap gap-4">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-semibold text-slate-600 transition hover:text-slate-950">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="mb-10 max-w-3xl">
          <p
            className={`font-bold uppercase text-teal-700 ${
              id === "problem" ? "text-2xl tracking-[0.18em] sm:text-3xl" : "text-sm tracking-[0.24em]"
            }`}
          >
            {eyebrow}
          </p>
          <h2 className="mt-3 text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">{title}</h2>
        </FadeIn>
        {children}
      </div>
    </section>
  );
}

function InfoCard({ icon: Icon, title, text }) {
  return (
    <motion.article whileHover={{ y: -6 }} className="h-full rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft transition hover:shadow-lift">
      <span className="grid size-12 place-items-center rounded-2xl bg-cyan-50 text-teal-700">
        <Icon size={22} />
      </span>
      <h3 className="mt-5 text-xl font-bold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
    </motion.article>
  );
}

function FadeIn({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
