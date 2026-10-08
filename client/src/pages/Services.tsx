import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { PageHero, Section } from '../components/Ui'; import EnquiryModal from '../components/EnquiryModal'; import { SERVICES } from '../data/content';
export default function Services() {
  const [sel, setSel] = useState<string | null>(null);
  return (<>
    <PageHero label="Services" title="Technology services for growing businesses." text="From custom software to cloud and security, we cover the full lifecycle of digital products." />
    <Section><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {SERVICES.map((s, i) => { const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[s.icon];
        return (<article key={s.name} className="card flex flex-col"><div className="flex items-center justify-between"><span className="grid h-11 w-11 place-items-center rounded-lg bg-navy-900 text-accent"><Icon size={22} /></span><span className="text-sm font-bold text-slate-300">0{i + 1}</span></div>
          <h2 className="mt-4 text-lg font-semibold text-navy-900">{s.name}</h2><p className="mt-2 flex-1 text-sm">{s.desc}</p>
          <ul className="mt-4 flex flex-wrap gap-1.5">{s.tech.map((t) => <li key={t} className="rounded bg-slate-100 px-2 py-0.5 text-xs">{t}</li>)}</ul>
          <div className="mt-5 flex gap-2"><Link to="/solutions" className="btn-outline flex-1 !px-3">Learn More</Link><button onClick={() => setSel(s.name)} className="btn-primary flex-1 !px-3">Enquire Now</button></div></article>); })}
    </div></Section>
    {sel && <EnquiryModal service={sel} onClose={() => setSel(null)} />}
  </>);
}
