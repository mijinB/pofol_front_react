import { Link, Outlet } from "react-router-dom";
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
    top: 3px;
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
    padding: 10px 0;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: left 0.3s linear;
`;

const ContentWrapper = styled.div<{ $asideIsOpen: boolean }>`
    display: grid;
    grid-template-rows: 57px 1fr;
    margin: 0 ${(props) => (props.$asideIsOpen ? 20 : 57)}px;
`;

const PageHeader = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Breadcrumb = styled.div`
    position: relative;
`;

const BreadcrumbItem = styled(Link)`
    padding: 5px 5px 5px 0;
    font-size: 14px;
    cursor: pointer;
    &:hover {
        border-radius: 3px;
        background-color: rgba(0, 0, 0, 0.05);
    }
`;

const OptionsButton = styled.button`
    display: flex;
    padding: 6px;
    > svg {
        opacity: 1;
    }
`;

const OptionsPopup = styled.div`
    position: absolute;
    top: 57px;
    right: 0;
    width: 200px;
    padding: 10px 5px;
    border-radius: 5px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const OptionItem = styled.button<{ $isFullWidth: boolean }>`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 5px 12px;
    cursor: pointer;
    > span {
        font-size: 14px;
    }
`;

const FullWidthToggle = styled.input.attrs({ id: "fullWidth", type: "checkbox" })`
    position: absolute;
    left: -10000px;
`;

const FullWidthLabel = styled.label.attrs({ htmlFor: "fullWidth" })<{ $isFullWidth: boolean }>`
    position: relative;
    display: block;
    width: 30px;
    height: 18px;
    border-radius: 44px;
    background-color: ${(props) => (props.$isFullWidth ? "rgb(35, 131, 226)" : "rgba(55, 53, 47, 0.2)")};
    transition: background-color 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
        background-color: ${(props) => (props.$isFullWidth ? "rgba(35, 131, 226, 0.85)" : "rgba(55, 53, 47, 0.25)")};
    }
    &::after {
        position: absolute;
        top: -11px;
        left: ${(props) => (props.$isFullWidth ? 12 : -1)}px;
        color: white;
        font-size: 32px;
        transition: left 0.15s linear;
        content: "●";
    }
`;

const PageContainer = styled.div<{ $isFullWidth: boolean }>`
    display: flex;
    ${(props) => (props.$isFullWidth ? null : "justify-content: center;")}
    ${(props) => (props.$isFullWidth ? "padding: 0 96px;" : null)}
`;

function Root() {
    const [asideIsOpen, setAsideIsOpen] = useState<boolean>(true);
    const [asideIsHover, setAsideIsHover] = useState<boolean>(false);
    const [subMenuIsOpen, setSubMenuIsOpen] = useState<boolean>(true);

    const [isOptionsPopupOpen, setISsOptionsPopupOpen] = useState<boolean>(false);
    const [isFullWidth, setIsFullWidth] = useState<boolean>(false);

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

    /**@function toggleOptionsPopup
     * 1. isOptionsPopupOpen(boolean) 변수의 값을 전환한다.
     */
    const toggleOptionsPopup = () => {
        setISsOptionsPopupOpen((previous) => !previous);
    };

    /**@function toggleFullWidth
     * 1. isFullWidth(boolean) 변수의 값을 전환한다.
     */
    const toggleFullWidth = () => {
        setIsFullWidth((previous) => !previous);
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
                <PageHeader>
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
                    <Breadcrumb>
                        <BreadcrumbItem to="/info">👑 mijin Portfolio</BreadcrumbItem>
                    </Breadcrumb>
                    <OptionsButton onClick={toggleOptionsPopup}>
                        <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="1" stroke="#37352F" strokeWidth="2" strokeLinecap="round" />
                            <circle cx="6" cy="12" r="1" stroke="#37352F" strokeWidth="2" strokeLinecap="round" />
                            <circle cx="18" cy="12" r="1" stroke="#37352F" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </OptionsButton>
                    {isOptionsPopupOpen ? (
                        <OptionsPopup>
                            <OptionItem onClick={toggleFullWidth} $isFullWidth={isFullWidth}>
                                <span>전체 너비</span>
                                <FullWidthToggle onClick={toggleFullWidth} />
                                <FullWidthLabel $isFullWidth={isFullWidth} />
                            </OptionItem>
                        </OptionsPopup>
                    ) : null}
                </PageHeader>
                <PageContainer $isFullWidth={isFullWidth}>
                    <Outlet />
                </PageContainer>
            </ContentWrapper>
        </Wrapper>
    );
}

export default Root;
