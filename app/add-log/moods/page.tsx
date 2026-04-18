"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AppShell from "@/components/period/AppShell";
import StatusBar from "@/components/period/StatusBar";

export default function MoodsPage(){
  const router = useRouter();
  const [mood,setMood]=useState('Happy');
  const moods=['Happy','Calm','Tired','Emotional','Irritated'];
  return <AppShell><StatusBar /><section className="card stack"><div><p className="label">Mood log</p><h1 className="page-title" style={{ marginTop:8 }}>How are you feeling today?</h1></div><div style={{ display:'flex', flexWrap:'wrap', gap:10 }}>{moods.map((item)=><button key={item} className="pill" onClick={()=>setMood(item)} style={{ background: mood===item ? 'var(--surface-2)' : 'white', borderColor: mood===item ? 'var(--primary)' : 'var(--border)' }}>{item}</button>)}</div><button className="primary-button" onClick={()=>router.push('/add-log/review')}>Save mood</button></section></AppShell>;
}
