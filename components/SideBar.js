import Link from "next/link";
import styled from "styled-components";
import { useRecoilValue } from 'recoil';
import { movieList } from '../pages/_app';

const Nav = styled.nav`
  min-width: 300px;
  border: 1px solid #b0b0b0;
  border-bottom: none;
  z-index: 50;

  @media screen and (max-width: 1450px) {
    display: none;
  }
`;
const NavWrap = styled.div`
  position: fixed;
  overflow: scroll;
  min-width: 300px;
  height: 130%;
  background-color: white;
`;
const Items = styled.div`
  max-width: 300px;
  padding: 30px 5px 15px 5px;
  display: flex;
  align-item: center;
  &:hover {
    background-color: #efefef;
    border-right: 1px solid #b0b0b0;
  }
`;
const Icon = styled.button`
  background-color: transparent;
  border: none;
`;
const Name = styled.button`
  font-weight: 800;
  background-color: transparent;
  border: none;
  max-width: 300px;
  overflow: hidden;
  text-align: left;
`;

export default function SideBar({refData}) {

  const getMovieList = useRecoilValue(movieList);

  if (getMovieList.length === 0) return <h1>loading...</h1>;
  return (
    <Nav ref={refData}>
      <NavWrap>
        {getMovieList.map((md, index) => (
          <Link key={index} href={`/movie/${md.id}`}>
            <Items>
              <Name>{md.original_title}</Name>
            </Items>
          </Link>
        ))}
      </NavWrap>
    </Nav>
  );
}
