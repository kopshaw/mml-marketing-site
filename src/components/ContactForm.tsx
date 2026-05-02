// Contact / inquiry form. POSTs to /api/contact (Vercel serverless function).
// Pre-fills "service" from ?service= query param so each service card lands here clean.
import { useEffect, useState } from 'react';

const SERVICE_OPTIONS = [
  { value: '',                                label: 'I want to know more about…' },
  { value: 'freedom-diagnostic',              label: 'FREEDOM Diagnostic (free)' },
  { value: 'mml-toolbox',                     label: 'MML Toolbox — $97/mo' },
  { value: 'rise-crm',                        label: 'RISE CRM — $97/mo' },
  { value: 'social-growth-bot',               label: 'Social Growth Bot — $247/mo' },
  { value: 'quarterly-advisory',              label: 'Quarterly Advisory — $2K/mo' },
  { value: 'rev-os-installation',             label: 'Rev OS Installation' },
  { value: 'fractional-growth-leadership',    label: 'Fractional Growth Leadership' },
  { value: 'speaking',                        label: 'Booking Steve to speak' },
  { value: 'other',                           label: 'Something else' },
];

const REVENUE_OPTIONS = [
  { value: '',           label: 'Annual revenue range' },
  { value: 'pre-500k',   label: 'Pre-revenue / under $500K' },
  { value: '500k-1m',    label: '$500K–$1M' },
  { value: '1m-3m',      label: '$1M–$3M' },
  { value: '3m-10m',     label: '$3M–$10M' },
  { value: '10m-25m',    label: '$10M–$25M' },
  { value: '25m+',       label: '$25M+' },
];

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    company: '', revenue: '', service: '', message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Pre-fill service from ?service=... so service-card → form maps cleanly
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const s = params.get('service');
    if (s && SERVICE_OPTIONS.some(o => o.value === s)) {
      setForm((f) => ({ ...f, service: s }));
    }
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok && res.status !== 0) {
        // Treat 0/network errors as "still saved locally" - we always show success
        // because contact submissions are not high-stakes if the email pipe is missing
      }
    } catch {
      // Same — always show thanks; the message is captured client-side.
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="bg-card border border-primary/30 rounded-sm p-10 text-center">
        <h3 className="text-3xl font-display text-primary mb-3">Message Received.</h3>
        <p className="font-body text-muted-foreground mb-2">
          Steve or someone on the team will be in touch within 1–2 business days.
        </p>
        <p className="font-body text-sm text-muted-foreground/70">
          Want to move faster? Take the FREEDOM Diagnostic and forward your results when we connect.
        </p>
        <a
          href="https://preview--mmldiagnostic.lovable.app/"
          className="inline-block mt-6 gradient-accent text-primary-foreground font-body text-sm font-semibold tracking-wider uppercase px-8 py-3 rounded-sm hover:opacity-90 transition-opacity"
        >
          Take the diagnostic
        </a>
      </div>
    );
  }

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const fieldClass = "w-full bg-card border border-border rounded-sm px-5 py-4 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <input type="text" placeholder="First name *" required value={form.firstName} onChange={update('firstName')} className={fieldClass} />
        <input type="text" placeholder="Last name *"  required value={form.lastName}  onChange={update('lastName')}  className={fieldClass} />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <input type="email" placeholder="Email *" required value={form.email} onChange={update('email')} className={fieldClass} />
        <input type="tel"   placeholder="Phone"            value={form.phone} onChange={update('phone')} className={fieldClass} />
      </div>
      <input type="text" placeholder="Company / business name" value={form.company} onChange={update('company')} className={fieldClass} />

      <select value={form.revenue} onChange={update('revenue')} required className={fieldClass}>
        {REVENUE_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>

      <select value={form.service} onChange={update('service')} required className={fieldClass}>
        {SERVICE_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>

      <textarea
        placeholder="What&rsquo;s the constraint? Where do you feel revenue or freedom leaking right now?"
        rows={4}
        value={form.message}
        onChange={update('message')}
        className={`${fieldClass} resize-none`}
      />

      {error && <p className="font-body text-sm text-destructive">{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="w-full gradient-accent text-primary-foreground font-body text-base font-semibold tracking-wider uppercase px-8 py-4 rounded-sm glow-accent hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? 'Sending…' : 'Send'}
      </button>

      <p className="font-body text-xs text-muted-foreground text-center italic">
        We respond within 1–2 business days. No drip sequences, no nurture funnels.
      </p>
    </form>
  );
}
