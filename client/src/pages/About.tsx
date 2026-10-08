import { PageHero, Section } from '../components/Ui';
const values = ['Innovation', 'Reliability', 'Transparency', 'Continuous Learning', 'Customer Focus'];
const steps = [['Discover', 'Understand goals, users and constraints.'], ['Plan', 'Define scope, architecture and milestones.'], ['Build', 'Develop in iterations with regular reviews.'], ['Deploy', 'Release securely with monitoring in place.'], ['Improve', 'Measure, support and keep refining.']];
export default function About() {
  return (<>
    <PageHero label="About Fenvora" title="Building Technology With Purpose." text="Fenvora Infotech Pvt. Ltd. is a growing technology company delivering software development and digital solutions for businesses and organizations." />
    <Section><div className="grid gap-6 md:grid-cols-2">
      <div className="card"><h2 className="text-xl font-bold text-navy-900">Mission</h2><p className="mt-3">To build practical technology solutions that solve real business problems.</p></div>
      <div className="card"><h2 className="text-xl font-bold text-navy-900">Vision</h2><p className="mt-3">To become a trusted technology partner for businesses through innovation, reliability and continuous improvement.</p></div></div></Section>
    <Section className="!pt-0"><h2 className="h2">Our Values</h2><ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{values.map((v) => <li key={v} className="rounded-lg bg-navy-900 p-5 text-center font-semibold text-white">{v}</li>)}</ul></Section>
    <Section className="!pt-0"><h2 className="h2">How We Work</h2><ol className="mt-8 grid gap-6 md:grid-cols-5">{steps.map(([t, d], i) => (<li key={t} className="relative border-t-2 border-accent pt-4"><span className="text-xs font-bold text-accent-dark">0{i + 1}</span><h3 className="font-semibold text-navy-900">{t}</h3><p className="mt-1 text-sm">{d}</p></li>))}</ol></Section>
  </>);
}
