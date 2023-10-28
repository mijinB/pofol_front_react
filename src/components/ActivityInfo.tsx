import styled from "styled-components";
import naverBlogImage from "../assets/images/naverblog.png";
import nomadImage from "../assets/images/nomadLogo.png";

const ItemInfoWrapper = styled.div`
    height: 100%;
    padding: 0 20px;
    border-radius: 4px;
    background-color: #f1f8fb;
`;

const ModalSummaryContainer = styled.div`
    padding: 40px 0;
    > p {
        font-size: 13px;
        line-height: 1.5;
    }
`;

const ModalSummary = styled.div`
    display: flex;
`;

const SummaryTitleIcons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 3px;
    > svg {
        height: 30px;
        margin-bottom: 10px;
        opacity: 0.4;
    }
`;

const SummaryTitleTexts = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 40px;
    > span {
        display: inline-flex;
        align-items: center;
        height: 30px;
        margin-bottom: 10px;
        font-size: 14px;
        opacity: 0.7;
    }
`;

const SummaryContents = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    > * {
        display: inline-flex;
        align-items: center;
        height: 30px;
        margin-bottom: 10px;
        font-size: 14px;
    }
`;

const ItemTitle = styled.h3`
    display: flex;
    justify-content: center;
    gap: 5px;
    margin-bottom: 60px;
    font-size: 23px;
    font-weight: 600;
    > img {
        display: none;
    }
`;

const ModalContentSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 100px;
    > div {
        display: flex;
        flex-direction: column;
        gap: 12px;
        font-size: 15px;
        line-height: 1.3;
    }
`;

const SectionTitle = styled.h3`
    font-size: 19px;
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

const ProfileImage = styled.img`
    border-radius: 3px;
`;

interface IActivityInfoProps {
    addLink: boolean;
    title: string | React.ReactElement;
    skills: React.ReactElement;
    period: string;
    learnedContent: string | React.ReactElement;
}

function ActivityInfo({ addLink, title, skills, period, learnedContent }: IActivityInfoProps) {
    return (
        <ItemInfoWrapper>
            <ModalSummaryContainer>
                <ModalSummary>
                    <SummaryTitleIcons>
                        <svg role="graphics-symbol" width="16" height="16" viewBox="0 0 16 16" fill="#37352F">
                            <path d="M8.75488 1.02344C8.75488 0.613281 8.41309 0.264648 8.00293 0.264648C7.59277 0.264648 7.25098 0.613281 7.25098 1.02344V3.11523C7.25098 3.51855 7.59277 3.86719 8.00293 3.86719C8.41309 3.86719 8.75488 3.51855 8.75488 3.11523V1.02344ZM3.91504 5.0293C4.20215 5.31641 4.69434 5.32324 4.97461 5.03613C5.26855 4.74902 5.26855 4.25684 4.98145 3.96973L3.53906 2.52051C3.25195 2.2334 2.7666 2.21973 2.47949 2.50684C2.19238 2.79395 2.18555 3.28613 2.47266 3.57324L3.91504 5.0293ZM10.9629 4.01758C10.6826 4.30469 10.6826 4.79688 10.9697 5.08398C11.2568 5.37109 11.749 5.36426 12.0361 5.07715L13.4854 3.62793C13.7725 3.34082 13.7725 2.84863 13.4785 2.55469C13.1982 2.27441 12.7061 2.27441 12.4189 2.56152L10.9629 4.01758ZM15.0234 8.78906C15.4336 8.78906 15.7822 8.44727 15.7822 8.03711C15.7822 7.62695 15.4336 7.28516 15.0234 7.28516H12.9385C12.5283 7.28516 12.1797 7.62695 12.1797 8.03711C12.1797 8.44727 12.5283 8.78906 12.9385 8.78906H15.0234ZM0.975586 7.28516C0.56543 7.28516 0.223633 7.62695 0.223633 8.03711C0.223633 8.44727 0.56543 8.78906 0.975586 8.78906H3.07422C3.48438 8.78906 3.83301 8.44727 3.83301 8.03711C3.83301 7.62695 3.48438 7.28516 3.07422 7.28516H0.975586ZM12.0361 10.9902C11.749 10.71 11.2568 10.71 10.9629 10.9971C10.6826 11.2842 10.6826 11.7764 10.9697 12.0635L12.4258 13.5127C12.7129 13.7998 13.2051 13.793 13.4922 13.5059C13.7793 13.2256 13.7725 12.7266 13.4854 12.4395L12.0361 10.9902ZM2.52051 12.4395C2.22656 12.7266 2.22656 13.2188 2.50684 13.5059C2.79395 13.793 3.28613 13.7998 3.57324 13.5127L5.02246 12.0703C5.31641 11.7832 5.31641 11.291 5.03613 11.0039C4.74902 10.7168 4.25684 10.71 3.96973 10.9971L2.52051 12.4395ZM8.75488 12.9658C8.75488 12.5557 8.41309 12.207 8.00293 12.207C7.59277 12.207 7.25098 12.5557 7.25098 12.9658V15.0576C7.25098 15.4609 7.59277 15.8096 8.00293 15.8096C8.41309 15.8096 8.75488 15.4609 8.75488 15.0576V12.9658Z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M12 20L4.6797 10.8496C4.34718 10.434 4.18092 10.2262 4.13625 9.9757C4.09159 9.72524 4.17575 9.47276 4.34407 8.96778L5.0883 6.73509C5.52832 5.41505 5.74832 4.75503 6.2721 4.37752C6.79587 4 7.49159 4 8.88304 4H15.117C16.5084 4 17.2041 4 17.7279 4.37752C18.2517 4.75503 18.4717 5.41505 18.9117 6.73509L19.6559 8.96778C19.8243 9.47276 19.9084 9.72524 19.8637 9.9757C19.8191 10.2262 19.6528 10.434 19.3203 10.8496L12 20ZM12 20L15.5 9M12 20L8.5 9M19.5 10L15.5 9M15.5 9L14 5M15.5 9H8.5M10 5L8.5 9M8.5 9L4.5 10"
                                stroke="#37352F"
                                strokeLinecap="round"
                            />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 64 64">
                            <defs fill="#37352F" />
                            <path d="m48,12v-6h-6v6h-20v-6h-6v6h-8v40h48V12h-8Zm2,35H14v-19h36v19Z" fill="#37352F" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 64 64">
                            <defs fill="#37352F" />
                            <path
                                d="m60,28v6H4v-6h10.07c.66-9.89,6.02-20,10.93-20,3.23,0,4.53,2,7,2s3.86-2,7-2c4.95,0,10.29,10.01,10.93,20h10.07Zm-52,10h48v6h-4l-.85,5.1c-.74,4.45-3.64,6.9-8.15,6.9s-7.41-2.45-8.15-6.9l-.52-3.12c-.21-1.27-1.04-1.97-2.33-1.97s-2.12.7-2.33,1.97l-.52,3.12c-.74,4.45-3.64,6.9-8.15,6.9s-7.41-2.45-8.15-6.9l-.85-5.1h-4v-6Zm31,14h4l4-8h-4l-4,8Zm-22,0h4l4-8h-4l-4,8Z"
                                fill="#37352F"
                            />
                        </svg>
                    </SummaryTitleIcons>
                    <SummaryTitleTexts>
                        <span>상태</span>
                        <span>skills & tool</span>
                        <span>진행 기간</span>
                        <span>주최</span>
                    </SummaryTitleTexts>
                    <SummaryContents>
                        <p>완료</p>
                        {skills}
                        <p>{period}</p>
                        <p>Nomad Coders 노마드 코더</p>
                    </SummaryContents>
                </ModalSummary>
            </ModalSummaryContainer>
            <ItemTitle>"{title}"</ItemTitle>
            <ModalContentSection>
                <SectionTitle>✍️ 배운 내용</SectionTitle>
                <div>{learnedContent}</div>
            </ModalContentSection>
            {addLink && (
                <ModalContentSection>
                    <SectionTitle>🔗 나의 기록</SectionTitle>
                    <LinkItem>
                        <span>⪧ Naver Blog</span>
                        <LinkItemBox
                            href="https://github.com/mijinB/vanilla_js_todo_list"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <ProfileImage src={naverBlogImage} alt="naver blog logo" width={33} />
                            <LinkInfo>
                                <span>bkmi의 블로그</span>
                                <span>https://blog.naver.com/bkmij</span>
                            </LinkInfo>
                        </LinkItemBox>
                    </LinkItem>
                    <LinkItem>
                        <span>⪧ Nomad Coders Community</span>
                        <LinkItemBox
                            href="https://mijinb.github.io/vanilla_js_todo_list/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <ProfileImage src={nomadImage} alt="nomad coders logo" width={33} />
                            <LinkInfo>
                                <span>Nomad Coders Community</span>
                                <span>https://nomadcoders.co/community/book_club/</span>
                            </LinkInfo>
                        </LinkItemBox>
                    </LinkItem>
                </ModalContentSection>
            )}
        </ItemInfoWrapper>
    );
}

export default ActivityInfo;
