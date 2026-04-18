import Link from "next/link";
import AppShell from "@/components/period/AppShell";
import StatusBar from "@/components/period/StatusBar";

function Bar({ h, label }: { h: number; label: string }) {
  return <div style={{ display:'grid', justifyItems:'center', gap:8 }}><div style={{ width:36, height:180, display:'flex', alignItems:'end' }}><div style={{ width:'100%', height:h, borderRadius:14, background:'linear-gradient(180deg, #ff89bc 0%, #ff5da2 100%)' }} /></div><span className="label">{label}</span></div>;
}

export default function HealthBarPage(){
  return <AppShell><StatusBar /><section className="card stack"><div><p className="label">Tracker</p><h1 className="page-title" style={{ marginTop:8 }}>Health chart</h1></div><div style={{ display:'flex', justifyContent:'space-between', alignItems:'end', gap:14 }}><Bar h={90} label="Mon" /><Bar h={130} label="Tue" /><Bar h={110} label="Wed" /><Bar h={150} label="Thu" /><Bar h={120} label="Fri" /></div><Link href="/tracker/health-area" className="primary-button">Next chart</Link></section></AppShell>;
}
