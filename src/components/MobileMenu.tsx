// Mobile menu — a small React island, only loaded on small screens.
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

export default function MobileMenu({ nav }: { nav: readonly NavItem[] }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        className="md:hidden text-foreground"
        aria-label="Toggle menu"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
      {open && (
        <div className="md:hidden fixed inset-x-0 top-20 bg-background/98 backdrop-blur-md border-b border-border">
          <div className="px-6 py-6 flex flex-col gap-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-2xl text-foreground hover:text-primary transition-colors uppercase"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/contact"
              onClick={() => setOpen(false)}
              className="gradient-accent text-primary-foreground font-body text-sm font-semibold tracking-wider uppercase px-6 py-3 rounded-sm text-center mt-2"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </>
  );
}
