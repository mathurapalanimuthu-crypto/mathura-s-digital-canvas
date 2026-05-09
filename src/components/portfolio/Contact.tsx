import { motion } from "framer-motion";
import { useState } from "react";
import { Section } from "./Section";
import { Mail, Phone, Github, Linkedin, Send, CheckCircle2 } from "lucide-react";

const channels = [
  { icon: Phone, label: "Phone", value: "+91 70922 00421", href: "tel:+917092200421" },
  { icon: Mail, label: "Email", value: "mathurapalanimuthu@gmail.com", href: "mailto:mathurapalanimuthu@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "mathura-palanimuthu", href: "https://linkedin.com/in/mathura-palanimuthu-187600327" },
  { icon: Github, label: "GitHub", value: "mathurapalanimuthu-crypto", href: "https://github.com/mathurapalanimuthu-crypto" },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
    window.location.href = `mailto:mathurapalanimuthu@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <Section
      id="contact"
      eyebrow="Get In Touch"
      title="Let's Connect"
      description="Have an opportunity, idea, or just want to say hi? I'd love to hear from you."
    >
      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 space-y-3">
          {channels.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex items-center gap-4 glass-strong rounded-2xl p-4 hover:shadow-glow hover:-translate-y-0.5 transition-all"
            >
              <div className="p-3 rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                <c.icon className="size-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                <div className="font-medium truncate">{c.value}</div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 glass-strong rounded-3xl p-7 shadow-card space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Your Name">
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent outline-none px-4 py-3 rounded-xl border border-border focus:border-primary focus:shadow-glow transition"
                placeholder="Mathura"
              />
            </Field>
            <Field label="Email">
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-transparent outline-none px-4 py-3 rounded-xl border border-border focus:border-primary focus:shadow-glow transition"
                placeholder="you@email.com"
              />
            </Field>
          </div>
          <Field label="Message">
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-transparent outline-none px-4 py-3 rounded-xl border border-border focus:border-primary focus:shadow-glow transition resize-none"
              placeholder="Tell me about your project or opportunity…"
            />
          </Field>
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:scale-[1.02] active:scale-95 transition-transform"
          >
            {sent ? <><CheckCircle2 className="size-4" /> Sent — check your mail app</> : <><Send className="size-4" /> Send Message</>}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{label}</div>
      {children}
    </label>
  );
}
