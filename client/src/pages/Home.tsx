import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Section } from '../components/Ui';

const cards = [
  [
    '01',
    'Business Focused',
    'Every solution starts from a real business goal, not a technology trend.',
  ],
  [
    '02',
    'Modern Technology',
    'We use proven, current tools to build maintainable and future-ready products.',
  ],
  [
    '03',
    'Scalable Solutions',
    'Architecture designed to grow with your users, operations and business needs.',
  ],
];

function HeroLogo() {
  return (
    <div className="relative flex min-h-[500px] w-full items-center justify-center">
      {/* Large background glow */}
      <div className="absolute h-[420px] w-[420px] rounded-full bg-accent/10 blur-[90px]" />

      {/* Secondary glow */}
      <div className="absolute h-[280px] w-[280px] rounded-full bg-cyan-400/5 blur-[70px]" />

      {/* Main logo container */}
      <div className="relative flex h-[450px] w-[450px] items-center justify-center">
        {/* Outer border */}
        <div className="absolute inset-2 rounded-[40px] border border-white/10 bg-white/[0.025] shadow-2xl backdrop-blur-sm" />

        {/* Inner border */}
        <div className="absolute inset-8 rounded-[30px] border border-accent/10" />

        {/* Decorative corner elements */}
        <span className="absolute right-12 top-12 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_15px_rgba(45,212,191,0.8)]" />

        <span className="absolute bottom-14 left-12 h-2 w-2 rounded-full bg-accent/70" />

        <span className="absolute left-14 top-20 h-1.5 w-1.5 rounded-full bg-white/40" />

        <span className="absolute bottom-20 right-16 h-1.5 w-1.5 rounded-full bg-white/30" />

        {/* Company Logo */}
        <img
          src="/mainlogo.png"
          alt="Fenvora Infotech Pvt. Ltd."
          className="relative z-10 h-[400px] w-[400px] object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.45)] transition duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative overflow-hidden bg-navy-950 pb-24 pt-40">
        {/* Background decorations */}
        <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-3xl" />

        <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:gap-4">
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}
          <div className="relative z-10">
            {/* Eyebrow */}
            <p className="eyebrow fade-up">
              Digital Engineering &amp; Technology Solutions
            </p>

            {/* Main heading */}
            <h1 className="fade-up mt-5 max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Technology That Moves
              <br />
              <span className="text-accent">
                Business Forward.
              </span>
            </h1>

            {/* Description */}
            <p className="fade-up mt-7 max-w-2xl text-lg leading-8 text-slate-400">
              Fenvora Infotech builds reliable digital products,
              intelligent applications and scalable technology
              solutions that help businesses innovate, automate
              and grow.
            </p>

            {/* CTA Buttons */}
            <div className="fade-up mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="btn-primary"
              >
                Talk to Our Team
                <ArrowRight
                  size={17}
                  className="ml-2 inline-block"
                />
              </Link>

              <Link
                to="/services"
                className="btn-ghost"
              >
                Explore Our Services
              </Link>
            </div>

            {/* Trust Points */}
            <div className="fade-up mt-10 flex flex-wrap gap-x-6 gap-y-3">
              {[
                'Business-focused solutions',
                'Modern technology stack',
                'Scalable architecture',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-slate-400"
                >
                  <CheckCircle2
                    size={16}
                    className="shrink-0 text-accent"
                  />

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* =====================================================
              RIGHT COMPANY LOGO
          ===================================================== */}
          <div className="fade-up hidden items-center justify-center lg:flex">
            <HeroLogo />
          </div>
        </div>
      </section>

      {/* =========================================================
          WHO WE ARE
      ========================================================= */}
      <Section>
        <div className="max-w-3xl">
          <p className="eyebrow">
            Who We Are
          </p>

          <h2 className="h2">
            Engineering Technology for Real-World Business.
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Fenvora Infotech is a technology company focused on
            building practical, scalable and business-driven
            digital solutions.
          </p>
        </div>

        {/* Company Strengths */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cards.map(([number, title, description]) => (
            <div
              key={number}
              className="card group transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Number */}
              <span className="text-sm font-bold text-accent-dark">
                {number}
              </span>

              {/* Title */}
              <h3 className="mt-3 text-xl font-semibold text-navy-900">
                {title}
              </h3>

              {/* Description */}
              <p className="mt-2 leading-6">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}