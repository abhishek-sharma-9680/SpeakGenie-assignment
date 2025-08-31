import React, { useState } from "react";
import { motion } from "framer-motion";
import FreeTrialModal from "./components/FreeTrialModal";
import {
  CheckCircle2,
  XCircle,
  Sparkles,
  Star,
  ShieldCheck,
  Baby,
  GraduationCap,
  Users,
  PhoneCall,
  Mail,
} from "lucide-react";

// Utility
const Section = ({ id, className = "", children }) => (
  <section id={id} className={`max-w-6xl mx-auto px-4 md:px-6 ${className}`}>
    {children}
  </section>
);

const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl shadow-lg bg-white ${className}`}>{children}</div>
);

const Reveal = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, ease: "easeOut", delay }}
  >
    {children}
  </motion.div>
);

function Header({ onOpen }) {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <Section className="flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-400" />
          <span className="font-bold text-lg tracking-tight">TopMindCare</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#why" className="hover:text-slate-900">Why Us</a>
          <a href="#programs" className="hover:text-slate-900">Programs</a>
          <a href="#pricing" className="hover:text-slate-900">Pricing</a>
          <a href="#faq" className="hover:text-slate-900">FAQ</a>
        </nav>
        <button
          onClick={onOpen}
          className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 active:scale-[.99]"
        >
          <Sparkles className="h-4 w-4"/>
          Start Free Trial
        </button>
      </Section>
    </header>
  );
}

function Hero({ onOpen }) {
  return (
    <Section className="pt-10 md:pt-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <Reveal>
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Mindfulness & Learning programs built for kids, loved by parents
            </h1>
            <p className="mt-4 text-slate-600 max-w-prose">
              Playful meditation, emotion skills and kindness—delivered in bite-sized, age‑appropriate sessions.
            </p>
            <div className="mt-6 flex gap-3">
              <button
                onClick={onOpen}
                className="rounded-2xl px-5 py-3 font-semibold bg-indigo-600 text-white hover:bg-indigo-500"
              >
                Start Free Trial
              </button>
              <a href="#programs" className="rounded-2xl px-5 py-3 font-semibold border border-slate-300 hover:bg-slate-50">
                Explore Programs
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <Card className="overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1600&auto=format&fit=crop"
              alt="Happy kid meditating"
              loading="lazy"
              className="w-full h-72 md:h-[420px] object-cover"
            />
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}

function WhyUs() {
  const items = [
    {
      title: "School Readiness",
      text: "Focus, listening and kindness activities strengthen early classroom skills.",
      icon: <GraduationCap className="h-5 w-5" />,
    },
    {
      title: "Tools for Big Feelings",
      text: "Calm-down breaths and feelings check-ins kids actually enjoy.",
      icon: <ShieldCheck className="h-5 w-5" />,
    },
    {
      title: "Active + Creative",
      text: "Movement, songs and art keep bodies moving and imaginations bright.",
      icon: <Baby className="h-5 w-5" />,
    },
    {
      title: "Parents & Teachers",
      text: "Tiny, ready-to-use routines for home and classroom moments.",
      icon: <Users className="h-5 w-5" />,
    },
  ];

  return (
    <Section id="why" className="pt-16">
      <Reveal>
        <h2 className="text-2xl md:text-3xl font-bold">Why Mindery Kids?</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">
          Evidence‑informed practices designed with educators and child psychologists, delivered playfully.
        </p>
      </Reveal>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it, idx) => (
          <Reveal key={it.title} delay={idx * 0.05}>
            <Card className="p-5">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600">{it.icon}</div>
                <h3 className="font-semibold">{it.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600">{it.text}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Programs() {
  const programs = [
    {
      title: "Little Explorers (4–6)",
      text: "Play-based mindfulness, listening games and calm bodies time.",
      image:
        "https://images.unsplash.com/photo-1511185307590-3c29c112f9c7?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Brave Thinkers (7–10)",
      text: "Confidence, gratitude journals and mindful movement adventures.",
      image:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Calm & Curious (11–14)",
      text: "Focus training, peer kindness projects and stress reset tools.",
      image:
        "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  return (
    <Section id="programs" className="pt-16">
      <Reveal>
        <h2 className="text-2xl md:text-3xl font-bold">Programs for Every Age</h2>
      </Reveal>
      <div className="mt-8 space-y-10">
        {programs.map((p, i) => (
          <Reveal key={p.title}>
            <div className={`grid md:grid-cols-2 gap-8 items-center ${
              i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
            }`}>
              <Card className="overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-64 md:h-80 object-cover"
                />
              </Card>
              <div>
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-slate-600">{p.text}</p>
                <div className="mt-4 flex flex-wrap gap-3 text-sm">
                  <a className="rounded-xl px-3 py-2 bg-slate-900 text-white" href="#pricing">See Plans</a>
                  <a className="rounded-xl px-3 py-2 border border-slate-300" href="#faq">Know More</a>
                  <a className="rounded-xl px-3 py-2 border border-slate-300" href="#parent">Parent Guide</a>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function BuiltForKids() {
  const features = [
    { title: "Ad-Free & Safe", text: "No ads, ever. Kid-first experience.", icon: <ShieldCheck className="h-5 w-5"/> },
    { title: "Research‑led Methods", text: "Short, playful, age‑right sessions.", icon: <Sparkles className="h-5 w-5"/> },
    { title: "Offline Access", text: "Download sessions for on‑the‑go.", icon: <PhoneCall className="h-5 w-5"/> },
    { title: "Simple Routines", text: "1–5 min practices fit any day.", icon: <Star className="h-5 w-5"/> },
    { title: "Classroom Friendly", text: "Ready-to-use teacher packs.", icon: <Users className="h-5 w-5"/> },
    { title: "Multi‑Child Friendly", text: "Profiles and gentle reminders.", icon: <Baby className="h-5 w-5"/> },
  ];

  return (
    <Section className="pt-16">
      <Reveal>
        <h2 className="text-2xl md:text-3xl font-bold">Built for Kids, Loved by Parents</h2>
      </Reveal>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.04}>
            <Card className="p-5">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600">{f.icon}</div>
                <h3 className="font-semibold">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600">{f.text}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Compare() {
  const rows = [
    ["Age‑specific content", true, false],
    ["Kid‑safe design", true, false],
    ["Offline access", true, true],
    ["Parent resources", true, false],
    ["No ads / trackers", true, false],
  ];

  return (
    <Section className="pt-16">
      <Reveal>
        <h3 className="font-semibold text-slate-700">Why Choose Mindery Kids Over Others?</h3>
      </Reveal>
      <Card className="mt-4 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="text-left p-3">Feature</th>
              <th className="p-3">Mindery</th>
              <th className="p-3">Other Apps</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r[0]} className={i % 2 ? "bg-white" : "bg-slate-50/50"}>
                <td className="p-3 font-medium">{r[0]}</td>
                <td className="p-3 text-center">{r[1] ? <CheckCircle2 className="inline h-5 w-5 text-emerald-500"/> : <XCircle className="inline h-5 w-5 text-rose-500"/>}</td>
                <td className="p-3 text-center">{r[2] ? <CheckCircle2 className="inline h-5 w-5 text-emerald-500"/> : <XCircle className="inline h-5 w-5 text-rose-500"/>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </Section>
  );
}

function Pricing({ onOpen }) {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      perks: ["5 intro sessions", "1 profile", "Basic routines"],
      cta: "Try Now",
    },
    {
      name: "Premium",
      price: "₹299/mo",
      perks: ["All programs", "3 profiles", "Offline access"],
      cta: "Start Free Trial",
      highlight: true,
    },
    {
      name: "Family",
      price: "₹499/mo",
      perks: ["All programs", "6 profiles", "Parent & Teacher hub"],
      cta: "Start Free Trial",
    },
  ];

  return (
    <Section id="pricing" className="pt-16">
      <Reveal>
        <h2 className="text-2xl md:text-3xl font-bold text-center">Choose Your Plan</h2>
        <p className="mt-2 text-center text-slate-600">Start with a 7‑day free trial. Cancel anytime.</p>
      </Reveal>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {plans.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.05}>
            <Card className={`p-6 flex flex-col ${p.highlight ? "ring-2 ring-indigo-500" : ""}`}>
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <div className="mt-2 text-3xl font-extrabold">{p.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" /> {perk}
                  </li>
                ))}
              </ul>
              <button
                onClick={onOpen}
                className={`mt-6 rounded-2xl px-4 py-2 font-semibold ${
                  p.highlight
                    ? "bg-indigo-600 text-white hover:bg-indigo-500"
                    : "border border-slate-300 hover:bg-slate-50"
                }`}
              >
                {p.cta}
              </button>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ParentTeacherHub() {
  return (
    <Section id="parent" className="pt-16">
      <Reveal>
        <Card className="p-6 bg-indigo-50/60">
          <h3 className="font-semibold">Parent & Teacher Hub</h3>
          <p className="mt-2 text-slate-700 max-w-3xl">
            Bite‑size lessons, printables and classroom packs to make mindfulness a simple daily habit.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <a className="rounded-xl px-3 py-2 bg-slate-900 text-white" href="#">Download Starter Kit (PDF)</a>
            <a className="rounded-xl px-3 py-2 border border-slate-300" href="#">Tiny Calm Poster</a>
            <a className="rounded-xl px-3 py-2 border border-slate-300" href="#">Classroom Tools</a>
          </div>
        </Card>
      </Reveal>
    </Section>
  );
}

function Testimonials() {
  const quotes = [
    {
      name: "Anita, Parent",
      text: "My 7‑year‑old asks for the ‘rainbow breath’ every morning. Huge change in calmness!",
    },
    {
      name: "Ravi, Teacher",
      text: "Short and sweet. Perfect for circle time and transitions—kids love it.",
    },
    {
      name: "Megha, Parent",
      text: "We’ve tried many apps—this is the first one that sticks and feels joyful.",
    },
  ];

  return (
    <Section className="pt-16">
      <Reveal>
        <h2 className="text-2xl md:text-3xl font-bold">What Families Say</h2>
      </Reveal>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {quotes.map((q, i) => (
          <Reveal key={q.name} delay={i * 0.05}>
            <Card className="p-5">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mt-3 text-slate-700">{q.text}</p>
              <p className="mt-2 text-sm text-slate-500">— {q.name}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function FAQ() {
  const faqs = [
    { q: "What ages can use this?", a: "Programs span 4–14 years with age‑right activities." },
    { q: "How long are sessions?", a: "1–5 minutes. Perfect for mornings, class transitions or bedtime." },
    { q: "Can we cancel anytime?", a: "Yes. Manage your plan from settings; trial reminders included." },
  ];

  return (
    <Section id="faq" className="pt-16">
      <Reveal>
        <h2 className="text-2xl md:text-3xl font-bold">Frequently Asked Questions</h2>
      </Reveal>
      <div className="mt-6 space-y-4">
        {faqs.map((f, i) => (
          <Reveal key={f.q} delay={i * 0.04}>
            <Card className="p-5">
              <details>
                <summary className="cursor-pointer font-medium">{f.q}</summary>
                <p className="mt-2 text-slate-600">{f.a}</p>
              </details>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function CTA({ onOpen }) {
  return (
    <Section className="pt-16">
      <Reveal>
        <Card className="p-6 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Start Your Child’s Mindfulness Journey</h3>
            <p className="text-slate-600 mt-1">7‑day free trial • Cancel anytime</p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-3">
            <button onClick={onOpen} className="rounded-2xl px-4 py-2 bg-indigo-600 text-white font-semibold">Start Free Trial</button>
            <a href="#programs" className="rounded-2xl px-4 py-2 border border-slate-300 font-semibold">Browse Programs</a>
          </div>
        </Card>
      </Reveal>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="mt-20 py-12 text-sm text-slate-500">
      <Section>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-400" />
            <span className="font-bold text-slate-700">TopMindCare</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center md:text-left">
            <a href="#why">Why Us</a>
            <a href="#programs">Programs</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </div>
          <p>© {new Date().getFullYear()} TopMindCare. All rights reserved.</p>
        </div>
      </Section>
    </footer>
  );
}



export default function TopMindCareLanding() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Header onOpen={() => setOpen(true)} />
      <main className="pb-20">
        <Hero onOpen={() => setOpen(true)} />
        <WhyUs />
        <Programs />
        <BuiltForKids />
        <Compare />
        <Pricing onOpen={() => setOpen(true)} />
        <ParentTeacherHub />
        <Testimonials />
        <FAQ />
        <CTA onOpen={() => setOpen(true)} />
      </main>
      <Footer />
      <FreeTrialModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
