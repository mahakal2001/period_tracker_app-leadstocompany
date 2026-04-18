import Link from "next/link";
import AppShell from "@/components/period/AppShell";
import StatusBar from "@/components/period/StatusBar";

export default function PasswordUpdatedPage(){
  return <AppShell><StatusBar /><section style={{ minHeight:'calc(100dvh - 56px)', display:'grid', placeItems:'center' }}><div className="card stack" style={{ textAlign:'center' }}><div style={{ display:'grid', placeItems:'center' }}><div className="brand-mark" style={{ width:88, height:88, borderRadius:28, fontSize:42 }}>✓</div></div><div><h1 className="page-title">Password updated</h1><p className="page-subtitle" style={{ marginTop:12 }}>Your password has been changed successfully. You can now sign in with your new credentials.</p></div><Link href="/signin" className="primary-button">Back to sign in</Link></div></section></AppShell>;
}
