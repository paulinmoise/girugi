/**
 * Auth Layout
 * 
 * Simple centered layout for authentication pages.
 * No sidebar or navigation - just the auth form.
 */
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--app-bg)]">
      <div className="w-full max-w-md px-6">
        {children}
      </div>
    </div>
  );
}
