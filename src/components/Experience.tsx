import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const timeline = [
  {
    type: 'work',
    icon: Briefcase,
    period: 'Jun 2024 – Jul 2024',
    title: 'Web Development Intern',
    org: 'Research Center for Web Technologies, RV University',
    description: 'Built responsive UI components with React.js and integrated REST APIs. Collaborated with a 5-member team on internal tooling, improving team productivity. Gained hands-on experience deploying frontend applications.',
    tags: ['React.js', 'JavaScript', 'HTML/CSS', 'API Integration', 'Team Collaboration'],
    highlight: 'Internship',
    highlightColor: 'cyan',
  },
  {
    type: 'education',
    icon: GraduationCap,
    period: '2022 – Present',
    title: 'B.Tech — Computer Science Engineering',
    org: 'RV University, Bangalore',
    description: 'Pursuing a rigorous CSE curriculum with focus on data structures, algorithms, operating systems, and cloud computing. Active participant in hackathons and technical events.',
    tags: ['DSA', 'OS', 'DBMS', 'Cloud Computing', 'Networking'],
    highlight: '3rd Year',
    highlightColor: 'violet',
  },
  {
    type: 'learning',
    icon: Award,
    period: '2024 – Present',
    title: 'Cohort 3.0 — 100xDevs',
    org: 'by Harkirat Singh',
    description: 'Intensive full-stack development program covering advanced React, Node.js, system design, DevOps, and deployment. Building production-grade projects with real-world constraints.',
    tags: ['Full Stack', 'System Design', 'DevOps', 'Deployment', 'Best Practices'],
    highlight: 'Active',
    highlightColor: 'emerald',
  },
];

const highlightColors: Record<string, string> = {
  cyan: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
  violet: 'bg-violet-500/10 border-violet-500/20 text-violet-400',
  emerald: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
};

const iconColors: Record<string, string> = {
  cyan: 'bg-cyan-500/15 border-cyan-500/30 text-cyan-400',
  violet: 'bg-violet-500/15 border-violet-500/30 text-violet-400',
  emerald: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400',
};

const lineColors: Record<string, string> = {
  cyan: 'bg-cyan-500',
  violet: 'bg-violet-500',
  emerald: 'bg-emerald-500',
};

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section-padding bg-[#030712] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <span className="w-8 h-px bg-violet-500" />
          <span className="text-violet-400 text-sm font-mono tracking-widest uppercase">Journey</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-black text-white mb-4"
        >
          Experience & Timeline
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-lg mb-16 max-w-xl"
        >
          The path that shaped my engineering mindset.
        </motion.p>

        <div className="relative max-w-3xl">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/40 via-violet-500/40 to-emerald-500/40 origin-top"
          />

          <div className="space-y-8">
            {timeline.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                  className="relative pl-16"
                >
                  {/* Icon dot */}
                  <div className={`absolute left-0 top-0 w-12 h-12 rounded-2xl border flex items-center justify-center ${iconColors[item.highlightColor]}`}>
                    <Icon size={18} />
                  </div>

                  {/* Card */}
                  <div className="glass rounded-2xl border border-white/5 hover:border-white/10 p-7 transition-all duration-300 group">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full border text-xs font-mono font-semibold ${highlightColors[item.highlightColor]}`}>
                        {item.highlight}
                      </span>
                      <span className="text-slate-500 text-xs font-mono">{item.period}</span>
                    </div>

                    <h3 className="text-white text-xl font-bold mb-1">{item.title}</h3>
                    <p className={`font-medium text-sm mb-4 ${
                      item.highlightColor === 'cyan' ? 'text-cyan-400' :
                      item.highlightColor === 'violet' ? 'text-violet-400' : 'text-emerald-400'
                    }`}>
                      {item.org}
                    </p>

                    <p className="text-slate-400 text-sm leading-relaxed mb-5">{item.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-slate-400 text-xs font-mono">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
