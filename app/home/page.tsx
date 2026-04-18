"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import AppShell from "@/components/period/AppShell";
import BottomNav from "@/components/period/BottomNav";
import StatusBar from "@/components/period/StatusBar";
import { apiRequest } from "@/lib/api";
import { getAccessToken } from "@/lib/auth-store";

type MeResponse = {
  id: string;
  email: string;
  fullName: string;
  profile?: {
    averagePeriodDays?: number | null;
    averageCycleDays?: number | null;
  } | null;
};

function Stat({ title, value, sub }: { title: string; value: string; sub: string }) {
  return <div className="metric-box"><p className="label" style={{ margin:0 }}>{title}</p><h3 style={{ margin:'10px 0 0', fontSize:28, fontWeight:800 }}>{value}</h3><p className="page-subtitle" style={{ margin:'6px 0 0', fontSize:14 }}>{sub}</p></div>;
}

export default function HomePage(){
  const [me, setMe] = useState<MeResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = getAccessToken();
    if (!token) {
      setError('Please sign in first.');
      return;
    }

    apiRequest<MeResponse>('/users/me', { token })
      .then(setMe)
      .catch(() => setError('Unable to load profile from API.'));
  }, []);

  const fullName = me?.fullName || 'Bhim';
  const periodDays = me?.profile?.averagePeriodDays ?? 5;
  const cycleDays = me?.profile?.averageCycleDays ?? 28;

  return <AppShell><StatusBar /><section className="screen-stack"><div className="profile-card"><div className="avatar">{fullName.slice(0,1).toUpperCase()}</div><div><p className="label" style={{ margin:0 }}>Good morning</p><h1 className="page-title" style={{ marginTop:6, fontSize:28 }}>{fullName}</h1></div></div>{error ? <div className="card"><p className="page-subtitle" style={{ margin:0 }}>{error}</p></div> : null}<div className="desktop-two-col"><div className="hero-card stack"><div><p className="label">Today</p><h2 className="page-title" style={{ marginTop:8, fontSize:30 }}>Cycle dashboard</h2><p className="page-subtitle" style={{ marginTop:10 }}>This screen is now connected to backend user data and setup values.</p></div><div className="cycle-ring" style={{ width:250, height:250 }}><div className="cycle-ring-inner"><div><p className="label" style={{ margin:0 }}>Current phase</p><div style={{ fontSize:24, fontWeight:800, marginTop:10 }}>Menstrual</div><p className="page-subtitle" style={{ margin:'8px 0 0', fontSize:14 }}>Demo cycle overview</p></div></div></div></div><div className="stack"><div className="mini-grid"><Stat title="Period length" value={`${periodDays} days`} sub="From API profile" /><Stat title="Cycle length" value={`${cycleDays} days`} sub="From API profile" /></div><div className="card stack"><div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}><h2 style={{ margin:0, fontSize:22, fontWeight:800 }}>Quick actions</h2><span className="label">Today</span></div><Link href="/add-log" className="secondary-button">Add symptom log</Link><Link href="/calendar" className="secondary-button">Open calendar</Link><Link href="/tracker/log-count" className="secondary-button">See tracker</Link></div></div></div></section><BottomNav active="Home" /></AppShell>;
}
