import {useEffect, useState} from "react";
import Link from 'next/link';
import {
    Header, Wrap, MenuButton, Title, Etc
} from "../style_component/Header";

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
        if (innerWidthSize >= 1450) {
            // goBackDropMenu();
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
                    {/* <MenuButton onClick={onClickDropMenu}>&#9776;</MenuButton> */}
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
