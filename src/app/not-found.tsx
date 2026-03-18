import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-2 text-6xl font-black text-[#1337ec]">404</h1>
      <p className="mb-6 text-lg text-slate-400">
        This page doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-[#1337ec] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#1337ec]/90"
      >
        Go Home
      </Link>
    </div>
  );
}
