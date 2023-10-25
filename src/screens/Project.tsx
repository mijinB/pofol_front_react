import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import PageHeader from "../components/PageHeader";
import todoTemplateImage from "../assets/images/todo_template.jpg";
import todoLogo from "../assets/images/todo_logo.png";
import koPlaceTemplateImage from "../assets/images/ko_place_template.jpg";
import koPlaceLogo from "../assets/images/ko_place_logo.png";
import { useState } from "react";
import ToDoSkills from "../components/ToDoSkills";
import KoPlaceSkills from "../components/KoPlaceSkills";

const Wrapper = styled.div<{ $isFullWidth: boolean }>`
    width: ${(props) => (props.$isFullWidth ? 100 : 50)}%;
`;

const ProjectTitle = styled.div`
    padding-top: 50px;
    > span {
        font-weight: 600;
    }
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

const DarkDivider = styled.div`
    width: 77px;
`;

const ProjectContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

const ProjectItem = styled.div`
    display: grid;
    grid-template-rows: 2fr 1fr;
    width: 400px;
    height: 350px;
    border-radius: 5px;
    background-color: white;
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
    height: 226px;
    border-bottom: 1px solid rgba(15, 15, 15, 0.1);
    object-fit: cover;
`;

const TemplateTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    padding: 5px;
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

const TemplateTag = styled.span`
    align-self: flex-start;
    padding: 2px 3px;
    border-radius: 3px;
    background-color: rgba(15, 15, 15, 0.1);
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
    grid-template-rows: 44px 1fr 2.5fr;
    width: 50%;
    height: 85%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    background-color: white;
    box-shadow: rgba(15, 15, 15, 0.016) 0px 0px 0px 1px, rgba(15, 15, 15, 0.03) 0px 3px 6px,
        rgba(15, 15, 15, 0.06) 0px 9px 24px;
    transform: translate(-50%, -50%);
    overflow: hidden;
    > img {
        position: absolute;
        top: 216px;
        left: 125px;
    }
`;

const ModalHeader = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 10px;
    background-color: white;
    > svg {
        cursor: pointer;
        &:hover {
            filter: sepia(100%) saturate(6054%) hue-rotate(358deg) brightness(100%) contrast(100%);
        }
    }
`;

const ModalImageContainer = styled.div`
    overflow: hidden;
`;
const ModalImage = styled.img`
    width: 100%;
`;

const ModalTextContainer = styled.div`
    padding: 80px 110px;
`;

const ModalTitle = styled.h2`
    font-size: 42px;
    font-weight: 600;
`;

const ModalSummaryContainer = styled.div`
    padding: 30px 0;
`;

const ModalSummary = styled.div`
    display: grid;
    grid-template-columns: 1fr 3.3fr;
    grid-template-rows: repeat(4, 1fr);
    gap: 20px;
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

const ModalComment = styled.div``;

interface IProjectProp {
    isFullWidth: boolean;
}

function Project() {
    const { isFullWidth } = useOutletContext<IProjectProp>();

    const [isProjectDetailsOpen, setIsProjectDetailsOpen] = useState<boolean>(false);

    /**@function toggleDetailsModal
     * 1. isProjectDetailsOpen(boolean) 변수의 값을 전환한다.
     */
    const toggleDetailsModal = () => {
        setIsProjectDetailsOpen((previous) => !previous);
    };

    return (
        <Wrapper $isFullWidth={isFullWidth}>
            <PageHeader icon="🖼️" title="Project" />
            <ProjectTitle>
                <span>🐰 2023</span>
                <SubDivider>
                    <DarkDivider />
                </SubDivider>
            </ProjectTitle>
            <ProjectContainer>
                <ProjectItem onClick={toggleDetailsModal}>
                    <TemplateImage src={todoTemplateImage} alt="todo template" />
                    <TemplateTextContainer>
                        <TemplateTitle>
                            <img src={todoLogo} alt="todo logo" width={22} />
                            <span>To Do List</span>
                        </TemplateTitle>
                        <ToDoSkills />
                        <span>2023년 8월 18일 → 2023년 8월 29일</span>
                        <TemplateTag>개인프로젝트</TemplateTag>
                    </TemplateTextContainer>
                </ProjectItem>
                {isProjectDetailsOpen && (
                    <>
                        <OverLay onClick={toggleDetailsModal} />
                        <ProjectDetailsModal>
                            <ModalHeader>
                                <svg
                                    onClick={toggleDetailsModal}
                                    width="30"
                                    height="30"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx="12" cy="12" r="9" stroke="#37352F" />
                                    <path d="M9.00009 14.9997L15.0001 8.99966" stroke="#37352F" />
                                    <path d="M15 15L9 9" stroke="#37352F" />
                                </svg>
                            </ModalHeader>
                            <ModalImageContainer>
                                <ModalImage src={todoTemplateImage} alt="todo template" />
                            </ModalImageContainer>
                            <img src={todoLogo} alt="todo logo" width={90} />
                            <ModalTextContainer>
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
                                                width="21"
                                                height="21"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M12 20L4.6797 10.8496C4.34718 10.434 4.18092 10.2262 4.13625 9.9757C4.09159 9.72524 4.17575 9.47276 4.34407 8.96778L5.0883 6.73509C5.52832 5.41505 5.74832 4.75503 6.2721 4.37752C6.79587 4 7.49159 4 8.88304 4H15.117C16.5084 4 17.2041 4 17.7279 4.37752C18.2517 4.75503 18.4717 5.41505 18.9117 6.73509L19.6559 8.96778C19.8243 9.47276 19.9084 9.72524 19.8637 9.9757C19.8191 10.2262 19.6528 10.434 19.3203 10.8496L12 20ZM12 20L15.5 9M12 20L8.5 9M19.5 10L15.5 9M15.5 9L14 5M15.5 9H8.5M10 5L8.5 9M8.5 9L4.5 10"
                                                    stroke="#37352F"
                                                    stroke-linecap="round"
                                                />
                                            </svg>

                                            <span>skills & tool</span>
                                        </SummaryItemTitle>
                                        <SummaryItemContent>
                                            <p>해야 하는 일들의 정리를 도와주는 web application입니다.</p>
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
                                                    d="m32,8c-14.81,0-24,8.43-24,22,0,6.92,2.4,12.49,6.7,16.3l-6.7,6.7,2,3c5.42,0,10.43-1.8,14.45-4.84,2.32.55,4.84.84,7.55.84,14.81,0,24-8.43,24-22s-9.19-22-24-22Zm4,37h-8v-6h8v6Zm0-18l-2,8h-4l-2-8v-12h8v12Z"
                                                    fill="#37352F"
                                                />
                                            </svg>
                                            <span>3</span>
                                        </SummaryItemTitle>
                                        <SummaryItemContent>
                                            <p>해야 하는 일들의 정리를 도와주는 web application입니다.</p>
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
                                                    d="m32,8c-14.81,0-24,8.43-24,22,0,6.92,2.4,12.49,6.7,16.3l-6.7,6.7,2,3c5.42,0,10.43-1.8,14.45-4.84,2.32.55,4.84.84,7.55.84,14.81,0,24-8.43,24-22s-9.19-22-24-22Zm4,37h-8v-6h8v6Zm0-18l-2,8h-4l-2-8v-12h8v12Z"
                                                    fill="#37352F"
                                                />
                                            </svg>
                                            <span>4</span>
                                        </SummaryItemTitle>
                                        <SummaryItemContent>
                                            <p>해야 하는 일들의 정리를 도와주는 web application입니다.</p>
                                        </SummaryItemContent>
                                    </ModalSummary>
                                    <ModalComment></ModalComment>
                                </ModalSummaryContainer>
                            </ModalTextContainer>
                        </ProjectDetailsModal>
                    </>
                )}
                <ProjectItem>
                    <TemplateImage src={koPlaceTemplateImage} alt="ko place template" />
                    <TemplateTextContainer>
                        <TemplateTitle>
                            <img src={koPlaceLogo} alt="ko place logo" width={22} />
                            <span>가볼 만한 곳=ko</span>
                        </TemplateTitle>
                        <KoPlaceSkills />
                        <span>2023년 8월 18일 → 2023년 8월 29일</span>
                        <TemplateTag>개인프로젝트</TemplateTag>
                    </TemplateTextContainer>
                </ProjectItem>
            </ProjectContainer>
        </Wrapper>
    );
}

export default Project;
