import { FormEvent, useState } from 'react';
import { GOOGLE_SCRIPT_URL } from '../config';

export type Field = {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  options?: string[];
  half?: boolean;
};

type DynamicFormProps = {
  endpoint: string;
  fields: Field[];
  initial?: Record<string, string>;
  submitLabel?: string;
  success?: string;
};

export default function DynamicForm({
  endpoint,
  fields,
  initial = {},
  submitLabel = 'Submit',
  success = 'Form submitted successfully.',
}: DynamicFormProps) {
  const createInitialForm = () => {
    const values: Record<string, string> = {};

    fields.forEach((field) => {
      values[field.name] = initial[field.name] || '';
    });

    return values;
  };

  const [form, setForm] = useState<Record<string, string>>(
    createInitialForm()
  );

  const [files, setFiles] = useState<Record<string, File | null>>({});

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0] || null;

    if (!file) {
      return;
    }

    const maxSize = 3 * 1024 * 1024;

    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];

    if (!allowedTypes.includes(file.type)) {
      setError('Please upload only PDF, DOC or DOCX files.');
      e.target.value = '';
      return;
    }

    if (file.size > maxSize) {
      setError('Resume size must be less than 3MB.');
      e.target.value = '';
      return;
    }

    setError('');

    setFiles((previous) => ({
      ...previous,
      resume: file,
    }));

    setForm((previous) => ({
      ...previous,
      resume: file.name,
    }));
  };

  const resetForm = () => {
    setForm(createInitialForm());
    setFiles({});

    const fileInputs =
      document.querySelectorAll<HTMLInputElement>(
        'input[type="file"]'
      );

    fileInputs.forEach((input) => {
      input.value = '';
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (loading) {
      return;
    }

    setLoading(true);
    setMessage('');
    setError('');

    try {
      if (!GOOGLE_SCRIPT_URL) {
        throw new Error(
          'Google Apps Script URL is not configured.'
        );
      }

      /*
       * Convert resume to Base64.
       * Used only for internship applications.
       */
      let resumeBase64 = '';

      const resumeFile = files.resume;

      if (resumeFile) {
        resumeBase64 = await fileToBase64(resumeFile);
      }

      const payload = {
        type: endpoint,
        ...form,

        resumeName: resumeFile?.name || '',
        resumeType: resumeFile?.type || '',
        resumeBase64,
      };

      /*
       * Send data to Google Apps Script.
       *
       * We intentionally do not call response.json()
       * because Google Apps Script can save the data successfully
       * while the browser reports a fetch/response error.
       */
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
        mode: 'no-cors',
      });

      /*
       * Google Apps Script receives the request successfully.
       */
      setMessage(success);

      resetForm();

    } catch (err) {
      console.error('Form submission error:', err);

      setError(
        err instanceof Error
          ? err.message
          : 'Unable to submit your form. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-5 md:grid-cols-2"
    >
      {fields.map((field) => {
        /*
         * TEXTAREA
         */
        if (field.type === 'textarea') {
          return (
            <div
              key={field.name}
              className="md:col-span-2"
            >
              <label className="mb-2 block text-sm font-medium text-slate-700">
                {field.label}

                {field.required && (
                  <span className="ml-1 text-red-500">
                    *
                  </span>
                )}
              </label>

              <textarea
                name={field.name}
                value={form[field.name] || ''}
                onChange={handleChange}
                placeholder={field.placeholder}
                required={field.required}
                rows={5}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
            </div>
          );
        }

        /*
         * SELECT
         */
        if (field.type === 'select') {
          return (
            <div
              key={field.name}
              className={
                field.half
                  ? ''
                  : 'md:col-span-2'
              }
            >
              <label className="mb-2 block text-sm font-medium text-slate-700">
                {field.label}

                {field.required && (
                  <span className="ml-1 text-red-500">
                    *
                  </span>
                )}
              </label>

              <select
                name={field.name}
                value={form[field.name] || ''}
                onChange={handleChange}
                required={field.required}
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
              >
                <option value="">
                  Select {field.label}
                </option>

                {field.options?.map((option) => (
                  <option
                    key={option}
                    value={option}
                  >
                    {option}
                  </option>
                ))}
              </select>
            </div>
          );
        }

        /*
         * FILE UPLOAD
         */
        if (field.type === 'file') {
          return (
            <div
              key={field.name}
              className="md:col-span-2"
            >
              <label className="mb-2 block text-sm font-medium text-slate-700">
                {field.label}

                {field.required && (
                  <span className="ml-1 text-red-500">
                    *
                  </span>
                )}
              </label>

              <input
                type="file"
                name={field.name}
                accept=".pdf,.doc,.docx"
                required={field.required}
                onChange={handleFileChange}
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition file:mr-4 file:rounded-md file:border-0 file:bg-slate-100 file:px-4 file:py-2 file:font-medium hover:file:bg-slate-200"
              />

              <p className="mt-2 text-xs text-slate-500">
                Accepted: PDF, DOC, DOCX • Maximum size: 3MB
              </p>

              {files.resume && (
                <p className="mt-2 text-sm text-green-600">
                  Selected: {files.resume.name}
                </p>
              )}
            </div>
          );
        }

        /*
         * NORMAL INPUT
         */
        return (
          <div
            key={field.name}
            className={
              field.half
                ? ''
                : 'md:col-span-2'
            }
          >
            <label className="mb-2 block text-sm font-medium text-slate-700">
              {field.label}

              {field.required && (
                <span className="ml-1 text-red-500">
                  *
                </span>
              )}
            </label>

            <input
              type={field.type || 'text'}
              name={field.name}
              value={form[field.name] || ''}
              onChange={handleChange}
              placeholder={field.placeholder}
              required={field.required}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
            />
          </div>
        );
      })}

      {/* SUCCESS MESSAGE */}
      {message && (
        <div className="md:col-span-2 rounded-lg bg-green-50 p-4 text-sm text-green-700">
          {message}
        </div>
      )}

      {/* ERROR MESSAGE */}
      {error && (
        <div className="md:col-span-2 rounded-lg bg-red-50 p-4 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* SUBMIT BUTTON */}
      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading
            ? 'Submitting...'
            : submitLabel}
        </button>
      </div>
    </form>
  );
}


/*
 * Convert File → Base64
 */
function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      const result = reader.result;

      if (typeof result !== 'string') {
        reject(
          new Error('Unable to read file.')
        );
        return;
      }

      /*
       * Remove:
       * data:application/pdf;base64,
       *
       * and send only the Base64 data.
       */
      const base64 = result.split(',')[1];

      if (!base64) {
        reject(
          new Error('Unable to process the uploaded file.')
        );
        return;
      }

      resolve(base64);
    };

    reader.onerror = () => {
      reject(
        new Error('Unable to read resume file.')
      );
    };
  });
}