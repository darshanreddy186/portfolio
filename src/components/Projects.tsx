import { useState, useRef, useCallback } from 'react';
import { motion, useInView, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { X, Github, ArrowUpRight, Brain, Shield, Database, CheckCircle2, Zap, AlertTriangle } from 'lucide-react';

// ── Types ─────────────────────────────────────────────────────────────────────
interface Feature { text: string }
interface Achievement { text: string }
interface DiagramNode { label: string; sublabel?: string; col: number; row: number; highlight?: boolean }

interface Project {
  id: string;
  number: string;
  title: string;
  impact: string;
  category: string;
  problem: string;
  solution: string;
  features: Feature[];
  achievements: Achievement[];
  tech: string[];
  tags: string[];
  icon: React.ElementType;
  accent: string;
  accentHex: string;
  diagramNodes: DiagramNode[];
  githubUrl: string;
}

// ── Data ──────────────────────────────────────────────────────────────────────
const PROJECTS: Project[] = [
  {
    id: 'ai-mental-wellness',
    number: '01',
    title: 'AI for Youth Mental Wellness',
    impact: 'AI-powered mental wellness platform delivering personalized emotional support, journaling, and real-time interaction.',
    category: 'Full Stack · AI',
    problem: 'Young individuals often lack accessible, personalized mental health support systems and safe spaces to express emotions. Existing solutions are either too clinical, too expensive, or fail to adapt to individual emotional patterns over time.',
    solution: "Developed a full-stack web platform combining AI-driven chat, diary tracking, and personalized recommendations to support users' mental well-being — with a safety layer that detects and escalates crisis signals in real time.",
    features: [
      { text: 'AI chatbot with context-aware responses and persistent memory' },
      { text: 'Diary system with rich text editor and emotional pattern tracking' },
      { text: 'Personalized recommendations based on user history' },
      { text: 'Voice interaction via TTS + microphone input (Web Speech API)' },
      { text: 'Community safety system with self-harm detection alerts' },
    ],
    achievements: [
      { text: 'Built real-time AI interaction system with contextual memory across sessions' },
      { text: 'Implemented safety detection pipeline for sensitive user inputs' },
      { text: 'Designed scalable backend for user data and personalized recommendations' },
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Gemini AI API', 'Web Speech API', 'Express'],
    tags: ['Full Stack', 'AI/ML', 'Healthcare'],
    icon: Brain,
    accent: 'violet',
    accentHex: '#818cf8',
    githubUrl: 'https://github.com/darshanreddy186',
    diagramNodes: [
      { label: 'React UI', sublabel: 'Voice + Chat', col: 0, row: 0 },
      { label: 'Express API', sublabel: 'Node.js', col: 1, row: 0 },
      { label: 'Gemini AI', sublabel: 'Context Memory', col: 2, row: 0, highlight: true },
      { label: 'MongoDB', sublabel: 'User Data', col: 1, row: 1 },
      { label: 'Safety Layer', sublabel: 'Crisis Detection', col: 2, row: 1, highlight: true },
    ],
  },
  {
    id: 'secure-gen-ai',
    number: '02',
    title: 'Secure Generative AI Pipeline',
    impact: 'Built a secure AI pipeline that detects and prevents prompt injection attacks in generative AI applications.',
    category: 'AWS · Security · AI',
    problem: 'Generative AI systems are vulnerable to prompt injection attacks that can manipulate model outputs, bypass safety guardrails, or expose sensitive system instructions — a critical risk in production AI deployments.',
    solution: 'Designed and implemented a secure AI architecture using AWS services to filter, validate, and sanitize user prompts before LLM processing, with output filtering to prevent harmful responses from reaching end users.',
    features: [
      { text: 'Prompt validation engine with configurable allow/deny rule sets' },
      { text: 'Output filtering layer to prevent harmful or manipulated responses' },
      { text: 'Integration with Amazon Bedrock for secure LLM processing' },
      { text: 'Secure middleware layer for request handling and audit logging' },
    ],
    achievements: [
      { text: 'Successfully detected and blocked malicious prompt injection patterns' },
      { text: 'Built a modular, reusable security pipeline for AI applications' },
      { text: 'Demonstrated real-world AI security implementation on AWS infrastructure' },
    ],
    tech: ['AWS Bedrock', 'AWS Lambda', 'Python', 'API Gateway', 'CloudWatch', 'IAM'],
    tags: ['AWS', 'Security', 'GenAI'],
    icon: Shield,
    accent: 'orange',
    accentHex: '#fb923c',
    githubUrl: 'https://github.com/darshanreddy186',
    diagramNodes: [
      { label: 'API Gateway', sublabel: 'Entry Point', col: 0, row: 0 },
      { label: 'Prompt Filter', sublabel: 'Lambda', col: 1, row: 0, highlight: true },
      { label: 'AWS Bedrock', sublabel: 'LLM Processing', col: 2, row: 0 },
      { label: 'Output Filter', sublabel: 'Lambda', col: 1, row: 1, highlight: true },
      { label: 'CloudWatch', sublabel: 'Audit Logs', col: 2, row: 1 },
    ],
  },
  {
    id: 'zero-downtime-migration',
    number: '03',
    title: 'Zero-Downtime Cross-Region Migration',
    impact: 'Designed a cross-region database migration system with continuous replication and zero downtime using AWS DMS.',
    category: 'AWS · Database · DevOps',
    problem: 'Migrating databases across AWS regions typically causes service downtime, risking data inconsistency and SLA violations. Traditional migration approaches require maintenance windows that are unacceptable for production systems.',
    solution: 'Built a migration architecture using AWS Database Migration Service (DMS) with full load + CDC (Change Data Capture) to ensure continuous replication with no service interruption, enabling live cutover with rollback capability.',
    features: [
      { text: 'Cross-region database replication with AWS DMS' },
      { text: 'Full load + ongoing CDC synchronization for live data consistency' },
      { text: 'Minimal downtime during cutover — sub-minute switchover window' },
      { text: 'Scalable, fault-tolerant setup with automatic retry on failure' },
    ],
    achievements: [
      { text: 'Achieved near-zero downtime migration across AWS regions' },
      { text: 'Ensured real-time data consistency between source and target regions' },
      { text: 'Designed a disaster recovery-ready architecture with automated failover' },
    ],
    tech: ['AWS DMS', 'Amazon RDS', 'EC2', 'CloudWatch', 'VPC', 'IAM'],
    tags: ['AWS', 'Database', 'Migration'],
    icon: Database,
    accent: 'cyan',
    accentHex: '#38bdf8',
    githubUrl: 'https://github.com/darshanreddy186',
    diagramNodes: [
      { label: 'Source RDS', sublabel: 'Region A', col: 0, row: 0 },
      { label: 'AWS DMS', sublabel: 'Full Load + CDC', col: 1, row: 0, highlight: true },
      { label: 'Target RDS', sublabel: 'Region B', col: 2, row: 0 },
      { label: 'CloudWatch', sublabel: 'Monitoring', col: 0, row: 1 },
      { label: 'VPC Peering', sublabel: 'Secure Tunnel', col: 1, row: 1, highlight: true },
    ],
  },
];

// ── Accent maps ───────────────────────────────────────────────────────────────
const ACCENT: Record<string, { border: string; glow: string; badge: string; tag: string; dot: string; number: string }> = {
  violet: {
    border: 'rgba(129,140,248,0.28)',
    glow: '0 0 40px rgba(129,140,248,0.15), 0 0 80px rgba(129,140,248,0.06)',
    badge: 'bg-violet-500/10 border-violet-500/25 text-violet-300',
    tag: 'border-violet-500/20 text-violet-400',
    dot: 'bg-violet-400',
    number: 'text-violet-500/20',
  },
  orange: {
    border: 'rgba(251,146,60,0.28)',
    glow: '0 0 40px rgba(251,146,60,0.15), 0 0 80px rgba(251,146,60,0.06)',
    badge: 'bg-orange-500/10 border-orange-500/25 text-orange-300',
    tag: 'border-orange-500/20 text-orange-400',
    dot: 'bg-orange-400',
    number: 'text-orange-500/20',
  },
  cyan: {
    border: 'rgba(56,189,248,0.28)',
    glow: '0 0 40px rgba(56,189,248,0.15), 0 0 80px rgba(56,189,248,0.06)',
    badge: 'bg-cyan-500/10 border-cyan-500/25 text-cyan-300',
    tag: 'border-cyan-500/20 text-cyan-400',
    dot: 'bg-cyan-400',
    number: 'text-cyan-500/20',
  },
};

// ── Architecture diagram ──────────────────────────────────────────────────────
function ArchDiagram({ nodes, accentHex }: { nodes: DiagramNode[]; accentHex: string }) {
  const cols = Math.max(...nodes.map((n) => n.col)) + 1;
  const rows = Math.max(...nodes.map((n) => n.row)) + 1;
  return (
    <div className="rounded-2xl p-5" style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(255,255,255,0.06)' }}>
      <p className="text-slate-600 text-[10px] font-mono uppercase tracking-widest mb-4">Architecture Overview</p>
      <div className="grid gap-2.5" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)`, gridTemplateRows: `repeat(${rows}, auto)` }}>
        {nodes.map((node, i) => (
          <motion.div
            key={node.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.06, type: 'spring', stiffness: 280, damping: 22 }}
            className="flex flex-col items-center justify-center gap-1 rounded-xl px-2 py-3 text-center"
            style={{
              gridColumn: node.col + 1,
              gridRow: node.row + 1,
              background: node.highlight ? `${accentHex}10` : 'rgba(255,255,255,0.03)',
              border: `1px solid ${node.highlight ? `${accentHex}30` : 'rgba(255,255,255,0.06)'}`,
            }}
          >
            <span className="text-white text-xs font-semibold leading-tight">{node.label}</span>
            {node.sublabel && <span className="text-slate-500 text-[10px]">{node.sublabel}</span>}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ── Modal ─────────────────────────────────────────────────────────────────────
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const Icon = project.icon;
  const a = ACCENT[project.accent];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(18px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.88, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 24 }}
        transition={{ type: 'spring', stiffness: 300, damping: 26 }}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl"
        style={{ background: 'rgba(6,11,22,0.98)', border: `1px solid ${a.border}`, boxShadow: a.glow }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px rounded-t-3xl" style={{ background: `linear-gradient(90deg, transparent, ${project.accentHex}55, transparent)` }} />

        <div className="p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl shrink-0" style={{ background: `${project.accentHex}12`, border: `1px solid ${project.accentHex}28` }}>
                <Icon size={22} style={{ color: project.accentHex }} />
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className={`px-2.5 py-0.5 rounded-full border text-[11px] font-mono ${a.badge}`}>{tag}</span>
                  ))}
                </div>
                <h3 className="text-white text-xl font-black leading-tight">{project.title}</h3>
                <p className="text-slate-500 text-sm mt-1 font-mono">{project.category}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-500 hover:text-white transition-colors shrink-0 ml-4"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <X size={16} />
            </button>
          </div>

          {/* Impact callout */}
          <div className="rounded-2xl p-4 mb-6" style={{ background: `${project.accentHex}08`, border: `1px solid ${project.accentHex}20` }}>
            <div className="flex items-start gap-3">
              <Zap size={14} style={{ color: project.accentHex }} className="mt-0.5 shrink-0" />
              <p className="text-slate-200 text-sm leading-relaxed font-medium">{project.impact}</p>
            </div>
          </div>

          {/* Problem */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle size={11} className="text-slate-600" />
              <h4 className="text-slate-500 text-[10px] font-mono uppercase tracking-widest">Problem</h4>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">{project.problem}</p>
          </div>

          {/* Solution */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 size={11} style={{ color: project.accentHex }} />
              <h4 className="text-[10px] font-mono uppercase tracking-widest" style={{ color: project.accentHex }}>Solution</h4>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">{project.solution}</p>
          </div>

          {/* Arch diagram */}
          <div className="mb-6">
            <ArchDiagram nodes={project.diagramNodes} accentHex={project.accentHex} />
          </div>

          {/* Features */}
          <div className="mb-6">
            <h4 className="text-slate-500 text-[10px] font-mono uppercase tracking-widest mb-3">Key Features</h4>
            <div className="space-y-2.5">
              {project.features.map((f, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${a.dot}`} />
                  <span className="text-slate-300 text-sm">{f.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-6">
            <h4 className="text-slate-500 text-[10px] font-mono uppercase tracking-widest mb-3">Achievements</h4>
            <div className="space-y-2.5">
              {project.achievements.map((ach, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 size={13} style={{ color: project.accentHex }} className="mt-0.5 shrink-0" />
                  <span className="text-slate-300 text-sm">{ach.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech stack */}
          <div className="mb-7">
            <h4 className="text-slate-500 text-[10px] font-mono uppercase tracking-widest mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* GitHub link */}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-85"
            style={{ background: `${project.accentHex}15`, border: `1px solid ${project.accentHex}32`, color: project.accentHex }}
          >
            <Github size={14} />
            View on GitHub
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Tilt card ─────────────────────────────────────────────────────────────────
function TiltCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, { once: true, margin: '-80px' });

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 180, damping: 22 });
  const smy = useSpring(my, { stiffness: 180, damping: 22 });
  const rotateX = useTransform(smy, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(smx, [-0.5, 0.5], [-7, 7]);
  const glowX = useTransform(smx, [-0.5, 0.5], [0, 100]);
  const glowY = useTransform(smy, [-0.5, 0.5], [0, 100]);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }, [mx, my]);

  const onMouseLeave = useCallback(() => { mx.set(0); my.set(0); }, [mx, my]);

  const Icon = project.icon;
  const a = ACCENT[project.accent];

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 55 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.14, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className="group relative rounded-3xl cursor-pointer h-full"
        whileHover={{ scale: 1.025 }}
        transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      >
        {/* Card body */}
        <div
          className="relative rounded-3xl p-7 h-full flex flex-col overflow-hidden"
          style={{ background: 'rgba(7,12,24,0.9)', border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(24px)' }}
        >
          {/* Mouse-follow inner glow */}
          <motion.div
            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${glowX}% ${glowY}%, ${project.accentHex}12 0%, transparent 60%)`,
            }}
          />

          {/* Hover border glow */}
          <div
            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-400 pointer-events-none"
            style={{ border: `1px solid ${a.border}`, boxShadow: a.glow }}
          />

          {/* Top shimmer line */}
          <div
            className="absolute top-0 left-10 right-10 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{ background: `linear-gradient(90deg, transparent, ${project.accentHex}60, transparent)` }}
          />

          {/* Project number watermark */}
          <span className={`absolute top-5 right-6 text-6xl font-black select-none pointer-events-none ${a.number}`}>
            {project.number}
          </span>

          {/* Icon */}
          <div
            className="inline-flex p-3 rounded-2xl mb-5 w-fit relative z-10"
            style={{ background: `${project.accentHex}10`, border: `1px solid ${project.accentHex}25` }}
          >
            <Icon size={22} style={{ color: project.accentHex }} />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4 relative z-10">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`px-2.5 py-0.5 rounded-full border text-[11px] font-mono ${a.tag}`}
                style={{ background: 'rgba(255,255,255,0.03)' }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-white text-xl font-black mb-3 leading-snug relative z-10">{project.title}</h3>

          {/* Impact */}
          <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1 relative z-10">{project.impact}</p>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-1.5 mb-6 relative z-10">
            {project.tech.slice(0, 4).map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-lg text-xs font-mono text-slate-400"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                {t}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span
                className="px-2.5 py-1 rounded-lg text-xs font-mono text-slate-600"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}
              >
                +{project.tech.length - 4}
              </span>
            )}
          </div>

          {/* CTA */}
          <div
            className="flex items-center gap-2 text-sm font-semibold relative z-10 transition-all duration-200"
            style={{ color: project.accentHex }}
          >
            <span>View Case Study</span>
            <ArrowUpRight
              size={15}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section-padding relative overflow-hidden" style={{ background: '#04080f' }}>
      {/* Divider */}
      <div className="absolute top-0 left-0 w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(56,189,248,0.18), transparent)' }} />

      {/* Ambient blobs */}
      <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(129,140,248,0.05) 0%, transparent 70%)', filter: 'blur(80px)' }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.04) 0%, transparent 70%)', filter: 'blur(70px)' }} />

      <div className="container-max" ref={ref}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-cyan-500" />
          <span className="text-cyan-400 text-sm font-mono tracking-widest uppercase">Case Studies</span>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight"
          >
            Featured<br />
            <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm max-w-xs leading-relaxed md:text-right"
          >
            Production-grade systems built to solve real problems — not tutorials.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <TiltCard key={project.id} project={project} index={i} onClick={() => setSelected(project)} />
          ))}
        </div>

        {/* Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-12 flex items-center justify-center gap-3 text-slate-700 text-xs font-mono"
        >
          <span className="w-10 h-px bg-slate-800" />
          Click any card to explore the full case study
          <span className="w-10 h-px bg-slate-800" />
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
