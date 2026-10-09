import { ReactNode } from 'react';

export const PageHero = ({
  label,
  title,
  text,
}: {
  label: string;
  title: string;
  text?: string;
}) => (
  <section className="bg-white pb-16 pt-36">
    <div className="mx-auto max-w-7xl px-5">
      <p className="eyebrow fade-up">{label}</p>

      <h1 className="fade-up mt-3 max-w-3xl text-4xl font-bold tracking-tight text-navy-900 md:text-5xl">
        {title}
      </h1>

      {text && (
        <p className="fade-up mt-5 max-w-2xl text-lg text-slate-600">
          {text}
        </p>
      )}
    </div>
  </section>
);

export const Section = ({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) => (
  <section className={`section reveal ${className}`}>
    {children}
  </section>
);