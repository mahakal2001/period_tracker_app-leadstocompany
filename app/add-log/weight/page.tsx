"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AppShell from "@/components/period/AppShell";
import StatusBar from "@/components/period/StatusBar";

export default function WeightLogPage(){
  const router = useRouter();
  const [weight,setWeight]=useState('55');
  return <AppShell><StatusBar /><section className="card stack"><div><p className="label">Body tracking</p><h1 className="page-title" style={{ marginTop:8 }}>Log your weight</h1></div><div className="input-wrap"><label className="label">Weight in kg</label><input className="input" type="number" value={weight} onChange={(e)=>setWeight(e.target.value)} /></div><button className="primary-button" onClick={()=>router.push('/add-log/review')} disabled={!weight}>Save weight</button></section></AppShell>;
}
