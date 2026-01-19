# Girugi Admin Console

This is the **Girugi Admin Console** (Next.js App Router).

## Getting Started

From this `admin/` directory:

```bash
npm run dev
```

### Which URL to open?

Next.js will print the actual URL/port in the terminal (usually `http://localhost:3000`, but if that port is already in use it will pick another and print it). **Use the URL shown in the terminal output.**

If you want to force a specific port (recommended to avoid confusion), run:

```bash
npm run dev -- -p 3050
```

Then open `http://localhost:3050`.

## Routing (App Router)

This app uses **route groups**, so folders like `(dashboard)` do **not** appear in the URL.

- `/` is served by `src/app/(dashboard)/page.tsx`
- `/login` is served by `src/app/(auth)/login/page.tsx`

## Notes

- `src/app/page.tsx` does **not** exist in this project. If you see documentation referencing it, it's likely leftover boilerplate.
