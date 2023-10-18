import styled from "styled-components";
import arrowRightIcon from "../assets/images/arrow_right.png";
import dot from "../assets/images/dot.png";

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
    overflow: hidden;
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

interface AsideMenuProp {
    subMenuIsOpen: boolean;
    toggleSubMenu: () => void;
}

function AsideMenu({ subMenuIsOpen, toggleSubMenu }: AsideMenuProp) {
    return (
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
    );
}

export default AsideMenu;
