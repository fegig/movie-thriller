import { useParams } from "react-router"
import movies from "../data/movies"
import MovieSDetialsHeader from "../layout/header.movies"

const Movie = () => {
    const { id } = useParams()
    const movie = movies.find((movie) => movie.id === parseInt(id as string))
    
    if (!movie) {
        return <div>Movie not found</div>
    }

    return (
        <div>
          <MovieSDetialsHeader />
          <div className="gap-4 p-8 relative space-y-8 rounded-2px bg-stone-900/40 backdrop-blur-sm rounded-3xl mx-8"
          style={{
            backgroundImage: `url(${movie.backdrop_path})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          > 
          
                    <div className="absolute top-0 left-0 w-full h-full blur-sm bg-black/50 opacity-100 transition-opacity -z-1 backdrop-blur-xs "></div>
                    <div>logo</div>
                    <div className="grid grid-cols-3 justify-between gap-4">
                        <div className="col-span-1 justify-center items-center">{movie.runtime}</div>
                        <div className="col-span-1 justify-center items-center">{movie.release_date}</div>
                        <div className="col-span-1 justify-center items-center">{movie.vote_average}</div>
                    </div>
                    <p className="text-white/50 text-sm">{movie.overview}</p>

                    <div className="flex items-center gap-2 flex-wrap">
                        {movie.genres.map((genre) => (
                            <span key={genre} className="bg-white/20 text-slate-100 text-sm uppercase tracking-widest px-2 py-1 rounded-full">{genre}</span>
                        ))}
                    </div>

                    <div className=" grid grid-cols-12 items-end my-20">
                        <div className="col-span-2">
                            <span className="flex items-center justify-center h-14 w-14 text-white border border-white/10  hover:border-accent-high-priority/60 hover:text-accent-high-priority/20 transition-all smooth-300 text-xl rounded-full ">
                                <i className="fi fi-ts-popcorn"></i>
                            </span>
                        </div>
                        <div className="col-span-2">
                            <span className="flex items-center justify-center h-14 w-14 text-white border border-white/10  hover:border-accent-high-priority/60 hover:text-accent-high-priority/20 transition-all smooth-300 text-xl rounded-full ">
                                <i className="fi fi-ts-layer-plus"></i>
                            </span>
                        </div>
                        <div className="col-span-8">
                            <div className="flex items-center gap-2">
                                <span className="flex items-center justify-center h-14 w-full text-white border border-white/10  hover:border-accent-high-priority/60 hover:text-accent-high-priority/20 transition-all smooth-300 text-xl rounded-full ">
                                    <i className="fi fi-rr-play"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Movie