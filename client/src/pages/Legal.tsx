import { Link } from 'react-router-dom'; import { PageHero } from '../components/Ui';
const T = { privacy: ['Privacy Policy', 'We collect only the details you submit through our forms (such as name, email, phone and message) to respond to you. We do not sell your data. Resumes are emailed to our internship team. [Have this text reviewed and finalised by a legal professional.]'], terms: ['Terms & Conditions', 'By using this website you agree to use it lawfully. Content is provided for general information. Services are governed by separate written agreements. [Have this text reviewed and finalised by a legal professional.]'], '404': ['Page not found', 'The page you are looking for does not exist.'] };
export default function Legal({ kind }: { kind: keyof typeof T }) {
  const [t, b] = T[kind];
  return (<><PageHero label={kind === '404' ? '404' : 'Legal'} title={t} /><section className="mx-auto max-w-3xl px-5 py-16"><p>{b}</p>{kind === '404' && <Link to="/" className="btn-primary mt-6">Back to Home</Link>}</section></>);
}
