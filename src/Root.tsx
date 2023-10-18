import { Outlet } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import hamburgerIcon from "./assets/images/hamburger.png";
import arrowRightIcon from "./assets/images/arrow_right.png";
import dot from "./assets/images/dot.png";

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

const SlideDown = styled.div<{ $subMenuIsOpen: boolean }>`
    max-height: ${(props) => (props.$subMenuIsOpen ? "120px" : "30px")};
    overflow: hidden;
    transition: max-height 0.1s ease-in-out;
`;

const AsideItem = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 30px;
    padding: 4px 7px;
    cursor: pointer;
    &:hover {
        border-radius: 3px;
        background-color: rgba(0, 0, 0, 0.1);
    }
    > img {
        margin: 3px;
    }
    > span {
        color: gray;
        font-size: 15px;
        font-weight: 600;
    }
`;

const SubMenuButton = styled.button<{ $subMenuIsOpen: boolean }>`
    display: flex;
    padding: 3px;
    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
    > img {
        transform: rotateZ(${(props) => (props.$subMenuIsOpen ? 90 : 0)}deg);
        transition: transform 0.25s ease-in-out;
    }
`;

const SubMenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
    > div {
        padding-left: 30px;
        > img {
            margin-right: 4px;
        }
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
                    <SlideDown $subMenuIsOpen={subMenuIsOpen}>
                        <AsideItem>
                            <SubMenuButton onClick={toggleSubMenu} $subMenuIsOpen={subMenuIsOpen}>
                                <img src={arrowRightIcon} alt="arrow right" width={15} />
                            </SubMenuButton>
                            <span>🐯 백미진</span>
                        </AsideItem>
                        <SubMenuWrapper>
                            <AsideItem>
                                <img src={dot} alt="dot" width={10} />
                                <span>👩‍🎓 Education</span>
                            </AsideItem>
                            <AsideItem>
                                <img src={dot} alt="dot" width={10} />
                                <span>📚 Certificate</span>
                            </AsideItem>
                            <AsideItem>
                                <img src={dot} alt="dot" width={10} />
                                <span>🏆 Awards</span>
                            </AsideItem>
                        </SubMenuWrapper>
                    </SlideDown>
                    <AsideItem>
                        <img src={arrowRightIcon} alt="arrow right" width={15} />
                        <span>🎨 SKILLS</span>
                    </AsideItem>
                    <AsideItem>
                        <img src={arrowRightIcon} alt="arrow right" width={15} />
                        <span>🖼️ PROJECT</span>
                    </AsideItem>
                    <AsideItem>
                        <img src={arrowRightIcon} alt="arrow right" width={15} />
                        <span>👩‍🎨 ACTIVITY</span>
                    </AsideItem>
                </AsideItemWrapper>
            </Aside>
            <h1>root</h1>
            <Outlet />
        </Wrapper>
    );
}

export default Root;
