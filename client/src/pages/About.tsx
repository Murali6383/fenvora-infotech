import { PageHero, Section } from '../components/Ui';

const values = [
  {
    number: '01',
    title: 'Innovation',
    description:
      'We explore modern technologies to build practical solutions for evolving business needs.',
    icon: '✦',
  },
  {
    number: '02',
    title: 'Reliability',
    description:
      'We focus on dependable software, quality delivery, and long-term maintainability.',
    icon: '◈',
  },
  {
    number: '03',
    title: 'Transparency',
    description:
      'We believe in clear communication, realistic timelines, and honest collaboration.',
    icon: '◎',
  },
  {
    number: '04',
    title: 'Continuous Learning',
    description:
      'We continuously improve our skills, processes, and technology practices.',
    icon: '↗',
  },
  {
    number: '05',
    title: 'Customer Focus',
    description:
      'We align every solution with customer goals and measurable business value.',
    icon: '◇',
  },
];

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understand your goals, audience, challenges, and requirements.',
  },
  {
    number: '02',
    title: 'Plan',
    description: 'Define the solution, technical approach, scope, and milestones.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Develop, test, and review the solution in manageable iterations.',
  },
  {
    number: '04',
    title: 'Deploy',
    description: 'Release the solution and prepare it for real-world use.',
  },
  {
    number: '05',
    title: 'Improve',
    description: 'Gather feedback, monitor performance, and refine continuously.',
  },
];

export default function About() {
  return (
    <>
      <PageHero
        label="ABOUT FENVORA"
        title="Building Technology With Purpose."
        text="We combine thoughtful engineering, modern technology, and a business-first mindset to create digital solutions that help organizations move forward."
      />

      {/* Company introduction */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-dark">
              Who We Are
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-navy-900 md:text-4xl">
              Technology should make business simpler.
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Fenvora Infotech Pvt. Ltd. focuses on software development and
              digital solutions designed around real business needs. We aim
              to turn ideas into useful, accessible, and maintainable
              technology experiences.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              From understanding a challenge to delivering a working
              solution, our approach emphasizes collaboration, quality,
              and continuous improvement.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-200 p-5">
                <p className="text-lg font-bold text-navy-900">
                  Business First
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Solutions shaped around practical needs.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 p-5">
                <p className="text-lg font-bold text-navy-900">
                  Quality Focus
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Maintainable code and thoughtful delivery.
                </p>
              </div>
            </div>
          </div>

          {/* Office image */}
          <div className="relative">
            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-2xl bg-accent/10" />

            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85"
              alt="Modern office workspace"
              className="relative h-[320px] w-full rounded-2xl object-cover shadow-xl md:h-[440px]"
              loading="lazy"
            />

            <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/50 bg-white/95 p-5 shadow-lg backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-widest text-accent-dark">
                Our Approach
              </p>
              <p className="mt-2 text-lg font-bold text-navy-900">
                Practical ideas. Thoughtful engineering.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Mission and vision */}
      <Section className="!pt-0">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl bg-navy-900 p-8 text-white md:p-10">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-sky-300">
              Our Mission
            </span>

            <h2 className="mt-5 text-2xl font-bold">
              Solve real problems with useful technology.
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              To build practical, reliable, and user-focused digital
              solutions that help businesses work smarter and serve their
              customers better.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-8 md:p-10">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-accent-dark">
              Our Vision
            </span>

            <h2 className="mt-5 text-2xl font-bold text-navy-900">
              Become a trusted technology partner.
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              To build lasting partnerships through innovation, responsible
              engineering, transparent collaboration, and continuous
              improvement.
            </p>
          </article>
        </div>
      </Section>

      {/* Team image and collaboration */}
      <Section className="!pt-0">
        <div className="grid items-center gap-10 overflow-hidden rounded-2xl bg-slate-50 p-6 md:p-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
              alt="Team collaborating on a project"
              className="h-[280px] w-full object-cover transition-transform duration-500 hover:scale-105 md:h-[360px]"
              loading="lazy"
            />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-dark">
              How We Think
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-navy-900">
              Great solutions start with understanding people.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Technology is most valuable when it addresses the right
              problem. We emphasize listening, planning, collaborative
              development, and feedback throughout the delivery process.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                'Understand the real business requirement',
                'Keep communication clear and consistent',
                'Build with usability and maintainability in mind',
                'Improve through feedback and testing',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">
                    ✓
                  </span>
                  <span className="text-sm leading-6 text-slate-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Core values */}
      <Section className="!pt-0">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-dark">
            What Guides Us
          </p>

          <h2 className="h2 mt-3">The Values Behind Our Work</h2>

          <p className="mt-4 leading-7 text-slate-600">
            These principles guide how we approach our work, collaborate
            with customers, and improve our solutions.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.number}
              className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-2xl text-navy-900 transition-colors group-hover:bg-navy-900 group-hover:text-white">
                  {value.icon}
                </span>

                <span className="text-sm font-bold text-slate-400">
                  {value.number}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-bold text-navy-900">
                {value.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* Development process */}
      <Section className="!pt-0">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-dark">
            Our Workflow
          </p>

          <h2 className="h2 mt-3">From Idea to Delivery</h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            A clear, collaborative process helps us move from initial
            requirements to delivery and ongoing improvement.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => (
            <li
              key={step.number}
              className="rounded-xl border-t-4 border-accent bg-slate-50 p-6"
            >
              <span className="text-sm font-bold tracking-widest text-accent-dark">
                STEP {step.number}
              </span>

              <h3 className="mt-4 text-lg font-bold text-navy-900">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* CTA */}
      <Section className="!pt-0">
        <div className="rounded-2xl bg-navy-900 px-6 py-12 text-center text-white md:px-12 md:py-16">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-300">
            Let’s Work Together
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold md:text-4xl">
            Have a business challenge in mind?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-300">
            Let’s explore how the right digital solution can support your
            goals.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-7 py-3 font-bold text-navy-900 transition-colors hover:bg-slate-100"
          >
            Talk to Our Team <span className="ml-2">→</span>
          </a>
        </div>
      </Section>
    </>
  );
}