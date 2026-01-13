export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    backdrop_path: string;
    vote_average: number;
    vote_count: number;
    overview: string;
    release_date: string;
    genres: string[];
    runtime: number;
    inCinemas?: boolean;
    currentlyPlaying?: boolean;
    playPercentage?: number; // 0-100
}
