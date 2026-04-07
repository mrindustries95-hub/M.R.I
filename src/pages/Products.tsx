import React, { useState } from "react";
import { motion } from "motion/react";
import { IconArrow, IconCheck, IconGlobe, IconLayers, IconPackage } from "../components/Icons";
import { LPageHeader } from "../components/LPageHeader";
import { ScrollReveal } from "../components/ScrollReveal";
import { MagneticButton } from "../components/MagneticButton";

export const Products = ({ openQuote }) => {
  const [filter, setFilter] = useState('All');
  const cats = ['All','MS Spares','SS Fittings','Flanges'];
  const products = [
    {name:'Heavy Duty MS Spares',cat:'MS Spares',desc:'Industrial grade mild steel spares for borewell systems with high tensile strength.',img:'https://picsum.photos/seed/pp1/600/400'},
    {name:'SS 304 Fittings',cat:'SS Fittings',desc:'Premium stainless steel fittings for chemical resistance and high-pressure control.',img:'https://picsum.photos/seed/pp2/600/400'},
    {name:'M.R Industries Flanges',cat:'Flanges',desc:'High-accuracy flanges to IS/DIN/BS standards for industrial pipe connections.',img:'https://picsum.photos/seed/pp3/600/400'},
    {name:'MS Threaded Pipes',cat:'MS Spares',desc:'Durable threaded pipes for secure borewell assembly and structural integrity.',img:'https://picsum.photos/seed/pp4/600/400'},
    {name:'SS Valve Components',cat:'SS Fittings',desc:'M.R Industries valve parts for fluid control in corrosive industrial environments.',img:'https://picsum.photos/seed/pp5/600/400'},
    {name:'MS Industrial Adapters',cat:'MS Spares',desc:'Versatile adapters for seamless integration between industrial piping systems.',img:'https://picsum.photos/seed/pp6/600/400'},
  ];
  const filtered = filter==='All' ? products : products.filter(p=>p.cat===filter);
  return (
    <>
      <LPageHeader title="INDUSTRIAL" accent="INVENTORY" sub="A comprehensive catalogue of precision-engineered spares and components." />
      <div style={{ background:'white', borderBottom:'1px solid #d0dce8', position:'sticky', top:72, zIndex:40 }}>
        <div className="container-max" style={{ padding:'16px var(--section-px)', display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'wrap', gap:12 }}>
          <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
            {cats.map(c => <button key={c} onClick={()=>setFilter(c)} className={`fpill ${filter===c?'on':'off'}`}>{c}</button>)}
          </div>
        </div>
      </div>
      <div className="section-padding">
        <div className="container-max">
          <div style={{ display:'grid', gap:24 }} className="grid-3">
            {filtered.map((p,i) => (
              <ScrollReveal key={p.name} animation="fade-up" delay={i * 0.05}>
                <div className="lpcard">
                  <div className="lpimg" style={{ position:'relative', overflow:'hidden', height:200 }}>
                    <img src={p.img} alt={p.name} style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} referrerPolicy="no-referrer" />
                  </div>
                  <div style={{ padding:'24px 28px 28px' }}>
                    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:12 }}>
                      <h3 className="bc" style={{ fontWeight:800, fontSize:20, color:'#0a1628', textTransform:'uppercase', letterSpacing:'0.03em', lineHeight:1.2 }}>{p.name}</h3>
                      <span className="bc" style={{ background:'#0099cc', color:'white', fontSize:9, fontWeight:700, letterSpacing:'0.15em', textTransform:'uppercase', padding:'3px 10px', flexShrink:0, marginLeft:8, borderRadius:2 }}>{p.cat}</span>
                    </div>
                    <p style={{ fontSize:14, color:'#5a7080', lineHeight:1.75, marginBottom:20 }}>{p.desc}</p>
                    <button className="bc" style={{ background:'none', border:'none', cursor:'pointer', fontWeight:700, fontSize:11, letterSpacing:'0.2em', textTransform:'uppercase', color:'#0099cc', display:'flex', alignItems:'center', gap:8 }}>
                      View Details <IconArrow size={14}/>
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
      <div style={{ background:'#e4ecf4', borderTop:'1px solid #d0dce8', borderBottom:'1px solid #d0dce8' }} className="banner-padding">
        <div className="grid-4 container-max">
          {[
            {icon:<IconPackage/>,label:'Material',val:'MS / SS'},
            {icon:<IconCheck/>,label:'Finish',val:'Zinc Plated'},
            {icon:<IconGlobe/>,label:'Standards',val:'IS / DIN / BS'},
            {icon:<IconLayers/>,label:'MOQ',val:'10 Units'},
          ].map((s,i) => (
            <ScrollReveal key={i} animation="fade-right" delay={i * 0.1}>
              <div style={{ display:'flex', alignItems:'center', gap:16, padding:'0 32px', borderRight:i<3?'1px solid #d0dce8':'none' }}>
                <div style={{color:'#0099cc'}}>{s.icon}</div>
                <div>
                  <div className="bc" style={{ fontWeight:700, fontSize:10, letterSpacing:'0.2em', textTransform:'uppercase', color:'#7a8a9a' }}>{s.label}</div>
                  <div className="bc" style={{ fontWeight:800, fontSize:17, color:'#0a1628' }}>{s.val}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
      <div className="section-padding">
        <div className="container-max">
        <ScrollReveal animation="zoom-in">
          <div style={{ maxWidth:760, margin:'0 auto', background:'linear-gradient(135deg,#0a1628,#0d2040)', padding:'72px 60px', textAlign:'center', position:'relative', overflow:'hidden' }}>
            <div className="igrid" style={{ position:'absolute', inset:0, opacity:0.1 }} />
            <div style={{ position:'relative' }}>
              <h2 className="bb" style={{ fontSize:56, color:'white', marginBottom:16 }}>
                Need a <span style={{color:'#0088ff'}}>Custom</span> Spec?
              </h2>
              <p style={{ color:'rgba(255,255,255,0.45)', marginBottom:40, fontSize:16 }}>Our team manufactures to your exact blueprints.</p>
              <div style={{ display:'flex', gap:16, justifyContent:'center', flexWrap:'wrap' }}>
                <MagneticButton>
                  <button className="btn-p" onClick={openQuote}><span>Request Quote</span></button>
                </MagneticButton>
                <MagneticButton>
                  <button className="btn-g">Download Catalogue</button>
                </MagneticButton>
              </div>
            </div>
          </div>
        </ScrollReveal>
        </div>
      </div>
    </>
  );
};
