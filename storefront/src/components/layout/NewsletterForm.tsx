"use client";

export function NewsletterForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex w-full max-w-sm gap-2">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        placeholder="Email address"
        className="w-full rounded-full border border-cream/40 bg-transparent px-4 py-2.5 text-sm text-cream placeholder:text-cream/60 focus:border-cream focus:outline-none"
      />
      <button
        type="submit"
        className="shrink-0 rounded-full bg-cream px-5 py-2.5 text-sm font-bold text-brand hover:bg-cream/90"
      >
        Sign up
      </button>
    </form>
  );
}
