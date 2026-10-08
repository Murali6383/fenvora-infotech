import { FormEvent, useState } from 'react';

const API_URL =
  import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setSuccess('');
    setError('');

    try {
      const response = await fetch(
        `${API_URL}/api/contact`,
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json',
          },

          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || 'Submission failed'
        );
      }

      setSuccess(
        'Thank you! Your enquiry has been submitted successfully.'
      );

      setForm({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      });

    } catch (err) {

      console.error(err);

      setError(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again.'
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >

      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
        className="w-full rounded-lg border p-3"
      />

      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email Address"
        required
        className="w-full rounded-lg border p-3"
      />

      <input
        type="tel"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        className="w-full rounded-lg border p-3"
      />

      <input
        type="text"
        name="company"
        value={form.company}
        onChange={handleChange}
        placeholder="Company Name"
        className="w-full rounded-lg border p-3"
      />

      <select
        name="service"
        value={form.service}
        onChange={handleChange}
        className="w-full rounded-lg border p-3"
      >

        <option value="">
          Select a Service
        </option>

        <option value="Web Development">
          Web Development
        </option>

        <option value="Mobile App Development">
          Mobile App Development
        </option>

        <option value="AI Solutions">
          AI Solutions
        </option>

        <option value="Cloud & DevOps">
          Cloud & DevOps
        </option>

        <option value="Digital Solutions">
          Digital Solutions
        </option>

        <option value="Other">
          Other
        </option>

      </select>

      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Tell us about your project..."
        rows={6}
        required
        className="w-full rounded-lg border p-3"
      />

      {success && (
        <p className="rounded-lg bg-green-500/10 p-3 text-sm text-green-400">
          {success}
        </p>
      )}

      {error && (
        <p className="rounded-lg bg-red-500/10 p-3 text-sm text-red-400">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full"
      >
        {loading
          ? 'Sending...'
          : 'Send Enquiry'}
      </button>

    </form>
  );
}