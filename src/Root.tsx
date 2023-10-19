import { Outlet } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import AsideMenu from "./components/AsideMenu";

const Wrapper = styled.div<{ $asideIsOpen: boolean }>`
    display: grid;
    grid-template-columns: ${(props) => (props.$asideIsOpen ? "240px" : "0px")} 7fr;
    grid-template-rows: 1fr 20fr;
    min-height: 100%;
    transition: all 0.5s ease-in-out;
`;

const AsideBackground = styled.div`
    grid-row: span 2;
    padding-top: 50px;
    background-color: #fce0e2;
`;

const HoverArea = styled.div<{$asideIsOpen: boolean}>`
    position: absolute;
    z-index: ${props => props.$asideIsOpen ? 0 : 1};
    top: 0;
    width: 60px;
    height: 100%;
`;

const HamburgerButton = styled.button<{ $asideIsOpen: boolean }>`
    display: flex;
    padding: 5px;
    margin: 10px;
    /* opacity: ${(props) => (props.$asideIsOpen ? 0 : 1)}; */
    transition: opacity 0.4s ease-in-out;
`;

const HoverAside = styled.div<{ $asideIsHover: boolean }>`
    position: absolute;
    top: 100px;
    left: ${(props) => (props.$asideIsHover ? 0 : -250)}px;
    width: 240px;
    min-height: 240px;
    padding: 10px 0;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: left 0.3s ease-in-out;
`;

function Root() {
    const [asideIsOpen, setAsideIsOpen] = useState<boolean>(true);
    const [asideIsHover, setAsideIsHover] = useState<boolean>(false);
    const [subMenuIsOpen, setSubMenuIsOpen] = useState<boolean>(true);

    /**@function toggleAside
     * 1. asideIsOpen(boolean) 변수의 값을 전환한다.
     * 2. aside 메뉴가 열리면서 hover메뉴가 닫히도록 asideIsHover(boolean) 변수에 false를 대입한다.
     */
    const toggleAside = () => {
        setAsideIsOpen((previous) => !previous);
        setAsideIsHover(false);
    };

    /**@function onHoverAside
     * 1. Aside 메뉴가 열려있을 경우에는(asideIsOpen=true) 아무런 기능없이 함수 종료
     * 2. asideIsHover(boolean) 변수에 true를 대입한다.
     */
    const onHoverAside = () => {
        if (asideIsOpen) return;
        setAsideIsHover(true);
    };

    /**@function onHoverOutAside
     * 1. asideIsHover(boolean) 변수에 false를 대입한다.
     */
    const onHoverOutAside = () => {
        setAsideIsHover(false);
    };

    /**@function toggleSubMenu
     * 1. subMenuIsOpen(boolean) 변수의 값을 전환한다.
     */
    const toggleSubMenu = () => {
        setSubMenuIsOpen((previous) => !previous);
    };

    return (
        <Wrapper $asideIsOpen={asideIsOpen}>
            <AsideBackground>
                <HoverArea onMouseEnter={onHoverAside} onMouseLeave={onHoverOutAside} $asideIsOpen={asideIsOpen}>
                    <HamburgerButton onClick={toggleAside} $asideIsOpen={asideIsOpen}>
                        <svg width="27" height="27" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 7H19" stroke="#888888" strokeWidth="2" strokeLinecap="round" />
                            <path d="M5 12H19" stroke="#888888" strokeWidth="2" strokeLinecap="round" />
                            <path d="M5 17H19" stroke="#888888" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </HamburgerButton>
                </HoverArea>
                <AsideMenu subMenuIsOpen={subMenuIsOpen} toggleSubMenu={toggleSubMenu} />
            </AsideBackground>
            <HoverAside $asideIsHover={asideIsHover}>
                <AsideMenu subMenuIsOpen={subMenuIsOpen} toggleSubMenu={toggleSubMenu} />
            </HoverAside>
            <h1>root</h1>
            <Outlet />
        </Wrapper>
    );
}

export default Root;
