import Link from "next/link";
import AppShell from "@/components/period/AppShell";
import StatusBar from "@/components/period/StatusBar";

export default function WaterPage(){
  return <AppShell><StatusBar /><section className="card stack"><div><p className="label">Hydration</p><h1 className="page-title" style={{ marginTop:8 }}>Drink water</h1><p className="page-subtitle" style={{ marginTop:12 }}>Track your water intake and adjust container type based on what you drank today.</p></div><Link href="/water/container" className="secondary-button">Switch container</Link><Link href="/water/history" className="secondary-button">View today history</Link><Link href="/water/success" className="primary-button">Log water intake</Link></section></AppShell>;
}
