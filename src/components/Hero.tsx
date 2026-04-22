import { useEffect, useState, useRef, lazy, Suspense } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Download, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';

const ParticleField = lazy(() => import('./ParticleField'));

// ── Typing animation ──────────────────────────────────────────────────────────
const ROLES = ['Cloud Engineer', 'Backend Developer', 'DevOps Enthusiast', 'AWS Architect'];

function TypingText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) {
      const t = setTimeout(() => { setPaused(false); setDeleting(true); }, 1600);
      return () => clearTimeout(t);
    }
    const current = ROLES[roleIndex];
    if (!deleting && displayed.length < current.length) {
      const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65);
      return () => clearTimeout(t);
    }
    if (!deleting && displayed.length === current.length) {
      setPaused(true);
      return;
    }
    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }
  }, [displayed, deleting, paused, roleIndex]);

  return (
    <span className="font-mono">
      <span className="text-gradient-cyan">{displayed}</span>
      <span className="hero-cursor inline-block w-[2px] h-[1.1em] bg-cyan-400 ml-0.5 align-middle" />
    </span>
  );
}

// ── Glowing cursor ────────────────────────────────────────────────────────────
function GlowCursor() {
  const x = useMotionValue(-999);
  const y = useMotionValue(-999);
  const sx = useSpring(x, { stiffness: 100, damping: 18 });
  const sy = useSpring(y, { stiffness: 100, damping: 18 });

  useEffect(() => {
    const move = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, [x, y]);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[100] rounded-full"
        style={{
          width: 480,
          height: 480,
          x: useTransform(sx, (v) => v - 240),
          y: useTransform(sy, (v) => v - 240),
          background: 'radial-gradient(circle, rgba(56,189,248,0.07) 0%, transparent 65%)',
        }}
      />
      <motion.div
        className="pointer-events-none fixed z-[100] rounded-full"
        style={{
          width: 100,
          height: 100,
          x: useTransform(sx, (v) => v - 50),
          y: useTransform(sy, (v) => v - 50),
          background: 'radial-gradient(circle, rgba(56,189,248,0.14) 0%, transparent 70%)',
        }}
      />
      <motion.div
        className="pointer-events-none fixed z-[101] rounded-full bg-cyan-400/70 mix-blend-screen"
        style={{
          width: 5,
          height: 5,
          x: useTransform(sx, (v) => v - 2.5),
          y: useTransform(sy, (v) => v - 2.5),
        }}
      />
    </>
  );
}

// ── Animated gradient background ──────────────────────────────────────────────
function GradientBg() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[#030712]" />
      <motion.div
        className="absolute -top-60 -left-60 w-[800px] h-[800px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.09) 0%, transparent 65%)', filter: 'blur(70px)' }}
        animate={{ x: [0, 70, -40, 0], y: [0, -50, 70, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 -right-60 w-[700px] h-[700px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(129,140,248,0.08) 0%, transparent 65%)', filter: 'blur(80px)' }}
        animate={{ x: [0, -60, 40, 0], y: [0, 60, -40, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />
      <motion.div
        className="absolute -bottom-40 left-1/3 w-[600px] h-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(192,132,252,0.07) 0%, transparent 65%)', filter: 'blur(80px)' }}
        animate={{ x: [0, 50, -70, 0], y: [0, -60, 30, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut', delay: 8 }}
      />
      {/* Vignette */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 35%, rgba(3,7,18,0.75) 100%)' }} />
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
export default function Hero() {
  const badgeRef  = useRef<HTMLDivElement>(null);
  const nameRef   = useRef<HTMLParagraphElement>(null);
  const roleRef   = useRef<HTMLDivElement>(null);
  const ctaRef    = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from(badgeRef.current,  { y: 28, opacity: 0, duration: 0.7 }, 0.15)
        .from(nameRef.current,   { y: 20, opacity: 0, duration: 0.6 }, 0.35)
        .from('.hero-word',      { y: 80, opacity: 0, duration: 0.8, stagger: 0.055, rotateX: 15, transformOrigin: 'bottom center' }, 0.5)
        .from(roleRef.current,   { y: 20, opacity: 0, duration: 0.6 }, 1.15)
        .from(ctaRef.current,    { y: 24, opacity: 0, duration: 0.7 }, 1.35)
        .from(socialRef.current, { y: 16, opacity: 0, duration: 0.6 }, 1.6);
    });
    return () => ctx.revert();
  }, []);

  const words = 'I build scalable cloud systems & real-world backend infrastructure'.split(' ');

  return (
    <>
      <GlowCursor />

      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <GradientBg />

        {/* 3D particles */}
        <div className="absolute inset-0 z-[1]">
          <Suspense fallback={null}>
            <ParticleField />
          </Suspense>
        </div>

        {/* Content */}
        <div className="relative z-10 container-max px-6 text-center pt-24">

          {/* Badge */}
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8"
            style={{ background: 'rgba(56,189,248,0.06)', border: '1px solid rgba(56,189,248,0.22)', backdropFilter: 'blur(14px)' }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            <span className="text-cyan-300 text-sm font-mono">Available for opportunities</span>
          </div>

          {/* Name */}
          <p
            ref={nameRef}
            className="text-slate-400 text-sm font-mono mb-5 tracking-[0.35em] uppercase"
          >
            Darshan B
          </p>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-black text-white leading-[1.1] mb-7">
            {words.map((word, i) => (
              <span
                key={i}
                className="hero-word inline-block mr-[0.22em]"
                style={{ transformOrigin: 'bottom center' }}
              >
                {word}
              </span>
            ))}
          </h1>

          {/* Typing */}
          <div ref={roleRef} className="text-xl md:text-2xl text-slate-400 mb-12 h-9">
            <TypingText />
          </div>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-wrap items-center justify-center gap-4 mb-14">

            {/* Primary — gradient + glow */}
            <motion.a
              href="#projects"
              className="group relative flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-sm text-slate-900 overflow-hidden select-none"
              style={{ background: 'linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)' }}
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 380, damping: 18 }}
            >
              {/* Hover glow ring */}
              <span
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ boxShadow: '0 0 28px rgba(56,189,248,0.65), 0 0 60px rgba(56,189,248,0.22)' }}
              />
              {/* Shimmer sweep */}
              <span
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)' }}
              />
              <span className="relative z-10 flex items-center gap-2.5">
                Explore My Work
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </motion.a>

            {/* Secondary — download resume */}
            <motion.a
              href="/resume.pdf"
              download
              className="group flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-sm text-white select-none"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)' }}
              whileHover={{ scale: 1.06, y: -3, borderColor: 'rgba(56,189,248,0.45)', backgroundColor: 'rgba(56,189,248,0.07)' }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 380, damping: 18 }}
            >
              <Download size={15} className="group-hover:translate-y-0.5 transition-transform duration-200" />
              Download Resume
            </motion.a>
          </div>

          {/* Social */}
          <div ref={socialRef} className="flex items-center justify-center gap-3">
            <span className="text-slate-600 text-[11px] font-mono tracking-widest uppercase mr-1">Find me on</span>
            {[
              { href: 'https://github.com/darshanreddy186', icon: Github, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/darshan-b-259614279', icon: Linkedin, label: 'LinkedIn' },
            ].map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 rounded-xl text-slate-400 hover:text-white transition-colors duration-200"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                whileHover={{ scale: 1.18, y: -2, borderColor: 'rgba(56,189,248,0.38)', backgroundColor: 'rgba(56,189,248,0.09)' }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 500, damping: 22 }}
              >
                <Icon size={17} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 z-10 select-none"
          animate={{ y: [0, 9, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase">Scroll</span>
          <ArrowDown size={13} />
        </motion.div>
      </section>

      <style>{`
        .hero-cursor { animation: blink 1s step-end infinite; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>
    </>
  );
}
