import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const LPageHeader = ({ title, accent, sub }) => (
  <div className="lpage-header" style={{ background:'linear-gradient(135deg,#0a1628 0%,#0d2040 100%)', padding:'var(--section-py) var(--section-px)', position:'relative', overflow:'hidden' }}>
    <div className="igrid" style={{ position:'absolute', inset:0, opacity:0.15 }} />
    <div className="container-max" style={{ position:'relative' }}>
      <ScrollReveal animation="fade-down">
        <h1 className="bb" style={{ fontSize:'clamp(56px,8vw,104px)', lineHeight:0.88, color:'white', marginBottom:20 }}>
          {title} <span style={{color:'#0088ff'}}>{accent}</span>
        </h1>
      </ScrollReveal>
      <ScrollReveal animation="fade-up" delay={0.2}>
        <p style={{ color:'rgba(255,255,255,0.45)', maxWidth:560, fontSize:17, fontWeight:300, lineHeight:1.8 }}>{sub}</p>
      </ScrollReveal>
    </div>
  </div>
);
