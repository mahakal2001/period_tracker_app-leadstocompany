"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Brand from "@/components/period/Brand";
import AppShell from "@/components/period/AppShell";
import StatusBar from "@/components/period/StatusBar";

export default function PreparingPage(){
  const router = useRouter();
  useEffect(()=>{ const t=setTimeout(()=>router.push('/home'), 1600); return ()=>clearTimeout(t); },[router]);
  return <AppShell><StatusBar /><section style={{ minHeight:'calc(100dvh - 56px)', display:'grid', placeItems:'center' }}><div className="stack" style={{ width:'100%', textAlign:'center' }}><div style={{ display:'grid', placeItems:'center' }}><div className="brand-mark" style={{ width:96, height:96, borderRadius:30, fontSize:44 }}>✦</div></div><div style={{ display:'grid', placeItems:'center' }}><Brand /></div><div><h1 className="page-title">Preparing your personalized calendar</h1><p className="page-subtitle" style={{ marginTop:12 }}>We’re setting up your cycle timeline, reminders, and home insights. This will only take a moment.</p></div><div style={{ display:'flex', justifyContent:'center', gap:10 }}><span className="dot" style={{ width:12, height:12, background:'var(--primary)' }} /><span className="dot" style={{ width:12, height:12, background:'#ffbfd9' }} /><span className="dot" style={{ width:12, height:12, background:'#ffe0ec' }} /></div></div></section></AppShell>;
}
