"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AppShell from "@/components/period/AppShell";
import StatusBar from "@/components/period/StatusBar";

export default function NewPasswordPage(){
  const router = useRouter();
  const [password,setPassword]=useState('');
  const [confirm,setConfirm]=useState('');
  const valid = password.length >= 6 && password === confirm;
  return <AppShell><StatusBar /><section className="card stack"><div><p className="label">New password</p><h1 className="page-title" style={{ marginTop:8 }}>Create a new password</h1><p className="page-subtitle" style={{ marginTop:12 }}>Choose a strong password that you can remember easily for your next sign in.</p></div><div className="input-wrap"><label className="label">New password</label><input className="input" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Minimum 6 characters" /></div><div className="input-wrap"><label className="label">Confirm password</label><input className="input" type="password" value={confirm} onChange={(e)=>setConfirm(e.target.value)} placeholder="Repeat your password" /></div><button className="primary-button" onClick={()=>router.push('/password-updated')} disabled={!valid} style={{ opacity: !valid ? .65 : 1 }}>Update password</button></section></AppShell>;
}
