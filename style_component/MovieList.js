import styled from "styled-components";

export const Index = styled.section`
  min-width: calc(100% - 300px); /* 300px은 nav */
  padding-top: 30px;
  z-index: 20;
`;
export const MovieWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const Movie = styled.div`
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
export const MovieInfo = styled.div`
  text-align: left;
  padding: 10px 0 0 30px;
`;
export const MovieTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 900;
  margin-bottom: 10px;
`;
export const MovieVoteDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 30px;
  color: #656565;
`;
export const MovieVote = styled.p`
  font-size: 1.1rem;
`;
export const MovieDate = styled.p`
  font-size: 0.9rem;
`;