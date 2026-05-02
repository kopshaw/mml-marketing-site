// Contact form — submits via Formspree-style endpoint or netlify/vercel functions later.
// For now: stores submission in component state and shows a thank-you. Wire to a backend
// later (suggest: a single /api/contact endpoint that POSTs to Resend or Slack).
import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to /api/contact once endpoint exists. Until then store-and-thank.
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      }).catch(() => null);
    } finally {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="bg-card border border-primary/30 rounded-sm p-10 text-center">
        <h3 className="text-3xl font-display text-primary mb-3">Thank You!</h3>
        <p className="font-body text-muted-foreground">
          We&rsquo;ll be in touch shortly to start your journey.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <input
          type="text"
          placeholder="First Name *"
          required
          value={form.firstName}
          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
          className="w-full bg-card border border-border rounded-sm px-5 py-4 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
        />
        <input
          type="text"
          placeholder="Last Name *"
          required
          value={form.lastName}
          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
          className="w-full bg-card border border-border rounded-sm px-5 py-4 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
        />
      </div>
      <input
        type="email"
        placeholder="Email *"
        required
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full bg-card border border-border rounded-sm px-5 py-4 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
      />
      <input
        type="tel"
        placeholder="Phone *"
        required
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        className="w-full bg-card border border-border rounded-sm px-5 py-4 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
      />
      <textarea
        placeholder="Tell me about your business and goals..."
        rows={4}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="w-full bg-card border border-border rounded-sm px-5 py-4 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
      />
      <button
        type="submit"
        className="w-full gradient-accent text-primary-foreground font-body text-base font-semibold tracking-wider uppercase px-8 py-4 rounded-sm glow-accent hover:opacity-90 transition-opacity"
      >
        Yes! Get Started
      </button>
    </form>
  );
}
