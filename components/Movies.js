import Link from "next/link";
import {
    Movie, MovieDate, MovieImage, MovieInfo, MovieTitle, MovieVote, MovieVoteDate, MovieWrap
} from "../style_component/MovieList";
import {useEffect} from "react";

export default function Movies({movieProp}) {

    useEffect(() => {
        console.log("##### movieProp :: ", movieProp);
    }, [movieProp]);

    return (<MovieWrap>
        {movieProp.map((md) => (<Link key={md.id} href={`/movie/${md.id}`}>
            <Movie>
                <MovieImage
                    src={`https://image.tmdb.org/t/p/w440_and_h660_face/${md.backdrop_path}`}
                />
                <MovieInfo>
                    <MovieTitle>{md.original_title}</MovieTitle>
                    <MovieVoteDate>
                        <MovieVote>평점 : {md.vote_average}</MovieVote>
                        <MovieDate>{md.release_date}</MovieDate>
                    </MovieVoteDate>
                </MovieInfo>
            </Movie>
        </Link>))}
    </MovieWrap>);
}