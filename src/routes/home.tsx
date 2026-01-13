import HorizontalSlider from "../components/HorizontalSlider";
import movies from "../data/movies";

const  Home = () => {
    return (
        <div className="space-y-8">
        <HorizontalSlider 
        headerTitle="Continue Watching" 
        hasSeeAll={false} 
        movies={movies.filter((movie) => movie.currentlyPlaying)} />

        <HorizontalSlider 
        headerTitle="New Releases" 
        movies={movies} />




    </div>
  )
}

export default Home;

