import Link from "next/link";
import { UserCircle } from "lucide-react";

export default function AccountPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-20 text-center sm:px-6">
      <UserCircle size={48} className="mx-auto text-brand" strokeWidth={1.4} />
      <h1 className="mt-4 font-display text-2xl font-semibold text-ink">Accounts aren&apos;t wired up yet</h1>
      <p className="mt-2 text-ink-soft">
        This demo build skips real sign-in and order history — see the project&apos;s build notes for the
        planned auth &amp; account architecture.
      </p>
      <Link
        href="/cart"
        className="mt-6 inline-block rounded-full bg-brand px-5 py-3 text-sm font-bold text-white hover:bg-brand-dark"
      >
        View your bag instead
      </Link>
    </div>
  );
}
