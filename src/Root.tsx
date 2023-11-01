import { Link, Outlet, useLocation, useMatches } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import AsideMenu from "./components/AsideMenu";
import { motion, AnimatePresence } from "framer-motion";
import Scrollbars from "react-custom-scrollbars-2";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 0px 7fr;
    grid-template-rows: 1fr;
    min-height: 100%;
    transition: grid-template-columns 0.3s ease-in-out;

    &.on {
        grid-template-columns: 240px 7fr;

        .aside_background {
            @media (max-width: 1024px) {
                left: 0px;
                transition: left 0.3s ease-in-out;
            }
        }

        .hover_area {
            width: 0;
        }

        .aside_close_button {
            display: flex;

            @media (max-width: 1024px) {
                display: none;
            }
        }

        .aside_open_button {
            display: none;

            @media (max-width: 1024px) {
                display: flex;
                background: none;
            }
        }

        .open_aside {
            width: 240px;
        }
    }

    @media (max-width: 1024px) {
        display: flex;
    }
`;

const AsideBackground = styled.div.attrs({ className: "aside_background" })`
    background-color: #f5cd79;

    @media (max-width: 1024px) {
        position: fixed;
        top: 100px;
        left: -250px;
        width: 240px;
        height: 275px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        transition: left 0.3s ease-in-out;
    }
`;

const AsideMenuContainer = styled.div`
    position: fixed;
`;

const HoverArea = styled.div.attrs({ className: "hover_area" })`
    position: fixed;
    width: 150px;
    height: 100%;

    @media (max-width: 1024px) {
        display: none;
    }
`;

const AsideCloseButton = styled.button.attrs({ className: "aside_close_button" })`
    position: absolute;
    z-index: 1;
    left: 186px;
    display: none;
    padding: 5px;
    margin: 10px;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    &:hover {
        opacity: 1;
    }
`;

const AsideOpenButton = styled.button.attrs({ className: "aside_open_button" })`
    position: absolute;
    top: 3px;
    left: -57px;
    display: flex;
    padding: 5px;
    margin: 10px;

    @media (max-width: 1024px) {
        position: relative;
        left: 0;
    }
`;

const OpenAside = styled(motion.div).attrs({ className: "open_aside" })`
    position: absolute;
    width: 0px;

    @media (max-width: 1024px) {
        top: 100px;
        transition: width 0.3s ease-in-out;
    }
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

const ContentWrapper = styled.div.attrs({ className: "content_wrapper" })`
    display: grid;
    grid-template-rows: 57px 1fr;
    width: 100%;
`;

const PageHeader = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.9);
`;

const Breadcrumb = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 5px;
`;

const BreadcrumbItem = styled(Link)`
    padding: 5px;
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
`;

const OverLay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;

const OptionsPopup = styled(motion.div)`
    position: absolute;
    top: 57px;
    right: 0;
    width: 200px;
    padding: 10px 5px;
    border-radius: 5px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const OptionItem = styled.button<{ $isFullWidth?: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 34px;
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

const CopiedMessage = styled.div<{ $isCopyClipBoard: boolean }>`
    position: absolute;
    top: ${(props) => (props.$isCopyClipBoard ? 60 : -60)}px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 45px;
    border-radius: 10px;
    background-color: #37352f;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: top 0.3s linear;
    > span {
        font-size: 14px;
        font-weight: 600;
    }
`;

const PageContainer = styled.div<{ $isFullWidth: boolean }>`
    display: flex;
    justify-content: center;
    padding: 100px ${(props) => (props.$isFullWidth ? 96 : 0)}px;

    @media (max-width: 1024px) {
        padding: 20px;
    }
`;

const optionsPopupVariants = {
    initial: {
        opacity: 0,
        scale: 0.9,
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            ease: "easeOut",
            duration: 0.15,
        },
    },
    exit: {
        opacity: 0,
        scale: 0.9,
        transition: {
            ease: "easeIn",
            duration: 0.2,
        },
    },
};

function Root() {
    const BASE_URL = "http://localhost:3000";
    const location = useLocation();

    const [asideIsHover, setAsideIsHover] = useState<boolean>(false);
    const [subMenuIsOpen, setSubMenuIsOpen] = useState<boolean>(true);

    const [isOptionsPopupOpen, setISsOptionsPopupOpen] = useState<boolean>(false);
    const [isFullWidth, setIsFullWidth] = useState<boolean>(false);
    const [isCopyClipBoard, setIsCopyClipBoard] = useState<boolean>(false);
    const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);

    const scrollbarsRef = useRef<any>();
    const educationRef = useRef<any>();
    const certificateRef = useRef<any>();
    const awardsRef = useRef<any>();
    const menuRef = useRef<any>();

    let matches = useMatches();

    useEffect(() => {
        innerWidth >= 1024 && menuRef?.current?.classList.add("on");

        const reSizeListener = () => {
            setInnerWidth(window.innerWidth);

            if (window.innerWidth >= 1024) {
                menuRef.current.classList.add("on");
            } else {
                menuRef.current.classList.remove("on");
            }
        };

        window.addEventListener("resize", reSizeListener);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    /**@function toggleAside
     * 1. aside menu class에 "on"이 없으면 추가 있으면 제거
     */
    const toggleAside = () => {
        menuRef?.current?.classList?.toggle("on");
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

    /**@function onCopyClipBoard
     * 1. 복사할 text를 받아와서 클립보드에 저장한다.
     * 2. 정상적으로 동작됐으면 확인 Message 띄우기 위해 isCopyClipBoard(boolean) 변수에 true 대입하고 3초 후 다시 false 대입한다.
     * 3. 동작되지 않았으면 console에 error 띄운다.
     */
    const onCopyClipBoard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setIsCopyClipBoard(true);
            setTimeout(() => setIsCopyClipBoard(false), 3000);
        } catch {
            console.log("error");
        }
    };

    return (
        <Scrollbars ref={scrollbarsRef} autoHide>
            <Wrapper ref={menuRef}>
                <AsideBackground />
                <AsideMenuContainer>
                    <HoverArea onMouseEnter={onHoverAside} onMouseLeave={onHoverOutAside} />
                    <AsideCloseButton onClick={toggleAside}>
                        <svg width="27" height="27" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 18L6 12L12 6" stroke="#707070" strokeWidth="2" strokeLinecap="round" />
                            <path d="M18 18L12 12L18 6" stroke="#707070" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </AsideCloseButton>
                    <AnimatePresence>
                        <OpenAside layoutId={innerWidth >= 1024 ? "aside" : ""}>
                            <AsideMenu
                                scrollbarsRef={scrollbarsRef}
                                educationRef={educationRef}
                                certificateRef={certificateRef}
                                awardsRef={awardsRef}
                                subMenuIsOpen={subMenuIsOpen}
                                toggleSubMenu={toggleSubMenu}
                            />
                        </OpenAside>
                    </AnimatePresence>
                    <AnimatePresence>
                        {innerWidth >= 1024 && !menuRef?.current?.classList.contains("on") && (
                            <HoverAside
                                layoutId={innerWidth >= 1024 ? "aside" : ""}
                                onMouseEnter={onHoverAside}
                                onMouseLeave={onHoverOutAside}
                                $asideIsHover={asideIsHover}
                            >
                                <AsideMenu
                                    scrollbarsRef={scrollbarsRef}
                                    educationRef={educationRef}
                                    certificateRef={certificateRef}
                                    awardsRef={awardsRef}
                                    subMenuIsOpen={subMenuIsOpen}
                                    toggleSubMenu={toggleSubMenu}
                                />
                            </HoverAside>
                        )}
                    </AnimatePresence>
                </AsideMenuContainer>
                <ContentWrapper>
                    <PageHeader>
                        <AsideOpenButton
                            onClick={toggleAside}
                            onMouseEnter={onHoverAside}
                            onMouseLeave={onHoverOutAside}
                        >
                            {innerWidth >= 1024 ? (
                                asideIsHover ? (
                                    <svg
                                        width="27"
                                        height="27"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12 18L18 12L12 6"
                                            stroke="#707070"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M6 18L12 12L6 6"
                                            stroke="#707070"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        width="27"
                                        height="27"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M5 7H19" stroke="#707070" strokeWidth="2" strokeLinecap="round" />
                                        <path d="M5 12H19" stroke="#707070" strokeWidth="2" strokeLinecap="round" />
                                        <path d="M5 17H19" stroke="#707070" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                )
                            ) : (
                                <svg
                                    width="27"
                                    height="27"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M5 7H19" stroke="#707070" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M5 12H19" stroke="#707070" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M5 17H19" stroke="#707070" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            )}
                        </AsideOpenButton>
                        <Breadcrumb>
                            <BreadcrumbItem to="/info" onClick={() => scrollbarsRef?.current?.scrollTop(0)}>
                                👑 mijin Portfolio
                            </BreadcrumbItem>
                            {matches[1]?.pathname && (
                                <>
                                    /
                                    <BreadcrumbItem
                                        to={matches[1].pathname}
                                        onClick={() => scrollbarsRef?.current?.scrollTop(0)}
                                    >
                                        {matches[1].pathname.replace("/", "")}
                                    </BreadcrumbItem>
                                </>
                            )}
                        </Breadcrumb>
                        <OptionsButton onClick={toggleOptionsPopup}>
                            <svg
                                width="25"
                                height="25"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="12" cy="12" r="1" stroke="#37352F" strokeWidth="2" strokeLinecap="round" />
                                <circle cx="6" cy="12" r="1" stroke="#37352F" strokeWidth="2" strokeLinecap="round" />
                                <circle cx="18" cy="12" r="1" stroke="#37352F" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </OptionsButton>
                        <AnimatePresence>
                            {isOptionsPopupOpen && (
                                <>
                                    <OverLay onClick={toggleOptionsPopup} />
                                    <OptionsPopup
                                        variants={optionsPopupVariants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                    >
                                        <OptionItem onClick={toggleFullWidth} $isFullWidth={isFullWidth}>
                                            <span>전체 너비</span>
                                            <FullWidthToggle onClick={toggleFullWidth} />
                                            <FullWidthLabel $isFullWidth={isFullWidth} />
                                        </OptionItem>
                                        <OptionItem onClick={() => onCopyClipBoard(`${BASE_URL}${location.pathname}`)}>
                                            <span>링크 복사</span>
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M14 7V7C14 6.06812 14 5.60218 13.8478 5.23463C13.6448 4.74458 13.2554 4.35523 12.7654 4.15224C12.3978 4 11.9319 4 11 4H8C6.11438 4 5.17157 4 4.58579 4.58579C4 5.17157 4 6.11438 4 8V11C4 11.9319 4 12.3978 4.15224 12.7654C4.35523 13.2554 4.74458 13.6448 5.23463 13.8478C5.60218 14 6.06812 14 7 14V14"
                                                    stroke="#37352F"
                                                    strokeWidth="2"
                                                />
                                                <rect
                                                    x="10"
                                                    y="10"
                                                    width="10"
                                                    height="10"
                                                    rx="2"
                                                    stroke="#37352F"
                                                    strokeWidth="2"
                                                />
                                            </svg>
                                        </OptionItem>
                                    </OptionsPopup>
                                </>
                            )}
                        </AnimatePresence>
                    </PageHeader>
                    <PageContainer $isFullWidth={isFullWidth}>
                        <Outlet context={{ isFullWidth, educationRef, certificateRef, awardsRef }} />
                        <CopiedMessage $isCopyClipBoard={isCopyClipBoard}>
                            <span>링크 복사 완료</span>
                        </CopiedMessage>
                    </PageContainer>
                </ContentWrapper>
            </Wrapper>
        </Scrollbars>
    );
}

export default Root;
