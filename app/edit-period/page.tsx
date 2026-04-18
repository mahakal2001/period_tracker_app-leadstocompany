"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AppShell from "@/components/period/AppShell";
import StatusBar from "@/components/period/StatusBar";

export default function EditPeriodPage(){
  const router = useRouter();
  const [start,setStart]=useState('');
  const [end,setEnd]=useState('');
  return <AppShell><StatusBar /><section className="card stack"><div><p className="label">Edit period</p><h1 className="page-title" style={{ marginTop:8 }}>Update your recent period</h1><p className="page-subtitle" style={{ marginTop:12 }}>Adjust start and end dates so your calendar and predictions stay accurate.</p></div><div className="input-wrap"><label className="label">Start date</label><input className="input" type="date" value={start} onChange={(e)=>setStart(e.target.value)} /></div><div className="input-wrap"><label className="label">End date</label><input className="input" type="date" value={end} onChange={(e)=>setEnd(e.target.value)} /></div><button className="primary-button" onClick={()=>router.push('/calendar')} disabled={!start || !end} style={{ opacity: !start || !end ? .65 : 1 }}>Save changes</button></section></AppShell>;
}
