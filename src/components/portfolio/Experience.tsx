import { motion } from "framer-motion";
import { Section } from "./Section";
import { Briefcase } from "lucide-react";

const items = [
  {
    role: "Web Development Intern",
    company: "Cognifyz Technologies",
    period: "Jul – Aug 2025",
    detail: "Worked on frontend web development tasks and improved practical development skills through hands-on assignments.",
  },
  {
    role: "Data Science Intern",
    company: "Virtual Tech Services",
    period: "Dec – Jan 2026",
    detail: "Performed data analysis and visualization using Python, working with real-world datasets to extract insights.",
  },
];

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Internships">
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((it, i) => (
          <motion.div
            key={it.company}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            className="glass-strong rounded-3xl p-7 shadow-card hover:shadow-glow transition-all relative overflow-hidden group"
          >
            <div className="absolute -top-12 -right-12 size-40 rounded-full bg-gradient-primary opacity-10 blur-2xl group-hover:opacity-30 transition-opacity" />
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                <Briefcase className="size-5" />
              </div>
              <div className="text-xs font-mono text-primary">{it.period}</div>
            </div>
            <h3 className="font-display text-xl font-semibold">{it.role}</h3>
            <div className="text-muted-foreground text-sm mt-1">{it.company}</div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{it.detail}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
