"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AppShell from "@/components/period/AppShell";
import StatusBar from "@/components/period/StatusBar";

export default function WaterContainerPage(){
  const router = useRouter();
  const [container,setContainer]=useState('Cup');
  return <AppShell><StatusBar /><section className="card stack"><div><p className="label">Hydration</p><h1 className="page-title" style={{ marginTop:8 }}>Choose your container</h1></div><div style={{ display:'flex', flexWrap:'wrap', gap:10 }}>{['Cup','Bottle','Glass'].map((item)=><button key={item} className="pill" onClick={()=>setContainer(item)} style={{ background: container===item ? 'var(--surface-2)' : 'white', borderColor: container===item ? 'var(--primary)' : 'var(--border)' }}>{item}</button>)}</div><button className="primary-button" onClick={()=>router.push('/water')}>Use {container}</button></section></AppShell>;
}
