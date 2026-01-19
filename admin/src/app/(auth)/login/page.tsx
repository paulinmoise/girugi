/**
 * Admin Login Page
 * 
 * Email + password login for admin users.
 * Will be implemented in Task 2.8.
 * 
 * Requirements from tasks.md:
 * - Email + password login (mock)
 * - Admin role check
 * - Redirect to dashboard on success
 * - Error states
 */
export default function LoginPage() {
  return (
    <div className="bg-white dark:bg-[var(--surface)] rounded-2xl shadow-lg p-8 border border-[var(--border-default)]">
      {/* Logo */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-tr from-[var(--chart-1)] to-[var(--chart-2)] text-white font-bold text-xl mb-4">
          G
        </div>
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">
          Girugi Admin
        </h1>
        <p className="text-sm text-[var(--text-muted)] mt-1">
          Sign in to access the admin console
        </p>
      </div>

      {/* Placeholder form - will be implemented in Task 2.8 */}
      <div className="space-y-4">
        <div>
          <label 
            htmlFor="email" 
            className="block text-sm font-medium text-[var(--text-secondary)] mb-1"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="admin@girugi.app"
            className="w-full px-4 py-3 rounded-xl bg-[var(--surface-muted)] border border-[var(--border-strong)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--primary)] focus:outline-none"
            disabled
          />
        </div>

        <div>
          <label 
            htmlFor="password" 
            className="block text-sm font-medium text-[var(--text-secondary)] mb-1"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            className="w-full px-4 py-3 rounded-xl bg-[var(--surface-muted)] border border-[var(--border-strong)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--primary)] focus:outline-none"
            disabled
          />
        </div>

        <button
          type="button"
          className="w-full py-3 rounded-xl bg-gradient-to-r from-[var(--chart-1)] to-[var(--chart-2)] text-white font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          disabled
        >
          Sign In
        </button>

        <p className="text-center text-xs text-[var(--text-muted)] mt-4">
          🚧 Login functionality will be implemented in Task 2.8
        </p>
      </div>
    </div>
  );
}
