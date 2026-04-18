"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AppShell from "@/components/period/AppShell";
import StatusBar from "@/components/period/StatusBar";
import SetupHeader from "@/components/period/SetupHeader";

export default function SetupPeriodLengthPage(){
  const router = useRouter();
  const [days,setDays]=useState("5");
  return <AppShell><StatusBar /><section className="card stack"><SetupHeader step={5} total={7} backHref="/setup/height" title="How long does your period usually last?" description="Choose the average number of days. You can always change this later from your profile settings." /><div className="input-wrap"><label className="label">Average period length</label><select className="select" value={days} onChange={(e)=>setDays(e.target.value)}><option value="3">3 days</option><option value="4">4 days</option><option value="5">5 days</option><option value="6">6 days</option><option value="7">7 days</option><option value="8">8 days</option></select></div><button className="primary-button" onClick={()=>router.push('/setup/cycle-length')}>Continue</button></section></AppShell>;
}
