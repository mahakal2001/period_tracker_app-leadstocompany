import Link from "next/link";
import AppShell from "@/components/period/AppShell";
import StatusBar from "@/components/period/StatusBar";

export default function SelectDatePage(){
  return <AppShell><StatusBar /><section className="card stack"><div><p className="label">Date picker</p><h1 className="page-title" style={{ marginTop:8 }}>Select a specific date</h1></div><div className="metric-box"><p className="page-subtitle">Tap a date in your calendar to view details or add logs for that day.</p></div><Link href="/date/detail" className="primary-button">Open selected date</Link></section></AppShell>;
}
