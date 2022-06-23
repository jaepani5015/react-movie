import { useRouter } from "next/router";
import { useEffect, useState, createRef } from "react";
import { MovieImage } from "../index";

import axios from "axios";

import styled from "styled-components";

const DetailWrap = styled.section`
  width: 100%;
  height: 200vh;
  min-height: 100vh;
  // background-color: #696969;
`;

const MainWrap = styled.div`
  width: 100%;
  // background-color: #363636;
  display: flex;

  @media screen and (max-width: 1450px) {
    display: block;
  }
`;
const MainImageWrap = styled.div`
  width: 50%;
  // background-color: #222222;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  @media screen and (max-width: 1450px) {
    width: 100%;
  }
`;
const MainInfoWrap = styled.div`
  width: 50%;
  height: 30vh;
  margin-top: 50px;
  // background-color: #111111;

  @media screen and (max-width: 1450px) {
    width: 100%;
  }
`;
const TitleWrap = styled.div`
  width: 100%;
  height: 20%;
  // background-color: orange;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 15px;
`;
const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: 800;
`;
const DescWrap = styled.div`
  width: 100%;
  height: 50%;
  // background-color: green;
  padding: 15px;
`;
const DescTitle = styled.h2`
  text-align: left;
  font-size: 1.3rem;
  font-weight: 600;
  padding-bottom: 10px;
`;
const DescInfo = styled.p`
  margin: 10px 0;
  line-height: 2;
  
`;
const DescTime = styled(DescInfo)`
  text-align: right;
  margin-right: 20px;
`;
const DescVoteAvg = styled(DescInfo)`
  text-align: right;
  margin-right: 20px;
`;
export default function MovieDetail() {
  const router = useRouter();
  const [detailData, setDetailData] = useState({});

  const isRef = createRef();

  useEffect(() => {
    console.log(router.query.detail);
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
          <MovieImage
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
