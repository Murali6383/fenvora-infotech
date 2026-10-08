export const NAV = [['Home','/'],['About','/about'],['Services','/services'],['Solutions','/solutions'],['Projects','/projects'],['Internships','/internships'],['Careers','/careers'],['Contact','/contact']] as const;
export interface Service { name: string; icon: string; desc: string; tech: string[] }
export const SERVICES: Service[] = [
  { name: 'Software Development', icon: 'Code2', desc: 'Custom software solutions designed around business requirements, workflows and operational needs.', tech: ['Node.js','Python','Java','REST APIs','MongoDB','PostgreSQL'] },
  { name: 'Web Development', icon: 'Globe', desc: 'Fast, accessible and secure websites and web platforms built for growth.', tech: ['React','TypeScript','Tailwind CSS','Next.js','SEO'] },
  { name: 'Full Stack Development', icon: 'Layers', desc: 'End-to-end applications from interface to API to database, delivered as one cohesive product.', tech: ['React','Node.js','Express','MongoDB','Docker'] },
  { name: 'Mobile Application Development', icon: 'Smartphone', desc: 'Reliable mobile apps for Android and iOS that connect to your business systems.', tech: ['React Native','Flutter','Firebase','REST APIs'] },
  { name: 'AI & Machine Learning', icon: 'Brain', desc: 'Practical AI features and models that automate decisions and unlock insight from your data.', tech: ['Python','PyTorch','scikit-learn','LLM APIs','FastAPI'] },
  { name: 'Cloud & DevOps', icon: 'Cloud', desc: 'Cloud architecture, CI/CD pipelines and monitoring for dependable, scalable delivery.', tech: ['AWS','Docker','Kubernetes','GitHub Actions','Linux'] },
  { name: 'Cyber Security', icon: 'ShieldCheck', desc: 'Security reviews and hardening practices that protect applications and customer data.', tech: ['OWASP','Penetration Testing','IAM','Encryption'] },
  { name: 'Digital Marketing', icon: 'Megaphone', desc: 'Search, content and campaign support that helps the right customers find your business.', tech: ['SEO','Analytics','Content','Social Media'] },
];
export const SOLUTIONS = [
  ['Digital Transformation','Legacy tools and manual processes slow teams down.','We modernise systems step by step into connected digital workflows.','Faster operations and a foundation that can grow.'],
  ['Business Automation','Repetitive tasks consume skilled people\u2019s time.','We automate approvals, reporting and data handling with reliable integrations.','Fewer errors and more time for high-value work.'],
  ['AI-Powered Solutions','Data exists but is not turned into decisions.','We build practical AI features such as classification, search and assistants.','Smarter, faster decisions from existing data.'],
  ['Cloud Solutions','Infrastructure is costly, fragile or hard to scale.','We design secure cloud setups with automated deployment and monitoring.','Better reliability and predictable scaling.'],
  ['Custom Software','Off-the-shelf software does not fit how you work.','We build software around your processes and requirements.','Tools that match your business exactly.'],
  ['Web Platforms','Customers and teams need a dependable online presence.','We deliver performant portals, marketplaces and dashboards.','Stronger reach, service and engagement.'],
];
export const INTERNSHIPS: [string, string, string, string][] = [
  ['Web Development','4\u20138 weeks','HTML, CSS, JavaScript, responsive design','React, Tailwind CSS'],
  ['Full Stack Development','8 weeks','Frontend, APIs, databases','MERN stack'],
  ['Python Development','4\u20138 weeks','Core Python, scripting, APIs','Python, Flask/FastAPI'],
  ['Java Development','4\u20138 weeks','OOP, collections, backend basics','Java, Spring Boot'],
  ['AI & Machine Learning','8 weeks','Data prep, model training, evaluation','Python, scikit-learn, PyTorch'],
  ['Data Science','8 weeks','Analysis, visualisation, statistics','Pandas, SQL, Power BI'],
  ['Cloud & DevOps','4\u20138 weeks','Deployment, CI/CD, containers','AWS, Docker, Git'],
  ['Mobile Development','8 weeks','App UI, state, API integration','Flutter / React Native'],
  ['Cyber Security','4\u20138 weeks','Security fundamentals, secure coding','OWASP, Kali Linux'],
  ['Digital Marketing','4 weeks','SEO, content, analytics','Google Analytics, Search Console'],
];
export const BUDGETS = ['Not sure yet','Below \u20B91 Lakh','\u20B91\u20135 Lakh','\u20B95\u201315 Lakh','\u20B915 Lakh+'];
