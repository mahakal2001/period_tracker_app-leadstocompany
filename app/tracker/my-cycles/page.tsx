import Link from "next/link";
import AppShell from "@/components/period/AppShell";
import StatusBar from "@/components/period/StatusBar";

export default function MyCyclesPage(){
  return <AppShell><StatusBar /><section className="card stack"><div><p className="label">Tracker</p><h1 className="page-title" style={{ marginTop:8 }}>My cycles</h1></div><div className="metric-box stack" style={{ gap:10 }}><div style={{ display:'flex', justifyContent:'space-between' }}><span>March</span><strong>29 days</strong></div><div style={{ display:'flex', justifyContent:'space-between' }}><span>April</span><strong>28 days</strong></div><div style={{ display:'flex', justifyContent:'space-between' }}><span>May</span><strong>27 days</strong></div></div><Link href="/settings" className="primary-button">Go to settings</Link></section></AppShell>;
}
