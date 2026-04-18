import Link from "next/link";
import AppShell from "@/components/period/AppShell";
import StatusBar from "@/components/period/StatusBar";

export default function PhasePage(){
  return <AppShell><StatusBar /><section className="stack"><div><p className="label">Cycle phase</p><h1 className="page-title" style={{ marginTop:8 }}>Luteal phase</h1><p className="page-subtitle" style={{ marginTop:12 }}>The body prepares for the next period here, and symptoms can shift gradually in the days before bleeding starts.</p></div><div className="card stack"><div style={{ height:180, borderRadius:24, background:'linear-gradient(135deg, #e8d9ff 0%, #f7f0ff 100%)' }} /><div className="split-2"><div className="metric-box"><p className="label" style={{ margin:0 }}>Energy</p><h3 style={{ margin:'10px 0 0', fontSize:26, fontWeight:800 }}>Medium</h3></div><div className="metric-box"><p className="label" style={{ margin:0 }}>Focus</p><h3 style={{ margin:'10px 0 0', fontSize:26, fontWeight:800 }}>Variable</h3></div></div><Link href="/calendar" className="primary-button">Open calendar</Link><Link href="/home" className="secondary-button">Back home</Link></div></section></AppShell>;
}
