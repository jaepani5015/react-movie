import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { DetailWrap, MainWrap, MainImageWrap, MainInfoWrap, TitleWrap, Title, DescWrap, DescTitle, DescInfo, DescTime, DescVoteAvg, MovieDetailImage } from "../../style_component/MovieDetails";

import { useQuery } from "react-query";

import axios from "axios";

export default function MovieDetail() {
  const router = useRouter();
  const [detailData, setDetailData] = useState({});

  
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${router.query.detail}?api_key=9b3c0beaa11b2e25a89860c9a931a958&language=en-US`
      )
      .then((res) => {
        setDetailData(res.data);
      });
  }, [router.query.detail]);

  return (
    <DetailWrap>
      <MainWrap>
        <MainImageWrap>
          <MovieDetailImage
            src={`https://image.tmdb.org/t/p/w440_and_h660_face/${detailData.poster_path}`}
          />
        </MainImageWrap>
        <MainInfoWrap>
          <TitleWrap>
            <Title>{detailData.original_title}</Title>
          </TitleWrap>
          <DescWrap>
            <DescTitle>Movie Infomations</DescTitle>
            <DescInfo>{detailData.overview}}</DescInfo>
            <DescTime>{detailData.runtime}분</DescTime>
            <DescVoteAvg>{detailData.vote_average}점</DescVoteAvg>
          </DescWrap>
        </MainInfoWrap>
      </MainWrap>
    </DetailWrap>
  );
}


