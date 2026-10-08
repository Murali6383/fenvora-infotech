import { PageHero, Section } from '../components/Ui'; import { SOLUTIONS } from '../data/content';
export default function Solutions() {
  return (<><PageHero label="Solutions" title="Solutions built around business outcomes." />
    <Section><div className="grid gap-6 md:grid-cols-2">{SOLUTIONS.map(([t, p, s, v]) => (<article key={t} className="card"><h2 className="text-xl font-bold text-navy-900">{t}</h2>
      <dl className="mt-4 space-y-3 text-sm">{[['Problem', p], ['Solution', s], ['Business Value', v]].map(([k, x]) => <div key={k}><dt className="text-xs font-semibold uppercase tracking-wider text-accent-dark">{k}</dt><dd>{x}</dd></div>)}</dl></article>))}</div></Section></>);
}
