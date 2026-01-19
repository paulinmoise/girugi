/**
 * Settings / Kill Switches Page
 * 
 * Manage feature flags for Daily Friend and Help Me.
 * Will be fully implemented in Task 2.13.
 */
export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">
          Settings
        </h1>
        <p className="text-sm text-[var(--text-muted)] mt-1">
          Feature flags and kill switches
        </p>
      </div>

      <div className="bg-white dark:bg-[var(--surface)] rounded-2xl p-8 border border-[var(--border-default)] text-center">
        <div className="text-4xl mb-4">⚙️</div>
        <h2 className="text-lg font-semibold text-[var(--text-primary)]">
          Coming in Task 2.13
        </h2>
        <p className="text-sm text-[var(--text-muted)] mt-2 max-w-md mx-auto">
          This page will allow toggling Daily Friend and Help Me features on/off,
          require reasons for changes, and show last changed info.
        </p>
      </div>
    </div>
  );
}
