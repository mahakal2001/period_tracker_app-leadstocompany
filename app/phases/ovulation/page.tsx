import Link from "next/link";
import AppShell from "@/components/period/AppShell";
import StatusBar from "@/components/period/StatusBar";

export default function PhasePage(){
  return <AppShell><StatusBar /><section className="stack"><div><p className="label">Cycle phase</p><h1 className="page-title" style={{ marginTop:8 }}>Ovulation phase</h1><p className="page-subtitle" style={{ marginTop:12 }}>This phase is often linked with peak energy and a higher chance of conception depending on your cycle timing.</p></div><div className="card stack"><div style={{ height:180, borderRadius:24, background:'linear-gradient(135deg, #fff0ab 0%, #fff9d8 100%)' }} /><div className="split-2"><div className="metric-box"><p className="label" style={{ margin:0 }}>Energy</p><h3 style={{ margin:'10px 0 0', fontSize:26, fontWeight:800 }}>High</h3></div><div className="metric-box"><p className="label" style={{ margin:0 }}>Focus</p><h3 style={{ margin:'10px 0 0', fontSize:26, fontWeight:800 }}>Sharp</h3></div></div><Link href="/calendar" className="primary-button">Open calendar</Link><Link href="/home" className="secondary-button">Back home</Link></div></section></AppShell>;
}
