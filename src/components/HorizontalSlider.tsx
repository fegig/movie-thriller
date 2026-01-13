import { Link } from "react-router";
import { Movie } from "../types/movie.type";



interface HorizontalSliderProps {
headerTitle: string;
hasSeeAll?: boolean;
movies: Movie[];
}

const HorizontalSlider = ({ headerTitle, hasSeeAll = true, movies }: HorizontalSliderProps) => {
    return (
        <>
        <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-white">{headerTitle}</h1>
            {hasSeeAll && (
                <Link to="/discover" className="flex items-center gap-2">
                    <button className="text-sm text-white/50 hover:text-white smooth-300">See All</button>
                    <i className="fi fi-rr-arrow-right"></i>
        </Link>
      )}
    </div>
    <div className="flex items-center gap-8 overflow-x-auto">

            {movies.map((movie) => (
                <div key={movie.id}>
                <div className="relative rounded-lg overflow-hidden border border-white/10 w-36 h-56">
                        <img src={movie.poster_path} alt={movie.title} className="w-full h-full object-cover rounded-lg" />
                   
                        <div className="absolute inset-0 bg-linear-to-t from-accent-high-priority/40 to-transparent opacity-0 hover:opacity-100 transition-opacity">
                           
                            <button className="text-sm text-white smooth-300 p-2 rounded-full bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <i className="fi fi-rs-play"></i>
                            </button>
                            
                            {movie.playPercentage && movie.playPercentage > 0 && <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
                                <div className="h-full bg-white" style={{ width: `${movie.playPercentage}%` }}></div>
                            </div>}
                        </div>
                    </div>
                    <div className="mx-auto w-32 mt-4">
                        <h3 className="text-sm font-bold text-white text-center  truncate text-ellipsis overflow-hidden">{movie.title}</h3>
                    </div>
                </div>
            ))}
        
    </div>
    </>
  );
};

export default HorizontalSlider;