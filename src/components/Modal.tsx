import React, { useState } from 'react';
import { motion } from "motion/react";
import { IconX } from "./Icons";

export const Modal = ({ open, close }) => {
  const [formData, setFormData] = useState({ name: '', company: '', email: '', mobile: '', requirements: '' });

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `*New Quote Request*\n\n*Name:* ${formData.name || 'Not provided'}\n*Company:* ${formData.company || 'Not provided'}\n*Email:* ${formData.email || 'Not provided'}\n*Mobile:* ${formData.mobile || 'Not provided'}\n*Requirements:* ${formData.requirements || 'None'}`;
    const url = `https://wa.me/919677844497?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    close();
  };
  return (
    <div style={{ position:'fixed', inset:0, zIndex:200, display:'flex', alignItems:'center', justifyContent:'center', padding:24 }}>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} onClick={close}
        style={{ position:'absolute', inset:0, background:'rgba(6,8,15,0.88)', backdropFilter:'blur(10px)' }} />
      <motion.div initial={{opacity:0,y:40,scale:0.95}} animate={{opacity:1,y:0,scale:1}}
        style={{ position:'relative', width:'100%', maxWidth:520, background:'#0b0f1c',
        border:'1px solid rgba(0,136,255,0.25)', padding: 'clamp(20px, 6vw, 48px)', borderRadius:2, maxHeight:'90vh', overflowY:'auto' }}>
        <button onClick={close} style={{ position:'absolute', top:16, right:16, background:'none', border:'none', color:'rgba(200,216,232,0.4)', cursor:'pointer' }}><IconX/></button>
        <div className="sec-label" style={{marginBottom:16}}>Get Started</div>
        <h2 className="bb" style={{ fontSize: 'clamp(32px, 8vw, 52px)', color:'white', marginBottom:32, lineHeight:1, textTransform: 'lowercase' }}>
          GENERATE <span style={{color:'#0088ff'}}>QUOTE</span>
        </h2>
        <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:16 }}>
          <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap:12 }}>
            <div>
              <label className="bc" style={{ fontSize:10, letterSpacing:'0.3em', textTransform:'uppercase', color:'rgba(200,216,232,0.35)', fontWeight:700, display:'block', marginBottom:6 }}>Full Name</label>
              <input 
                className="input-d" 
                placeholder="John Doe" 
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="bc" style={{ fontSize:10, letterSpacing:'0.3em', textTransform:'uppercase', color:'rgba(200,216,232,0.35)', fontWeight:700, display:'block', marginBottom:6 }}>Company</label>
              <input 
                className="input-d" 
                placeholder="Acme Corp" 
                value={formData.company}
                onChange={e => setFormData({...formData, company: e.target.value})}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap:12 }}>
            <div>
              <label className="bc" style={{ fontSize:10, letterSpacing:'0.3em', textTransform:'uppercase', color:'rgba(200,216,232,0.35)', fontWeight:700, display:'block', marginBottom:6 }}>Email Address</label>
              <input 
                type="email" 
                className="input-d" 
                placeholder="you@company.com" 
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <label className="bc" style={{ fontSize:10, letterSpacing:'0.3em', textTransform:'uppercase', color:'rgba(200,216,232,0.35)', fontWeight:700, display:'block', marginBottom:6 }}>Mobile Number</label>
              <input 
                type="tel" 
                className="input-d" 
                placeholder="+91 98765 43210" 
                value={formData.mobile}
                onChange={e => setFormData({...formData, mobile: e.target.value})}
              />
            </div>
          </div>
          <div>
            <label className="bc" style={{ fontSize:10, letterSpacing:'0.3em', textTransform:'uppercase', color:'rgba(200,216,232,0.35)', fontWeight:700, display:'block', marginBottom:6 }}>Requirements</label>
            <textarea 
              className="input-d" 
              rows={4} 
              placeholder="Describe your needs..." 
              style={{resize:'none'}} 
              value={formData.requirements}
              onChange={e => setFormData({...formData, requirements: e.target.value})}
            />
          </div>
          <button type="submit" className="btn-p" style={{marginTop:8,width:'100%',clipPath:'none',borderRadius:2}}>
            <span>Send via WhatsApp →</span>
          </button>
        </form>
      </motion.div>
    </div>
  );
};
