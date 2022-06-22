import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import styled from "styled-components";

const Nav = styled.nav`
  min-width: 300px;
  overflow: hidden;
  border: 1px solid #b0b0b0;
  border-bottom: none;
  padding: 10px 0 0 0px;
  z-index: 10;

  @media screen and (max-width: 1450px) {
    display: none;
  }
`;
const NavWrap = styled.div`
  position: fixed;
  min-width: 300px;

  @media screen and (max-width: 1450px) {
    display: none;
  }
`;
const Items = styled.div`
  max-width: 300px;
  padding: 15px 5px 15px 5px;
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

export default function SideBar() {
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
    <Nav>
      <NavWrap>
        {movieData.map((data, index) => (
          <Link key={index} href={`/movie/${data.id}`}>
            <Items>
              <Name>{data.original_title}</Name>
            </Items>
          </Link>
        ))}
      </NavWrap>
    </Nav>
  );
}
