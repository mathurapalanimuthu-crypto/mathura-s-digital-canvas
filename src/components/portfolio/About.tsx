import { motion } from "framer-motion";
import { Section } from "./Section";
import { GraduationCap, Code2, Lightbulb, Rocket } from "lucide-react";

const highlights = [
  { icon: GraduationCap, label: "B.Tech IT", detail: "CGPA 9.26 / 10" },
  { icon: Code2, label: "Web Developer", detail: "Modern stacks" },
  { icon: Lightbulb, label: "AI Enthusiast", detail: "Curious learner" },
  { icon: Rocket, label: "Builder", detail: "Ships projects" },
];

export function About() {
  return (
    <Section id="about" eyebrow="About Me" title="Who I Am">
      <div className="grid md:grid-cols-5 gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-3 glass-strong rounded-3xl p-8 shadow-card"
        >
          <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
            I am a <span className="text-foreground font-medium">B.Tech Information Technology</span> student
            with strong interest in web development, AI-based applications, and software engineering.
            I enjoy creating user-friendly applications and continuously improving my technical knowledge
            through projects, internships, and certifications.
          </p>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
            I am seeking opportunities to apply my skills in real-world software development environments —
            building things that are useful, accessible, and well-crafted.
          </p>
        </motion.div>

        <div className="md:col-span-2 grid grid-cols-2 gap-3">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-5 hover:shadow-glow hover:-translate-y-1 transition-all"
            >
              <h.icon className="size-6 text-primary mb-3" />
              <div className="font-display font-semibold">{h.label}</div>
              <div className="text-xs text-muted-foreground mt-1">{h.detail}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
