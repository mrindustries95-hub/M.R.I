import React from 'react';
import { Logo } from './Logo';
import { IconPhone, IconMail, IconPin } from './Icons';
import { ScrollReveal } from './ScrollReveal';

export const Footer = ({ scrollToSection }) => (
  <footer style={{ background:'#030608', borderTop:'1px solid rgba(0,136,255,0.07)', padding:'60px var(--section-px) 40px' }}>
    <div className="container-max">
      <ScrollReveal animation="fade-up">
        <div style={{ display:'grid', gridTemplateColumns:'1.5fr 1fr 1fr', gap:60, marginBottom:40, flexWrap:'wrap' }} className="pgrid">
          <div>
            <Logo dark={true}/>
            <p style={{ marginTop:24, fontSize:14, lineHeight:1.85, color:'rgba(200,216,232,0.3)', maxWidth:280, fontWeight:300 }}>
              Leading manufacturers of high-precision borewell spares and industrial MS/SS components since 1995.
            </p>
            <div style={{ display:'flex', gap:10, marginTop:32 }}>
              {[
                { label: 'In', url: 'https://www.instagram.com/_mrindustries_?igsh=dGNtMjljemNlNDNi' }
              ].map(s=>(
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>
                  <button className="bc" style={{ width:36, height:36, border:'1px solid rgba(0,136,255,0.15)', background:'transparent', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', fontWeight:700, fontSize:11, color:'rgba(200,216,232,0.35)', transition:'all 0.25s', borderRadius:2 }}
                    onMouseEnter={e=>{e.currentTarget.style.background='#0088ff';e.currentTarget.style.color='#06080f';e.currentTarget.style.borderColor='#0088ff';}}
                    onMouseLeave={e=>{e.currentTarget.style.background='transparent';e.currentTarget.style.color='rgba(200,216,232,0.35)';e.currentTarget.style.borderColor='rgba(0,136,255,0.15)';}}>
                    {s.label}
                  </button>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="bc" style={{ fontWeight:700, fontSize:12, letterSpacing:'0.25em', textTransform:'uppercase', color:'#0088ff', marginBottom:28 }}>Quick Links</h4>
            {['Customization','Quality','Contact'].map(l=>(
              <button key={l} onClick={()=>scrollToSection(l.toLowerCase())} style={{ display:'block', background:'none', border:'none', cursor:'pointer', fontSize:14, color:'rgba(200,216,232,0.35)', fontFamily:"'DM Sans',sans-serif", marginBottom:14, textAlign:'left', padding:0, transition:'color 0.2s' }}
                onMouseEnter={e=>e.currentTarget.style.color='#0088ff'}
                onMouseLeave={e=>e.currentTarget.style.color='rgba(200,216,232,0.35)'}>{l}</button>
            ))}
          </div>
          <div>
            <h4 className="bc" style={{ fontWeight:700, fontSize:12, letterSpacing:'0.25em', textTransform:'uppercase', color:'#0088ff', marginBottom:28 }}>Contact</h4>
            {[
              {icon:<IconPhone size={16}/>,text:'9677844497 / 9443356217'},
              {icon:<IconMail size={16}/>,text:'mrindustries95@gmail.com'},
              {icon:<IconPin size={16}/>,text:'7/11, Jaya Shimman Street No.2 Avarampalyam, Ganapathy Post, Coimbatore - 641006'},
            ].map((c,i)=>(
              <div key={i} style={{ display:'flex', alignItems:'center', gap:12, marginBottom:16, color:'rgba(200,216,232,0.35)', fontSize:14 }}>
                <span style={{color:'#0088ff',opacity:0.65}}>{c.icon}</span>{c.text}
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
      <div style={{ paddingTop:40, borderTop:'1px solid rgba(0,136,255,0.05)', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:16 }}>
        <span className="bc" style={{ fontSize:11, color:'rgba(200,216,232,0.18)', letterSpacing:'0.1em', textTransform:'uppercase' }}>
          © 2026 M.R Industries. All Rights Reserved.
        </span>
        <div style={{ display:'flex', gap:16, alignItems:'center' }}>
          {['ISO CERTIFIED','MADE IN INDIA'].map((b,i)=>(
            <span key={i} className="bc" style={{ fontWeight:700, fontSize:10, letterSpacing:'0.2em', color:'rgba(200,216,232,0.25)' }}>
              {b}{i===0&&<span style={{marginLeft:16,color:'rgba(0,136,255,0.3)'}}>|</span>}
            </span>
          ))}
        </div>
      </div>
    </div>
  </footer>
);
