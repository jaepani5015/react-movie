import {useEffect, useState} from "react";
import Link from 'next/link';
import styled from "styled-components";

const Header = styled.header`
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
const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 75px;

  @media screen and (max-width: 1450px) {
  }
`;
const MenuButton = styled.p`
  font-size: 2rem;

  @media screen and (min-width: 1450px) {
    display: none;
  }
`;
const Title = styled.div`
  font-size: 1.5rem;
`;
const Etc = styled.div`
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

export default function Headers({refData}) {

  const [innerWidthSize, setInnerWidthSize] = useState(0);

  const onChangeWidth = () => {
    setInnerWidthSize(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', onChangeWidth);
  }, []);

  useEffect(() => {
    console.log(innerWidthSize);
    if(innerWidthSize >= 1450) {
      goBackDropMenu();
    }
  }, [innerWidthSize]);


  const onClickDropMenu = () => {
    refData.current.style.display === 'block' ? refData.current.style.display = 'none' : refData.current.style.display = 'block';
    refData.current.style.position === 'absolute' ? refData.current.style.position = '' : refData.current.style.position = 'absolute';
  }

  const goBackDropMenu = () => {
    refData.current.style.display = 'none';
    refData.current.style.position = 'absolute';
  }

  return (
    <Header>
      <Wrap>
        <div>
          <MenuButton onClick={onClickDropMenu}>&#9776;</MenuButton>
        </div>
        <div>
          <Link href="/">
            <Title>#</Title>
          </Link>
        </div>
        <Etc>
          <p>kakao</p>
          <p>github</p>
          <p>blog</p>
        </Etc>
      </Wrap>
    </Header>
  );
}
