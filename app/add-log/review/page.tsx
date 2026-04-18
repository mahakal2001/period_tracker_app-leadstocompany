"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AppShell from "@/components/period/AppShell";
import StatusBar from "@/components/period/StatusBar";
import { apiRequest } from "@/lib/api";
import { getAccessToken } from "@/lib/auth-store";

export default function ReviewLogPage(){
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const saveLog = async () => {
    try {
      setSaving(true);
      setError(null);
      const token = getAccessToken();
      if (!token) throw new Error('Please sign in first');
      await apiRequest('/logs', {
        method: 'POST',
        token,
        body: {
          date: new Date().toISOString(),
          mood: 'HAPPY',
          note: 'Frontend integrated log',
          weight: 55,
          temperature: 36.6,
          symptoms: ['cramps'],
        },
      });
      router.push('/add-log/success');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to save log');
    } finally {
      setSaving(false);
    }
  };

  return <AppShell><StatusBar /><section className="card stack"><div><p className="label">Review</p><h1 className="page-title" style={{ marginTop:8 }}>Ready to save your log?</h1><p className="page-subtitle" style={{ marginTop:12 }}>This screen now creates a real daily log through the backend API.</p></div>{error ? <div className="metric-box"><p className="page-subtitle" style={{ margin:0 }}>{error}</p></div> : null}<div className="metric-box stack" style={{ gap:10 }}><div style={{ display:'flex', justifyContent:'space-between' }}><span>Mood</span><strong>Happy</strong></div><div style={{ display:'flex', justifyContent:'space-between' }}><span>Weight</span><strong>55 kg</strong></div><div style={{ display:'flex', justifyContent:'space-between' }}><span>Temperature</span><strong>36.6 °C</strong></div></div><button className="primary-button" onClick={saveLog} disabled={saving} style={{ opacity: saving ? .65 : 1 }}>{saving ? 'Saving...' : 'Save log'}</button></section></AppShell>;
}
