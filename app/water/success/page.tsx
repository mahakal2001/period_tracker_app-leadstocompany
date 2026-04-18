import Link from "next/link";
import AppShell from "@/components/period/AppShell";
import StatusBar from "@/components/period/StatusBar";

export default function WaterSuccessPage(){
  return <AppShell><StatusBar /><section className="card stack" style={{ textAlign:'center' }}><div style={{ display:'grid', placeItems:'center' }}><div className="brand-mark" style={{ width:88, height:88, borderRadius:28, fontSize:42 }}>💧</div></div><div><h1 className="page-title">Water added</h1><p className="page-subtitle" style={{ marginTop:12 }}>Your hydration log has been updated successfully.</p></div><Link href="/home" className="primary-button">Back home</Link></section></AppShell>;
}
