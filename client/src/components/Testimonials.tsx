import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'FENVARO understood our requirements clearly and delivered a professional digital solution that matched our business needs.',
    name: 'Arun Kumar',
    role: 'Founder',
    company: 'Sri Vinayaga Traders',
    service: 'Business Website',
  },
  {
    quote:
      'The team maintained clear communication throughout the project and delivered a clean, scalable solution for our business.',
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

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24">
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5">
        {/* Heading */}
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

                {/* Stars */}
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

              {/* Client information */}
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

        {/* Bottom trust line */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            Building long-term partnerships through technology and trust.
          </p>
        </div>
      </div>
    </section>
  );
}