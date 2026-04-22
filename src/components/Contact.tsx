import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MapPin, Linkedin, Github, Send, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate send
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding bg-[#050b14] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/3 blur-[120px] pointer-events-none" />

      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <span className="w-8 h-px bg-cyan-500" />
          <span className="text-cyan-400 text-sm font-mono tracking-widest uppercase">Contact</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-black text-white mb-4"
        >
          Let's Build Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-lg mb-16 max-w-xl"
        >
          Open to internships, full-time roles, and interesting projects. Let's talk.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {[
              {
                icon: Mail,
                label: 'Email',
                value: 'Darshanreddy186@gmail.com',
                href: 'mailto:Darshanreddy186@gmail.com',
                color: 'cyan',
              },
              {
                icon: MapPin,
                label: 'Location',
                value: 'Vijayanagar, Bengaluru, India',
                href: null,
                color: 'violet',
              },
            ].map(({ icon: Icon, label, value, href, color }) => (
              <div key={label} className="glass rounded-2xl border border-white/5 p-5 flex items-center gap-4 hover:border-white/10 transition-all duration-200">
                <div className={`p-3 rounded-xl ${
                  color === 'cyan' ? 'bg-cyan-500/10 border border-cyan-500/20' : 'bg-violet-500/10 border border-violet-500/20'
                }`}>
                  <Icon size={18} className={color === 'cyan' ? 'text-cyan-400' : 'text-violet-400'} />
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-mono mb-0.5">{label}</p>
                  {href ? (
                    <a href={href} className="text-white text-sm font-medium hover:text-cyan-400 transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-white text-sm font-medium">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="glass rounded-2xl border border-white/5 p-5">
              <p className="text-slate-500 text-xs font-mono mb-4">Social</p>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: 'https://github.com/darshanreddy186', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/darshan-b-259614279', label: 'LinkedIn' },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 glass rounded-xl border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/30 text-sm transition-all duration-200"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Icon size={15} />
                    {label}
                    <ArrowUpRight size={12} className="opacity-50" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div className="glass rounded-2xl border border-emerald-500/20 p-5 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <div>
                <p className="text-white text-sm font-semibold">Available for opportunities</p>
                <p className="text-slate-400 text-xs">Internships, full-time, freelance projects</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="glass rounded-2xl border border-white/5 p-8"
          >
            <h3 className="text-white font-bold text-lg mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-slate-400 text-xs font-mono mb-2 uppercase tracking-wider">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-white/8 transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-slate-400 text-xs font-mono mb-2 uppercase tracking-wider">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-white/8 transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-slate-400 text-xs font-mono mb-2 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-white/8 transition-all duration-200 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  sent
                    ? 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-400'
                    : 'bg-cyan-500 text-slate-900 hover:bg-cyan-400 shadow-lg shadow-cyan-500/20'
                }`}
                whileHover={!sent ? { scale: 1.02 } : {}}
                whileTap={!sent ? { scale: 0.98 } : {}}
              >
                {sent ? (
                  <>Message sent — I'll be in touch soon</>
                ) : (
                  <>
                    Send Message
                    <Send size={15} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
        className="container-max mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-600 text-sm"
      >
        <p className="font-mono">© 2025 Darshan B — Built with React + Vite</p>
        <div className="flex items-center gap-1 text-xs font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
          <span className="text-slate-500">Deployed on Vercel</span>
        </div>
      </motion.div>
    </section>
  );
}
