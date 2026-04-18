"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AppShell from "@/components/period/AppShell";
import StatusBar from "@/components/period/StatusBar";

export default function OtpPage(){
  const router = useRouter();
  const [otp,setOtp]=useState('');
  return <AppShell><StatusBar /><section className="card stack"><div><p className="label">Verification</p><h1 className="page-title" style={{ marginTop:8 }}>Enter OTP code</h1><p className="page-subtitle" style={{ marginTop:12 }}>We sent a 6-digit code to your email. Enter it below to continue resetting your password.</p></div><div className="input-wrap"><label className="label">OTP code</label><input className="input" inputMode="numeric" maxLength={6} value={otp} onChange={(e)=>setOtp(e.target.value.replace(/\D/g,'').slice(0,6))} placeholder="Enter 6-digit code" /></div><button className="primary-button" onClick={()=>router.push('/new-password')} disabled={otp.length !== 6} style={{ opacity: otp.length !== 6 ? .65 : 1 }}>Verify code</button></section></AppShell>;
}
