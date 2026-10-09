import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Search,
  Lightbulb,
  Code2,
  Rocket,
  Activity,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';

const processes = [
  {
    number: '01',
    title: 'Discovery & Requirements',
    subtitle: 'Understand the vision',
    description:
      'We begin by understanding your business goals, challenges, users and technical requirements to establish a clear project direction.',
    points: [
      'Business requirement analysis',
      'Project scope definition',
      'Technology planning',
      'Timeline and milestones',
    ],
    icon: Search,
  },
  {
    number: '02',
    title: 'Strategy & Preparation',
    subtitle: 'Plan the right solution',
    description:
      'We define the technical strategy, architecture and development foundation that best supports your business objectives.',
    points: [
      'Solution architecture',
      'Technology selection',
      'Data planning',
      'Development roadmap',
    ],
    icon: Lightbulb,
  },
  {
    number: '03',
    title: 'Development & Testing',
    subtitle: 'Turn ideas into reality',
    description:
      'We build your solution with modern technologies, focusing on usability, functionality, performance and quality.',
    points: [
      'Agile development',
      'Feature implementation',
      'API integration',
      'Quality assurance',
    ],
    icon: Code2,
  },
  {
    number: '04',
    title: 'Integration & Deployment',
    subtitle: 'Launch with confidence',
    description:
      'We integrate the solution with your existing systems and deploy it to a secure, reliable and scalable production environment.',
    points: [
      'System integration',
      'Cloud infrastructure setup',
      'CI/CD pipeline configuration',
      'Production deployment',
    ],
    icon: Rocket,
  },
  {
    number: '05',
    title: 'Monitoring & Improvement',
    subtitle: 'Keep moving forward',
    description:
      'After launch, we help improve performance, reliability and security as your business evolves and grows.',
    points: [
      'Performance monitoring',
      'Maintenance and bug fixes',
      'Security improvements',
      'Continuous optimization',
    ],
    icon: Activity,
  },
];

const highlights = [
  {
    icon: ShieldCheck,
    title: 'Quality First',
    description: 'Careful testing and reliable implementation.',
  },
  {
    icon: TrendingUp,
    title: 'Built to Scale',
    description: 'Technology designed for future growth.',
  },
  {
    icon: CheckCircle2,
    title: 'Clear Communication',
    description: 'Transparent progress at every stage.',
  },
];

export default function Process() {
  return (
    <main className="overflow-hidden bg-navy-950 text-white">
      {/* HERO */}
      <section className="relative isolate">
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-24">
          <div>
            <p className="eyebrow">HOW WE WORK</p>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              A Smarter Path from{' '}
              <span className="text-accent">Idea to Impact.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              Every successful solution starts with a clear plan. Our
              structured development process helps transform business
              challenges into practical, reliable technology solutions.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-lg bg-accent px-6 py-3.5 text-sm font-bold text-navy-950 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/20"
              >
                Book Free Consultation
                <ArrowRight className="ml-2" size={18} />
              </Link>

              <a
                href="#our-process"
                className="inline-flex items-center rounded-lg border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-accent/50 hover:bg-white/5"
              >
                Explore Our Process
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-accent" />
                Transparent workflow
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-accent" />
                Quality-focused delivery
              </span>
            </div>
          </div>

          {/* COMPANY IMAGES */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-4 rounded-[2rem] bg-accent/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 shadow-2xl">
              <img
                src="/images/company-office.jpeg"
                alt="Fenvora Infotech office and technology workspace"
                className="h-[300px] w-full rounded-2xl object-cover sm:h-[390px]"
              />

              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/15 bg-navy-950/90 p-5 shadow-xl backdrop-blur-md sm:inset-x-7 sm:bottom-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Our Approach
                </p>
                <h2 className="mt-2 text-xl font-bold sm:text-2xl">
                  Strategy. Development. Growth.
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Practical technology solutions aligned with your business
                  goals.
                </p>
              </div>
            </div>

            <div className="absolute -right-3 -top-5 hidden w-40 overflow-hidden rounded-2xl border border-white/15 bg-navy-900 p-1 shadow-2xl sm:block md:w-48">
              <img
                src="/images/company-team.jpeg"
                alt="Technology team collaborating on a project"
                className="h-28 w-full rounded-xl object-cover md:h-32"
              />
              <p className="px-2 py-3 text-center text-xs font-semibold text-slate-200">
                Collaboration drives results
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR APPROACH HIGHLIGHTS */}
      <section className="border-y border-white/10 bg-white/[0.025] py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-6 md:grid-cols-3 lg:px-8">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="flex gap-4 rounded-2xl border border-white/10 bg-navy-950/70 p-5 transition duration-300 hover:border-accent/30"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon size={23} />
                </div>

                <div>
                  <h3 className="font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section
        id="our-process"
        className="relative py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">OUR DEVELOPMENT JOURNEY</p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              From Concept to{' '}
              <span className="text-accent">Production</span>
            </h2>

            <p className="mt-5 leading-7 text-slate-400 sm:text-lg">
              A step-by-step approach that keeps your project organized,
              your priorities clear and your business objectives in focus.
            </p>
          </div>

          <div className="relative mx-auto mt-14 max-w-5xl sm:mt-16">
            {/* Timeline line */}
            <div className="absolute bottom-12 left-7 top-12 hidden w-px bg-gradient-to-b from-accent/70 via-accent/20 to-transparent lg:block" />

            <div className="space-y-6 sm:space-y-8">
              {processes.map((process) => {
                const Icon = process.icon;

                return (
                  <article
                    key={process.number}
                    className="group relative rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-white/[0.055] hover:shadow-2xl hover:shadow-black/20 sm:p-8 lg:p-9"
                  >
                    <div className="flex flex-col gap-6 sm:flex-row sm:gap-7">
                      {/* Step icon */}
                      <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-accent/25 bg-navy-950 text-accent shadow-lg shadow-black/20 transition duration-300 group-hover:bg-accent group-hover:text-navy-950 sm:h-16 sm:w-16">
                        <Icon size={27} strokeWidth={1.8} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                          <span className="text-xs font-extrabold tracking-[0.2em] text-accent">
                            STEP {process.number}
                          </span>
                          <span className="h-1 w-1 rounded-full bg-slate-600" />
                          <span className="text-xs font-medium text-slate-500">
                            {process.subtitle}
                          </span>
                        </div>

                        <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">
                          {process.title}
                        </h3>

                        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
                          {process.description}
                        </p>

                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                          {process.points.map((point) => (
                            <div
                              key={point}
                              className="flex items-start gap-2.5 text-sm text-slate-300"
                            >
                              <CheckCircle2
                                size={17}
                                className="mt-0.5 shrink-0 text-accent"
                              />
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="hidden self-start text-5xl font-black tracking-tighter text-white/[0.06] transition group-hover:text-accent/15 md:block lg:text-6xl">
                        {process.number}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM IMAGE / COLLABORATION SECTION */}
      <section className="pb-20 sm:pb-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-white/10">
            <img
              src="/images/company-team.jpeg"
              alt="Team collaboration and technology development"
              loading="lazy"
              className="h-[280px] w-full object-cover sm:h-[380px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-transparent" />
            <p className="absolute bottom-6 left-6 right-6 text-xl font-bold sm:text-2xl">
              Better collaboration. Better solutions.
            </p>
          </div>

          <div>
            <p className="eyebrow">BUILT AROUND YOUR BUSINESS</p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              Technology Should Move Your Business{' '}
              <span className="text-accent">Forward.</span>
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Our process is designed to keep the focus on what matters:
              understanding your needs, choosing the right approach and
              delivering a solution that supports your goals.
            </p>

            <ul className="mt-6 space-y-4">
              {[
                'Solutions aligned with business requirements',
                'A focus on usability, quality and reliability',
                'Deployment and improvement planning',
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm leading-6 text-slate-300 sm:text-base"
                >
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-accent"
                  />
                  {point}
                </li>
              ))}
            </ul>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center text-sm font-bold text-accent transition hover:gap-3"
            >
              Learn More About Us
              <ArrowRight size={17} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="pb-20 sm:pb-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-gradient-to-br from-accent/10 via-white/[0.035] to-blue-500/10 p-8 text-center sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

            <div className="relative">
              <p className="eyebrow">LET'S BUILD SOMETHING GREAT</p>

              <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                Ready to Start Your Next{' '}
                <span className="text-accent">Project?</span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
                Let's discuss your business requirements and identify the
                right technology approach for your next step.
              </p>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center rounded-lg bg-accent px-7 py-3.5 text-sm font-bold text-navy-950 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/20"
              >
                Talk to Our Team
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}