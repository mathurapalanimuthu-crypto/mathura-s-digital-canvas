import { motion } from "framer-motion";
import { Section } from "./Section";
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import type { IconType } from "react-icons";

const skills: { name: string; Icon: IconType; color: string }[] = [
  { name: "Java", Icon: FaJava, color: "#f89820" },
  { name: "Python", Icon: FaPython, color: "#3776ab" },
  { name: "HTML5", Icon: FaHtml5, color: "#e34f26" },
  { name: "CSS3", Icon: FaCss3Alt, color: "#1572b6" },
  { name: "JavaScript", Icon: FaJs, color: "#f7df1e" },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Toolkit"
      title="Skills"
      description="Languages and technologies I love working with."
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="group relative glass-strong rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-card hover:shadow-glow transition-all"
          >
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: `radial-gradient(circle at center, ${s.color}22, transparent 70%)` }}
            />
            <s.Icon className="relative size-14 mb-3 transition-transform group-hover:scale-110" style={{ color: s.color }} />
            <div className="relative font-display font-semibold">{s.name}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
