import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PageHero, Section } from '../components/Ui';

const projects = [
  {
    number: '01',
    name: 'AI-Powered Business Intelligence Platform',
    category: 'AI & Data Analytics',
    tech: 'Python · FastAPI · React · AI/ML · PostgreSQL',
    image: '/projects/ai-business.png',
    problem:
      'Businesses often struggle to convert large amounts of operational data into clear and actionable business insights.',
    solution:
      'An AI-powered analytics platform with interactive dashboards, automated reports, predictive insights, and intelligent data analysis.',
    result:
      'Helps teams understand business performance faster and make informed, data-driven decisions from a centralized platform.',
    features: [
      'AI-powered analytics',
      'Real-time dashboards',
      'Automated reporting',
      'Predictive insights',
    ],
  },

  {
    number: '02',
    name: 'Enterprise Cloud & DevOps Platform',
    category: 'Cloud & DevOps',
    tech: 'AWS · Docker · Kubernetes · CI/CD · Linux',
    image: '/projects/cloud-devops.png',
    problem:
      'Manual deployments and limited infrastructure visibility can slow down application delivery and increase operational complexity.',
    solution:
      'A modern cloud and DevOps architecture with automated CI/CD pipelines, containerized applications, monitoring, and scalable infrastructure.',
    result:
      'Designed to improve deployment consistency, scalability, application availability, and infrastructure visibility.',
    features: [
      'AWS cloud infrastructure',
      'CI/CD automation',
      'Docker & Kubernetes',
      'Monitoring & scaling',
    ],
  },

  {
    number: '03',
    name: 'Smart Customer Management System',
    category: 'Full Stack Development',
    tech: 'React · Node.js · Express · MongoDB · REST API',
    image: '/projects/crm-platform.png',
    problem:
      'Growing businesses need a centralized platform to manage customers, leads, enquiries, and daily business communication.',
    solution:
      'A responsive CRM-style platform with customer management, lead tracking, enquiry handling, analytics, authentication, and role-based access.',
    result:
      'Provides business teams with a centralized workspace for managing customer relationships and improving operational efficiency.',
    features: [
      'Customer management',
      'Lead tracking',
      'Enquiry management',
      'Role-based access',
    ],
  },

  {
    number: '04',
    name: 'Business Website & Lead Management Platform',
    category: 'Web Development',
    tech: 'React · TypeScript · Tailwind CSS · Node.js · MongoDB',
    image: '/projects/business-website.png',
    problem:
      'Businesses need a professional online presence while also capturing and managing customer enquiries efficiently.',
    solution:
      'A modern corporate website with service pages, enquiry forms, lead management workflows, WhatsApp integration, and analytics-ready architecture.',
    result:
      'Designed to strengthen online presence, capture qualified enquiries, and provide a structured workflow for managing business leads.',
    features: [
      'Corporate website',
      'Lead capture forms',
      'WhatsApp integration',
      'Responsive design',
    ],
  },

  {
    number: '05',
    name: 'E-Commerce & Order Management Platform',
    category: 'Web Development',
    tech: 'React · Node.js · Express · MongoDB · REST API',
    image: '/projects/ecommerce-platform.png',
    problem:
      'Growing businesses need a reliable online platform to showcase products, receive orders, and manage customers from one place.',
    solution:
      'A scalable e-commerce platform with product management, shopping cart, authentication, order processing, customer management, and responsive UI.',
    result:
      'Designed to provide a smooth digital shopping experience while giving businesses centralized control over products, customers, and orders.',
    features: [
      'Product management',
      'Shopping cart',
      'Order management',
      'Customer management',
    ],
  },
];

export default function Projects() {
  return (
    <>
      <PageHero
        label="Projects"
        title="Technology built around real business needs."
        text="Explore our featured digital solutions across AI, cloud, DevOps, full-stack and modern web development."
      />

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Featured Solutions</p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">
            From business ideas to scalable digital products.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600">
            We combine modern technologies, thoughtful design, and scalable
            engineering to create digital solutions that solve practical
            business challenges.
          </p>
        </div>

        <div className="mt-14 space-y-10">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className={`group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              } flex flex-col lg:flex-row`}
            >
              {/* Project Image */}
              <div className="relative min-h-[260px] overflow-hidden bg-slate-100 lg:w-[46%]">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />

                <div className="absolute left-6 top-6">
                  <span className="inline-flex rounded-full bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-wider text-navy-900 shadow-lg">
                    {project.category}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6">
                  <span className="text-5xl font-black text-white/30">
                    {project.number}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="flex flex-1 flex-col p-7 md:p-9 lg:p-10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent-dark">
                      {project.category}
                    </p>

                    <h3 className="mt-2 text-2xl font-bold leading-tight text-navy-900 md:text-3xl">
                      {project.name}
                    </h3>
                  </div>

                  <div className="hidden shrink-0 rounded-full border border-slate-200 p-2.5 text-navy-900 transition group-hover:border-accent group-hover:bg-accent group-hover:text-white sm:block">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {project.tech}
                </p>

                <div className="mt-7 grid gap-6 md:grid-cols-3">
                  <div>
                    <h4 className="text-sm font-bold text-navy-900">
                      Business Challenge
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {project.problem}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-navy-900">
                      Our Solution
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {project.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-navy-900">
                      Business Value
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {project.result}
                    </p>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 border-t border-slate-100 pt-6">
                  {project.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm font-medium text-slate-700"
                    >
                      <CheckCircle2
                        size={16}
                        className="shrink-0 text-accent"
                      />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="pt-0">
        <div className="overflow-hidden rounded-3xl bg-navy-900 px-7 py-12 text-center md:px-12 md:py-16">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">
            Have a project in mind?
          </p>

          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold text-white md:text-4xl">
            Let's build something that moves your business forward.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-300">
            Tell us about your requirements and our team can help you plan the
            right technology solution.
          </p>
        </div>
      </Section>
    </>
  );
}