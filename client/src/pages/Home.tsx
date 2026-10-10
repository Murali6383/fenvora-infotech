import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Quote,
  Star,
} from 'lucide-react';
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

const testimonials = [
  {
    quote:
      'FENVARO understood our requirements clearly and delivered a solution focused on our actual business needs.',
    name: 'Arun Kumar',
    role: 'Founder',
    company: 'Sri Vinayaga Traders',
    service: 'Business Website',
  },
  {
    quote:
      'The team followed a professional approach with clear communication and a strong focus on quality.',
    name: 'Karthikeyan S',
    role: 'Managing Director',
    company: 'Vetri Engineering Solutions',
    service: 'Custom Software',
  },
  {
    quote:
      'FENVARO provided a practical technology solution that helped us improve our digital presence and customer enquiries.',
    name: 'Priya Devi',
    role: 'Business Owner',
    company: 'Thamarai Enterprises',
    service: 'Digital Solutions',
  },
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

        {/* Decorative elements */}
        <span className="absolute right-12 top-12 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_15px_rgba(45,212,191,0.8)]" />

        <span className="absolute bottom-14 left-12 h-2 w-2 rounded-full bg-accent/70" />

        <span className="absolute left-14 top-20 h-1.5 w-1.5 rounded-full bg-white/40" />

        <span className="absolute bottom-20 right-16 h-1.5 w-1.5 rounded-full bg-white/30" />

        {/* Company Logo */}
        <img
          src="/mainlogo.png"
          alt="FENVARO Infotech Pvt. Ltd."
          className="relative z-10 h-[400px] w-[400px] object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.45)] transition duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
}

function ClientStories() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24">
      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">
            Client Stories
          </p>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            What Our{' '}
            <span className="text-accent">
              Clients Say
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            We focus on understanding business challenges and
            building technology solutions that create real value.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-white/[0.06]"
            >
              {/* Top row */}
              <div className="flex items-center justify-between">
                {/* Quote icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Quote size={21} />
                </div>

                {/* Rating */}
                <div
                  className="flex gap-1"
                  aria-label="5 star rating"
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={15}
                      className="fill-accent text-accent"
                    />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <blockquote className="mt-7 text-[17px] leading-8 text-slate-300">
                “{testimonial.quote}”
              </blockquote>

              {/* Divider */}
              <div className="my-7 h-px bg-white/10" />

              {/* Client details */}
              <div>
                <h3 className="font-semibold text-white">
                  {testimonial.name}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {testimonial.role}
                </p>

                <p className="mt-1 text-sm font-medium text-slate-400">
                  {testimonial.company}
                </p>

                {/* Service */}
                <span className="mt-4 inline-flex rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-medium text-accent">
                  {testimonial.service}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom message */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            Building long-term partnerships through technology and trust.
          </p>
        </div>
      </div>
    </section>
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
              FENVARO Infotech builds reliable digital products,
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
      
{/* WHO WE ARE / ABOUT SECTION */}
<section className="relative overflow-hidden bg-navy-950 py-20 sm:py-24">
  <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">

    {/* Company Images */}
    <div className="relative mx-auto w-full max-w-xl">
      {/* Main company photo */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl">
        <img
          src="/images/company-office.jpeg"
          alt="FENVARO Infotech company office"
          className="h-[320px] w-full object-cover sm:h-[420px]"
          loading="lazy"
        />
      </div>

      {/* Secondary image: remove this block if you have only one photo */}
      <div className="absolute -bottom-8 -right-3 w-40 overflow-hidden rounded-xl border-4 border-navy-950 shadow-xl sm:-right-6 sm:w-56">
        <img
          src="/images/company-team.jpeg"
          alt="FENVARO Infotech team"
          className="h-28 w-full object-cover sm:h-40"
          loading="lazy"
        />
      </div>

      {/* Decorative accent */}
      <div className="pointer-events-none absolute -left-3 -top-3 -z-0 h-24 w-24 rounded-tl-2xl border-l-2 border-t-2 border-accent/50" />
    </div>

    {/* Company Information */}
    <div className="pt-4 lg:pt-0">
      <p className="eyebrow">Who We Are</p>

      <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
        Technology That Moves{' '}
        <span className="text-accent">Business Forward.</span>
      </h2>

      <p className="mt-6 leading-8 text-slate-400">
        FENVARO Infotech delivers technology solutions designed
        around business requirements. We focus on building
        practical digital experiences, reliable software and
        scalable applications that support business growth.
      </p>

      <p className="mt-4 leading-8 text-slate-400">
        From web development and custom software to AI
        integration and cloud solutions, our approach combines
        modern technologies with clear planning and a focus
        on business needs.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
          <h3 className="font-semibold text-white">
            Business-Focused
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            Solutions aligned with your goals and requirements.
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
          <h3 className="font-semibold text-white">
            Built for Growth
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            Scalable technology designed for changing needs.
          </p>
        </div>
      </div>

      <Link
        to="/about"
        className="mt-8 inline-flex items-center rounded-lg bg-accent px-6 py-3 font-semibold text-navy-950 transition hover:bg-accent/90"
      >
        Discover Our Company
        <ArrowRight size={17} className="ml-2" />
      </Link>
    </div>
  </div>
</section>
      {/* =========================================================
    HOW WE WORK
========================================================= */}
<section className="relative overflow-hidden bg-navy-950 py-24">
  {/* Background decorations */}
  <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />

  <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5">
    {/* Heading */}
    <div className="mx-auto max-w-3xl text-center">
      <p className="eyebrow">
        How We Work
      </p>

      <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        Our{' '}
        <span className="text-accent">
          Development
        </span>{' '}
        Process
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
        A proven 5-step framework taking your technology
        concept from discovery to production — reliably,
        on time and on budget.
      </p>

      {/* Consultation Button */}
      <div className="mt-8">
        <Link
          to="/contact"
          className="inline-flex items-center rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-navy-950 transition hover:-translate-y-0.5 hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20"
        >
          Book Free Consultation

          <ArrowRight
            size={17}
            className="ml-2"
          />
        </Link>
      </div>
    </div>

    {/* Process Steps */}
    <div className="relative mt-16">
      {/* Connecting line */}
      <div className="absolute left-[32px] top-10 hidden h-[calc(100%-80px)] w-px bg-gradient-to-b from-accent/50 via-white/10 to-transparent lg:block" />

      <div className="space-y-6">
        {/* 01 */}
        <div className="group relative rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-white/[0.055] sm:p-8">
          <div className="flex gap-5">
            <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-lg font-bold text-accent">
              01
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">
                Discovery &amp; Requirements
              </h3>

              <p className="mt-3 max-w-3xl leading-7 text-slate-400">
                We analyse your goals, data landscape, and
                constraints to define scope, KPIs, and a clear
                technology roadmap.
              </p>
            </div>
          </div>
        </div>

        {/* 02 */}
        <div className="group relative rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-white/[0.055] sm:p-8">
          <div className="flex gap-5">
            <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-lg font-bold text-accent">
              02
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">
                Data Strategy &amp; Preparation
              </h3>

              <p className="mt-3 max-w-3xl leading-7 text-slate-400">
                We audit your data, design collection pipelines,
                and engineer reliable data foundations for
                production-ready solutions.
              </p>
            </div>
          </div>
        </div>

        {/* 03 */}
        <div className="group relative rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-white/[0.055] sm:p-8">
          <div className="flex gap-5">
            <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-lg font-bold text-accent">
              03
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">
                Solution Development &amp; Testing
              </h3>

              <p className="mt-3 max-w-3xl leading-7 text-slate-400">
                We select the right technologies, develop the
                solution, test every important component, and
                validate it against business requirements.
              </p>
            </div>
          </div>
        </div>

        {/* 04 */}
        <div className="group relative rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-white/[0.055] sm:p-8">
          <div className="flex gap-5">
            <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-lg font-bold text-accent">
              04
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">
                Integration &amp; Deployment
              </h3>

              <p className="mt-3 max-w-3xl leading-7 text-slate-400">
                We integrate the solution into your existing
                systems through APIs, dashboards and reliable
                deployment pipelines.
              </p>
            </div>
          </div>
        </div>

        {/* 05 */}
        <div className="group relative rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-white/[0.055] sm:p-8">
          <div className="flex gap-5">
            <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-lg font-bold text-accent">
              05
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">
                Monitoring &amp; Improvement
              </h3>

              <p className="mt-3 max-w-3xl leading-7 text-slate-400">
                We continuously monitor performance, improve
                the solution, and provide ongoing support as
                your business evolves.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* =========================================================
          CLIENT STORIES
      ========================================================= */}
      <ClientStories />
    </>
  );
}