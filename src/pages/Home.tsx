import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { IconArrow, IconCpu, IconShield, IconWrench } from "../components/Icons";
import { ScrollReveal } from "../components/ScrollReveal";
import { MagneticButton } from "../components/MagneticButton";

const DottedParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; size: number; opacity: number; speed: number }[] = [];
    const particleCount = 120;

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.5 + 0.1,
          speed: Math.random() * 0.2 + 0.05
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.y -= p.speed;
        if (p.y < 0) p.y = canvas.height;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 136, 255, ${p.opacity})`;
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', init);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', init);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1
      }}
    />
  );
};

const useNeonTypewriter = (speed = 120) => {
  useEffect(() => {
    const lh  = document.getElementById('line-heavy');
    const ld  = document.getElementById('line-duty');
    const sub = document.getElementById('g-subtitle');
    if (!lh || !ld) return;

    const timers: NodeJS.Timeout[] = [];

    const buildLine = (el: HTMLElement, word: string) => {
      el.innerHTML = '';
      for (let ch of word) {
        const s = document.createElement('span');
        s.className = 'nl';
        s.textContent = ch;
        el.appendChild(s);
      }
      return Array.from(el.querySelectorAll('.nl')) as HTMLElement[];
    };

    const typeLetter = (span: HTMLElement, glowClass: string, delay: number) => {
      timers.push(setTimeout(() => {
        span.classList.add('lit');
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            span.classList.add(glowClass);
          });
        });
      }, delay));
    };

    const typeWord = (letters: HTMLElement[], glowClass: string, startDelay: number, onDone: () => void) => {
      letters.forEach((s, i) => {
        typeLetter(s, glowClass, startDelay + i * speed);
      });
      const total = startDelay + (letters.length - 1) * speed + 700;
      timers.push(setTimeout(() => {
        onDone();
      }, total));
    };

    const hL = buildLine(lh, 'PRECISION');
    const dL = buildLine(ld, 'ENGINEERING');
    if (sub) sub.classList.remove('visible');

    typeWord(hL, 'glow-white', 300, () => {
      typeWord(dL, 'glow-cyan', 0, () => {
        timers.push(setTimeout(() => sub?.classList.add('visible'), 300));
      });
    });

    return () => timers.forEach(clearTimeout);
  }, [speed]);
};

const Hero = ({ openQuote }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target:ref, offset:['start start','end start'] });
  const bgY = useTransform(scrollYProgress,[0,1],['0%','25%']);
  const fade = useTransform(scrollYProgress,[0,0.7],[1,0]);

  useNeonTypewriter(120);

  return (
    <section ref={ref} className="g-hero-wrap" style={{ minHeight:'100vh', position:'relative', display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden', textAlign:'center' }}>
      <DottedParticles />

      {/* Left accent */}
      <motion.div style={{ position:'absolute', left:0, top:0, width:3, height:'100%',
        background:'linear-gradient(to bottom,transparent,#0088ff 30%,#0088ff 70%,transparent)', y:bgY }} />

      {/* Big BG text */}
      <motion.div className="bb" style={{
        position:'absolute', right:'-3%', top:'50%',
        fontSize:'clamp(160px,28vw,380px)', color:'rgba(0,136,255,0.035)',
        lineHeight:1, userSelect:'none', pointerEvents:'none', y:bgY,
        transform:'translateY(-50%)'
      }}>BORE</motion.div>

      {/* Radial glow */}
      <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 700px 500px at 50% 50%, rgba(0,136,255,0.08) 0%, transparent 70%)', pointerEvents:'none' }} />

      <motion.div style={{ opacity:fade, position:'relative', zIndex:10, display:'flex', flexDirection:'column', alignItems:'center' }} className="section-padding container-max">
        <motion.div initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} transition={{duration:0.6}}
          className="sec-label" style={{marginBottom:32}}>
          M.R Industries Industrial Solutions — Est. 1995
        </motion.div>

        {/* ── NEON HEADLINE — IDs are required for the hook ── */}
        <div style={{ position:'relative', width:'100%' }}>
          <span
            id="line-heavy"
            className="bb"
            style={{
              display: 'block',
              fontSize: 'clamp(96px,17vw,220px)',
              lineHeight: 0.88,
            }}
          />
          <span
            id="line-duty"
            className="bb"
            style={{
              display: 'block',
              fontSize: 'clamp(96px,17vw,220px)',
              lineHeight: 0.88,
              marginTop: -12,
            }}
          />
          <span id="g-subtitle" className="g-sub">
            excellence.
          </span>
        </div>

        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2.8}}
          style={{ maxWidth:600, fontSize:17, lineHeight:1.85, color:'rgba(200,216,232,0.5)', margin:'44px auto 52px', fontWeight:300 }}>
          Specialized borewell spares and precision MS/SS components engineered for extreme durability and industrial-grade performance.
        </motion.p>

        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:3.0}}
          style={{ display:'flex', gap:16, flexWrap:'wrap', alignItems:'center', justifyContent:'center' }}>
          <MagneticButton>
            <button className="btn-p"><span>View Catalogue <IconArrow size={16}/></span></button>
          </MagneticButton>
          <MagneticButton>
            <button className="btn-g" onClick={openQuote}>Direct Inquiry</button>
          </MagneticButton>
        </motion.div>

        <div style={{ position:'absolute', right:24, bottom:40, display:'flex', flexDirection:'column', alignItems:'center', gap:12 }}>
          <motion.div animate={{y:[0,12,0]}} transition={{repeat:Infinity,duration:2.5}}
            style={{ width:1, height:60, background:'linear-gradient(to bottom,#0088ff,transparent)' }} />
          <span className="vt bc" style={{ fontSize:10, letterSpacing:'0.35em', textTransform:'uppercase', color:'rgba(200,216,232,0.25)', fontWeight:700 }}>Scroll</span>
        </div>
      </motion.div>
    </section>
  );
};

const Marquee = () => {
  const items = ['M.R INDUSTRIES ENGINEERING','ISO 9001 CERTIFIED','MS / SS COMPONENTS','BOREWELL SPARES','PAN-INDIA SUPPLY','CUSTOM FABRICATION','20+ YEARS'];
  const doubled = [...items,...items];
  return (
    <div style={{ background:'#0088ff', padding:'14px 0', overflow:'hidden', flexShrink:0 }}>
      <div className="mq-track">
        {doubled.map((item,i) => (
          <span key={i} className="bb" style={{ fontSize:16, letterSpacing:'0.15em', color:'#06080f', padding:'0 36px', display:'inline-flex', alignItems:'center', gap:36 }}>
            {item} <span style={{ display:'inline-block', width:6, height:6, background:'rgba(6,8,15,0.4)', borderRadius:'50%' }} />
          </span>
        ))}
      </div>
    </div>
  );
};

const Stats = () => {
  const [vis, setVis] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e])=>{if(e.isIntersecting) setVis(true);},{threshold:0.3});
    if(ref.current) obs.observe(ref.current);
    return ()=>obs.disconnect();
  },[]);

  const stats = [
    {val:'30+',label:'Years Experience',sub:'Since 1995'},
    {val:'5000+',label:'Products',sub:'In Catalogue'},
    {val:'9001',label:'ISO Certified',sub:'Quality Mgmt'},
    {val:'100%',label:'Pan-India',sub:'Coverage'},
  ];

  return (
    <div ref={ref} style={{ background:'#0b0f1c', borderTop:'1px solid rgba(0,136,255,0.12)', borderBottom:'1px solid rgba(0,136,255,0.12)' }}>
      <div className="grid-4 container-max">
        {stats.map((s,i) => (
          <motion.div key={i} initial={{opacity:0,y:20}} animate={vis?{opacity:1,y:0}:{}} transition={{delay:i*0.1}}
            className="stats-item banner-padding"
            style={{ borderRight:i<3?'1px solid rgba(0,136,255,0.1)':'none', textAlign:'center', position:'relative' }}>
            <div style={{ position:'absolute', top:0, left:'25%', right:'25%', height:2, background:i===0?'#0088ff':'transparent' }} />
            <div className="bb" style={{ fontSize:'clamp(44px,5vw,68px)', color:'#0088ff', lineHeight:1 }}>{s.val}</div>
            <div className="bc" style={{ fontWeight:700, fontSize:12, letterSpacing:'0.2em', textTransform:'uppercase', color:'white', marginTop:10 }}>{s.label}</div>
            <div style={{ fontSize:11, color:'rgba(200,216,232,0.25)', marginTop:4, letterSpacing:'0.08em' }}>{s.sub}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Features = () => {
  const feats = [
    {icon:<IconCpu size={40}/>,title:'M.R Industries Engineering',desc:'CNC-machined components with micron-level accuracy for guaranteed fit and performance.'},
    {icon:<IconShield size={40}/>,title:'Durability Tested',desc:'Rigorous stress, pressure, and corrosion testing before every shipment from our plant.'},
    {icon:<IconWrench size={40}/>,title:'Custom Fabrication',desc:'From blueprint to component — any dimension, any material, any quantity, any standard.'},
  ];
  return (
    <section style={{ background:'white', borderTop:'1px solid #e0e8f0' }} className="section-padding">
      <div className="container-max">
        <ScrollReveal animation="fade-down">
          <div className="sec-label" style={{marginBottom:60}}>Why M.R Industries</div>
        </ScrollReveal>
        <div style={{ display:'grid', gap:1, background:'#e0e8f0' }} className="grid-3">
          {feats.map((f,i) => (
            <ScrollReveal key={i} animation="zoom-in" delay={i * 0.1}>
              <div className="fcard-light">
                <div className="ficon" style={{ marginBottom:32 }}>{f.icon}</div>
                <h3 className="bc" style={{ fontWeight:800, fontSize:26, color:'#06080f', marginBottom:16, letterSpacing:'0.04em', textTransform:'uppercase' }}>{f.title}</h3>
                <p style={{ fontSize:15, lineHeight:1.8, color:'#4a5568', fontWeight:300 }}>{f.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = ({ openQuote }) => (
  <section style={{ background:'#06080f', position:'relative', overflow:'hidden' }} className="section-padding">
    <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 900px 500px at 50% 50%,rgba(0,136,255,0.08) 0%,transparent 70%)' }} />
    <div style={{ position:'relative' }} className="container-max">
      <div className="sec-label" style={{marginBottom:32}}>Custom Manufacturing</div>
      <h2 className="bb" style={{ fontSize:'clamp(56px,9vw,128px)', lineHeight:0.88, color:'white', marginBottom:36 }}>
        NEED <span style={{color:'#0088ff'}}>CUSTOM</span><br />COMPONENTS?
      </h2>
      <p style={{ fontSize:18, color:'rgba(200,216,232,0.45)', lineHeight:1.85, maxWidth:540, margin:'0 auto 60px', fontWeight:300 }}>
        We fabricate to your exact specifications — MS, SS, any dimension, any standard. From single prototypes to bulk orders.
      </p>
      <div style={{ display:'flex', gap:16, justifyContent:'center', flexWrap:'wrap' }}>
        <MagneticButton>
          <button className="btn-p" onClick={openQuote}><span>Request Customization</span></button>
        </MagneticButton>
        <MagneticButton>
          <button className="btn-g">Download Catalogue</button>
        </MagneticButton>
      </div>
    </div>
  </section>
);

export const Home = ({ setPage, openQuote }) => {
  return (
    <>
      <Hero openQuote={openQuote} />
      <Marquee />
      <Stats />
      <Features />
      <CTA openQuote={openQuote} />
    </>
  );
};
