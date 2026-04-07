import React from 'react';
import { IconGear } from './Icons';

export const Logo = ({ dark = true }) => (
  <div style={{ display:'flex', alignItems:'center', gap:12, cursor:'pointer' }}>
    <div style={{
      width:40, height:40, background: 'transparent',
      display:'flex', alignItems:'center', justifyContent:'center',
      flexShrink:0, transition:'all 0.4s'
    }} onMouseEnter={e=>{e.currentTarget.style.transform='scale(1.1) rotate(10deg)';}}
       onMouseLeave={e=>{e.currentTarget.style.transform='scale(1) rotate(0deg)';}}>
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 1L15.09 7.26L22 8.27L17 13.14L18.18 20.02L12 16.77L5.82 20.02L7 13.14L2 8.27L8.91 7.26L12 1Z" fill="#E3242B" />
        <text x="50%" y="60%" dominantBaseline="middle" textAnchor="middle" fill="#FFC107" fontSize="5" fontWeight="bold">M.R.I.</text>
      </svg>
    </div>
    <div style={{ display:'flex', flexDirection:'column', lineHeight:1 }}>
      <span className="bb" style={{ fontSize:20, letterSpacing:'0.05em', color: dark?'white':'#0a1628' }}>
        M.R <span style={{ color:'#E3242B' }}>Industries</span>
      </span>
      <span className="bc" style={{ fontSize:9, letterSpacing:'0.3em', textTransform:'uppercase', color: dark?'rgba(255,255,255,0.4)':'rgba(10,22,40,0.4)', marginTop:2, fontWeight:700 }}>
        Est. 1995
      </span>
    </div>
  </div>
);
