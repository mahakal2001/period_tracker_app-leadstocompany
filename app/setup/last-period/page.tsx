"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AppShell from "@/components/period/AppShell";
import StatusBar from "@/components/period/StatusBar";
import SetupHeader from "@/components/period/SetupHeader";

export default function SetupLastPeriodPage(){
  const router = useRouter();
  const [date,setDate]=useState("");
  return <AppShell><StatusBar /><section className="card stack"><SetupHeader step={7} total={7} backHref="/setup/cycle-length" title="When did your last period start?" description="We’ll use this date to build your first personalized cycle calendar and home dashboard." /><div className="input-wrap"><label className="label">Last period start date</label><input className="input" type="date" value={date} onChange={(e)=>setDate(e.target.value)} /></div><button className="primary-button" onClick={()=>router.push('/setup/preparing')} disabled={!date} style={{ opacity: !date ? .65 : 1 }}>Finish setup</button></section></AppShell>;
}
