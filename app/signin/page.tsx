"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Brand from "@/components/period/Brand";
import AppShell from "@/components/period/AppShell";
import StatusBar from "@/components/period/StatusBar";
import Link from "next/link";

export default function SigninPage(){
  const router = useRouter();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [submitting,setSubmitting]=useState(false);
  const isValid = email.includes('@') && password.length >= 6;
  const handleSubmit = async (e: React.FormEvent)=>{ e.preventDefault(); if(!isValid) return; setSubmitting(true); await new Promise(r=>setTimeout(r,600)); router.push('/home'); };
  return <AppShell><StatusBar /><section className="stack"><Brand /><div className="card stack"><div><p className="label">Welcome back</p><h1 className="page-title" style={{ marginTop:8 }}>Sign in to your account</h1><p className="page-subtitle" style={{ marginTop:12 }}>Continue tracking your cycle, symptoms, and health history.</p></div><form onSubmit={handleSubmit} className="stack"><div className="input-wrap"><label className="label">Email address</label><input className="input" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="name@example.com" /></div><div className="input-wrap"><label className="label">Password</label><input className="input" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password" /></div><Link href="/forgot-password" className="footer-note" style={{ textAlign:'right' }}>Forgot password?</Link><button className="primary-button" disabled={!isValid || submitting} style={{ opacity: !isValid || submitting ? .65 : 1 }}>{submitting ? 'Signing in...' : 'Sign in'}</button></form></div></section></AppShell>;
}
