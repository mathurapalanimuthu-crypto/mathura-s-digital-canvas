import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Download, Mail, Github, Linkedin, MapPin } from "lucide-react";
import profile from "@/assets/mathura-profile.jpeg";

const roles = [
  "Aspiring Software Developer",
  "Web Developer",
  "AI Enthusiast",
  "Problem Solver",
];

function useTyping(words: string[], speed = 80, pause = 1600) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const t = setTimeout(
      () => {
        if (!del) {
          const next = word.slice(0, text.length + 1);
          setText(next);
          if (next === word) setTimeout(() => setDel(true), pause);
        } else {
          const next = word.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDel(false);
            setI((p) => p + 1);
          }
        }
      },
      del ? speed / 2 : speed,
    );
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);

  return text;
}

export function Hero() {
  const typed = useTyping(roles);
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-hero">
      {/* Floating glow blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-24 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-24 w-[28rem] h-[28rem] rounded-full bg-accent/20 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-primary-glow/20 blur-3xl animate-blob" style={{ animationDelay: "8s" }} />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-muted-foreground mb-6">
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to internships & placements
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Hi, I'm <span className="text-gradient">Mathura P</span>
          </h1>
          <div className="mt-5 text-xl sm:text-2xl text-muted-foreground font-medium">
            <span className="cursor-blink">{typed}</span>
          </div>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Passionate IT student focused on building modern web applications and AI-powered
            solutions. Interested in software development, data science, and innovative
            technology projects.
          </p>

          <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><MapPin className="size-4" /> Ariyalur, Tamil Nadu</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">CGPA 9.26 / 10</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/Mathura_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:scale-[1.03] active:scale-95 transition-transform"
            >
              <Download className="size-4" /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-strong hover:shadow-glow transition-all font-medium"
            >
              <Mail className="size-4" /> Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <a href="https://github.com/mathurapalanimuthu-crypto" target="_blank" rel="noreferrer"
              className="p-3 rounded-xl glass hover:shadow-glow hover:-translate-y-0.5 transition-all">
              <Github className="size-5" />
            </a>
            <a href="https://linkedin.com/in/mathura-palanimuthu-187600327" target="_blank" rel="noreferrer"
              className="p-3 rounded-xl glass hover:shadow-glow hover:-translate-y-0.5 transition-all">
              <Linkedin className="size-5" />
            </a>
            <a href="mailto:mathurapalanimuthu@gmail.com"
              className="p-3 rounded-xl glass hover:shadow-glow hover:-translate-y-0.5 transition-all">
              <Mail className="size-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative animate-float">
            <div className="absolute inset-0 rounded-full bg-gradient-primary blur-2xl opacity-60 scale-110" />
            <div className="relative size-64 sm:size-80 rounded-full overflow-hidden glow-ring">
              <img src={profile} alt="Mathura P" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-3 -right-3 glass-strong rounded-2xl px-4 py-2 text-xs font-mono shadow-card">
              <span className="text-primary">&lt;</span>code/<span className="text-primary">&gt;</span> with ❤
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
