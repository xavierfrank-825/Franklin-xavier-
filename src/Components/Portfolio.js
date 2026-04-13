import React, { useState, useEffect, useRef } from 'react';
import frankPhoto from '../images/frank.jpg'; // ← add this at the TOP of your file
// Fonts: Plus Jakarta Sans (headings) + Outfit (body) + JetBrains Mono (accents)
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 300);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  const skills = [
    { title: 'Frontend', icon: '⚡', color: '#00d4ff', skills: ['React.js', 'TypeScript', 'Next.js', 'Angular', 'Tailwind CSS', 'Redux', 'HTML5', 'CSS3'] },
    { title: 'Backend', icon: '🔧', color: '#a855f7', skills: ['Node.js', '.NET Core', 'PHP', 'Python', 'Express.js', 'RESTful APIs', 'JWT/OAuth'] },
    { title: 'Database', icon: '🗄️', color: '#f59e0b', skills: ['MySQL', 'MongoDB', 'SQL', 'RDS', 'TiDB Cloud', 'Entity Framework'] },
    { title: 'Analytics', icon: '📊', color: '#10b981', skills: ['Power BI', 'Tableau', 'ETL', 'DAX', 'VBA', 'Data Visualization', 'Statistics'] },
    { title: 'Cloud & DevOps', icon: '☁️', color: '#f43f5e', skills: ['AWS EC2', 'CI/CD', 'GitHub Actions', 'AWS CodePipeline', 'Git', 'GitLab'] },
    { title: 'Tools', icon: '🛠️', color: '#8b5cf6', skills: ['Jira', 'ServiceNow', 'ChatGPT', 'Claude', 'Gemini', 'WordPress', 'Agile/Scrum'] },
  ];

  const experience = [
    {
      role: 'Software Developer',
      company: 'JTS Business Services (OPC) Pvt Ltd',
      period: 'Dec 2025 – Present',
      color: '#00d4ff',
      points: [
        'Developing and enhancing HRMS and CRM products with new business-aligned features',
        'Maintaining applications through bug fixes, performance improvements, and code refactoring',
        'Collaborating cross-functionally to improve usability, stability, and overall performance',
        'Contributing to production-ready applications with focus on reliability and clean code',
      ]
    },
    {
      role: 'Software Developer',
      company: 'Manuscript TechnoMedia LLP',
      period: 'Aug 2025 – Dec 2025',
      color: '#a855f7',
      points: [
        'Built internal web apps for process automation using React.js, Angular, and PHP',
        'Deployed on AWS EC2 with RDS and TiDB Cloud for distributed SQL workloads',
        'Implemented CI/CD pipelines using GitHub Actions and AWS CodePipeline',
        'Integrated auth mechanisms and followed API security best practices',
      ]
    },
    {
      role: 'Software Engineer',
      company: 'AloftLabsAI Technologies Pvt Ltd',
      period: 'Jan 2025 – Jul 2025',
      color: '#f59e0b',
      points: [
        'Built full-stack Productivity Management System monitoring employee productivity metrics',
        'Designed responsive UI using React.js, Ant Design, Tailwind CSS, and Bootstrap',
        'Implemented session-based auth, auto logout, and inactivity tracking for security',
        'Developed ETL pipelines for data aggregation to support analytics and reporting',
      ]
    },
    {
      role: 'Data Analyst Training',
      company: 'Besant Technologies',
      period: 'Jul 2024 – Jan 2025',
      color: '#10b981',
      points: [
        'Designed interactive e-commerce dashboard analyzing ₹438K sales, 5,615 units, ₹37K profit',
        'Identified Clothing as 63% dominant category contributor',
        'Analyzed payment preferences: COD (44%), UPI (21%), Credit Card (12%), EMI (10%)',
        'Provided geographical insights for top-performing states across India',
      ]
    },
  ];

  const projects = [
    { title: 'Productivity Management System', tech: 'React.js · Node.js · PHP · MySQL · AWS EC2', desc: 'Enterprise full-stack system tracking employee work hours, system usage, and productivity metrics with real-time analytics dashboards.', icon: '⚡', color: '#00d4ff', grad: 'linear-gradient(135deg, #00d4ff22, #00d4ff05)' },
    { title: 'E-Commerce Sales Dashboard', tech: 'Power BI · DAX · SQL · ETL', desc: 'Interactive BI dashboard analyzing ₹438K in sales across 5,615 units with geographical insights, trend analysis, and custom quarterly filters.', icon: '📈', color: '#f59e0b', grad: 'linear-gradient(135deg, #f59e0b22, #f59e0b05)' },
    { title: 'HRMS & CRM Platform', tech: 'React.js · .NET Core · MySQL · REST APIs', desc: 'Enterprise HR management and CRM platform with feature enhancements, bug fixes, and performance optimization for production workflows.', icon: '🏢', color: '#a855f7', grad: 'linear-gradient(135deg, #a855f722, #a855f705)' },
  ];

  return (
    <div style={{ background: '#030712', color: '#e2e8f0', fontFamily: 'var(--font-body)', overflowX: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Outfit:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');

        :root {
          --font-heading: 'Plus Jakarta Sans', sans-serif;
          --font-body: 'Outfit', sans-serif;
          --font-mono: 'JetBrains Mono', monospace;
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: var(--font-body);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: var(--font-heading);
        }

        .mono {
          font-family: var(--font-mono);
          letter-spacing: 0.02em;
        }
        ::-webkit-scrollbar-track { background: #030712; }
        ::-webkit-scrollbar-thumb { background: linear-gradient(#00d4ff, #a855f7); border-radius: 2px; }

        html { scroll-behavior: smooth; }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes orbit {
          from { transform: rotate(0deg) translateX(120px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
        }

        @keyframes orbit2 {
          from { transform: rotate(120deg) translateX(160px) rotate(-120deg); }
          to { transform: rotate(480deg) translateX(160px) rotate(-480deg); }
        }

        @keyframes orbit3 {
          from { transform: rotate(240deg) translateX(200px) rotate(-240deg); }
          to { transform: rotate(600deg) translateX(200px) rotate(-600deg); }
        }

        @keyframes floatUp {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(5deg); }
          66% { transform: translateY(-10px) rotate(-3deg); }
        }

        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 20px #00d4ff44, 0 0 40px #00d4ff22; }
          50% { box-shadow: 0 0 40px #00d4ff88, 0 0 80px #00d4ff44, 0 0 120px #00d4ff22; }
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes rotateY {
          0% { transform: perspective(1000px) rotateY(-5deg) rotateX(2deg); }
          50% { transform: perspective(1000px) rotateY(5deg) rotateX(-2deg); }
          100% { transform: perspective(1000px) rotateY(-5deg) rotateX(2deg); }
        }

        @keyframes scanline {
          0% { top: -10%; }
          100% { top: 110%; }
        }

        @keyframes borderFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes typewrite {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        @keyframes particleFloat {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.6; }
          25% { transform: translateY(-30px) translateX(15px); opacity: 1; }
          50% { transform: translateY(-15px) translateX(-10px); opacity: 0.8; }
          75% { transform: translateY(-40px) translateX(5px); opacity: 0.4; }
        }

        @keyframes shimmer {
          from { background-position: -200% center; }
          to { background-position: 200% center; }
        }

        @keyframes spin3d {
          from { transform: perspective(600px) rotateY(0deg); }
          to { transform: perspective(600px) rotateY(360deg); }
        }

        @keyframes hexPulse {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.3; }
          50% { transform: scale(1.1) rotate(10deg); opacity: 0.6; }
        }

        .loaded { animation: slideIn 0.8s ease-out forwards; }

        .skill-card {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: default;
        }
        .skill-card:hover {
          transform: translateY(-12px) rotateX(5deg) rotateY(-5deg) scale(1.02);
          box-shadow: 0 30px 60px rgba(0,0,0,0.5);
        }

        .exp-card {
          transition: all 0.4s ease;
        }
        .exp-card:hover {
          transform: translateX(8px);
        }

        .proj-card {
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          perspective: 1000px;
        }
        .proj-card:hover {
          transform: translateY(-15px) rotateX(5deg);
          box-shadow: 0 40px 80px rgba(0,0,0,0.6);
        }

        .nav-btn {
          transition: all 0.3s ease;
          position: relative;
        }
        .nav-btn::after {
          content: '';
          position: absolute;
          bottom: -4px; left: 50%; right: 50%;
          height: 2px;
          background: linear-gradient(90deg, #00d4ff, #a855f7);
          transition: all 0.3s ease;
          border-radius: 2px;
        }
        .nav-btn:hover::after, .nav-btn.active::after {
          left: 0; right: 0;
        }
        .nav-btn:hover { color: #00d4ff !important; }
        .nav-btn.active { color: #00d4ff !important; }

        .contact-item {
          transition: all 0.3s ease;
        }
        .contact-item:hover {
          transform: translateY(-4px);
          background: rgba(0, 212, 255, 0.08) !important;
          border-color: rgba(0, 212, 255, 0.4) !important;
        }

        .glow-btn {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .glow-btn::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s ease;
        }
        .glow-btn:hover::before { left: 100%; }
        .glow-btn:hover { transform: translateY(-3px) scale(1.03); box-shadow: 0 15px 40px rgba(0, 212, 255, 0.4); }

        .particle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          animation: particleFloat var(--dur, 4s) ease-in-out infinite var(--delay, 0s);
        }

        .hex-bg {
          position: absolute;
          width: 300px; height: 300px;
          opacity: 0.06;
          animation: hexPulse 6s ease-in-out infinite;
        }

        .grid-line {
          position: absolute;
          background: linear-gradient(90deg, transparent, rgba(0,212,255,0.1), transparent);
        }

        .tag {
          transition: all 0.3s ease;
          cursor: default;
        }
        .tag:hover {
          background: rgba(0, 212, 255, 0.2) !important;
          color: #00d4ff !important;
          transform: scale(1.05);
        }

        .avatar-ring {
          animation: glowPulse 3s ease-in-out infinite;
        }

        .float-avatar {
          animation: floatUp 6s ease-in-out infinite;
        }

        .orbit-1 { animation: orbit 8s linear infinite; }
        .orbit-2 { animation: orbit2 12s linear infinite; }
        .orbit-3 { animation: orbit3 16s linear infinite; }

        .section-reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .section-reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .shimmer-text {
          background: linear-gradient(90deg, #e2e8f0 0%, #00d4ff 25%, #a855f7 50%, #00d4ff 75%, #e2e8f0 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        .rotate-3d {
          animation: rotateY 8s ease-in-out infinite;
        }
      `}</style>

      {/* Cursor glow */}
      <div style={{
        position: 'fixed', top: mousePos.y - 200, left: mousePos.x - 200,
        width: 400, height: 400, borderRadius: '50%', pointerEvents: 'none', zIndex: 0,
        background: 'radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)',
        transition: 'top 0.1s, left 0.1s',
      }} />

      {/* Background grid */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <svg width="100%" height="100%" style={{ opacity: 0.04 }}>
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#00d4ff" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        {/* Ambient orbs */}
        <div style={{ position: 'absolute', top: '10%', left: '15%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div style={{ position: 'absolute', bottom: '20%', right: '10%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,158,11,0.05) 0%, transparent 70%)', filter: 'blur(40px)', transform: 'translate(-50%, -50%)' }} />
      </div>

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: '0.875rem 0',
        background: 'rgba(3, 7, 18, 0.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(0,212,255,0.08)',
        transition: 'all 0.4s ease',
        boxShadow: isScrolled ? '0 4px 30px rgba(0,0,0,0.4)' : 'none',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-heading)', fontWeight: 800, letterSpacing: '-0.02em', flexShrink: 0 }}>
            <span style={{ fontSize: '1.5rem', color: '#00d4ff' }}>F</span>
            <span style={{ fontSize: '1.5rem', color: '#e2e8f0' }}>X</span>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#a855f7', boxShadow: '0 0 8px #a855f7', marginLeft: 2 }} />
          </div>
          {/* Nav links */}
          <div style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}>
            {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map(s => (
              <button key={s} className={`nav-btn ${activeSection === s ? 'active' : ''}`} onClick={() => scrollTo(s)} style={{
                background: activeSection === s ? 'rgba(0,212,255,0.08)' : 'none',
                border: 'none', cursor: 'pointer',
                color: activeSection === s ? '#00d4ff' : '#64748b',
                fontSize: '0.78rem', fontFamily: 'var(--font-body)', fontWeight: 600,
                textTransform: 'uppercase', letterSpacing: '0.1em',
                padding: '0.45rem 0.875rem', borderRadius: 6,
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => { if (activeSection !== s) { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}}
              onMouseLeave={e => { if (activeSection !== s) { e.currentTarget.style.color = '#64748b'; e.currentTarget.style.background = 'none'; }}}>
                {s}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <section id="home" ref={heroRef} style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', padding: '7rem 2rem 4rem' }}>
        {/* Floating particles */}
        {[...Array(18)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${5 + (i * 5.2) % 90}%`,
            top: `${10 + (i * 7.3) % 80}%`,
            width: `${2 + (i % 3)}px`, height: `${2 + (i % 3)}px`,
            background: i % 3 === 0 ? '#00d4ff' : i % 3 === 1 ? '#a855f7' : '#f59e0b',
            '--dur': `${3 + (i % 4)}s`, '--delay': `${(i % 3) * 0.8}s`,
            opacity: 0.3 + (i % 4) * 0.1,
          }} />
        ))}

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 860, width: '100%', textAlign: 'center', opacity: loaded ? 1 : 0, transition: 'opacity 0.8s ease 0.3s' }}>

          {/* Avatar with orbit rings — contained properly */}
          <div style={{ position: 'relative', width: 220, height: 220, margin: '0 auto 2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Static orbit rings */}
            <div style={{ position: 'absolute', width: 220, height: 220, border: '1px dashed rgba(0,212,255,0.25)', borderRadius: '50%' }} />
            <div style={{ position: 'absolute', width: 290, height: 290, border: '1px dashed rgba(168,85,247,0.15)', borderRadius: '50%' }} />
            <div style={{ position: 'absolute', width: 360, height: 360, border: '1px dashed rgba(245,158,11,0.1)', borderRadius: '50%' }} />

            {/* Orbiting dot 1 — rides the inner ring */}
            <div style={{ position: 'absolute', width: 220, height: 220, borderRadius: '50%', animation: 'spin 8s linear infinite', pointerEvents: 'none' }}>
              <div style={{ position: 'absolute', top: -6, left: '50%', marginLeft: -6, width: 12, height: 12, borderRadius: '50%', background: '#00d4ff', boxShadow: '0 0 12px #00d4ff' }} />
            </div>
            {/* Orbiting dot 2 — rides the middle ring */}
            <div style={{ position: 'absolute', width: 290, height: 290, borderRadius: '50%', animation: 'spin 13s linear infinite reverse', pointerEvents: 'none' }}>
              <div style={{ position: 'absolute', top: -5, left: '50%', marginLeft: -5, width: 10, height: 10, borderRadius: '50%', background: '#a855f7', boxShadow: '0 0 12px #a855f7' }} />
            </div>
            {/* Orbiting dot 3 — rides the outer ring */}
            <div style={{ position: 'absolute', width: 360, height: 360, borderRadius: '50%', animation: 'spin 18s linear infinite', pointerEvents: 'none' }}>
              <div style={{ position: 'absolute', top: -4, left: '50%', marginLeft: -4, width: 8, height: 8, borderRadius: '50%', background: '#f59e0b', boxShadow: '0 0 10px #f59e0b' }} />
            </div>

            {/* Profile circle */}
            <div className="float-avatar avatar-ring" style={{
  width: 150, height: 150, borderRadius: '50%',
  border: '2px solid rgba(0,212,255,0.45)',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  position: 'relative', zIndex: 3,
  overflow: 'hidden',        // ✅ clips image to circle
  backdropFilter: 'blur(12px)',
}}>
  <img
    src={frankPhoto}         // ✅ imported variable, not a string path
    alt="Franklin Xavier"    // ✅ fixed comment syntax
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  />
  {/* ❌ removed <span>FX</span> — image replaces it */}
</div>
          </div>

          {/* Status badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: 100, padding: '0.35rem 1rem', marginBottom: '1.5rem', fontSize: '0.75rem', color: '#10b981', fontFamily: 'var(--font-mono)', fontWeight: 600, letterSpacing: '0.05em' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981', animation: 'blink 2s infinite' }} />
            AVAILABLE FOR NEW OPPORTUNITIES
          </div>

          <p style={{ color: '#00d4ff', fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.18em', marginBottom: '0.75rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>
            Hello, I'm
          </p>

          <h1 className="shimmer-text" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
            Franklin Xavier
          </h1>

          <div style={{ fontSize: 'clamp(1.2rem, 3vw, 1.75rem)', color: '#94a3b8', marginBottom: '1.5rem', fontWeight: 400, letterSpacing: '-0.01em' }}>
            <span style={{ color: '#e2e8f0' }}>Full Stack Developer</span>
            <span style={{ color: '#00d4ff', margin: '0 0.75rem' }}>×</span>
            <span style={{ color: '#e2e8f0' }}>Data Analyst</span>
            <span style={{ color: '#a855f7', margin: '0 0.75rem' }}>×</span>
            <span style={{ color: '#e2e8f0' }}>Cloud Engineer</span>
          </div>

          <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.8, maxWidth: 600, margin: '0 auto 2.5rem', fontFamily: 'var(--font-body)' }}>
            1+ years crafting scalable web applications with <span style={{ color: '#00d4ff' }}>.NET</span>, <span style={{ color: '#a855f7' }}>React.js</span>, and <span style={{ color: '#f59e0b' }}>AWS</span>. Transforming ideas into high-performance digital products.
          </p>

          {/* Stats */}
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
            {[
              { n: '1+', l: 'Years Exp', c: '#00d4ff' },
              { n: '10+', l: 'Projects', c: '#a855f7' },
              { n: '15+', l: 'Technologies', c: '#f59e0b' },
              { n: '4', l: 'Certifications', c: '#10b981' },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: s.c, fontFamily: 'var(--font-heading)', lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontSize: '0.75rem', color: '#475569', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '0.25rem' }}>{s.l}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <button className="glow-btn" onClick={() => scrollTo('contact')} style={{
              padding: '0.875rem 2rem', borderRadius: 8,
              background: 'linear-gradient(135deg, #00d4ff, #0099bb)',
              border: 'none', color: '#000', fontWeight: 700, fontSize: '0.9rem',
              fontFamily: 'var(--font-heading)', letterSpacing: '0.05em', cursor: 'pointer',
              textTransform: 'uppercase',
            }}>
              Get In Touch →
            </button>
            <button className="glow-btn" onClick={() => scrollTo('projects')} style={{
              padding: '0.875rem 2rem', borderRadius: 8,
              background: 'transparent', border: '1px solid rgba(168,85,247,0.5)',
              color: '#a855f7', fontWeight: 700, fontSize: '0.9rem',
              fontFamily: 'var(--font-heading)', letterSpacing: '0.05em', cursor: 'pointer',
              textTransform: 'uppercase',
            }}>
              View Projects
            </button>
          </div>

          {/* Social */}
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            {[
              { label: 'LI', url: 'https://linkedin.com/in/franklin-xavier-44a474269', color: '#00d4ff' },
              { label: 'GH', url: 'https://github.com/xavierfrank-825', color: '#a855f7' },
              { label: '✉', url: 'mailto:xfrank715@gmail.com', color: '#f59e0b' },
            ].map((s, i) => (
              <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" style={{
                width: 44, height: 44, borderRadius: 10,
                background: `${s.color}11`, border: `1px solid ${s.color}33`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: s.color, fontWeight: 800, fontSize: '0.85rem',
                textDecoration: 'none', transition: 'all 0.3s ease',
                fontFamily: 'var(--font-heading)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = `${s.color}22`; e.currentTarget.style.transform = 'translateY(-4px) scale(1.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = `${s.color}11`; e.currentTarget.style.transform = 'none'; }}>
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', color: '#334155', fontSize: '0.7rem', letterSpacing: '0.1em', fontFamily: 'var(--font-heading)' }}>
          <span>SCROLL</span>
          <div style={{ width: 1, height: 40, background: 'linear-gradient(#00d4ff, transparent)', animation: 'blink 2s infinite' }} />
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section id="about" style={{ padding: '6rem 2rem', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeader label="Who I Am" title="About Me" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            {/* Left: 3D card */}
            <div className="rotate-3d" style={{
              background: 'linear-gradient(135deg, rgba(0,212,255,0.05), rgba(168,85,247,0.05))',
              border: '1px solid rgba(0,212,255,0.15)', borderRadius: 20,
              padding: '2.5rem', position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent, #00d4ff, transparent)' }} />
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>👨‍💻</div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#e2e8f0' }}>Franklin Xavier A</h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.7, fontFamily: 'var(--font-body)', marginBottom: '1.5rem' }}>
                Motivated Software Engineer with 1+ years of hands-on experience in full-stack development with AI integration and data analytics. Proficient in building robust web applications and delivering data-driven insights.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['B.C.A. — Loyola College', 'CGPA: 8.9/10', 'Bangalore · Chennai · Kerala', '+91-9003476551'].map((t, i) => (
                  <span key={i} className="tag" style={{
                    padding: '0.3rem 0.75rem', borderRadius: 6,
                    background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)',
                    fontSize: '0.8rem', color: '#94a3b8', fontFamily: 'var(--font-body)',
                  }}>{t}</span>
                ))}
              </div>
              <div style={{ position: 'absolute', bottom: -40, right: -40, width: 120, height: 120, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,255,0.1), transparent)', filter: 'blur(20px)' }} />
            </div>

            {/* Right: details */}
            <div>
              <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.8, fontFamily: 'var(--font-body)', marginBottom: '2rem' }}>
                I specialize in building scalable, high-performance web applications with clean architecture, secure APIs, and seamless cloud deployment. My background blends strong engineering principles with data analytics capabilities — letting me deliver both intelligent systems and meaningful insights.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                {[
                  { label: 'Languages', value: 'English, Tamil, Hindi, Kannada' },
                  { label: 'Education', value: 'B.C.A. Loyola College' },
                  { label: 'Specialization', value: 'Full Stack + Data Analytics' },
                  { label: 'Location', value: 'Bangalore · Chennai · Kerala' },
                ].map((item, i) => (
                  <div key={i} style={{ padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: 10, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ fontSize: '0.7rem', color: '#00d4ff', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.3rem', fontFamily: 'var(--font-heading)' }}>{item.label}</div>
                    <div style={{ fontSize: '0.9rem', color: '#e2e8f0', fontFamily: 'var(--font-body)' }}>{item.value}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {['Data Analyst — Besant Technologies', 'Python — BDZ', 'Django — BDZ'].map((c, i) => (
                  <span key={i} style={{
                    padding: '0.4rem 0.875rem', borderRadius: 6,
                    background: 'linear-gradient(135deg, rgba(168,85,247,0.1), rgba(0,212,255,0.1))',
                    border: '1px solid rgba(168,85,247,0.3)',
                    fontSize: '0.78rem', color: '#a855f7', fontWeight: 600, fontFamily: 'var(--font-body)',
                  }}>🏆 {c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SKILLS ═══ */}
      <section id="skills" style={{ padding: '6rem 2rem', background: 'rgba(0,212,255,0.02)', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeader label="What I Know" title="Technical Skills" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {skills.map((cat, idx) => (
              <div key={idx} className="skill-card" style={{
                padding: '1.75rem', borderRadius: 16,
                background: `linear-gradient(135deg, ${cat.color}08, ${cat.color}03)`,
                border: `1px solid ${cat.color}22`,
                transformStyle: 'preserve-3d',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.25rem' }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: `${cat.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', border: `1px solid ${cat.color}30` }}>
                    {cat.icon}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, color: cat.color, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{cat.title}</h3>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {cat.skills.map((s, i) => (
                    <span key={i} className="tag" style={{
                      padding: '0.3rem 0.7rem', borderRadius: 6,
                      background: `${cat.color}10`, border: `1px solid ${cat.color}25`,
                      fontSize: '0.78rem', color: '#94a3b8', fontFamily: 'var(--font-body)',
                    }}>{s}</span>
                  ))}
                </div>
                <div style={{ position: 'absolute', top: 16, right: 16, width: 60, height: 60, borderRadius: '50%', background: `radial-gradient(circle, ${cat.color}15, transparent)`, filter: 'blur(15px)' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ EXPERIENCE ═══ */}
      <section id="experience" style={{ padding: '6rem 2rem', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeader label="My Journey" title="Professional Experience" />
          <div style={{ position: 'relative' }}>
            {/* Timeline line */}
            <div style={{ position: 'absolute', left: 24, top: 0, bottom: 0, width: 2, background: 'linear-gradient(to bottom, #00d4ff, #a855f7, #f59e0b, #10b981)', opacity: 0.3, borderRadius: 2 }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', paddingLeft: '4rem' }}>
              {experience.map((exp, idx) => (
                <div key={idx} className="exp-card" style={{ position: 'relative' }}>
                  {/* Dot */}
                  <div style={{
                    position: 'absolute', left: -42, top: 24, width: 14, height: 14, borderRadius: '50%',
                    background: exp.color, boxShadow: `0 0 15px ${exp.color}88`,
                    border: '2px solid #030712',
                  }} />
                  <div style={{
                    padding: '1.75rem', borderRadius: 14,
                    background: `linear-gradient(135deg, ${exp.color}06, rgba(255,255,255,0.01))`,
                    border: `1px solid ${exp.color}18`,
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <div>
                        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '0.25rem' }}>{exp.role}</h3>
                        <p style={{ color: exp.color, fontSize: '0.9rem', fontWeight: 600, fontFamily: 'var(--font-body)' }}>{exp.company}</p>
                      </div>
                      <span style={{
                        padding: '0.3rem 0.875rem', borderRadius: 100,
                        background: `${exp.color}12`, border: `1px solid ${exp.color}30`,
                        fontSize: '0.75rem', color: exp.color, fontWeight: 700,
                        fontFamily: 'var(--font-mono)', whiteSpace: 'nowrap',
                      }}>{exp.period}</span>
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {exp.points.map((p, i) => (
                        <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', color: '#64748b', fontSize: '0.9rem', lineHeight: 1.6, fontFamily: 'var(--font-body)' }}>
                          <span style={{ color: exp.color, marginTop: '0.3rem', flexShrink: 0, fontSize: '0.7rem' }}>▸</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROJECTS ═══ */}
      <section id="projects" style={{ padding: '6rem 2rem', background: 'rgba(168,85,247,0.02)', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeader label="What I've Built" title="Featured Projects" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {projects.map((proj, idx) => (
              <div key={idx} className="proj-card" style={{
                padding: '2rem', borderRadius: 16,
                background: proj.grad, border: `1px solid ${proj.color}20`,
                display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden',
              }}>
                <div style={{ position: 'absolute', top: -30, right: -30, width: 100, height: 100, borderRadius: '50%', background: `radial-gradient(circle, ${proj.color}20, transparent)`, filter: 'blur(20px)' }} />
                <div style={{ width: 52, height: 52, borderRadius: 12, background: `${proj.color}15`, border: `1px solid ${proj.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: '1.25rem' }}>
                  {proj.icon}
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '0.5rem' }}>{proj.title}</h3>
                <p style={{ fontSize: '0.75rem', color: proj.color, fontWeight: 600, marginBottom: '0.875rem', fontFamily: 'var(--font-body)', letterSpacing: '0.03em' }}>{proj.tech}</p>
                <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.7, fontFamily: 'var(--font-body)', flex: 1 }}>{proj.desc}</p>
                <div style={{ marginTop: '1.5rem', height: 1, background: `linear-gradient(90deg, ${proj.color}30, transparent)` }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section id="contact" style={{ padding: '6rem 2rem', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <SectionHeader label="Let's Talk" title="Get In Touch" />

          <p style={{ color: '#64748b', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '3rem', fontFamily: 'var(--font-body)' }}>
            I'm actively seeking new opportunities and collaborations. Whether you have a project in mind, a role to discuss, or just want to say hi — my inbox is always open.
          </p>

          {/* Contact cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
            {[
              { icon: '📞', label: 'Call Me', value: '+91-9003476551', color: '#00d4ff', href: 'tel:+919003476551' },
              { icon: '✉️', label: 'Email Me', value: 'xfrank715@gmail.com', color: '#a855f7', href: 'mailto:xfrank715@gmail.com' },
              { icon: '📍', label: 'Location', value: 'Bangalore ', color: '#f59e0b', href: '#' },
            ].map((c, i) => (
              <a key={i} href={c.href} className="contact-item" style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
                padding: '1.5rem', borderRadius: 14, textDecoration: 'none',
                background: `${c.color}08`, border: `1px solid ${c.color}20`,
              }}>
                <span style={{ fontSize: '1.5rem' }}>{c.icon}</span>
                <span style={{ fontSize: '0.7rem', color: c.color, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'var(--font-heading)' }}>{c.label}</span>
                <span style={{ fontSize: '0.85rem', color: '#94a3b8', fontFamily: 'var(--font-body)' }}>{c.value}</span>
              </a>
            ))}
          </div>

          {/* Social row */}
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '3rem' }}>
            {[
              { label: 'LinkedIn', url: 'https://linkedin.com/in/franklin-xavier-44a474269', color: '#00d4ff', icon: 'in' },
              { label: 'GitHub', url: 'https://github.com/xavierfrank-825', color: '#a855f7', icon: '⌥' },
            ].map((s, i) => (
              <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.75rem 1.5rem', borderRadius: 10, textDecoration: 'none',
                background: `${s.color}10`, border: `1px solid ${s.color}30`,
                color: s.color, fontSize: '0.9rem', fontWeight: 600,
                fontFamily: 'var(--font-heading)', transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.background = `${s.color}20`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.background = `${s.color}10`; }}>
                <span style={{ fontSize: '0.85rem' }}>{s.icon}</span> {s.label}
              </a>
            ))}
          </div>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.25)', borderRadius: 100, padding: '0.5rem 1.25rem', fontSize: '0.8rem', color: '#10b981', fontFamily: 'var(--font-mono)', fontWeight: 500 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981', animation: 'blink 2s infinite' }} />
            Currently available · Bangalore · Chennai · Kerala · Remote
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '2rem', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', background: '#020609' }}>
        <p style={{ color: '#475569', fontSize: '0.82rem', fontFamily: 'var(--font-body)' }}>
          © 2025 <span style={{ color: '#00d4ff' }}>Franklin Xavier A</span> · Built with React.js · Bangalore 
        </p>
      </footer>
    </div>
  );
}

function SectionHeader({ label, title }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
      <p style={{ color: '#00d4ff', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.75rem', fontFamily: 'var(--font-mono)' }}>
        — {label} —
      </p>
      <h2 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800,
        background: 'linear-gradient(135deg, #e2e8f0 30%, #64748b 100%)',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        letterSpacing: '-0.02em', lineHeight: 1.1,
      }}>
        {title}
      </h2>
      <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #00d4ff, #a855f7)', borderRadius: 2, margin: '1rem auto 0' }} />
    </div>
  );
}