import Link from "next/link";
import AppShell from "@/components/period/AppShell";
import StatusBar from "@/components/period/StatusBar";

export default function WaterHistoryPage(){
  return <AppShell><StatusBar /><section className="card stack"><div><p className="label">Hydration history</p><h1 className="page-title" style={{ marginTop:8 }}>Today’s water logs</h1></div><div className="metric-box stack" style={{ gap:10 }}><div style={{ display:'flex', justifyContent:'space-between' }}><span>8:00 AM</span><strong>250 ml</strong></div><div style={{ display:'flex', justifyContent:'space-between' }}><span>11:30 AM</span><strong>300 ml</strong></div><div style={{ display:'flex', justifyContent:'space-between' }}><span>2:15 PM</span><strong>250 ml</strong></div></div><Link href="/water" className="primary-button">Back to hydration</Link></section></AppShell>;
}
