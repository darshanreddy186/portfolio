import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GitBranch, Package, Server, Globe, Shield, Activity, ArrowRight, CheckCircle2, Database } from 'lucide-react';

const pipelineSteps = [
  { icon: GitBranch, label: 'Code Push', sublabel: 'GitHub', color: 'text-slate-300' },
  { icon: Activity, label: 'CI Pipeline', sublabel: 'GitHub Actions', color: 'text-yellow-400' },
  { icon: Package, label: 'Docker Build', sublabel: 'Container Registry', color: 'text-blue-400' },
  { icon: Shield, label: 'Security Scan', sublabel: 'Trivy / Snyk', color: 'text-orange-400' },
  { icon: Server, label: 'Deploy', sublabel: 'AWS ECS / EC2', color: 'text-cyan-400' },
  { icon: Globe, label: 'Live', sublabel: 'CloudFront CDN', color: 'text-emerald-400' },
];

const awsServices = [
  { name: 'EC2', desc: 'Compute instances', category: 'Compute' },
  { name: 'RDS', desc: 'Managed databases', category: 'Database' },
  { name: 'S3', desc: 'Object storage', category: 'Storage' },
  { name: 'CloudFront', desc: 'Global CDN', category: 'Network' },
  { name: 'ECS', desc: 'Container orchestration', category: 'Containers' },
  { name: 'CloudWatch', desc: 'Monitoring & logs', category: 'Observability' },
  { name: 'IAM', desc: 'Access management', category: 'Security' },
  { name: 'VPC', desc: 'Network isolation', category: 'Network' },
  { name: 'Lambda', desc: 'Serverless functions', category: 'Compute' },
];

const categoryColors: Record<string, string> = {
  Compute: 'border-orange-500/30 bg-orange-500/5 text-orange-400',
  Database: 'border-blue-500/30 bg-blue-500/5 text-blue-400',
  Storage: 'border-green-500/30 bg-green-500/5 text-green-400',
  Network: 'border-purple-500/30 bg-purple-500/5 text-purple-400',
  Containers: 'border-cyan-500/30 bg-cyan-500/5 text-cyan-400',
  Observability: 'border-yellow-500/30 bg-yellow-500/5 text-yellow-400',
  Security: 'border-red-500/30 bg-red-500/5 text-red-400',
};

export default function Cloud() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="cloud" className="section-padding bg-[#030712] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-violet-500/4 blur-[100px] pointer-events-none" />

      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <span className="w-8 h-px bg-violet-500" />
          <span className="text-violet-400 text-sm font-mono tracking-widest uppercase">Infrastructure</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-black text-white mb-4"
        >
          Cloud & DevOps Expertise
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-lg mb-16 max-w-xl"
        >
          From code commit to production — fully automated, containerized, and observable.
        </motion.p>

        {/* CI/CD Pipeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="glass rounded-3xl border border-white/5 p-8 mb-8"
        >
          <h3 className="text-white font-bold text-lg mb-2">CI/CD Pipeline</h3>
          <p className="text-slate-400 text-sm mb-8">Automated deployment flow from commit to production</p>

          <div className="flex flex-wrap items-center gap-2 md:gap-0">
            {pipelineSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.label} className="flex items-center gap-2">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex flex-col items-center gap-2 glass rounded-2xl border border-white/5 px-4 py-4 min-w-[90px] hover:border-cyan-500/20 transition-all duration-200 group"
                  >
                    <div className={`p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors`}>
                      <Icon size={18} className={step.color} />
                    </div>
                    <div className="text-center">
                      <p className="text-white text-xs font-semibold">{step.label}</p>
                      <p className="text-slate-500 text-xs">{step.sublabel}</p>
                    </div>
                    {i < pipelineSteps.length - 1 && (
                      <div className="absolute -right-3 top-1/2 -translate-y-1/2 hidden md:block">
                      </div>
                    )}
                  </motion.div>
                  {i < pipelineSteps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={inView ? { opacity: 1, scaleX: 1 } : {}}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="hidden md:flex items-center"
                    >
                      <div className="w-6 h-px bg-gradient-to-r from-cyan-500/50 to-cyan-500/20" />
                      <ArrowRight size={12} className="text-cyan-500/50 -ml-1" />
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Pipeline features */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              'Zero-downtime deploys',
              'Auto rollback on failure',
              'Environment parity',
              'Secrets management',
            ].map((feat, i) => (
              <motion.div
                key={feat}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + i * 0.05 }}
                className="flex items-center gap-2 text-slate-400 text-xs"
              >
                <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                {feat}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AWS Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="glass rounded-3xl border border-white/5 p-8"
        >
          <h3 className="text-white font-bold text-lg mb-2">AWS Architecture</h3>
          <p className="text-slate-400 text-sm mb-8">Services I work with to build production-grade cloud infrastructure</p>

          <div className="flex flex-wrap gap-3">
            {awsServices.map((svc, i) => (
              <motion.div
                key={svc.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.06 }}
                className={`group flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 cursor-default ${categoryColors[svc.category] || 'border-white/10 bg-white/5 text-slate-400'}`}
              >
                <div>
                  <p className="font-bold text-sm">{svc.name}</p>
                  <p className="text-xs opacity-70">{svc.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Architecture diagram placeholder */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
            className="mt-8 rounded-2xl border border-dashed border-white/10 p-8 text-center"
          >
            <div className="flex items-center justify-center gap-6 flex-wrap text-slate-500 text-sm">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                  <Globe size={20} className="text-orange-400" />
                </div>
                <span className="text-xs">Internet</span>
              </div>
              <ArrowRight size={16} className="text-slate-600" />
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <Shield size={20} className="text-purple-400" />
                </div>
                <span className="text-xs">CloudFront</span>
              </div>
              <ArrowRight size={16} className="text-slate-600" />
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <Server size={20} className="text-cyan-400" />
                </div>
                <span className="text-xs">ECS / EC2</span>
              </div>
              <ArrowRight size={16} className="text-slate-600" />
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <Database size={20} className="text-blue-400" />
                </div>
                <span className="text-xs">RDS / S3</span>
              </div>
            </div>
            <p className="text-slate-600 text-xs mt-4 font-mono">AWS Production Architecture</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
