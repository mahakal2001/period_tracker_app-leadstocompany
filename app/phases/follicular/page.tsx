import Link from "next/link";
import AppShell from "@/components/period/AppShell";
import StatusBar from "@/components/period/StatusBar";

export default function PhasePage(){
  return <AppShell><StatusBar /><section className="stack"><div><p className="label">Cycle phase</p><h1 className="page-title" style={{ marginTop:8 }}>Follicular phase</h1><p className="page-subtitle" style={{ marginTop:12 }}>Energy usually starts rising here. This can be a good phase for planning, movement, and fresh routines.</p></div><div className="card stack"><div style={{ height:180, borderRadius:24, background:'linear-gradient(135deg, #ffe3c1 0%, #fff7e8 100%)' }} /><div className="split-2"><div className="metric-box"><p className="label" style={{ margin:0 }}>Energy</p><h3 style={{ margin:'10px 0 0', fontSize:26, fontWeight:800 }}>Rising</h3></div><div className="metric-box"><p className="label" style={{ margin:0 }}>Focus</p><h3 style={{ margin:'10px 0 0', fontSize:26, fontWeight:800 }}>Clearer</h3></div></div><Link href="/calendar" className="primary-button">Open calendar</Link><Link href="/home" className="secondary-button">Back home</Link></div></section></AppShell>;
}
