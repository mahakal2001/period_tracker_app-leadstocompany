import Link from "next/link";
import Brand from "@/components/period/Brand";
import AppShell from "@/components/period/AppShell";
import StatusBar from "@/components/period/StatusBar";
import { PrimaryLink, SecondaryLink } from "@/components/ui/Buttons";

export default function WelcomePage(){
  return <AppShell><StatusBar /><section style={{ display:'flex', flexDirection:'column', minHeight:'calc(100dvh - 56px)' }}><Brand /><div className="soft-panel" style={{ marginTop:24, padding:'34px 24px', flex:1, display:'flex', flexDirection:'column', justifyContent:'center' }}><div className="rings"><div className="ring-2"><div className="ring-3">🌸</div></div></div><div style={{ position:'relative', zIndex:1, marginTop:28, textAlign:'center' }}><h1 className="page-title">Understand your cycle, own your wellness</h1><p className="page-subtitle" style={{ marginTop:14, maxWidth:300, marginInline:'auto' }}>Track periods, symptoms, moods, and reminders in one soft and simple experience.</p></div></div><div className="stack" style={{ marginTop:22 }}><PrimaryLink href="/signup">Continue with Email</PrimaryLink><div className="split-2"><SecondaryLink href="/signup">Google</SecondaryLink><SecondaryLink href="/signup">Apple</SecondaryLink></div><p className="footer-note">Already have an account? <Link href="/signin" style={{ color:'var(--primary-dark)', fontWeight:700 }}>Sign in</Link></p></div></section></AppShell>;
}
