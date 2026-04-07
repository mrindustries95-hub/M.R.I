import React from 'react';
import { IconCheck } from "../components/Icons";
import { LPageHeader } from "../components/LPageHeader";
import { ScrollReveal } from "../components/ScrollReveal";
import { MagneticButton } from "../components/MagneticButton";

export const Customization = ({ openQuote }) => (
  <>
    <LPageHeader title="CUSTOM" accent="FABRICATION" sub="Tailored engineering solutions for unique industrial challenges." />
    <div className="section-padding">
      <div className="container-max">
        <div style={{ display:'grid', gap:80, alignItems:'center' }} className="grid-2">
        <ScrollReveal animation="fade-right">
          <div>
            <div className="sec-label" style={{ marginBottom:20, '--c-cyan':'#0099cc', '--c-border':'none' } as any}>
              <span style={{ width:32, height:1, background:'#0099cc', display:'inline-block' }} />
              <span style={{ color:'#0099cc' }}>Bespoke Engineering</span>
            </div>
            <h2 className="bb" style={{ fontSize:'clamp(48px,6vw,80px)', lineHeight:0.9, color:'#0a1628', marginBottom:32 }}>
              YOUR SPEC,<br /><span style={{color:'#0099cc'}}>OUR CRAFT</span>
            </h2>
            <p style={{ color:'#5a7080', lineHeight:1.85, marginBottom:32, fontSize:16 }}>
              Standard components don't always fit specialized projects. Our facility handles custom MS and SS fabrication with extreme precision — from single prototype to batch production.
            </p>
            {['Custom dimensions and thread patterns','SS 316, High-Tensile MS available','Specialized coatings and surface finishes','Rapid prototyping and bulk production'].map((item,i) => (
              <div key={i} style={{ display:'flex', alignItems:'center', gap:12, marginBottom:14 }}>
                <div style={{ width:24, height:24, background:'#e4ecf4', borderRadius:2, display:'flex', alignItems:'center', justifyContent:'center', color:'#0099cc', flexShrink:0 }}><IconCheck size={14}/></div>
                <span style={{ color:'#3a4a5c', fontSize:15 }}>{item}</span>
              </div>
            ))}
            <MagneticButton style={{ marginTop: 40 }}>
              <button className="lbtn-p" onClick={openQuote}><span>Start Custom Project →</span></button>
            </MagneticButton>
          </div>
        </ScrollReveal>
        <ScrollReveal animation="fade-left" delay={0.2}>
          <div style={{ position:'relative' }}>
            <div style={{ position:'absolute', top:-20, left:-20, right:20, bottom:20, border:'1px solid rgba(0,153,204,0.2)', borderRadius:2 }} />
            <img src="https://picsum.photos/seed/fab99/800/600" alt="Fabrication" style={{ width:'100%', borderRadius:2, display:'block', filter:'grayscale(40%)' }} referrerPolicy="no-referrer" />
            <div style={{ position:'absolute', bottom:-20, right:-20, background:'#0088ff', padding:'20px 28px' }}>
              <div className="bb" style={{ fontSize:36, color:'#06080f', lineHeight:1 }}>20+</div>
              <div className="bc" style={{ fontWeight:700, fontSize:10, letterSpacing:'0.2em', textTransform:'uppercase', color:'#06080f' }}>Years Experience</div>
            </div>
          </div>
        </ScrollReveal>
        </div>
      </div>
    </div>
  </>
);
