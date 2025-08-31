import React, { useState } from "react";
import { motion } from "framer-motion";

const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl shadow-lg bg-white ${className}`}>{children}</div>
);

export default function FreeTrialModal({ open, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    klass: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const valid =
    form.name &&
    /.+@.+\..+/.test(form.email) &&
    /^\+?\d{10,15}$/.test(form.phone) &&
    form.klass;

  const submit = (e) => {
    e.preventDefault();
    if (!valid) return;
    setSubmitted(true);
    console.log("Trial form:", form);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setForm({ name: "", email: "", phone: "", klass: "", message: "" });
      alert("Thanks! We'll contact you soon.");
    }, 500);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center p-4 bg-black/50"
      role="dialog"
      aria-modal="true"
    >
      <Card className="w-full max-w-lg p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Start Free Trial</h3>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-700">
            ✕
          </button>
        </div>
        <form onSubmit={submit} className="mt-4 grid grid-cols-1 gap-4">
          <label className="grid gap-1">
            <span className="text-sm font-medium">Name</span>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="h-10 rounded-xl border border-slate-300 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your full name"
            />
          </label>
          <label className="grid gap-1">
            <span className="text-sm font-medium">Email</span>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="h-10 rounded-xl border border-slate-300 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
            />
          </label>
          <label className="grid gap-1">
            <span className="text-sm font-medium">Phone Number</span>
            <input
              inputMode="numeric"
              pattern="^\+?\d{10,15}$"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="h-10 rounded-xl border border-slate-300 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="10–15 digits"
            />
          </label>
          <label className="grid gap-1">
            <span className="text-sm font-medium">Class</span>
            <select
              required
              value={form.klass}
              onChange={(e) => setForm({ ...form, klass: e.target.value })}
              className="h-10 rounded-xl border border-slate-300 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="" disabled>
                Select class
              </option>
              <option>Pre-K</option>
              <option>Class 1–2</option>
              <option>Class 3–5</option>
              <option>Class 6–8</option>
              <option>Class 9–10</option>
            </select>
          </label>
          <label className="grid gap-1">
            <span className="text-sm font-medium">Message</span>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Tell us about your child... (optional)"
            />
          </label>
          <button
            disabled={!valid || submitted}
            className="mt-2 rounded-2xl h-11 px-4 font-semibold bg-slate-900 text-white disabled:opacity-60"
          >
            {submitted ? "Submitting..." : "Start Free Trial"}
          </button>
        </form>
      </Card>
    </div>
  );
}
