import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const processes = [
  {
    number: '01',
    title: 'Discovery & Requirements',
    description:
      'We begin by understanding your business goals, challenges, users and technical requirements to establish a clear project direction.',
    points: [
      'Business requirement analysis',
      'Project scope definition',
      'Technology planning',
      'Timeline and milestone planning',
    ],
  },
  {
    number: '02',
    title: 'Strategy & Preparation',
    description:
      'We define the right technical strategy and prepare the architecture, data structure and development foundation.',
    points: [
      'Solution architecture',
      'Technology selection',
      'Data planning',
      'Development roadmap',
    ],
  },
  {
    number: '03',
    title: 'Development & Testing',
    description:
      'Our team develops the solution using modern technologies while continuously testing functionality, quality and performance.',
    points: [
      'Agile development',
      'Feature implementation',
      'API and system integration',
      'Quality assurance and testing',
    ],
  },
  {
    number: '04',
    title: 'Integration & Deployment',
    description:
      'We integrate the developed solution with your existing systems and deploy it to a secure, reliable and scalable production environment.',
    points: [
      'System integration',
      'Cloud infrastructure setup',
      'CI/CD pipeline configuration',
      'Production deployment',
    ],
  },
  {
    number: '05',
    title: 'Monitoring & Improvement',
    description:
      'After launch, we monitor the solution and continuously improve performance, security and reliability as your business grows.',
    points: [
      'Performance monitoring',
      'Bug fixes and maintenance',
      'Security improvements',
      'Continuous optimization',
    ],
  },
];

export default function Process() {
  return (
    <>
      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative overflow-hidden bg-navy-950 pb-14 pt-36 sm:pb-16">
        {/* Background glow */}
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow">
              How We Work
            </p>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Our{' '}
              <span className="text-accent">
                Development
              </span>{' '}
              Process
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              A structured and transparent approach that takes
              your idea from initial discovery to production and
              continuous improvement.
            </p>

            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-navy-950 transition duration-200 hover:-translate-y-0.5 hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20"
              >
                Book Free Consultation

                <ArrowRight
                  size={17}
                  className="ml-2"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS SECTION
      ========================================================= */}
      <section className="relative overflow-hidden bg-navy-950 pb-20 pt-8 sm:pb-24 sm:pt-10">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">
              Our Approach
            </p>

            <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              From Idea to{' '}
              <span className="text-accent">
                Production
              </span>
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Every project follows a clear and practical process
              designed to deliver quality, reliability and measurable
              business value.
            </p>
          </div>

          {/* =====================================================
              TIMELINE
          ===================================================== */}
          <div className="relative mt-10 sm:mt-12">

            {/* Vertical Timeline Line */}
            <div className="absolute left-8 top-8 hidden h-[calc(100%-64px)] w-px bg-gradient-to-b from-accent/60 via-white/10 to-transparent lg:block" />

            <div className="space-y-6 sm:space-y-8">
              {processes.map((process) => (
                <article
                  key={process.number}
                  className="group relative rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-white/[0.055] hover:shadow-xl hover:shadow-black/10 sm:p-8"
                >
                  <div className="flex flex-col gap-6 lg:flex-row">

                    {/* Step Number */}
                    <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-lg font-bold text-accent shadow-lg shadow-accent/5">
                      {process.number}
                    </div>

                    {/* Step Content */}
                    <div className="min-w-0 flex-1">

                      {/* Step Title */}
                      <h3 className="text-xl font-bold text-white sm:text-2xl">
                        {process.title}
                      </h3>

                      {/* Step Description */}
                      <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
                        {process.description}
                      </p>

                      {/* Step Points */}
                      <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        {process.points.map((point) => (
                          <div
                            key={point}
                            className="flex items-center gap-2.5 text-sm text-slate-300"
                          >
                            <CheckCircle2
                              size={16}
                              className="shrink-0 text-accent"
                            />

                            <span>
                              {point}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA SECTION
      ========================================================= */}
      <section className="bg-navy-950 pb-20 sm:pb-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-accent/20 bg-accent/5 p-8 text-center sm:p-12">

            <p className="eyebrow">
              Start Your Project
            </p>

            <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
              Have a Project in Mind?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
              Let's discuss your requirements and find the right
              technology approach for your business.
            </p>

            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-navy-950 transition duration-200 hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20"
              >
                Talk to Our Team

                <ArrowRight
                  size={17}
                  className="ml-2"
                />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}