import { Github, Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border mt-12">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row gap-6 items-center justify-between">
        <div>
          <div className="font-display text-xl font-bold">
            <span className="text-gradient">Mathura</span>.P
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            Designed & built with care · Available for opportunities
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Social href="https://github.com/mathurapalanimuthu-crypto"><Github className="size-4" /></Social>
          <Social href="https://linkedin.com/in/mathura-palanimuthu-187600327"><Linkedin className="size-4" /></Social>
          <Social href="mailto:mathurapalanimuthu@gmail.com"><Mail className="size-4" /></Social>
          <Social href="tel:+917092200421"><Phone className="size-4" /></Social>
        </div>
        <div className="text-xs text-muted-foreground">
          © 2026 Mathura P. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

function Social({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="p-2.5 rounded-xl glass hover:shadow-glow hover:-translate-y-0.5 transition-all"
    >
      {children}
    </a>
  );
}
