import Link from "next/link";
import AppShell from "@/components/period/AppShell";
import StatusBar from "@/components/period/StatusBar";

export default function DateDetailPage(){
  return <AppShell><StatusBar /><section className="card stack"><div><p className="label">Selected date</p><h1 className="page-title" style={{ marginTop:8 }}>May 4, 2026</h1><p className="page-subtitle" style={{ marginTop:12 }}>Cycle day 4. This date is marked inside your period window.</p></div><div className="metric-box stack" style={{ gap:10 }}><div style={{ display:'flex', justifyContent:'space-between' }}><span>Flow</span><strong>Medium</strong></div><div style={{ display:'flex', justifyContent:'space-between' }}><span>Mood</span><strong>Happy</strong></div><div style={{ display:'flex', justifyContent:'space-between' }}><span>Water</span><strong>800 ml</strong></div></div><Link href="/add-log" className="primary-button">Add log for this day</Link></section></AppShell>;
}
