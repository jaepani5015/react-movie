import {useRef} from "react";
import Headers from "../components/Headers";
import SideBar from "../components/SideBar";
import "../styles/globals.css";

import styled from "styled-components";
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from 'react-query/devtools';

const Wrap = styled.main`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
`;

const queryClient = new QueryClient();

export default function MyApp({Component, pageProps}) {
    const navMenu = useRef();

    return (<QueryClientProvider client={queryClient}>
        <Headers refData={navMenu}/>
        <Wrap>
            {/* <SideBar refData={navMenu} /> */}
            <Component {...pageProps} />
        </Wrap>
        <ReactQueryDevtools initialIsOpen="true"/>
    </QueryClientProvider>);
}