import { useRef } from "react";
import { atom, selector, RecoilRoot } from "recoil";
import Headers from "../components/Headers";
import SideBar from "../components/SideBar";
import "../styles/globals.css";

import styled from "styled-components";

const Wrap = styled.main`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
`;

export default function MyApp({ Component, pageProps }) {
  const navMenu = useRef();
  return (
    <RecoilRoot>
        <Headers refData={navMenu}/>
        <Wrap>
            <SideBar refData={navMenu} />
            <Component {...pageProps} />
        </Wrap>
    </RecoilRoot>
  );
}

export const movies = atom({
  key: 'movies',
  default: []
})

export const movieList = selector({
  key: 'movieList',
  get: ({get}) => {
    return get(movies);
  }
})