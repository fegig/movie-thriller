import { useNavigate } from "react-router";

const MovieSDetialsHeader = () => {
    const navigate = useNavigate()
    return (<>
        <header className="relative  mb-8">
            <div className="relative mx-auto flex items-center justify-between gap-6 px-6 py-4">
                <div className="flex items-center gap-3">
                    <button onClick={() => navigate(-1)} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-accent-high-priority/60 hover:text-accent-high-priority/20">
                        <i className="fi fi-rr-arrow-left" />
                    </button>
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
    </>);
}

export default MovieSDetialsHeader;