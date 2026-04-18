"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AppShell from "@/components/period/AppShell";
import StatusBar from "@/components/period/StatusBar";

export default function NotePage(){
  const router = useRouter();
  const [note,setNote]=useState('');
  return <AppShell><StatusBar /><section className="card stack"><div><p className="label">Notes</p><h1 className="page-title" style={{ marginTop:8 }}>Add today’s note</h1></div><textarea value={note} onChange={(e)=>setNote(e.target.value)} placeholder="Write how you feel today..." style={{ minHeight:160, borderRadius:20, border:'1px solid var(--border)', padding:18, resize:'vertical' }} /><button className="primary-button" onClick={()=>router.push('/add-log/review')} disabled={!note.trim()} style={{ opacity: !note.trim() ? .65 : 1 }}>Save note</button></section></AppShell>;
}
