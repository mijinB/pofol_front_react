import styled from "styled-components";
import profileImage from "../assets/images/profile.jpg";

const ProjectTitle = styled.h2`
    font-size: 38px;
    font-weight: 800;

    @media (max-width: 1024px) {
        font-size: 27px;
    }
`;

const SummaryCommentWrapper = styled.div`
    padding: 30px 0;

    @media (max-width: 1024px) {
        padding: 25px 0;
    }
`;

const ProjectSummaryContainer = styled.div`
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
        font-weight: 500;
        opacity: 0.7;
    }

    @media (max-width: 1024px) {
        > svg {
            width: 18px;
        }
        > span {
            width: 57px;
            font-size: 13px;
        }
    }
`;

const SummaryItemContent = styled.div`
    > p {
        font-size: 14px;
    }

    @media (max-width: 1024px) {
        > p {
            font-size: 13px;
            line-height: 1.2;
        }
    }
`;

const TeamTag = styled.span`
    align-self: flex-start;
    padding: 2px 3px;
    border-radius: 3px;
    background-color: rgba(15, 15, 15, 0.1);
    font-size: 14px;

    @media (max-width: 1024px) {
        font-size: 13px;
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

const ProjectComment = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 8px;
    padding-bottom: 10px;
`;

const ProfileImage = styled.img`
    border-radius: 50%;
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

    @media (max-width: 1024px) {
        > * {
            font-size: 13px;
        }
    }
`;

interface IProjectSummaryProps {
    projectTitle: string;
    simpleInfo: string;
    skills: React.ReactElement;
    period: string;
    projectGroup: string;
    commentContent: string;
}

function ProjectSummary({
    projectTitle,
    simpleInfo,
    skills,
    period,
    projectGroup,
    commentContent,
}: IProjectSummaryProps) {
    return (
        <>
            <ProjectTitle>{projectTitle}</ProjectTitle>
            <SummaryCommentWrapper>
                <ProjectSummaryContainer>
                    <SummaryItemTitle>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 64 64">
                            <defs fill="#37352F" />
                            <path
                                d="m32,8c-14.81,0-24,8.43-24,22,0,6.92,2.4,12.49,6.7,16.3l-6.7,6.7,2,3c5.42,0,10.43-1.8,14.45-4.84,2.32.55,4.84.84,7.55.84,14.81,0,24-8.43,24-22s-9.19-22-24-22Zm4,37h-8v-6h8v6Zm0-18l-2,8h-4l-2-8v-12h8v12Z"
                                fill="#37352F"
                            />
                        </svg>
                        <span>간단 소개</span>
                    </SummaryItemTitle>
                    <SummaryItemContent>
                        <p>{simpleInfo}</p>
                    </SummaryItemContent>
                    <SummaryItemTitle>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M12 20L4.6797 10.8496C4.34718 10.434 4.18092 10.2262 4.13625 9.9757C4.09159 9.72524 4.17575 9.47276 4.34407 8.96778L5.0883 6.73509C5.52832 5.41505 5.74832 4.75503 6.2721 4.37752C6.79587 4 7.49159 4 8.88304 4H15.117C16.5084 4 17.2041 4 17.7279 4.37752C18.2517 4.75503 18.4717 5.41505 18.9117 6.73509L19.6559 8.96778C19.8243 9.47276 19.9084 9.72524 19.8637 9.9757C19.8191 10.2262 19.6528 10.434 19.3203 10.8496L12 20ZM12 20L15.5 9M12 20L8.5 9M19.5 10L15.5 9M15.5 9L14 5M15.5 9H8.5M10 5L8.5 9M8.5 9L4.5 10"
                                stroke="#37352F"
                                strokeLinecap="round"
                            />
                        </svg>
                        <span>skills & tool</span>
                    </SummaryItemTitle>
                    <SummaryItemContent>{skills}</SummaryItemContent>
                    <SummaryItemTitle>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 64 64">
                            <defs fill="#37352F" />
                            <path d="m48,12v-6h-6v6h-20v-6h-6v6h-8v40h48V12h-8Zm2,35H14v-19h36v19Z" fill="#37352F" />
                        </svg>
                        <span>진행 기간</span>
                    </SummaryItemTitle>
                    <SummaryItemContent>
                        <p>{period}</p>
                    </SummaryItemContent>
                    <SummaryItemTitle>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 64 64">
                            <defs fill="#37352F" />
                            <path
                                d="m27,19c0-3.09,1.91-5,5-5s5,1.91,5,5-1.91,5-5,5-5-1.91-5-5Zm30,5c3.09,0,5-1.91,5-5s-1.91-5-5-5-5,1.91-5,5,1.91,5,5,5Zm-18,7c0-2.47-1.53-4-4-4h-6c-2.47,0-4,1.53-4,4v7h14v-7Zm-23,17h32v-6H16v6Zm44-21h-6c-2.11,0-3.53.71-4.8,2.4l-3.45,4.6h-2.75v4h4.75l4.25-5.67v15.67h12v-17c0-2.47-1.53-4-4-4Zm-53-3c3.09,0,5-1.91,5-5s-1.91-5-5-5-5,1.91-5,5,1.91,5,5,5Zm14,14v-4h-2.75l-3.45-4.6c-1.27-1.69-2.69-2.4-4.8-2.4h-6c-2.47,0-4,1.53-4,4v17h12v-15.67l4.25,5.67h4.75Z"
                                fill="#37352F"
                            />
                        </svg>
                        <span>팀 구성</span>
                    </SummaryItemTitle>
                    <SummaryItemContent>
                        <TeamTag>{projectGroup}</TeamTag>
                    </SummaryItemContent>
                </ProjectSummaryContainer>
                <SubDivider />
                <ProjectComment>
                    <ProfileImage src={profileImage} alt="profile" width={21} />
                    <CommentContent>
                        <span>mijin</span>
                        <p>{commentContent}</p>
                    </CommentContent>
                </ProjectComment>
                <SubDivider />
            </SummaryCommentWrapper>
        </>
    );
}

export default ProjectSummary;
