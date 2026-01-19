/**
 * Admin Dashboard Page
 * 
 * Overview of pending queues and quick actions.
 * Will be fully implemented in Task 2.9.
 * 
 * Requirements from tasks.md:
 * - Shows pending counts (verifications, reports, listings)
 * - Quick links to queues
 * - Feature flag status visible
 */

// Mock data for placeholder display
const MOCK_STATS = [
  { 
    label: "Pending Verifications", 
    count: 12, 
    icon: "✅",
    href: "/verifications",
    color: "from-blue-500 to-cyan-500"
  },
  { 
    label: "Open Reports", 
    count: 5, 
    icon: "🚨",
    href: "/reports",
    color: "from-red-500 to-orange-500"
  },
  { 
    label: "Listing Approvals", 
    count: 8, 
    icon: "📍",
    href: "/listings",
    color: "from-green-500 to-emerald-500"
  },
];

const FEATURE_FLAGS = [
  { name: "Daily Friend", enabled: true },
  { name: "Help Me", enabled: true },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">
          Dashboard
        </h1>
        <p className="text-sm text-[var(--text-muted)] mt-1">
          Overview of admin queues and system status
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {MOCK_STATS.map((stat) => (
          <div
            key={stat.label}
            className="bg-white dark:bg-[var(--surface)] rounded-2xl p-6 border border-[var(--border-default)] hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-[var(--text-muted)]">{stat.label}</p>
                <p className="text-3xl font-bold text-[var(--text-primary)] mt-1">
                  {stat.count}
                </p>
              </div>
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-2xl`}>
                {stat.icon}
              </div>
            </div>
            <a 
              href={stat.href}
              className="inline-block mt-4 text-sm font-medium text-[var(--primary)] hover:underline"
            >
              View queue →
            </a>
          </div>
        ))}
      </div>

      {/* Quick Actions & Feature Flags */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <div className="bg-white dark:bg-[var(--surface)] rounded-2xl p-6 border border-[var(--border-default)]">
          <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
            Quick Actions
          </h2>
          <div className="space-y-3">
            <button 
              className="w-full px-4 py-3 rounded-xl bg-[var(--surface-muted)] text-left text-[var(--text-secondary)] hover:bg-[var(--border-default)] transition-colors flex items-center gap-3"
              disabled
            >
              <span>✅</span>
              <span>Review next verification</span>
            </button>
            <button 
              className="w-full px-4 py-3 rounded-xl bg-[var(--surface-muted)] text-left text-[var(--text-secondary)] hover:bg-[var(--border-default)] transition-colors flex items-center gap-3"
              disabled
            >
              <span>🚨</span>
              <span>Process urgent report</span>
            </button>
            <button 
              className="w-full px-4 py-3 rounded-xl bg-[var(--surface-muted)] text-left text-[var(--text-secondary)] hover:bg-[var(--border-default)] transition-colors flex items-center gap-3"
              disabled
            >
              <span>📋</span>
              <span>View audit logs</span>
            </button>
          </div>
          <p className="text-xs text-[var(--text-muted)] mt-4">
            🚧 Actions will be functional in Task 2.9
          </p>
        </div>

        {/* Feature Flags / Kill Switches */}
        <div className="bg-white dark:bg-[var(--surface)] rounded-2xl p-6 border border-[var(--border-default)]">
          <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
            Feature Flags
          </h2>
          <div className="space-y-4">
            {FEATURE_FLAGS.map((flag) => (
              <div 
                key={flag.name}
                className="flex items-center justify-between py-3 border-b border-[var(--border-default)] last:border-0"
              >
                <div>
                  <p className="font-medium text-[var(--text-primary)]">
                    {flag.name}
                  </p>
                  <p className="text-xs text-[var(--text-muted)]">
                    Kill switch for {flag.name.toLowerCase()}
                  </p>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  flag.enabled 
                    ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                    : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                }`}>
                  {flag.enabled ? 'Enabled' : 'Disabled'}
                </div>
              </div>
            ))}
          </div>
          <a 
            href="/settings"
            className="inline-block mt-4 text-sm font-medium text-[var(--primary)] hover:underline"
          >
            Manage settings →
          </a>
        </div>
      </div>

      {/* Info Banner */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800">
        <div className="flex items-start gap-4">
          <div className="text-2xl">ℹ️</div>
          <div>
            <h3 className="font-semibold text-blue-900 dark:text-blue-100">
              Phase 0 Complete - Structure Setup
            </h3>
            <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
              Admin project structure is ready. Next steps: Task 0.3 (Design Tokens) 
              and Task 0.4 (Mock Data Strategy). Full dashboard implementation in Phase 2.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
