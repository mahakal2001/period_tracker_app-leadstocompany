import Link from "next/link";

const items = [
  { href: "/home", label: "Home", icon: "⌂" },
  { href: "/calendar", label: "Calendar", icon: "◫" },
  { href: "/add-log", label: "Log", icon: "+" },
  { href: "/tracker/log-count", label: "Tracker", icon: "◔" },
  { href: "/settings", label: "Settings", icon: "⚙" },
];

export default function BottomNav({ active }: { active: string }) {
  return (
    <nav className="bottom-nav" aria-label="Primary">
      {items.map((item) => {
        const selected = active === item.label;
        return (
          <Link key={item.href} href={item.href} className={`bottom-nav-item ${selected ? 'is-active' : ''}`}>
            <span className="bottom-nav-icon" aria-hidden="true">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
