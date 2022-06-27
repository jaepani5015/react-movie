import styled from "styled-components";

export const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  box-shadow: 2px 2px 2px black;
  background-color: #efefef;
  padding: 10px 30px;
  z-index: 99;
`;
export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 75px;

  @media screen and (max-width: 1450px) {
  }
`;
export const MenuButton = styled.p`
  font-size: 2rem;

  @media screen and (min-width: 1450px) {
    display: none;
  }
`;
export const Title = styled.div`
  font-size: 1.5rem;
`;
export const Etc = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 1.2rem;
    margin: 5px 0 0 5px;

    @media screen and (max-width: 1450px) {
      display: none;
    }
  }
`;