import { PageHero, Section } from '../components/Ui'; import { Link } from 'react-router-dom';
const why = [['Real projects', 'Work on products used by real businesses.'], ['Learning culture', 'Time and support to grow your skills.'], ['Ownership', 'Clear responsibility and honest feedback.']];
export default function Careers() {
  return (<><PageHero label="Careers" title="Build Your Career With FENVARO." />
    <Section><h2 className="h2">Current Openings</h2><p className="mt-3 rounded-lg border border-dashed border-slate-300 p-6">No current openings? Send us your resume for future opportunities.</p></Section>
    <Section className="!pt-0"><h2 className="h2">Why Work With Us</h2><div className="mt-6 grid gap-6 md:grid-cols-3">{why.map(([t, d]) => <div key={t} className="card"><h3 className="font-semibold text-navy-900">{t}</h3><p className="mt-2 text-sm">{d}</p></div>)}</div></Section>
    <Section className="!pt-0"><h2 className="h2">Life at FENVARO</h2><p className="mt-3 max-w-2xl">We are an early-stage team that values collaboration, curiosity and clear communication. [Add team photos and stories here.]</p></Section>
    <Section className="!pt-0"><h2 className="h2">Send Your Resume</h2><p className="mt-3">Email <a className="font-semibold text-accent-dark" href="mailto:info@FENVAROinfotechpvt.com">info@FENVAROinfotechpvt.com</a> or <Link className="font-semibold text-accent-dark" to="/contact">contact us</Link>.</p></Section></>);
}
