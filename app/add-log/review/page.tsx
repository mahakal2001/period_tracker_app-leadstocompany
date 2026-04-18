import Link from "next/link";
import AppShell from "@/components/period/AppShell";
import StatusBar from "@/components/period/StatusBar";

export default function ReviewLogPage(){
  return <AppShell><StatusBar /><section className="card stack"><div><p className="label">Review</p><h1 className="page-title" style={{ marginTop:8 }}>Ready to save your log?</h1><p className="page-subtitle" style={{ marginTop:12 }}>This step acts like the filled form screen before the log is finally added.</p></div><div className="metric-box stack" style={{ gap:10 }}><div style={{ display:'flex', justifyContent:'space-between' }}><span>Mood</span><strong>Happy</strong></div><div style={{ display:'flex', justifyContent:'space-between' }}><span>Weight</span><strong>55 kg</strong></div><div style={{ display:'flex', justifyContent:'space-between' }}><span>Temperature</span><strong>36.6 °C</strong></div></div><Link href="/add-log/success" className="primary-button">Save log</Link></section></AppShell>;
}
