import { Outlet } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import hamburgerIcon from "./assets/images/hamburger.png";

const Wrapper = styled.div<{ $columnFraction: number }>`
    display: grid;
    grid-template-columns: ${(props) => props.$columnFraction}fr 7fr;
    grid-template-rows: 1fr 20fr;
    min-height: 100%;
    background-color: red;
`;

const Aside = styled.div`
    grid-row: span 2;
    background-color: white;
`;

const HamburgerMenu = styled.button`
    padding: 5px;
    margin: 10px;
    border: none;
    background: none;
    cursor: pointer;
    &:hover {
        border-radius: 3px;
        background-color: rgba(0, 0, 0, 0.1);
    }
`;

function Root() {
    const [asideIsOpen, setAsideIsOpen] = useState<boolean>(true);
    const [asideColumnFraction, setAsideColumnFraction] = useState<number>(1);

    /**@function toggleMenu
     * 1. asideIsOpen(boolean) 변수의 값을 전환한다.
     * 2. asideIsOpen 값에 따라 asideColumnFraction 값을 대입한다.
     */
    const toggleMenu = () => {
        setAsideIsOpen((previous) => !previous);

        asideIsOpen ? setAsideColumnFraction(1) : setAsideColumnFraction(0);
    };

    return (
        <Wrapper $columnFraction={asideColumnFraction}>
            <Aside>
                <HamburgerMenu onClick={toggleMenu}>
                    <img src={hamburgerIcon} alt="hamburger menu" width={20} />
                </HamburgerMenu>
            </Aside>
            <h1>root</h1>
            <Outlet />
        </Wrapper>
    );
}

export default Root;
