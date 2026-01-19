/**
 * Dashboard Layout
 * 
 * Main admin shell with sidebar and topbar.
 * Will contain navigation to all admin sections.
 * 
 * Sections (from tasks.md):
 * - Dashboard (overview)
 * - Verifications queue
 * - Reports queue
 * - Listing approvals
 * - Settings (feature flags)
 * - Audit logs
 */

import Link from "next/link";

// Navigation items - will be moved to a config file later
const NAV_ITEMS = [
  { label: "Dashboard", href: "/", icon: "📊" },
  { label: "Verifications", href: "/verifications", icon: "✅" },
  { label: "Reports", href: "/reports", icon: "🚨" },
  { label: "Listings", href: "/listings", icon: "📍" },
  { label: "Settings", href: "/settings", icon: "⚙️" },
  { label: "Audit Logs", href: "/audit", icon: "📋" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-[var(--app-bg)]">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-[var(--surface)] border-r border-[var(--border-default)] flex flex-col">
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b border-[var(--border-default)]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[var(--chart-1)] to-[var(--chart-2)] flex items-center justify-center text-white font-bold text-sm">
              G
            </div>
            <span className="font-bold text-lg text-[var(--text-primary)]">
              Girugi Admin
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-[var(--text-secondary)] hover:bg-[var(--surface-muted)] hover:text-[var(--text-primary)] transition-colors"
                >
                  <span>{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-[var(--border-default)]">
          <div className="px-4 py-2 text-xs text-[var(--text-muted)]">
            Phase 0 - Structure Setup
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="h-16 bg-white dark:bg-[var(--surface)] border-b border-[var(--border-default)] flex items-center justify-between px-6">
          <div>
            {/* Breadcrumb placeholder */}
            <span className="text-sm text-[var(--text-muted)]">
              Admin Console
            </span>
          </div>
          <div className="flex items-center gap-4">
            {/* User menu placeholder */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[var(--surface-muted)] flex items-center justify-center text-sm">
                👤
              </div>
              <span className="text-sm font-medium text-[var(--text-secondary)]">
                Admin
              </span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
