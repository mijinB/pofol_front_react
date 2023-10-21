import styled from "styled-components";
import profileImage from "../assets/images/cat.jpg";
import { Link } from "react-router-dom";

const AsideItemWrapper = styled.div``;

const ProfileWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 57px;
    margin-left: 8px;
    overflow: hidden;
    > * {
        flex: 0 0 auto;
    }
`;

const ProfileImage = styled.img`
    margin-right: 8px;
    border-radius: 5px;
`;

const ProfileName = styled.span`
    font-size: 14px;
    font-weight: 600;
    cursor: default;
`;

const SlideDown = styled.div<{ $subMenuIsOpen: boolean }>`
    max-height: ${(props) => (props.$subMenuIsOpen ? "120px" : "30px")};
    overflow: hidden;
    transition: max-height 0.1s ease-in-out;
`;

const AsideItem = styled(Link)`
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
    > * {
        flex: 0 0 auto;
    }
    > svg {
        margin: 3px;
    }
    > span {
        color: #707070;
        font-size: 14px;
    }
`;

const SubMenuButton = styled.button<{ $subMenuIsOpen: boolean }>`
    display: flex;
    padding: 3px;
    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
    > svg {
        transform: rotateZ(${(props) => (props.$subMenuIsOpen ? 90 : 0)}deg);
        transition: transform 0.25s ease-in-out;
    }
`;

const SubMenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
    > a {
        padding-left: 35px;
    }
`;

const Dot = styled.div`
    width: 5px;
    height: 5px;
    margin-right: 5px;
    border-radius: 2.5px;
    background-color: #707070;
    opacity: 0.7;
`;

interface AsideMenuProp {
    subMenuIsOpen: boolean;
    toggleSubMenu: () => void;
}

function AsideMenu({ subMenuIsOpen, toggleSubMenu }: AsideMenuProp) {
    return (
        <AsideItemWrapper>
            <ProfileWrapper>
                <ProfileImage src={profileImage} alt="cat" width={30} />
                <ProfileName>mijin Portfolio</ProfileName>
            </ProfileWrapper>
            <SlideDown $subMenuIsOpen={subMenuIsOpen}>
                <AsideItem to="/info">
                    <SubMenuButton onClick={toggleSubMenu} $subMenuIsOpen={subMenuIsOpen}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 6L15 12L9 18" stroke="#707070" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </SubMenuButton>
                    <span>🐯 백미진</span>
                </AsideItem>
                <SubMenuWrapper>
                    <AsideItem to="/info">
                        <Dot />
                        <span>👩‍🎓 Education</span>
                    </AsideItem>
                    <AsideItem to="/info">
                        <Dot />
                        <span>📚 Certificate</span>
                    </AsideItem>
                    <AsideItem to="/info">
                        <Dot />
                        <span>🏆 Awards</span>
                    </AsideItem>
                </SubMenuWrapper>
            </SlideDown>
            <AsideItem to="/skills">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6L15 12L9 18" stroke="#707070" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span>🎨 SKILLS</span>
            </AsideItem>
            <AsideItem to="project">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6L15 12L9 18" stroke="#707070" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span>🖼️ PROJECT</span>
            </AsideItem>
            <AsideItem to="activity">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6L15 12L9 18" stroke="#707070" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span>👩‍🎨 ACTIVITY</span>
            </AsideItem>
        </AsideItemWrapper>
    );
}

export default AsideMenu;
