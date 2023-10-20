import { Outlet } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import AsideMenu from "./components/AsideMenu";
import { motion, AnimatePresence } from "framer-motion";

const Wrapper = styled.div<{ $asideIsOpen: boolean }>`
    display: grid;
    grid-template-columns: ${(props) => (props.$asideIsOpen ? "240px" : "0px")} 7fr;
    grid-template-rows: 1fr;
    min-height: 100%;
    transition: grid-template-columns 0.3s ease-in-out;
`;

const AsideBackground = styled.div`
    grid-row: span 2;
    background-color: #fce0e2;
`;

const HoverArea = styled.div<{ $asideIsOpen: boolean }>`
    position: absolute;
    top: 0;
    width: ${(props) => (props.$asideIsOpen ? 0 : 150)}px;
    height: 100%;
`;

const AsideCloseButton = styled.button`
    position: relative;
    z-index: 1;
    left: 186px;
    display: flex;
    padding: 5px;
    margin: 10px;
    opacity: 0;
    transition: left 0.5s ease-in-out, opacity 0.2s ease-in-out;
    &:hover {
        opacity: 1;
    }
`;

const AsideOpenButton = styled.button<{ $asideIsOpen: boolean }>`
    position: absolute;
    top: 0;
    left: -57px;
    display: flex;
    padding: 5px;
    margin: 10px;
    ${(props) => (props.$asideIsOpen ? "display: none;" : null)}
`;

const OpenAside = styled(motion.div)`
    position: absolute;
    width: 240px;
`;

const HoverAside = styled(motion.div)<{ $asideIsHover: boolean }>`
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
    transition: left 0.3s linear;
`;

const ContentWrapper = styled.div<{ $asideIsOpen: boolean }>`
    display: grid;
    grid-template-rows: 1fr 16fr;
    margin: 0 ${(props) => (props.$asideIsOpen ? 20 : 57)}px;
`;

const Breadcrumb = styled.header`
    position: relative;
    display: flex;
    align-items: center;
`;

const BreadcrumbItem = styled.div`
    display: flex;
    align-items: center;
    padding: 5px 5px 5px 0;
    font-size: 14px;
    cursor: pointer;
    &:hover {
        border-radius: 3px;
        background-color: rgba(0, 0, 0, 0.1);
    }
`;

function Root() {
    const [asideIsOpen, setAsideIsOpen] = useState<boolean>(true);
    const [asideIsHover, setAsideIsHover] = useState<boolean>(false);
    const [subMenuIsOpen, setSubMenuIsOpen] = useState<boolean>(true);

    /**@function toggleAside
     * 1. asideIsOpen(boolean) 변수의 값을 전환한다.
     * 2. aside 메뉴가 닫힐 때 hover메뉴가 열리도록 asideIsHover(boolean) 변수에 true를 대입한다.
     */
    const toggleAside = () => {
        setAsideIsOpen((previous) => !previous);
        setAsideIsHover(true);
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
            <AsideBackground />
            <HoverArea onMouseEnter={onHoverAside} onMouseLeave={onHoverOutAside} $asideIsOpen={asideIsOpen}>
                <AsideCloseButton onClick={toggleAside}>
                    {asideIsOpen ? (
                        <svg width="27" height="27" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 18L6 12L12 6" stroke="#888888" strokeWidth="2" strokeLinecap="round" />
                            <path d="M18 18L12 12L18 6" stroke="#888888" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    ) : null}
                </AsideCloseButton>
            </HoverArea>
            <AnimatePresence>
                {asideIsOpen ? (
                    <OpenAside layoutId="aside">
                        <AsideMenu subMenuIsOpen={subMenuIsOpen} toggleSubMenu={toggleSubMenu} />
                    </OpenAside>
                ) : null}
            </AnimatePresence>
            <AnimatePresence>
                {asideIsOpen ? null : (
                    <HoverAside
                        layoutId="aside"
                        onMouseEnter={onHoverAside}
                        onMouseLeave={onHoverOutAside}
                        $asideIsHover={asideIsHover}
                    >
                        <AsideMenu subMenuIsOpen={subMenuIsOpen} toggleSubMenu={toggleSubMenu} />
                    </HoverAside>
                )}
            </AnimatePresence>
            <ContentWrapper $asideIsOpen={asideIsOpen}>
                <Breadcrumb>
                    <AsideOpenButton
                        onClick={toggleAside}
                        onMouseEnter={onHoverAside}
                        onMouseLeave={onHoverOutAside}
                        $asideIsOpen={asideIsOpen}
                    >
                        {asideIsHover ? (
                            <svg
                                width="27"
                                height="27"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M12 18L18 12L12 6" stroke="#888888" strokeWidth="2" strokeLinecap="round" />
                                <path d="M6 18L12 12L6 6" stroke="#888888" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        ) : (
                            <svg
                                width="27"
                                height="27"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M5 7H19" stroke="#888888" strokeWidth="2" strokeLinecap="round" />
                                <path d="M5 12H19" stroke="#888888" strokeWidth="2" strokeLinecap="round" />
                                <path d="M5 17H19" stroke="#888888" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        )}
                    </AsideOpenButton>
                    <BreadcrumbItem>👑 mijin Portfolio</BreadcrumbItem>
                </Breadcrumb>
                <Outlet />
            </ContentWrapper>
        </Wrapper>
    );
}

export default Root;
