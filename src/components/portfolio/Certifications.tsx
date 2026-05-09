import { motion } from "framer-motion";
import { Section } from "./Section";
import { Award, Medal, BookOpen, Cpu, Trophy } from "lucide-react";

const items = [
  {
    icon: Trophy,
    title: "Merit of Excellence",
    detail: "Awarded for outstanding academic performance (2025).",
  },
  {
    icon: Award,
    title: "Application Developer – Web & Mobile",
    detail: "NSQF Level 5 Certification, NASSCOM.",
  },
  {
    icon: Medal,
    title: "NPTEL · Python for Data Science",
    detail: "Elite + Silver Achievement.",
  },
  {
    icon: BookOpen,
    title: "NPTEL · Introduction to IoT",
    detail: "Elite + Silver Achievement.",
  },
  {
    icon: Cpu,
    title: "MSME Hackathon",
    detail: "Active participant building innovative solutions.",
  },
  {
    icon: Cpu,
    title: "Smart India Hackathon (SIH)",
    detail: "National-level innovation participant.",
  },
];

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Recognitions"
      title="Achievements & Certifications"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            whileHover={{ y: -4 }}
            className="relative glass-strong rounded-2xl p-6 shadow-card hover:shadow-glow transition-all group"
          >
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-primary/10 to-accent/10" />
            <div className="relative">
              <div className="inline-flex p-3 rounded-xl bg-gradient-primary text-primary-foreground shadow-glow mb-4">
                <it.icon className="size-5" />
              </div>
              <h3 className="font-display font-semibold">{it.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{it.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
