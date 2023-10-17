import { Outlet } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import hamburgerIcon from "./assets/images/hamburger.png";
import arrowRightIcon from "./assets/images/arrow_right.png";

const Wrapper = styled.div<{ $asideIsOpen: boolean }>`
    display: grid;
    grid-template-columns: ${(props) => (props.$asideIsOpen ? 1 : 0)}fr 7fr;
    grid-template-rows: 1fr 20fr;
    min-height: 100%;
    background-color: red;
    transition: all 0.5s ease-in-out;
`;

const Aside = styled.div`
    grid-row: span 2;
    background-color: white;
`;

const HamburgerButton = styled.button`
    display: flex;
    padding: 5px;
    margin: 10px;
`;

const AsideItemWrapper = styled.div`
    margin: 5px;
`;

const AsideItem = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 4px 5px;
    &:hover {
        border-radius: 3px;
        background-color: rgba(0, 0, 0, 0.1);
    }
    > span {
        font-size: 15px;
        font-weight: 600;
    }
`;

const SubMenuButton = styled.button<{ $subMenuIsOpen: boolean }>`
    display: flex;
    &:hover {
        background-color: rgba(0, 0, 0, 0.2);
    }
    > img {
        padding: 2.5px;
        transform: rotateZ(${(props) => (props.$subMenuIsOpen ? 90 : 0)}deg);
        transition: transform 0.25s ease-in-out;
    }
`;

function Root() {
    const [asideIsOpen, setAsideIsOpen] = useState<boolean>(true);
    const [subMenuIsOpen, setSubMenuIsOpen] = useState<boolean>(false);

    /**@function toggleAside
     * 1. asideIsOpen(boolean) 변수의 값을 전환한다.
     */
    const toggleAside = () => {
        setAsideIsOpen((previous) => !previous);
    };

    /**@function toggleSubMenu
     * 1. subMenuIsOpen(boolean) 변수의 값을 전환한다.
     */
    const toggleSubMenu = () => {
        setSubMenuIsOpen((previous) => !previous);
    };

    return (
        <Wrapper $asideIsOpen={asideIsOpen}>
            <Aside>
                <HamburgerButton onClick={toggleAside}>
                    <img src={hamburgerIcon} alt="hamburger menu" width={20} />
                </HamburgerButton>
                <AsideItemWrapper>
                    <AsideItem>
                        <SubMenuButton onClick={toggleSubMenu} $subMenuIsOpen={subMenuIsOpen}>
                            <img src={arrowRightIcon} alt="arrow right" width={20} />
                        </SubMenuButton>
                        <span>🐯 백미진</span>
                    </AsideItem>
                </AsideItemWrapper>
            </Aside>
            <h1>root</h1>
            <Outlet />
        </Wrapper>
    );
}

export default Root;
