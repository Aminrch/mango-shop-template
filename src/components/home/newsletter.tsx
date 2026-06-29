export default function Newsletter() {
  return (
    <section className="border-t border-neutral-200 py-32">

      <div className="mx-auto max-w-3xl px-6 text-center">

        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-neutral-500">
          Newsletter
        </p>

        <h2 className="text-5xl font-light">
          Join our community
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-neutral-600">
          Receive updates on new arrivals, exclusive collections
          and seasonal campaigns.
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">

          <input
            type="email"
            placeholder="Email address"
            className="flex-1 border border-neutral-300 px-6 py-4 outline-none focus:border-black"
          />

          <button
            className="bg-black px-10 py-4 text-xs uppercase tracking-[0.3em] text-white transition hover:bg-neutral-800"
          >
            Subscribe
          </button>

        </div>

      </div>

    </section>
  )
}
