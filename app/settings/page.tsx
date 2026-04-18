import Link from "next/link";
import AppShell from "@/components/period/AppShell";
import BottomNav from "@/components/period/BottomNav";
import StatusBar from "@/components/period/StatusBar";

function Row({ href, label, meta }: { href: string; label: string; meta: string }) {
  return <Link href={href} className="task-row" style={{ textDecoration:'none' }}><div><strong>{label}</strong><p className="page-subtitle" style={{ margin:'4px 0 0', fontSize:13 }}>{meta}</p></div><span className="pill" style={{ minHeight:36, padding:'6px 12px' }}>Open</span></Link>;
}

export default function SettingsPage(){
  return <AppShell><StatusBar /><section className="screen-stack"><div className="desktop-two-col"><div className="hero-card stack"><div className="profile-card"><div className="avatar">B</div><div><p className="label" style={{ margin:0 }}>Account</p><h1 className="page-title" style={{ marginTop:6, fontSize:28 }}>Bhim Charan</h1><p className="page-subtitle" style={{ marginTop:6, fontSize:14 }}>Manage your profile and app preferences.</p></div></div></div><div className="stack desktop-hide"><div className="metric-box"><p className="label" style={{ margin:0 }}>App sync</p><h3 style={{ margin:'10px 0 0', fontSize:28, fontWeight:800 }}>Healthy</h3><p className="page-subtitle" style={{ marginTop:10 }}>Your current frontend demo is ready on both mobile and desktop.</p></div><div className="metric-box"><p className="label" style={{ margin:0 }}>Preferences</p><p className="page-subtitle" style={{ marginTop:10 }}>Notifications, cycle setup, and tracker history can be reached from these settings links.</p></div></div></div><div className="card stack"><Row href="/setup/name" label="Personal details" meta="Edit name, birthday, height, and weight." /><Row href="/edit-period" label="Period details" meta="Update cycle length and recent period dates." /><Row href="/tracker/log-count" label="Tracker history" meta="See charts, counts, and cycle insights." /><Row href="/signin" label="Auth screens" meta="Open sign in and recovery flow pages." /></div></section><BottomNav active="Settings" /></AppShell>;
}
