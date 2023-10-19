import { Outlet } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import hamburgerIcon from "./assets/images/hamburger.png";
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

const HamburgerPadding = styled.div`
    position: absolute;
    z-index: 1;
    top: 0;
    height: 100%;
`;

const HamburgerButton = styled.button`
    display: flex;
    padding: 5px;
    margin: 10px;
`;

const HoverAside = styled.div<{ $asideIsHover: boolean }>`
    position: absolute;
    top: 50px;
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
     */
    const toggleAside = () => {
        setAsideIsOpen((previous) => !previous);
    };

    /**@function onHoverAside
     * 1. asideIsHover(boolean) 변수에 true를 대입한다.
     */
    const onHoverAside = () => {
        setAsideIsHover(true);
    };

    /**@function onHoverOutAside
     * 1. asideIsHover(boolean) 변수에 false를 대입한다.
     */
    const onHoverOutAside = () => {
        setAsideIsHover(false);
    }

    /**@function toggleSubMenu
     * 1. subMenuIsOpen(boolean) 변수의 값을 전환한다.
     */
    const toggleSubMenu = () => {
        setSubMenuIsOpen((previous) => !previous);
    };

    return (
        <Wrapper $asideIsOpen={asideIsOpen}>
            <AsideBackground>
                <HamburgerPadding onMouseEnter={onHoverAside} onMouseLeave={onHoverOutAside}>
                    <HamburgerButton onClick={toggleAside}>
                        <img src={hamburgerIcon} alt="hamburger menu" width={20} />
                    </HamburgerButton>
                </HamburgerPadding>
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
