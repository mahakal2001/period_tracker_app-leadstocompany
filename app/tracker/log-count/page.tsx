import Link from "next/link";
import AppShell from "@/components/period/AppShell";
import BottomNav from "@/components/period/BottomNav";
import StatusBar from "@/components/period/StatusBar";

function Bar({ h, label }: { h: number; label: string }) {
  return <div style={{ display:'grid', justifyItems:'center', gap:8 }}><div style={{ width:40, height:160, display:'flex', alignItems:'end' }}><div style={{ width:'100%', height:h, borderRadius:14, background:'linear-gradient(180deg, #ff89bc 0%, #ff5da2 100%)' }} /></div><span className="label">{label}</span></div>;
}

export default function TrackerLogCountPage(){
  return <AppShell><StatusBar /><section className="screen-stack"><div><p className="label">Tracker</p><h1 className="page-title" style={{ marginTop:8 }}>Log count</h1><p className="page-subtitle" style={{ marginTop:10 }}>See how consistently you are tracking mood, hydration, and health details.</p></div><div className="desktop-three-col"><div className="metric-box"><p className="label" style={{ margin:0 }}>Mood logs</p><h3 style={{ margin:'10px 0 0', fontSize:30, fontWeight:800 }}>40</h3></div><div className="metric-box"><p className="label" style={{ margin:0 }}>Water logs</p><h3 style={{ margin:'10px 0 0', fontSize:30, fontWeight:800 }}>18</h3></div><div className="metric-box"><p className="label" style={{ margin:0 }}>Cycle records</p><h3 style={{ margin:'10px 0 0', fontSize:30, fontWeight:800 }}>12</h3></div></div><div className="desktop-two-col"><div className="tracker-chart stack"><div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}><strong>Weekly consistency</strong><span className="label">Last 7 days</span></div><div style={{ display:'flex', justifyContent:'space-between', alignItems:'end', gap:14, flex:1 }}><Bar h={80} label="Mon" /><Bar h={120} label="Tue" /><Bar h={105} label="Wed" /><Bar h={140} label="Thu" /><Bar h={100} label="Fri" /><Bar h={88} label="Sat" /><Bar h={132} label="Sun" /></div></div><div className="stack"><Link href="/tracker/health-bar" className="secondary-button">Bar chart</Link><Link href="/tracker/health-area" className="secondary-button">Area chart</Link><Link href="/tracker/my-cycles" className="primary-button">My cycles</Link></div></div></section><BottomNav active="Tracker" /></AppShell>;
}
