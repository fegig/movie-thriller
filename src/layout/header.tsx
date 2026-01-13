const Header = () => {
  return (
    <header className="relative  mb-8">
      <div className="relative mx-auto flex items-center gap-6 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-high-priority text-slate-950">
            <span className="text-lg font-bold">PR</span>
          </div>
          <div className="leading-tight">
            <p className="text-sm uppercase tracking-[0.35em] text-white/50">THRILLER</p>
            <p className="text-lg font-semibold text-white">Movie Thriller Hub</p>
          </div>
        </div>
    
        <div className="flex-1">
          <div className="relative mx-auto max-w-xl">
            <i className="fi fi-rr-search pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/50" />
            <input
              className="w-full rounded-full border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-sm text-white/90 placeholder:text-white/40 outline-none transition focus:border-accent-high-priority/60 focus:bg-white/10"
              placeholder="Search or paste link"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-accent-high-priority/60 hover:text-accent-high-priority/20"
            aria-label="Share"
          >
            <i className="fi fi-rr-share" />
          </button>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-accent-high-priority/60 hover:text-accent-high-priority/20"
            aria-label="Expand"
          >
            <i className="fi fi-rr-expand" />
          </button>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-accent-high-priority/60 hover:text-accent-high-priority/20"
            aria-label="Profile"
          >
            <i className="fi fi-rr-user" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
