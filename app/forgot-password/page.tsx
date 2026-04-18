"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Brand from "@/components/period/Brand";
import AppShell from "@/components/period/AppShell";
import StatusBar from "@/components/period/StatusBar";

export default function ForgotPasswordPage(){
  const router = useRouter();
  const [email,setEmail]=useState('');
  const valid = email.includes('@');
  return <AppShell><StatusBar /><section className="stack"><Brand /><div className="card stack"><div><p className="label">Reset access</p><h1 className="page-title" style={{ marginTop:8 }}>Forgot your password?</h1><p className="page-subtitle" style={{ marginTop:12 }}>Enter your email address and we’ll send an OTP code to help you reset your password.</p></div><div className="input-wrap"><label className="label">Email address</label><input className="input" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="name@example.com" /></div><button className="primary-button" onClick={()=>router.push('/otp')} disabled={!valid} style={{ opacity: !valid ? .65 : 1 }}>Send OTP</button></div></section></AppShell>;
}
