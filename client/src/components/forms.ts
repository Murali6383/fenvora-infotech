import { BUDGETS, INTERNSHIPS, SERVICES } from '../data/content';

import type { Field } from './DynamicForm';

export const enquiryFields: Field[] = [
  {
    name: 'name',
    label: 'Full Name',
    required: true,
    half: true,
  },
  {
    name: 'email',
    label: 'Email Address',
    type: 'email',
    required: true,
    half: true,
  },
  {
    name: 'phone',
    label: 'Phone Number',
    type: 'tel',
    required: true,
    half: true,
  },
  {
    name: 'company',
    label: 'Company Name',
    half: true,
  },
  {
    name: 'service',
    label: 'Service',
    type: 'select',
    options: SERVICES.map((s) => s.name),
    required: true,
  },
  {
    name: 'requirement',
    label: 'Project Requirement',
    required: true,
  },
  {
    name: 'budget',
    label: 'Budget Range',
    type: 'select',
    options: BUDGETS,
    half: true,
  },
  {
    name: 'contactMethod',
    label: 'Preferred Contact Method',
    type: 'select',
    options: ['Email', 'Phone', 'WhatsApp'],
    half: true,
  },
  {
    name: 'message',
    label: 'Message',
    type: 'textarea',
    required: true,
  },
];


export const internFields: Field[] = [
  {
    name: 'name',
    label: 'Full Name',
    required: true,
    half: true,
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    required: true,
    half: true,
  },
  {
    name: 'phone',
    label: 'Phone',
    type: 'tel',
    required: true,
    half: true,
  },
  {
    name: 'college',
    label: 'College / University',
    required: true,
    half: true,
  },
  {
    name: 'degree',
    label: 'Degree',
    required: true,
    half: true,
  },
  {
    name: 'gradYear',
    label: 'Graduation Year',
    required: true,
    half: true,
  },
  {
    name: 'domain',
    label: 'Internship Domain',
    type: 'select',
    options: INTERNSHIPS.map((i) => i[0]),
    required: true,
  },
  {
    name: 'resume',
    label: 'Resume Upload (PDF/DOC/DOCX, max 3MB)',
    type: 'file',
    required: true,
  },
  {
    name: 'coverLetter',
    label: 'Cover Letter',
    type: 'textarea',
    required: true,
  },
];


export const contactFields: Field[] = [
  {
    name: 'name',
    label: 'Name',
    required: true,
    half: true,
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    required: true,
    half: true,
  },
  {
    name: 'phone',
    label: 'Phone',
    type: 'tel',
    half: true,
  },
  {
    name: 'subject',
    label: 'Subject',
    required: true,
    half: true,
  },
  {
    name: 'message',
    label: 'Message',
    type: 'textarea',
    required: true,
  },
];