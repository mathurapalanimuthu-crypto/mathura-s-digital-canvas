import { motion } from "framer-motion";
import { Section } from "./Section";
import { GraduationCap } from "lucide-react";

const items = [
  {
    title: "B.Tech, Information Technology",
    place: "Dhanalakshmi Srinivasan Engineering College (Autonomous), Perambalur",
    period: "2023 – 2027",
    score: "CGPA: 9.26 / 10",
  },
  {
    title: "Higher Secondary Education",
    place: "Nirmala Matriculation Higher Secondary School, Ariyalur",
    period: "2022 – 2023",
    score: "Score: 87%",
  },
  {
    title: "Secondary School Education",
    place: "Nirmala Matriculation Higher Secondary School, Ariyalur",
    period: "2020 – 2021",
    score: "",
  },
];

export function Education() {
  return (
    <Section id="education" eyebrow="Journey" title="Education">
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
        <div className="space-y-10">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className={`relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}
            >
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-3 size-3 rounded-full bg-gradient-primary shadow-glow" />
              <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <div className="glass-strong rounded-2xl p-6 shadow-card hover:shadow-glow transition-shadow inline-block text-left">
                  <div className="flex items-center gap-2 text-xs text-primary font-mono mb-2">
                    <GraduationCap className="size-4" /> {it.period}
                  </div>
                  <h3 className="font-display text-lg font-semibold">{it.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{it.place}</p>
                  {it.score && <p className="mt-3 text-sm font-medium text-foreground">{it.score}</p>}
                </div>
              </div>
              <div />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
