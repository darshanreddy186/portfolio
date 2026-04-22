import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skillGroups = [
  {
    category: 'Languages',
    color: 'cyan',
    skills: [
      { name: 'JavaScript / TypeScript', level: 88 },
      { name: 'Python', level: 82 },
      { name: 'Java', level: 80 },
      { name: 'C', level: 90 },
      { name: 'SQL', level: 78 },
    ],
  },
  {
    category: 'Backend',
    color: 'violet',
    skills: [
      { name: 'Node.js / Express', level: 85 },
      { name: 'REST API Design', level: 88 },
      { name: 'MongoDB', level: 82 },
      { name: 'PostgreSQL / MySQL', level: 76 },
      { name: 'Redis', level: 65 },
    ],
  },
  {
    category: 'Cloud & DevOps',
    color: 'orange',
    skills: [
      { name: 'AWS (EC2, S3, RDS, ECS)', level: 75 },
      { name: 'Docker', level: 80 },
      { name: 'GitHub Actions CI/CD', level: 82 },
      { name: 'Linux / Bash', level: 78 },
      { name: 'Nginx', level: 70 },
    ],
  },
  {
    category: 'Frontend',
    color: 'emerald',
    skills: [
      { name: 'React.js', level: 88 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'HTML / CSS', level: 92 },
      { name: 'Framer Motion', level: 72 },
      { name: 'Vite', level: 80 },
    ],
  },
];

const colorMap: Record<string, { bar: string; glow: string; badge: string }> = {
  cyan: {
    bar: 'from-cyan-500 to-blue-500',
    glow: 'shadow-cyan-500/20',
    badge: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
  },
  violet: {
    bar: 'from-violet-500 to-purple-500',
    glow: 'shadow-violet-500/20',
    badge: 'bg-violet-500/10 border-violet-500/20 text-violet-400',
  },
  orange: {
    bar: 'from-orange-500 to-amber-500',
    glow: 'shadow-orange-500/20',
    badge: 'bg-orange-500/10 border-orange-500/20 text-orange-400',
  },
  emerald: {
    bar: 'from-emerald-500 to-teal-500',
    glow: 'shadow-emerald-500/20',
    badge: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
  },
};

function SkillBar({ skill, color, inView, delay }: { skill: Skill; color: string; inView: boolean; delay: number }) {
  const [hovered, setHovered] = useState(false);
  const c = colorMap[color];

  return (
    <div
      className="group cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">
          {skill.name}
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered || inView ? 1 : 0 }}
          className="text-slate-500 text-xs font-mono"
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${c.bar} rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${skill.level}%` : 0 }}
          transition={{ duration: 1, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-padding bg-[#050b14] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <span className="w-8 h-px bg-cyan-500" />
          <span className="text-cyan-400 text-sm font-mono tracking-widest uppercase">Capabilities</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-black text-white mb-4"
        >
          Skills & Technologies
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-lg mb-16 max-w-xl"
        >
          A full-stack toolkit built for cloud-native, production-grade systems.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, gi) => {
            const c = colorMap[group.color];
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: gi * 0.1 }}
                className="glass rounded-2xl border border-white/5 hover:border-white/10 p-7 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className={`px-3 py-1 rounded-full border text-xs font-mono font-semibold ${c.badge}`}>
                    {group.category}
                  </span>
                </div>

                <div className="space-y-4">
                  {group.skills.map((skill, si) => (
                    <SkillBar
                      key={skill.name}
                      skill={{ ...skill, category: group.category }}
                      color={group.color}
                      inView={inView}
                      delay={gi * 0.1 + si * 0.08}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Currently learning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-8 glass rounded-2xl border border-cyan-500/10 p-7"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <h3 className="text-white font-semibold">Currently Leveling Up</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              'Kubernetes', 'Terraform', 'System Design', 'Microservices',
              'GraphQL', 'gRPC', 'AWS Solutions Architect', 'Observability (OpenTelemetry)',
            ].map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 rounded-lg glass border border-white/10 text-slate-300 text-xs font-mono hover:border-cyan-500/30 hover:text-cyan-300 transition-all duration-200 cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
