import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import styled from "styled-components";

const Index = styled.section`
  min-width: calc(100% - 300px); /* 300px은 nav */
  padding: 30px 0 0 10px;
  z-index: 20;
`;
const MovieWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Movie = styled.div`
  width: 20%;
  text-align: center;
  margin-bottom: 30px;

  @media screen and (max-width: 2300px) {
    width: 25%;
  }
  @media screen and (max-width: 1800px) {
    width: 33.33333%;
  }
  @media screen and (max-width: 1450px) {
    width: 50%;
  }
  @media screen and (max-width: 997px) {
    width: 100%;
  }
`;
export const MovieImage = styled.img`
  border-radius: 10px;
  box-shadow: 3px 3px 3px #868686;

  @media screen and (max-width: 2600px) {
    width: 25vh;
  }
  @media screen and (max-width: 2300px) {
    width: 20vw;
  }
  @media screen and (max-width: 1800px) {
    width: 25vw;
  }
  @media screen and (max-width: 1450px) {
    width: 45vw;
  }
  @media screen and (max-width: 997px) {
    width: 90vw;
  }
`;
const MovieInfo = styled.div`
  text-align: left;
  padding: 10px 0 0 30px;
`;
const MovieTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 900;
  margin-bottom: 10px;
`;
const MovieVoteDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 30px;
  color: #656565;
`;
const MovieVote = styled.p`
  font-size: 1.1rem;
`;
const MovieDate = styled.p`
  font-size: 0.9rem;
`;

export default function Home() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/4/list/1?page=1&api_key=9b3c0beaa11b2e25a89860c9a931a958"
      )
      .then((res) => {
        setMovieData(res.data.results);
      });
  }, []);

  if (movieData.length === 0) return <h1>loading...</h1>;
  return (
    <Index>
      <MovieWrap>
        {movieData.map((md) => (
          <Link key={md.id} href={`/movie/${md.id}`}>
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
          </Link>
        ))}
      </MovieWrap>
    </Index>
  );
}
