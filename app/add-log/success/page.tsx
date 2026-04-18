import Link from "next/link";
import AppShell from "@/components/period/AppShell";
import StatusBar from "@/components/period/StatusBar";

export default function LogSuccessPage(){
  return <AppShell><StatusBar /><section style={{ minHeight:'calc(100dvh - 56px)', display:'grid', placeItems:'center' }}><div className="card stack" style={{ textAlign:'center' }}><div style={{ display:'grid', placeItems:'center' }}><div className="brand-mark" style={{ width:88, height:88, borderRadius:28, fontSize:42 }}>✓</div></div><div><h1 className="page-title">Log added</h1><p className="page-subtitle" style={{ marginTop:12 }}>Your health log has been saved successfully for today.</p></div><Link href="/home" className="primary-button">Back home</Link></div></section></AppShell>;
}
