import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, eyebrow, title, description, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`relative py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          {eyebrow && (
            <div className="inline-block px-3 py-1 rounded-full glass text-xs uppercase tracking-widest text-muted-foreground mb-4">
              {eyebrow}
            </div>
          )}
          <h2 className="font-display text-4xl sm:text-5xl font-bold">
            <span className="text-gradient">{title}</span>
          </h2>
          {description && (
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">{description}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
