"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Copy, Menu, X, RotateCcw } from "lucide-react";
export function Navigation() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return (
    <header className="header wrap">
      <a href="/web/" className="brand" aria-label="Herick home">
        herick<span>✳</span>
      </a>
      <button
        ref={button}
        className="menu-button"
        aria-expanded={open}
        aria-controls="navigation"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close navigation" : "Open navigation"}
      >
        {open ? <X /> : <Menu />}
      </button>
      <nav
        id="navigation"
        className={open ? "navigation open" : "navigation"}
        aria-label="Main navigation"
      >
        {[
          ["Work", "work"],
          ["About", "about"],
          ["Play", "play"],
        ].map(([name, id]) => (
          <a key={id} href={`/web/#${id}`} onClick={() => setOpen(false)}>
            {name}
          </a>
        ))}
        <a
          className="nav-contact"
          href="/web/#contact"
          onClick={() => setOpen(false)}
        >
          Let’s talk <ArrowUpRight size={15} />
        </a>
      </nav>
    </header>
  );
}
export function CopyEmail({ email }: { email: string }) {
  const [status, setStatus] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  return (
    <>
      <button
        className="copy-button"
        aria-label="Copy email address"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(email);
            setStatus("Email copied");
          } catch {
            setStatus("Copy unavailable. Please use the email link.");
          }
          if (timer.current) clearTimeout(timer.current);
          timer.current = setTimeout(() => setStatus(""), 3500);
        }}
      >
        {status === "Email copied" ? <Check size={18} /> : <Copy size={18} />}
      </button>
      <span className="copy-status" role="status">
        {status}
      </span>
    </>
  );
}
export function RhythmLab() {
  const [taps, setTaps] = useState<number[]>([]);
  const tap = () =>
    setTaps((prev) => {
      const now = performance.now();
      return prev.length && now - prev[prev.length - 1] < 3000
        ? [...prev, now].slice(-9)
        : [now];
    });
  const bpm =
    taps.length > 1
      ? Math.round(
          (60000 * (taps.length - 1)) / (taps[taps.length - 1] - taps[0]),
        )
      : null;
  return (
    <div className="rhythm-lab">
      <div className="eyebrow">INTERACTIVE STUDY / 001</div>
      <div className="rhythm-number" aria-live="polite" aria-atomic="true">
        {bpm ?? "—"}
        <span>BPM</span>
      </div>
      <div className="beat-dots" aria-hidden="true">
        {[0, 1, 2, 3].map((i) => (
          <i
            key={i}
            className={
              taps.length > 0 && (taps.length - 1) % 4 === i ? "lit" : ""
            }
          />
        ))}
      </div>
      <button className="tap-button" onClick={tap}>
        Tap the rhythm <span>↗</span>
      </button>
      <div className="rhythm-bottom">
        <span>
          {taps.length ? "Keep a steady beat" : "Tap twice to find your tempo"}
        </span>
        <button aria-label="Reset tempo" onClick={() => setTaps([])}>
          <RotateCcw size={16} />
        </button>
      </div>
    </div>
  );
}
