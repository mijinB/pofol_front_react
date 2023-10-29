import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import Scrollbars from "react-custom-scrollbars-2";
import PageHeader from "../components/PageHeader";
import ToDoSkills from "../components/ToDoSkills";
import KoPlaceSkills from "../components/KoPlaceSkills";
import ProjectModalHeader from "../components/ProjectModalHeader";
import YearTitle from "../components/YearTitle";

import todoTemplateImage from "../assets/images/todo_template.jpg";
import todoLogo from "../assets/images/todo_logo.png";
import koPlaceTemplateImage from "../assets/images/ko_place_template.jpg";
import koPlaceLogo from "../assets/images/ko_place_logo.png";
import profileImage from "../assets/images/profile.jpg";
import gitProfileImage from "../assets/images/git_profile.jpg";
import githubImage from "../assets/images/github.png";
import reactImage from "../assets/images/react.png";
import googlePlayImage from "../assets/images/google_play.png";
import todoLoginImage from "../assets/images/todo_login.png";
import todoListImage from "../assets/images/todo_list.png";
import todoGameImage from "../assets/images/todo_game.png";
import todoSettingImage from "../assets/images/todo_setting.png";
import reactTodoImage from "../assets/images/react_todo.png";
import reactDoingImage from "../assets/images/react_doing.png";
import reactDoneImage from "../assets/images/react_done.png";
import reactCustomizeImage from "../assets/images/react_customize.png";
import reactThemeToggleGIF from "../assets/images/react_theme_toggle.gif";
import koPlaceMainImage from "../assets/images/ko_place_main.png";
import koPlaceDetailImage from "../assets/images/ko_place_detail.png";

const Wrapper = styled.div<{ $isFullWidth: boolean }>`
    width: ${(props) => (props.$isFullWidth ? 100 : 50)}%;
`;

const SubDivider = styled.div`
    width: 100%;
    height: 1px;
    margin: 10px 0 20px 0;
    background-color: rgba(55, 53, 47, 0.2);
    > div {
        height: 1px;
        margin: 10px 0;
        background-color: rgb(55, 53, 47);
    }
`;

const ProjectContainer = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 15px;
    width: 100%;
    min-width: 800px;
`;

const ProjectItem = styled.div<{ $isFullWidth: boolean }>`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: ${(props) => (props.$isFullWidth ? 500 : 350)}px;
    border-radius: 5px;
    box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px;
    overflow: hidden;
    cursor: pointer;
    &:hover {
        background-color: rgba(15, 15, 15, 0.02);
        transition: background-color 0.2s ease-out;
    }
`;

const TemplateImage = styled.img`
    width: 100%;
    height: 100%;
    border-bottom: 1px solid rgba(15, 15, 15, 0.1);
    object-fit: cover;
    overflow: hidden;
`;

const TemplateTextContainer = styled.div`
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 7px;
    height: 122px;
    padding: 5px;
    background-color: white;
    > span {
        font-size: 13px;
    }
`;

const TemplateTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 3px;
    > span {
        font-size: 14px;
        font-weight: 600;
    }
`;

const TeamTag = styled.span`
    align-self: flex-start;
    padding: 2px 3px;
    border-radius: 3px;
    background-color: rgba(15, 15, 15, 0.1);
    font-size: 14px;
`;

const OverLay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
`;

const ProjectDetailsModal = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    display: grid;
    grid-template-rows: 44px 1fr;
    width: 960px;
    height: 85%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    background-color: white;
    box-shadow: rgba(15, 15, 15, 0.016) 0px 0px 0px 1px, rgba(15, 15, 15, 0.03) 0px 3px 6px,
        rgba(15, 15, 15, 0.06) 0px 9px 24px;
    transform: translate(-50%, -50%);
`;

const ModalContentWrapper = styled.div`
    display: grid;
    grid-template-rows: 220px 1fr;
`;

const ModalImageContainer = styled.div<{ $projectLogo: string }>`
    position: relative;
    &::after {
        position: absolute;
        bottom: -50px;
        left: 120px;
        width: 100px;
        height: 100px;
        background: url(${(props) => props.$projectLogo}) no-repeat center/contain;
        content: "";
    }
`;

const ModalImage = styled.img<{ $objectPosition: string }>`
    width: 100%;
    height: 220px;
    object-fit: cover;
    object-position: ${(props) => props.$objectPosition};
`;

const ModalTextContent = styled.div`
    padding: 80px 110px;
`;

const ModalTitle = styled.h2`
    display: flex;
    align-items: flex-end;
    gap: 7px;
    font-size: 42px;
    font-weight: 600;
`;

const ModalSummaryContainer = styled.div`
    padding: 30px 0;
    > p {
        font-size: 14px;
        line-height: 1.5;
    }
`;

const ModalSummary = styled.div`
    display: grid;
    grid-template-columns: 1fr 3.3fr;
    grid-template-rows: repeat(4, 1fr);
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
`;

const SummaryItemTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 3px;
    > svg {
        opacity: 0.4;
    }
    > span {
        font-size: 14px;
        opacity: 0.7;
    }
`;

const SummaryItemContent = styled.div`
    > p {
        font-size: 14px;
    }
`;

const ModalComment = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 8px;
    padding-bottom: 10px;
`;

const ProfileImage = styled.img`
    border-radius: 50%;
`;

const GitHubImage = styled.img`
    position: absolute;
    top: 31px;
    left: 38px;
    border: 2px solid white;
    border-radius: 50%;
    background-color: white;
`;

const CommentContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    > * {
        font-size: 14px;
    }
    > span {
        font-weight: 600;
    }
`;

const ModalContentSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 120px;
    > p {
        line-height: 1.5;
    }
`;

const SectionTitle = styled.h3`
    font-size: 22px;
    font-weight: 600;
`;

const LinkItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    > span {
        font-size: 15px;
        font-style: italic;
    }
`;

const LinkItemBox = styled.a`
    position: relative;
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 10px 15px;
    border: 1px solid rgba(55, 53, 47, 0.2);
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: rgba(15, 15, 15, 0.05);
        transition: background-color 0.2s ease-out;
    }
`;

const LinkInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    > span {
        &:nth-of-type(1) {
            font-size: 14px;
            font-weight: 600;
        }
        &:nth-of-type(2) {
            font-size: 12px;
            color: rgba(112, 112, 112, 0.7);
        }
    }
`;

const TwoColumns = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    > img {
        width: 100%;
    }
`;

const FourColumns = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    gap: 10px;
    > img {
        width: 100%;
    }
    > div {
        grid-column: span 2;
        display: flex;
        flex-direction: column;
        gap: 20px;
        > p {
            line-height: 1.5;
        }
    }
`;

const ToggleInfoColumns = styled.div`
    display: grid;
    grid-template-columns: 1fr 2.5fr;
    gap: 10px;
    > img {
        width: 100%;
    }
    > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        > p {
            line-height: 1.5;
        }
    }
`;

const CheckBoxContainer = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 5px;
    > p {
        color: rgba(112, 112, 112, 0.7);
        text-decoration: line-through;
    }
`;

interface IProjectProp {
    isFullWidth: boolean;
}

function Project() {
    const { isFullWidth } = useOutletContext<IProjectProp>();

    const [isToDoDetailsOpen, setIsToDoDetailsOpen] = useState<boolean>(false);
    const [isKoPlaceDetailsOpen, setIsKoPlaceDetailsOpen] = useState<boolean>(false);

    /**@function toggleDetailsModal
     * 1. isToDoDetailsOpen(boolean) 변수의 값을 전환한다.
     */
    const toggleToDoDetailsModal = () => {
        setIsToDoDetailsOpen((previous) => !previous);
    };

    /**@function toggleKoPlaceDetailsModal
     * 1. isKoPlaceDetailsOpen(boolean) 변수의 값을 전환한다.
     */
    const toggleKoPlaceDetailsModal = () => {
        setIsKoPlaceDetailsOpen((previous) => !previous);
    };

    return (
        <Wrapper $isFullWidth={isFullWidth}>
            <PageHeader icon="🖼️" title="Project" />
            <YearTitle icon="🐰" title="2023" />
            <ProjectContainer>
                <ProjectItem onClick={toggleToDoDetailsModal} $isFullWidth={isFullWidth}>
                    <TemplateImage src={todoTemplateImage} alt="todo template" />
                    <TemplateTextContainer>
                        <TemplateTitle>
                            <img src={todoLogo} alt="todo logo" width={22} />
                            <span>To Do List</span>
                        </TemplateTitle>
                        <ToDoSkills />
                        <span>2023년 8월 18일 → 8월 29일 / 2023년 9월 4일 → 9월 5일</span>
                        <TeamTag>개인프로젝트</TeamTag>
                    </TemplateTextContainer>
                </ProjectItem>
                {isToDoDetailsOpen && (
                    <>
                        <OverLay onClick={toggleToDoDetailsModal} />
                        <ProjectDetailsModal>
                            <ProjectModalHeader clickFunction={toggleToDoDetailsModal} />
                            <Scrollbars autoHide>
                                <ModalContentWrapper>
                                    <ModalImageContainer $projectLogo={todoLogo}>
                                        <ModalImage
                                            src={todoTemplateImage}
                                            alt="todo template"
                                            $objectPosition="center -30px"
                                        />
                                    </ModalImageContainer>
                                    <ModalTextContent>
                                        <ModalTitle>To Do List</ModalTitle>
                                        <ModalSummaryContainer>
                                            <ModalSummary>
                                                <SummaryItemTitle>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="21"
                                                        height="21"
                                                        viewBox="0 0 64 64"
                                                    >
                                                        <defs fill="#37352F" />
                                                        <path
                                                            d="m32,8c-14.81,0-24,8.43-24,22,0,6.92,2.4,12.49,6.7,16.3l-6.7,6.7,2,3c5.42,0,10.43-1.8,14.45-4.84,2.32.55,4.84.84,7.55.84,14.81,0,24-8.43,24-22s-9.19-22-24-22Zm4,37h-8v-6h8v6Zm0-18l-2,8h-4l-2-8v-12h8v12Z"
                                                            fill="#37352F"
                                                        />
                                                    </svg>
                                                    <span>간단 소개</span>
                                                </SummaryItemTitle>
                                                <SummaryItemContent>
                                                    <p>해야 하는 일들의 정리를 도와주는 web application입니다.</p>
                                                </SummaryItemContent>
                                                <SummaryItemTitle>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="21"
                                                        height="21"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                    >
                                                        <path
                                                            d="M12 20L4.6797 10.8496C4.34718 10.434 4.18092 10.2262 4.13625 9.9757C4.09159 9.72524 4.17575 9.47276 4.34407 8.96778L5.0883 6.73509C5.52832 5.41505 5.74832 4.75503 6.2721 4.37752C6.79587 4 7.49159 4 8.88304 4H15.117C16.5084 4 17.2041 4 17.7279 4.37752C18.2517 4.75503 18.4717 5.41505 18.9117 6.73509L19.6559 8.96778C19.8243 9.47276 19.9084 9.72524 19.8637 9.9757C19.8191 10.2262 19.6528 10.434 19.3203 10.8496L12 20ZM12 20L15.5 9M12 20L8.5 9M19.5 10L15.5 9M15.5 9L14 5M15.5 9H8.5M10 5L8.5 9M8.5 9L4.5 10"
                                                            stroke="#37352F"
                                                            strokeLinecap="round"
                                                        />
                                                    </svg>
                                                    <span>skills & tool</span>
                                                </SummaryItemTitle>
                                                <SummaryItemContent>
                                                    <ToDoSkills />
                                                </SummaryItemContent>
                                                <SummaryItemTitle>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="21"
                                                        height="21"
                                                        viewBox="0 0 64 64"
                                                    >
                                                        <defs fill="#37352F" />
                                                        <path
                                                            d="m48,12v-6h-6v6h-20v-6h-6v6h-8v40h48V12h-8Zm2,35H14v-19h36v19Z"
                                                            fill="#37352F"
                                                        />
                                                    </svg>
                                                    <span>진행 기간</span>
                                                </SummaryItemTitle>
                                                <SummaryItemContent>
                                                    <p>2023년 8월 18일 → 8월 29일 / 2023년 9월 4일 → 9월 5일</p>
                                                </SummaryItemContent>
                                                <SummaryItemTitle>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="21"
                                                        height="21"
                                                        viewBox="0 0 64 64"
                                                    >
                                                        <defs fill="#37352F" />
                                                        <path
                                                            d="m27,19c0-3.09,1.91-5,5-5s5,1.91,5,5-1.91,5-5,5-5-1.91-5-5Zm30,5c3.09,0,5-1.91,5-5s-1.91-5-5-5-5,1.91-5,5,1.91,5,5,5Zm-18,7c0-2.47-1.53-4-4-4h-6c-2.47,0-4,1.53-4,4v7h14v-7Zm-23,17h32v-6H16v6Zm44-21h-6c-2.11,0-3.53.71-4.8,2.4l-3.45,4.6h-2.75v4h4.75l4.25-5.67v15.67h12v-17c0-2.47-1.53-4-4-4Zm-53-3c3.09,0,5-1.91,5-5s-1.91-5-5-5-5,1.91-5,5,1.91,5,5,5Zm14,14v-4h-2.75l-3.45-4.6c-1.27-1.69-2.69-2.4-4.8-2.4h-6c-2.47,0-4,1.53-4,4v17h12v-15.67l4.25,5.67h4.75Z"
                                                            fill="#37352F"
                                                        />
                                                    </svg>
                                                    <span>팀 구성</span>
                                                </SummaryItemTitle>
                                                <SummaryItemContent>
                                                    <TeamTag>개인프로젝트</TeamTag>
                                                </SummaryItemContent>
                                            </ModalSummary>
                                            <SubDivider />
                                            <ModalComment>
                                                <ProfileImage src={profileImage} alt="profile" width={21} />
                                                <CommentContent>
                                                    <span>mijin</span>
                                                    <p>커버 이미지는 Pixlr E를 사용해서 직접 제작했어요.</p>
                                                </CommentContent>
                                            </ModalComment>
                                            <SubDivider />
                                        </ModalSummaryContainer>
                                        <ModalContentSection>
                                            <SectionTitle>🔗 Link</SectionTitle>
                                            <LinkItem>
                                                <span>⪧ GitHub(source)</span>
                                                <LinkItemBox
                                                    href="https://github.com/mijinB/vanilla_js_todo_list"
                                                    target="_blank"
                                                    rel="noreferrer noopener"
                                                >
                                                    <ProfileImage src={gitProfileImage} alt="git profile" width={33} />
                                                    <GitHubImage src={githubImage} alt="github logo" width={17} />
                                                    <LinkInfo>
                                                        <span>vanilla_js_todo_list</span>
                                                        <span>mijinB</span>
                                                    </LinkInfo>
                                                </LinkItemBox>
                                            </LinkItem>
                                            <LinkItem>
                                                <span>⪧ GitHub Pages(deploy)</span>
                                                <LinkItemBox
                                                    href="https://mijinb.github.io/vanilla_js_todo_list/"
                                                    target="_blank"
                                                    rel="noreferrer noopener"
                                                >
                                                    <ProfileImage src={githubImage} alt="github logo" width={33} />
                                                    <LinkInfo>
                                                        <span>ToDo List</span>
                                                        <span>https://mijinb.github.io/vanilla_js_todo_list/</span>
                                                    </LinkInfo>
                                                </LinkItemBox>
                                            </LinkItem>
                                        </ModalContentSection>
                                        <ModalContentSection>
                                            <SectionTitle>🧸 상세 내용</SectionTitle>
                                            <TwoColumns>
                                                <img src={todoLoginImage} alt="todo login" />
                                                <img src={todoListImage} alt="todo list" />
                                            </TwoColumns>
                                            <p>
                                                로그인 시 입력하는 사용자 이름과 to do list의 요소들은 LocalStorage에
                                                저장되어 관리돼요.
                                            </p>
                                            <p>
                                                to do list의 요소들은 각각 편집과 삭제가 가능하고 완료한 요소는 체크
                                                박스를 체크하여 구분할 수 있어요. (완료된 요소의 text는 취소선이
                                                생김으로써 시각적으로 더 쉽게 구분이 가능해요.)
                                            </p>
                                            <p>
                                                현재 시간을 digital 폰트로 보여주고 weather API를 사용하여 사용자의 위치
                                                및 날씨, 온도를 보여줘요. (날씨는 weather API에서 제공해주는 icon으로
                                                보여줘요.)
                                            </p>
                                            <TwoColumns>
                                                <img src={todoGameImage} alt="todo login" />
                                                <img src={todoSettingImage} alt="todo list" />
                                            </TwoColumns>
                                            <p>
                                                컴퓨터와 진행하는 가위바위보 게임과 컴퓨터가 뽑을 랜덤 숫자를 맞추는
                                                게임이 games 폴더에 있어서 조그만 재미를 줘요.
                                            </p>
                                            <p>
                                                setting 폴더에서는 background image의 종류를 바꿀 수 있고(꼬닐리오 작가,
                                                퍼엉 작가의 일러스트 / 그라데이션) 사용자 이름 옆에 있는 귀여운 동물
                                                이모지도 변경할 수 있어요.
                                            </p>
                                            <p>
                                                setting 폴더 아래에 있는 반짝반짝 이모지를 누르면 적용중인 background
                                                image 종류에 한해서 랜덤으로 image가 바껴요.
                                            </p>
                                        </ModalContentSection>
                                        <ModalContentSection>
                                            <SectionTitle>⚒️ 사용 기술 및 라이브러리</SectionTitle>
                                            <p>⪧ HTML, CSS, Vanilla JavaScript</p>
                                        </ModalContentSection>
                                        <ModalContentSection>
                                            <SectionTitle>🎶 관리 및 업데이트</SectionTitle>
                                            <CheckBoxContainer>
                                                <input type="checkbox" readOnly checked />
                                                <p>
                                                    IOS로 봤을 때 games 폴더(이모지) 비활성이 시각적으로 보이지 않아서
                                                    setting처럼 icon으로 수정 (23.10.16 완료)
                                                </p>
                                            </CheckBoxContainer>
                                        </ModalContentSection>
                                        <SubDivider />
                                        <ModalTitle>
                                            <ProfileImage src={reactImage} alt="react logo" width={40} />
                                            React To Do List
                                        </ModalTitle>
                                        <ModalSummaryContainer>
                                            <p>
                                                새로운 언어를 공부하면서 코딩 시도를 할 때 처음 만들어보는 프로젝트를
                                                만들기보다 만들어 본 경험이 있는 프로젝트를 새로운 언어로 다시 만드는
                                                방법이 효과적이라고 생각해요.
                                            </p>
                                        </ModalSummaryContainer>
                                        <ModalContentSection>
                                            <SectionTitle>🔗 Link</SectionTitle>
                                            <LinkItem>
                                                <span>⪧ GitHub(source)</span>
                                                <LinkItemBox
                                                    href="https://github.com/mijinB/recoil_todo_list"
                                                    target="_blank"
                                                    rel="noreferrer noopener"
                                                >
                                                    <ProfileImage src={gitProfileImage} alt="git profile" width={33} />
                                                    <GitHubImage src={githubImage} alt="github logo" width={17} />
                                                    <LinkInfo>
                                                        <span>recoil_todo_list</span>
                                                        <span>mijinB</span>
                                                    </LinkInfo>
                                                </LinkItemBox>
                                            </LinkItem>
                                            <LinkItem>
                                                <span>⪧ GitHub Pages(deploy)</span>
                                                <LinkItemBox
                                                    href="https://mijinb.github.io/recoil_todo_list/"
                                                    target="_blank"
                                                    rel="noreferrer noopener"
                                                >
                                                    <ProfileImage src={githubImage} alt="github logo" width={33} />
                                                    <LinkInfo>
                                                        <span>ToDo List</span>
                                                        <span>https://mijinb.github.io/recoil_todo_list/</span>
                                                    </LinkInfo>
                                                </LinkItemBox>
                                            </LinkItem>
                                        </ModalContentSection>
                                        <ModalContentSection>
                                            <SectionTitle>🧸 상세 내용</SectionTitle>
                                            <FourColumns>
                                                <img src={reactTodoImage} alt="react todo" />
                                                <img src={reactDoingImage} alt="react doing" />
                                                <img src={reactDoneImage} alt="react done" />
                                                <img src={reactCustomizeImage} alt="react customize" />
                                            </FourColumns>
                                            <p>
                                                카테고리 별로 구분해서 볼 수 있도록 구현했어요. to do 요소를 입력하면
                                                선택된 카테고리로 추가되고 to do 요소 아래 카테고리 버튼을 이용해서 옮길
                                                수 있어요.
                                            </p>
                                            <p>
                                                카테고리는 사용자가 원하는대로 추가할 수 있고 삭제도 자유롭게 가능해요.
                                                <br />
                                                카테고리 삭제 시, 그 카테고리에 존재하는 모든 to do 요소들을 함께
                                                제거하여 불필요한 데이터가 저장되지 않도록 구현했어요. (삭제 버튼을
                                                누르면 “카테고리를 정말 삭제하시겠습니까? 해당 카테고리에 포함된 data가
                                                모두 삭제됩니다.” 라는 alert 창을 띄움으로써 사용자의 실수를 방지하고
                                                있어요.)
                                            </p>
                                            <p>
                                                Recoil을 사용하여 전역 상태 관리를 적용했어요. (모든 to do 요소들은
                                                하나의 atom으로 관리하고 그 요소들 중에서 카테고리 별로 구분하여
                                                가져오는 기능은 selector을 이용해 구현했어요.)
                                            </p>
                                            <ToggleInfoColumns>
                                                <img src={reactThemeToggleGIF} alt="react theme toggle" />
                                                <div>
                                                    <p>
                                                        &lt;input&gt; 태그의 checkbox로 다크모드 toggle 버튼을
                                                        구현했어요.
                                                    </p>
                                                    <p>
                                                        라이트모드/다크모드로 전환될 때 색상 변경 및 emoji 변경은 Styled
                                                        Components의 props를 이용해 간편하게 적용했어요.
                                                    </p>
                                                </div>
                                            </ToggleInfoColumns>
                                            <p>TypeScript를 사용하여 JavaScript를 런타임 에러로부터 보호했어요.</p>
                                        </ModalContentSection>
                                    </ModalTextContent>
                                </ModalContentWrapper>
                            </Scrollbars>
                        </ProjectDetailsModal>
                    </>
                )}
                <ProjectItem onClick={toggleKoPlaceDetailsModal} $isFullWidth={isFullWidth}>
                    <TemplateImage src={koPlaceTemplateImage} alt="ko place template" />
                    <TemplateTextContainer>
                        <TemplateTitle>
                            <img src={koPlaceLogo} alt="ko place logo" width={22} />
                            <span>가볼 만한 곳=ko</span>
                        </TemplateTitle>
                        <KoPlaceSkills />
                        <span>2023년 8월 18일 → 2023년 8월 29일</span>
                        <TeamTag>개인프로젝트</TeamTag>
                    </TemplateTextContainer>
                </ProjectItem>
                {isKoPlaceDetailsOpen && (
                    <>
                        <OverLay onClick={toggleKoPlaceDetailsModal} />
                        <ProjectDetailsModal>
                            <ProjectModalHeader clickFunction={toggleKoPlaceDetailsModal} />
                            <Scrollbars autoHide>
                                <ModalContentWrapper>
                                    <ModalImageContainer $projectLogo={koPlaceLogo}>
                                        <ModalImage
                                            src={koPlaceTemplateImage}
                                            alt="ko place template"
                                            $objectPosition="center -100px"
                                        />
                                    </ModalImageContainer>
                                    <ModalTextContent>
                                        <ModalTitle>가볼 만한 곳=ko</ModalTitle>
                                        <ModalSummaryContainer>
                                            <ModalSummary>
                                                <SummaryItemTitle>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="21"
                                                        height="21"
                                                        viewBox="0 0 64 64"
                                                    >
                                                        <defs fill="#37352F" />
                                                        <path
                                                            d="m32,8c-14.81,0-24,8.43-24,22,0,6.92,2.4,12.49,6.7,16.3l-6.7,6.7,2,3c5.42,0,10.43-1.8,14.45-4.84,2.32.55,4.84.84,7.55.84,14.81,0,24-8.43,24-22s-9.19-22-24-22Zm4,37h-8v-6h8v6Zm0-18l-2,8h-4l-2-8v-12h8v12Z"
                                                            fill="#37352F"
                                                        />
                                                    </svg>
                                                    <span>간단 소개</span>
                                                </SummaryItemTitle>
                                                <SummaryItemContent>
                                                    <p>한국의 가볼 만한 곳을 쉽게 조회할 수 있는 여행 정보 앱</p>
                                                </SummaryItemContent>
                                                <SummaryItemTitle>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="21"
                                                        height="21"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                    >
                                                        <path
                                                            d="M12 20L4.6797 10.8496C4.34718 10.434 4.18092 10.2262 4.13625 9.9757C4.09159 9.72524 4.17575 9.47276 4.34407 8.96778L5.0883 6.73509C5.52832 5.41505 5.74832 4.75503 6.2721 4.37752C6.79587 4 7.49159 4 8.88304 4H15.117C16.5084 4 17.2041 4 17.7279 4.37752C18.2517 4.75503 18.4717 5.41505 18.9117 6.73509L19.6559 8.96778C19.8243 9.47276 19.9084 9.72524 19.8637 9.9757C19.8191 10.2262 19.6528 10.434 19.3203 10.8496L12 20ZM12 20L15.5 9M12 20L8.5 9M19.5 10L15.5 9M15.5 9L14 5M15.5 9H8.5M10 5L8.5 9M8.5 9L4.5 10"
                                                            stroke="#37352F"
                                                            strokeLinecap="round"
                                                        />
                                                    </svg>
                                                    <span>skills & tool</span>
                                                </SummaryItemTitle>
                                                <SummaryItemContent>
                                                    <KoPlaceSkills />
                                                </SummaryItemContent>
                                                <SummaryItemTitle>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="21"
                                                        height="21"
                                                        viewBox="0 0 64 64"
                                                    >
                                                        <defs fill="#37352F" />
                                                        <path
                                                            d="m48,12v-6h-6v6h-20v-6h-6v6h-8v40h48V12h-8Zm2,35H14v-19h36v19Z"
                                                            fill="#37352F"
                                                        />
                                                    </svg>
                                                    <span>진행 기간</span>
                                                </SummaryItemTitle>
                                                <SummaryItemContent>
                                                    <p>2023년 5월 5일 → 5월 16일</p>
                                                </SummaryItemContent>
                                                <SummaryItemTitle>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="21"
                                                        height="21"
                                                        viewBox="0 0 64 64"
                                                    >
                                                        <defs fill="#37352F" />
                                                        <path
                                                            d="m27,19c0-3.09,1.91-5,5-5s5,1.91,5,5-1.91,5-5,5-5-1.91-5-5Zm30,5c3.09,0,5-1.91,5-5s-1.91-5-5-5-5,1.91-5,5,1.91,5,5,5Zm-18,7c0-2.47-1.53-4-4-4h-6c-2.47,0-4,1.53-4,4v7h14v-7Zm-23,17h32v-6H16v6Zm44-21h-6c-2.11,0-3.53.71-4.8,2.4l-3.45,4.6h-2.75v4h4.75l4.25-5.67v15.67h12v-17c0-2.47-1.53-4-4-4Zm-53-3c3.09,0,5-1.91,5-5s-1.91-5-5-5-5,1.91-5,5,1.91,5,5,5Zm14,14v-4h-2.75l-3.45-4.6c-1.27-1.69-2.69-2.4-4.8-2.4h-6c-2.47,0-4,1.53-4,4v17h12v-15.67l4.25,5.67h4.75Z"
                                                            fill="#37352F"
                                                        />
                                                    </svg>
                                                    <span>팀 구성</span>
                                                </SummaryItemTitle>
                                                <SummaryItemContent>
                                                    <TeamTag>개인프로젝트</TeamTag>
                                                </SummaryItemContent>
                                            </ModalSummary>
                                            <SubDivider />
                                            <ModalComment>
                                                <ProfileImage src={profileImage} alt="profile" width={21} />
                                                <CommentContent>
                                                    <span>mijin</span>
                                                    <p>커버 이미지는 Photoshop을 사용해서 직접 제작했어요.</p>
                                                </CommentContent>
                                            </ModalComment>
                                            <SubDivider />
                                        </ModalSummaryContainer>
                                        <ModalContentSection>
                                            <SectionTitle>🔗 Link</SectionTitle>
                                            <LinkItem>
                                                <span>⪧ GitHub(source)</span>
                                                <LinkItemBox
                                                    href="https://github.com/mijinB/place_worth_visiting_ko"
                                                    target="_blank"
                                                    rel="noreferrer noopener"
                                                >
                                                    <ProfileImage src={gitProfileImage} alt="git profile" width={33} />
                                                    <GitHubImage src={githubImage} alt="github logo" width={17} />
                                                    <LinkInfo>
                                                        <span>place_worth_visiting_ko</span>
                                                        <span>mijinB</span>
                                                    </LinkInfo>
                                                </LinkItemBox>
                                            </LinkItem>
                                            <LinkItem>
                                                <span>⪧ Google Store(download)</span>
                                                <LinkItemBox
                                                    href="https://play.google.com/store/apps/details?id=com.bkmi.place_worth_visiting_ko&hl=ko"
                                                    target="_blank"
                                                    rel="noreferrer noopener"
                                                >
                                                    <img src={googlePlayImage} alt="google play logo" width={30} />
                                                    <LinkInfo>
                                                        <span>가볼 만한 곳=ko - Google Play 앱</span>
                                                        <span>
                                                            https://play.google.com/store/apps/details?id=com.bkmi.place_worth_visiting_ko&hl=ko
                                                        </span>
                                                    </LinkInfo>
                                                </LinkItemBox>
                                            </LinkItem>
                                        </ModalContentSection>
                                        <ModalContentSection>
                                            <SectionTitle>🧸 상세 내용</SectionTitle>
                                            <FourColumns>
                                                <img src={koPlaceMainImage} alt="ko place main" />
                                                <img src={koPlaceDetailImage} alt="ko place detail" />
                                                <div>
                                                    <p>
                                                        ‘지역’ → ‘시군구’ → ‘타입’을 선택하여 원하는 지역의 가볼 만한
                                                        장소를 쉽게 조회할 수 있는 APP이에요. 메인 페이지, 상세 페이지,
                                                        즐겨찾기 페이지, 설정 페이지가 존재해요.
                                                    </p>
                                                    <p>
                                                        카드 리스트 중 한 개의 카드를 터치하면 상세 페이지로 이동하며
                                                        google 지도로 정확한 위치를 보여줘요. google 지도 아래에는
                                                        상세정보, 업무시간, 휴무일, 주차 가능 여부, 리뷰 등을 제공해요.
                                                    </p>
                                                    <p>
                                                        관심 있는 장소를 따로 구분하여 볼 수 있도록 즐겨찾기 기능을
                                                        추가했어요.
                                                    </p>
                                                </div>
                                            </FourColumns>
                                            <p>
                                                기존에는 회원가입 및 로그인을 해야 어플을 사용 가능하도록 구현했었는데
                                                번거로움이 있을 거 같아서 APP을 실행하면 바로 사용이 가능하고 즐겨찾기,
                                                리뷰 기능만 회원가입 및 로그인이 필요하도록 수정했어요. (23.06.10
                                                완료/Google Play 업데이트 완료)
                                            </p>
                                        </ModalContentSection>
                                        <ModalContentSection>
                                            <SectionTitle>⚒️ 사용 기술 및 라이브러리</SectionTitle>
                                            <p>⪧ Flutter, Dart, Android</p>
                                            <p>⪧ Firebase</p>
                                            <p>⪧ 공공데이터포털 API, Google Map API</p>
                                        </ModalContentSection>
                                        <ModalContentSection>
                                            <SectionTitle>🎶 관리 및 업데이트</SectionTitle>
                                            <CheckBoxContainer>
                                                <input type="checkbox" readOnly checked />
                                                <p>
                                                    상세 페이지에 장소 상세 설명(운영 시간, 휴무일, 장소 설명 등) 추가
                                                    예정 (23.05.20 완료)
                                                </p>
                                            </CheckBoxContainer>
                                            <CheckBoxContainer>
                                                <input type="checkbox" readOnly checked />
                                                <p>
                                                    디바이스 크기 차이로 레이아웃 깨짐 발생 확인. 업데이트 예정
                                                    (23.06.01 완료/Google Play 업데이트 완료)
                                                </p>
                                            </CheckBoxContainer>
                                            <CheckBoxContainer>
                                                <input type="checkbox" readOnly checked />
                                                <p>검색하기, 로그아웃, 회원 탈퇴 Button Refactoring (23.06.02 완료)</p>
                                            </CheckBoxContainer>
                                            <CheckBoxContainer>
                                                <input type="checkbox" readOnly checked />
                                                <p>
                                                    로그인, 회원가입 TextField & 상세정보 Text Refactoring (23.06.04
                                                    완료)
                                                </p>
                                            </CheckBoxContainer>
                                            <CheckBoxContainer>
                                                <input type="checkbox" readOnly checked />
                                                <p>
                                                    로그인 위치 변경/APP 실행 시 바로 사용 가능하게 하기 (23.06.10
                                                    완료/Google Play 업데이트 완료)
                                                </p>
                                            </CheckBoxContainer>
                                        </ModalContentSection>
                                    </ModalTextContent>
                                </ModalContentWrapper>
                            </Scrollbars>
                        </ProjectDetailsModal>
                    </>
                )}
            </ProjectContainer>
        </Wrapper>
    );
}

export default Project;
