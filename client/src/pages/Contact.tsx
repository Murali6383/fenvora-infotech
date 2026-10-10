import { PageHero } from '../components/Ui'; import DynamicForm from '../components/DynamicForm'; import { contactFields } from '../components/forms';
export default function Contact() {
  return (<><PageHero label="Contact" title="Let’s Build Something Valuable." />
    <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-5">
      <address className="space-y-5 not-italic lg:col-span-2"><h2 className="text-xl font-bold text-navy-900">FENVARO Infotech Pvt. Ltd.</h2>
        <p><b>Email:</b><br /><a className="text-accent-dark" href="mailto:hrfenvaro@gmail.com">hrfenvaro@gmail.com</a></p>
        <p><b>Internship:</b><br /><a className="text-accent-dark" href="mailto:https://internshipFENVARO.vercel.app">internships@FENVAROinfotechpvt.com</a></p>
        <p><b>Phone:</b><br />+91 94000 31100</p><p><b>Location:</b><br />Spacelance HSR Layout
677, 1st Floor, 13th Cross, 27th Main Road, 1st Sector, HSR Layout, Bengaluru, Karnataka – 560102, India.</p></address>
      <div className="rounded-xl border border-slate-200 p-6 sm:p-8 lg:col-span-3"><DynamicForm endpoint="contact" fields={contactFields} submitLabel="Send Message" success="Thank you! Your message has been sent. We will get back to you shortly." /></div>
    </section></>);
}
