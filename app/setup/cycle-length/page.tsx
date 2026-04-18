"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AppShell from "@/components/period/AppShell";
import StatusBar from "@/components/period/StatusBar";
import SetupHeader from "@/components/period/SetupHeader";

export default function SetupCycleLengthPage(){
  const router = useRouter();
  const [days,setDays]=useState("28");
  return <AppShell><StatusBar /><section className="card stack"><SetupHeader step={6} total={7} backHref="/setup/period-length" title="How long does your cycle usually last?" description="Your average cycle length helps us estimate your future periods and ovulation windows." /><div className="input-wrap"><label className="label">Average cycle length</label><select className="select" value={days} onChange={(e)=>setDays(e.target.value)}>{[21,22,23,24,25,26,27,28,29,30,31,32,33,34,35].map((d)=><option key={d} value={String(d)}>{d} days</option>)}</select></div><button className="primary-button" onClick={()=>router.push('/setup/last-period')}>Continue</button></section></AppShell>;
}
