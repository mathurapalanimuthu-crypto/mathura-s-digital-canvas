import { motion } from "framer-motion";
import { Section } from "./Section";
import { Github, ExternalLink } from "lucide-react";
import eco1 from "@/assets/ecotrack-1.png";
import eco2 from "@/assets/ecotrack-2.png";
import eco3 from "@/assets/ecotrack-3.png";
import eco4 from "@/assets/ecotrack-4.png";
import eco5 from "@/assets/ecotrack-5.png";
import plan1 from "@/assets/planner-1.png";
import plan2 from "@/assets/planner-2.png";
import plan3 from "@/assets/planner-3.png";

const projects = [
  {
    title: "EcoTrack AI",
    tagline: "Smart Carbon Footprint Tracker",
    description:
      "An AI-based web application to track CO₂ emissions from daily activities and generate sustainability insights using interactive charts.",
    tech: ["HTML", "CSS", "JavaScript", "Chart.js"],
    github: "https://github.com/mathurapalanimuthu-crypto/EcoTrack-AI",
    images: [eco1, eco5, eco2, eco4, eco3],
  },
  {
    title: "Smart Study Planner",
    tagline: "Tasks, Reminders & Progress",
    description:
      "A web application for task management, reminders, and progress tracking with local storage support for persistent data.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/mathurapalanimuthu-crypto/car-foot",
    images: [plan1, plan2, plan3],
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Work"
      title="Projects"
      description="A selection of things I've built recently."
    >
      <div className="space-y-16">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className={`grid lg:grid-cols-12 gap-8 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            {/* Gallery */}
            <div className="lg:col-span-7">
              <div className="relative glass-strong rounded-3xl p-3 shadow-card group">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-primary opacity-0 group-hover:opacity-30 blur-2xl transition-opacity" />
                <div className="relative grid grid-cols-6 gap-3">
                  <div className="col-span-6 sm:col-span-4 row-span-2 rounded-2xl overflow-hidden aspect-video bg-secondary">
                    <img src={p.images[0]} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                  </div>
                  {p.images.slice(1, 5).map((img, idx) => (
                    <div key={idx} className="col-span-3 sm:col-span-2 rounded-xl overflow-hidden aspect-video bg-secondary">
                      <img src={img} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-5">
              <div className="text-xs font-mono text-primary mb-2">0{i + 1} — Project</div>
              <h3 className="font-display text-3xl font-bold">{p.title}</h3>
              <div className="text-muted-foreground mt-1">{p.tagline}</div>
              <p className="mt-5 leading-relaxed text-muted-foreground">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full glass text-xs font-mono">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:scale-[1.03] transition-transform"
                >
                  <Github className="size-4" /> View Code
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass-strong hover:shadow-glow transition-all"
                >
                  <ExternalLink className="size-4" /> Repository
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
