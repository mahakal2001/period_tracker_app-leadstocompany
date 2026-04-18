"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import AppShell from "@/components/period/AppShell";
import StatusBar from "@/components/period/StatusBar";
import { apiRequest } from "@/lib/api";
import { getAccessToken } from "@/lib/auth-store";

export default function WaterSuccessPage(){
  const [message, setMessage] = useState('Saving hydration log...');

  useEffect(() => {
    const token = getAccessToken();
    if (!token) {
      setMessage('Please sign in first to save hydration.');
      return;
    }

    apiRequest('/hydration', {
      method: 'POST',
      token,
      body: {
        date: new Date().toISOString(),
        amountMl: 250,
        container: 'Cup',
      },
    })
      .then(() => setMessage('Your hydration log has been updated successfully.'))
      .catch(() => setMessage('Unable to save hydration right now.'));
  }, []);

  return <AppShell><StatusBar /><section className="card stack" style={{ textAlign:'center' }}><div style={{ display:'grid', placeItems:'center' }}><div className="brand-mark" style={{ width:88, height:88, borderRadius:28, fontSize:42 }}>💧</div></div><div><h1 className="page-title">Water added</h1><p className="page-subtitle" style={{ marginTop:12 }}>{message}</p></div><Link href="/home" className="primary-button">Back home</Link></section></AppShell>;
}
