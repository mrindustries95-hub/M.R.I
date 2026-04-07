import React from 'react';
import { IconMail, IconPhone, IconPin } from "../components/Icons";
import { LPageHeader } from "../components/LPageHeader";
import { ScrollReveal } from "../components/ScrollReveal";

export const Contact = () => (
  <>
    <LPageHeader title="GET IN" accent="TOUCH" sub="We respond within 24 hours. Serious inquiries only." />
    <div className="section-padding">
      <div className="container-max">
      <div style={{ display:'grid', gap:80 }} className="grid-2">
        <ScrollReveal animation="fade-right">
          <div>
            <h3 className="bb" style={{ fontSize:44, color:'#0a1628', marginBottom:48 }}>CONTACT INFO</h3>
            {[
              {icon:<IconPin size={22}/>,label:'Location',val:'7/11, Jaya Shimman Street No.2 Avarampalyam, Ganapathy Post, Coimbatore - 641006'},
              {icon:<IconPhone size={22}/>,label:'Phone & WhatsApp',val:'9677844497 / 9443356217'},
              {icon:<IconMail size={22}/>,label:'Email Support',val:'mrindustries95@gmail.com'},
            ].map((c,i) => (
              <div key={i} style={{ display:'flex', gap:20, marginBottom:44 }}>
                <div style={{ width:52, height:52, background:'#e4ecf4', display:'flex', alignItems:'center', justifyContent:'center', color:'#0099cc', flexShrink:0, borderRadius:2 }}>{c.icon}</div>
                <div>
                  <div className="bc" style={{ fontWeight:700, fontSize:11, letterSpacing:'0.2em', textTransform:'uppercase', color:'#7a8a9a', marginBottom:6 }}>{c.label}</div>
                  <div style={{ fontSize:16, color:'#0a1628', fontWeight:500 }}>{c.val}</div>
                </div>
              </div>
            ))}

            {/* Map Integration */}
            <ScrollReveal animation="zoom-in" delay={0.3}>
              <div style={{ marginTop: 20, borderRadius: 4, overflow: 'hidden', border: '1px solid #d0dce8', height: 300 }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.265534247447!2d77.5123543153651!3d12.98678999084594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3dd953038797%3A0x11500c7754938fd8!2sPeenya%20Industrial%20Area%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1647945678901!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal>
        <ScrollReveal animation="fade-left" delay={0.2}>
          <div style={{ background:'white', border:'1px solid #d0dce8', position:'relative' }} className="banner-padding">
            <div style={{ position:'absolute', top:0, left:0, width:60, height:3, background:'#0099cc' }} />
            <form onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              const text = `*New Contact Request*\n\n*Name:* ${fd.get('name') || 'Not provided'}\n*Mobile:* ${fd.get('mobile') || 'Not provided'}\n*Email:* ${fd.get('email') || 'Not provided'}\n*Company:* ${fd.get('company') || 'Not provided'}\n*Message:* ${fd.get('message') || 'None'}`;
              window.open(`https://wa.me/919677844497?text=${encodeURIComponent(text)}`, '_blank');
            }} style={{ display:'flex', flexDirection:'column', gap:20 }}>
              <div>
                <label className="bc" style={{ fontWeight:700, fontSize:10, letterSpacing:'0.25em', textTransform:'uppercase', color:'#7a8a9a', display:'block', marginBottom:8 }}>Your Name</label>
                <input name="name" required className="input-l" placeholder="Your Name" style={{width:'100%'}} />
              </div>
              <div>
                <label className="bc" style={{ fontWeight:700, fontSize:10, letterSpacing:'0.25em', textTransform:'uppercase', color:'#7a8a9a', display:'block', marginBottom:8 }}>Mobile Number</label>
                <input name="mobile" type="tel" required className="input-l" placeholder="Mobile Number" style={{width:'100%'}} />
              </div>
              <div>
                <label className="bc" style={{ fontWeight:700, fontSize:10, letterSpacing:'0.25em', textTransform:'uppercase', color:'#7a8a9a', display:'block', marginBottom:8 }}>Email Address</label>
                <input name="email" type="email" required className="input-l" placeholder="Email Address" style={{width:'100%'}} />
              </div>
              <div>
                <label className="bc" style={{ fontWeight:700, fontSize:10, letterSpacing:'0.25em', textTransform:'uppercase', color:'#7a8a9a', display:'block', marginBottom:8 }}>Company (Optional)</label>
                <input name="company" className="input-l" placeholder="Company (Optional)" style={{width:'100%'}} />
              </div>
              <div>
                <label className="bc" style={{ fontWeight:700, fontSize:10, letterSpacing:'0.25em', textTransform:'uppercase', color:'#7a8a9a', display:'block', marginBottom:8 }}>Message</label>
                <textarea name="message" required className="input-l" rows={5} placeholder="How can we help?" style={{width:'100%',resize:'none'}} />
              </div>
              <button type="submit" className="lbtn-p" style={{marginTop:8}}>Send via WhatsApp →</button>
            </form>
          </div>
        </ScrollReveal>
      </div>
      </div>
    </div>
  </>
);
