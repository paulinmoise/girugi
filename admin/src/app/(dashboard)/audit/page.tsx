/**
 * Audit Logs Page
 * 
 * View all admin actions with filtering.
 * Will be fully implemented in Task 2.14.
 */
export default function AuditPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">
          Audit Logs
        </h1>
        <p className="text-sm text-[var(--text-muted)] mt-1">
          View history of all admin actions
        </p>
      </div>

      <div className="bg-white dark:bg-[var(--surface)] rounded-2xl p-8 border border-[var(--border-default)] text-center">
        <div className="text-4xl mb-4">📋</div>
        <h2 className="text-lg font-semibold text-[var(--text-primary)]">
          Coming in Task 2.14
        </h2>
        <p className="text-sm text-[var(--text-muted)] mt-2 max-w-md mx-auto">
          This page will list all admin actions with filters by action type, 
          admin, and date, showing full context for each entry.
        </p>
      </div>
    </div>
  );
}
