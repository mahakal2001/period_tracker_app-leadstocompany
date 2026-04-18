import Link from "next/link";
import AppShell from "@/components/period/AppShell";
import BottomNav from "@/components/period/BottomNav";
import StatusBar from "@/components/period/StatusBar";

function Option({ href, label, description }: { href: string; label: string; description: string }) {
  return <Link href={href} className="task-row" style={{ padding:'0 0 14px', textDecoration:'none' }}><div><strong>{label}</strong><p className="page-subtitle" style={{ margin:'4px 0 0', fontSize:13 }}>{description}</p></div><span className="pill" style={{ minHeight:36, padding:'6px 12px' }}>Open</span></Link>;
}

export default function AddLogPage(){
  return <AppShell><StatusBar /><section className="screen-stack"><div><p className="label">Daily tracking</p><h1 className="page-title" style={{ marginTop:8 }}>Add a log</h1><p className="page-subtitle" style={{ marginTop:12 }}>Capture today’s symptoms, notes, body changes, and hydration in one place.</p></div><div className="desktop-two-col"><div className="hero-card stack"><Option href="/add-log/moods" label="Mood" description="Track how you are feeling emotionally today." /><Option href="/add-log/note" label="Add note" description="Write symptoms, cramps, sleep, or anything important." /><Option href="/add-log/weight" label="Weight" description="Save your current body weight for this date." /><Option href="/add-log/temperature" label="Temperature" description="Record your body temperature in a few seconds." /><Option href="/water" label="Drink water" description="Update hydration and container type." /></div><div className="stack desktop-hide"><div className="metric-box"><p className="label" style={{ margin:0 }}>Today’s goal</p><h3 style={{ margin:'10px 0 0', fontSize:28, fontWeight:800 }}>Complete daily check-in</h3><p className="page-subtitle" style={{ marginTop:10 }}>Use the log sections to build better period insights over time.</p></div><div className="metric-box"><p className="label" style={{ margin:0 }}>Best used for</p><p className="page-subtitle" style={{ marginTop:10 }}>Symptoms, hydration, weight, notes, and temperature tracking.</p></div></div></div></section><BottomNav active="Log" /></AppShell>;
}
