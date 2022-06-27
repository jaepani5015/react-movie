import styled from "styled-components";

export const DetailWrap = styled.section`
  width: 100%;
  height: 200vh;
  min-height: 100vh;
  // background-color: #696969;
`;

export const MainWrap = styled.div`
  width: 100%;
  // background-color: #363636;
  display: flex;

  @media screen and (max-width: 1450px) {
    display: block;
  }
`;
export const MainImageWrap = styled.div`
  width: 45%;
  // background-color: #222222;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  @media screen and (max-width: 1450px) {
    width: 100%;
  }
`;
export const MainInfoWrap = styled.div`
  width: 50%;
  height: 30vh;
  margin-top: 50px;
  // background-color: #111111;

  @media screen and (max-width: 1450px) {
    width: 100%;
  }
`;
export const TitleWrap = styled.div`
  width: 100%;
  height: 20%;
  // background-color: orange;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 15px;
`;
export const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: 800;
`;
export const DescWrap = styled.div`
  width: 100%;
  height: 50%;
  // background-color: green;
  padding: 15px;
`;
export const DescTitle = styled.h2`
  text-align: left;
  font-size: 1.3rem;
  font-weight: 600;
  padding-bottom: 10px;
`;
export const DescInfo = styled.p`
  margin: 10px 0;
  line-height: 2;
  
`;
export const DescTime = styled(DescInfo)`
  text-align: right;
  margin-right: 20px;
`;
export const DescVoteAvg = styled(DescInfo)`
  text-align: right;
  margin-right: 20px;
`;

export const MovieDetailImage = styled.img`
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