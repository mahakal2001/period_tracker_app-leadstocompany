"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AppShell from "@/components/period/AppShell";
import StatusBar from "@/components/period/StatusBar";

export default function TemperatureLogPage(){
  const router = useRouter();
  const [temp,setTemp]=useState('36.6');
  return <AppShell><StatusBar /><section className="card stack"><div><p className="label">Body tracking</p><h1 className="page-title" style={{ marginTop:8 }}>Log your temperature</h1></div><div className="input-wrap"><label className="label">Temperature in °C</label><input className="input" type="number" step="0.1" value={temp} onChange={(e)=>setTemp(e.target.value)} /></div><button className="primary-button" onClick={()=>router.push('/add-log/review')} disabled={!temp}>Save temperature</button></section></AppShell>;
}
