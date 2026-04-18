import { ReactNode } from "react";

export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="app-shell-outer">
      <main className="app-shell">{children}</main>
      <aside className="desktop-side-panel" aria-hidden="true">
        <div className="desktop-side-card">
          <p className="label" style={{ margin: 0 }}>Lunari</p>
          <h2 style={{ margin: '10px 0 0', fontSize: 36, lineHeight: 1.05, fontWeight: 800 }}>Period tracking, built for desktop and mobile</h2>
          <p className="page-subtitle" style={{ marginTop: 14 }}>The mobile experience stays intact, while desktop now gets a cleaner app presentation with more breathing room.</p>
        </div>
        <div className="desktop-side-stats">
          <div className="metric-box"><p className="label" style={{ margin: 0 }}>Mode</p><h3 style={{ margin: '10px 0 0', fontSize: 28, fontWeight: 800 }}>Responsive</h3></div>
          <div className="metric-box"><p className="label" style={{ margin: 0 }}>Layouts</p><h3 style={{ margin: '10px 0 0', fontSize: 28, fontWeight: 800 }}>2</h3></div>
        </div>
      </aside>
    </div>
  );
}
