import { Link } from "react-router";
import { Movie } from "../types/movie.type";
import TrendingSlider from "./TrendingSlider";
import { SwiperSlide } from "swiper/react";
import Ui from "./Ui";



interface HorizontalSliderProps {
    headerTitle: string;
    hasSeeAll?: boolean;
    movies: Movie[];
}

const HorizontalSlider = ({ headerTitle, hasSeeAll = true, movies }: HorizontalSliderProps) => {
    return (
        <>
            <div className="flex items-center justify-between mb-4 pr-6">
                <h1 className="text-2xl font-bold text-white">{headerTitle}</h1>
                {hasSeeAll && (
                    <Link to="/discover" className="flex items-center gap-2">
                        <button className="text-sm text-white/50 hover:text-white smooth-300">See All</button>
                        <i className="fi fi-rr-arrow-right"></i>
                    </Link>
                )}
            </div>
        
                <TrendingSlider>
                    {movies.map((movie) => (
                        <SwiperSlide key={movie.id}>
                            <Ui movie={movie} />
                        </SwiperSlide>
                    ))}
                </TrendingSlider>
        
        </>
    );
};

export default HorizontalSlider;