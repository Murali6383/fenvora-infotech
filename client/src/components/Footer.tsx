import { Link } from 'react-router-dom'; import Logo from './Logo';
const cols: [string, [string, string][]][] = [
  ['Company', [['About', '/about'], ['Services', '/services'], ['Projects', '/projects'], ['Careers', '/careers']]],
  ['Resources', [['Internships', '/internships'], ['Contact', '/contact'], ['Privacy Policy', '/privacy'], ['Terms & Conditions', '/terms']]],
];
const social = ['LinkedIn', 'Instagram', 'GitHub', 'YouTube']; // replace "#" with real profile URLs
export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-400"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-4">
      <div><Logo /><p className="mt-4 text-sm">Technology That Moves Business Forward.</p></div>
      {cols.map(([t, ls]) => (<div key={t}><h3 className="mb-4 text-sm font-semibold text-white">{t}</h3><ul className="space-y-2 text-sm">{ls.map(([l, to]) => <li key={to}><Link className="hover:text-accent" to={to}>{l}</Link></li>)}</ul></div>))}
      <div><h3 className="mb-4 text-sm font-semibold text-white">Connect</h3><ul className="space-y-2 text-sm">{social.map((s) => <li key={s}><a className="hover:text-accent" href="#" rel="noopener noreferrer">{s}</a></li>)}</ul></div>
    </div><div className="border-t border-white/10 py-6 text-center text-xs">© 2026 FENVARO Infotech Pvt. Ltd. All Rights Reserved.</div></footer>
  );
}
