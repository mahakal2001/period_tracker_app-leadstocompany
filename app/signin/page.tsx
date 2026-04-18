"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Brand from "@/components/period/Brand";
import AppShell from "@/components/period/AppShell";
import StatusBar from "@/components/period/StatusBar";
import Link from "next/link";
import { apiRequest } from "@/lib/api";
import { setAuthSession } from "@/lib/auth-store";

type AuthResponse = { accessToken: string; refreshToken: string; tokenType: string };

export default function SigninPage(){ const router = useRouter(); const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); const [submitting,setSubmitting]=useState(false); const [error,setError]=useState<string | null>(null); const isValid = email.includes('@') && password.length >= 6; const handleSubmit = async (e: React.FormEvent)=>{ e.preventDefault(); if(!isValid) return; try { setSubmitting(true); setError(null); const result = await apiRequest<AuthResponse>('/auth/login', { method: 'POST', body: { email, password } }); setAuthSession(result.accessToken, result.refreshToken, email); router.push('/home'); } catch (err) { setError(err instanceof Error ? err.message : 'Unable to sign in'); } finally { setSubmitting(false); } }; return <AppShell><StatusBar /><section className="stack"><Brand /><div className="card stack"><div><p className="label">Welcome back</p><h1 className="page-title" style={{ marginTop:8 }}>Sign in to your account</h1><p className="page-subtitle" style={{ marginTop:12 }}>Continue tracking your cycle, symptoms, and health history.</p></div>{error ? <div className="metric-box"><p className="page-subtitle" style={{ margin:0 }}>{error}</p></div> : null}<form onSubmit={handleSubmit} className="stack"><div className="input-wrap"><label className="label">Email address</label><input className="input" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="name@example.com" /></div><div className="input-wrap"><label className="label">Password</label><input className="input" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password" /></div><Link href="/forgot-password" className="footer-note" style={{ textAlign:'right' }}>Forgot password?</Link><button className="primary-button" disabled={!isValid || submitting} style={{ opacity: !isValid || submitting ? .65 : 1 }}>{submitting ? 'Signing in...' : 'Sign in'}</button></form></div></section></AppShell>; }
