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

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Headers />
      <Wrap>
        <SideBar />
        <Component {...pageProps} />
      </Wrap>
    </div>
  );
}

export default MyApp;
