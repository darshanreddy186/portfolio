import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Zap, Target, Code2 } from 'lucide-react';

const stats = [
  { value: '3+', label: 'Years Coding' },
  { value: '10+', label: 'Projects Built' },
  { value: 'AWS', label: 'Certified Path' },
  { value: '100x', label: 'Dev Cohort' },
];

const traits = [
  {
    icon: Zap,
    title: 'Systems Thinker',
    desc: 'I approach every problem from an architecture-first mindset — designing for scale before writing a single line.',
  },
  {
    icon: Target,
    title: 'Cloud-Native Focus',
    desc: 'Building on AWS, containerizing with Docker, and automating deployments is my default mode of operation.',
  },
  {
    icon: Code2,
    title: 'Backend Craftsman',
    desc: 'From REST APIs to message queues, I care deeply about reliability, observability, and clean abstractions.',
  },
  {
    icon: GraduationCap,
    title: 'Continuous Learner',
    desc: 'Currently in 100xDevs Cohort 3.0 — pushing the boundaries of what I know every single day.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-[#030712] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-cyan-500/3 blur-[100px] pointer-events-none" />

      <div className="container-max" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="w-8 h-px bg-cyan-500" />
          <span className="text-cyan-400 text-sm font-mono tracking-widest uppercase">About</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-black text-white mb-4"
        >
          Engineering Mindset
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 text-lg max-w-2xl mb-16 leading-relaxed"
        >
          3rd Year B.Tech CSE student at RV University, Bangalore. I don't just write code —
          I architect systems that scale, automate workflows that save hours, and build
          infrastructure that teams can rely on.
        </motion.p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="glass rounded-2xl p-6 text-center border-gradient hover:glow-cyan transition-all duration-300"
            >
              <div className="text-3xl font-black text-gradient-cyan mb-1">{s.value}</div>
              <div className="text-slate-400 text-sm">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Traits grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {traits.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={t.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="group glass rounded-2xl p-7 border border-white/5 hover:border-cyan-500/20 transition-all duration-300 cursor-default"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 group-hover:bg-cyan-500/15 transition-colors">
                    <Icon size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">{t.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Education card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 glass rounded-2xl p-8 border border-white/5 flex flex-col md:flex-row md:items-center gap-6"
        >
          <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-cyan-500/20 shrink-0">
            <GraduationCap size={32} className="text-cyan-400" />
          </div>
          <div className="flex-1">
            <p className="text-slate-400 text-sm font-mono mb-1">Education</p>
            <h3 className="text-white text-xl font-bold mb-1">B.Tech — Computer Science Engineering</h3>
            <p className="text-cyan-400 font-medium">RV University, Bangalore</p>
          </div>
          <div className="shrink-0 px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-mono">
            3rd Year
          </div>
        </motion.div>
      </div>
    </section>
  );
}
