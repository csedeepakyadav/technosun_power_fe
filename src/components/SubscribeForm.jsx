import { useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:7911';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const submit = async (event) => {
    event.preventDefault();
    setStatus('Submitting...');

    try {
      const response = await fetch(`${API_URL}/api/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Subscription failed.');
      }

      setEmail('');
      setStatus(data.message);
    } catch (error) {
      setStatus(error.message);
    }
  };

  return (
    <form className="subscribe-form" onSubmit={submit}>
      <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="Email for solar updates" required />
      <button className="button dark" type="submit">Subscribe</button>
      {status && <span>{status}</span>}
    </form>
  );
};

export default SubscribeForm;
