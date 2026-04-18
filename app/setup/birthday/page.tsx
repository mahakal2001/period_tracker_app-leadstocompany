"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AppShell from "@/components/period/AppShell";
import StatusBar from "@/components/period/StatusBar";
import SetupHeader from "@/components/period/SetupHeader";
import { getProfileDraft, updateProfileDraft } from "@/lib/profile-draft";

export default function SetupBirthdayPage(){ const router = useRouter(); const [birthday,setBirthday]=useState(""); useEffect(()=>{ const draft = getProfileDraft(); if(draft.dateOfBirth) setBirthday(draft.dateOfBirth); },[]); return <AppShell><StatusBar /><section className="card stack"><SetupHeader step={2} total={7} backHref="/setup/name" title="When is your birthday?" description="This helps us make the app feel more personal and improves future health insights." /><div className="input-wrap"><label className="label">Date of birth</label><input className="input" type="date" value={birthday} onChange={(e)=>setBirthday(e.target.value)} /></div><button className="primary-button" onClick={()=>{ updateProfileDraft({ dateOfBirth: birthday }); router.push('/setup/weight'); }} disabled={!birthday} style={{ opacity: !birthday ? .65 : 1 }}>Continue</button></section></AppShell>; }
