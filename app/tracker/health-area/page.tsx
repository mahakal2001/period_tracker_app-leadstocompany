import Link from "next/link";
import AppShell from "@/components/period/AppShell";
import StatusBar from "@/components/period/StatusBar";

export default function HealthAreaPage(){
  return <AppShell><StatusBar /><section className="card stack"><div><p className="label">Tracker</p><h1 className="page-title" style={{ marginTop:8 }}>Health trend</h1></div><div style={{ height:220, borderRadius:24, background:'linear-gradient(180deg, #fff0f6 0%, #ffffff 100%)', position:'relative', overflow:'hidden' }}><svg viewBox="0 0 320 220" style={{ width:'100%', height:'100%' }}><path d="M0 180 C40 150, 70 145, 110 120 S180 60, 230 95 S290 140, 320 110 L320 220 L0 220 Z" fill="#ffd3e5" /><path d="M0 180 C40 150, 70 145, 110 120 S180 60, 230 95 S290 140, 320 110" fill="none" stroke="#ff5da2" strokeWidth="4" /></svg></div><Link href="/tracker/my-cycles" className="primary-button">View my cycles</Link></section></AppShell>;
}
