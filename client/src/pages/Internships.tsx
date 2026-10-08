import { useState } from 'react';
import { PageHero, Section } from '../components/Ui'; import DynamicForm from '../components/DynamicForm'; import { internFields } from '../components/forms'; import { INTERNSHIPS } from '../data/content';
export default function Internships() {
  const [domain, setDomain] = useState('');
  return (<><PageHero label="Internships" title="Start Your Technology Journey." text="Our internship programs provide students with practical exposure to modern technologies, project-based learning and professional development." />
    <Section><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{INTERNSHIPS.map(([n, d, s, t]) => (<article key={n} className="card"><h2 className="font-semibold text-navy-900">{n}</h2>
      <dl className="mt-3 space-y-1 text-sm"><div><b>Duration:</b> {d}</div><div><b>Skills:</b> {s}</div><div><b>Technology:</b> {t}</div><div><b>Learning:</b> Project-based</div><div><b>Certificate:</b> Issued on successful completion</div></dl>
      <a href="#apply" onClick={() => setDomain(n)} className="btn-outline mt-4 w-full">Apply for this domain</a></article>))}</div>
      <p className="mt-6 text-sm text-slate-500">Internships are learning programs. Selection is based on application review; no placement is guaranteed.</p></Section>
    <section id="apply" className="bg-slate-50"><div className="mx-auto max-w-3xl px-5 py-20"><h2 className="h2">Apply for Internship</h2><div className="mt-8 rounded-xl bg-white p-6 shadow-sm sm:p-8"><DynamicForm key={domain} endpoint="internships" fields={internFields} initial={{ domain }} submitLabel="Submit Application" success="Thank you! Your application has been submitted. Our team will review it and get in touch." /></div></div></section></>);
}
