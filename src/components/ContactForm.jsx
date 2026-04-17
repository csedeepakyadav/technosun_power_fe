import { useState } from 'react';

const initialState = {
  name: '',
  email: '',
  phone: '',
  service: 'Residential Solar',
  message: '',
};

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:7911';

const ContactForm = () => {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const updateField = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const submitForm = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Unable to send request.');
      }

      setForm(initialState);
      setStatus({ type: 'success', message: data.message });
    } catch (error) {
      setStatus({ type: 'error', message: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="form-panel" onSubmit={submitForm}>
      <label>
        Name
        <input name="name" value={form.name} onChange={updateField} placeholder="Your full name" required />
      </label>
      <label>
        Email
        <input name="email" value={form.email} onChange={updateField} type="email" placeholder="you@example.com" required />
      </label>
      <label>
        Phone
        <input name="phone" value={form.phone} onChange={updateField} placeholder="+91" />
      </label>
      <label>
        Service
        <select name="service" value={form.service} onChange={updateField}>
          <option>Residential Solar</option>
          <option>Commercial Solar</option>
          <option>Solar Water Heating</option>
          <option>Battery Backup</option>
          <option>Maintenance</option>
          <option>Consulting</option>
        </select>
      </label>
      <label className="full">
        Project details
        <textarea name="message" value={form.message} onChange={updateField} placeholder="Tell us about your roof, monthly bill, location, or business load." required />
      </label>
      <button className="button primary full" type="submit" disabled={loading}>
        {loading ? 'Sending...' : 'Send solar request'}
      </button>
      {status.message && <p className={`form-status ${status.type}`}>{status.message}</p>}
    </form>
  );
};

export default ContactForm;
