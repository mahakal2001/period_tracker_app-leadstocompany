"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AppShell from "@/components/period/AppShell";
import StatusBar from "@/components/period/StatusBar";
import SetupHeader from "@/components/period/SetupHeader";
import { getProfileDraft, updateProfileDraft } from "@/lib/profile-draft";

export default function SetupNamePage(){ const router = useRouter(); const [name,setName]=useState(""); useEffect(()=>{ const draft = getProfileDraft(); if(draft.fullName) setName(draft.fullName); },[]); return <AppShell><StatusBar /><section className="card stack"><SetupHeader step={1} total={7} backHref="/signup" title="What’s your name?" description="We’ll use your name to personalize your experience across the app." /><div className="input-wrap"><label className="label">Your name</label><input className="input" placeholder="Enter your full name" value={name} onChange={(e)=>setName(e.target.value)} /></div><button className="primary-button" onClick={()=>{ updateProfileDraft({ fullName: name }); router.push('/setup/birthday'); }} disabled={!name.trim()} style={{ opacity: !name.trim() ? .65 : 1 }}>Continue</button></section></AppShell>; }
