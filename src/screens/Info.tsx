import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import PageHeader from "../components/PageHeader";
import myImage from "../assets/images/me.jpeg";
import githubImage from "../assets/images/github.png";
import naverBlogImage from "../assets/images/naverblog.png";
import gmailImage from "../assets/images/gmail.png";
import award1Image from "../assets/images/award1.jpg";
import award2Image from "../assets/images/award2.jpg";
import { useState } from "react";

const Wrapper = styled.div<{ $isFullWidth: boolean }>`
    width: ${(props) => (props.$isFullWidth ? "100" : "50")}%;

    @media (max-width: 1024px) {
        width: 100%;
    }
`;

const ScrollPaddingContainer = styled.div`
    height: 57px;
`;

const TwoColumns = styled.div<{ $isFullWidth: boolean }>`
    display: grid;
    grid-template-columns: 1fr ${(props) => (props.$isFullWidth ? 2.5 : 1)}fr;
    gap: 20px;
    padding-bottom: 180px;

    @media (max-width: 1330px) {
        grid-template-columns: 1fr;
        padding-bottom: 70px;
    }
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    max-height: 500px;
    object-fit: cover;

    @media (max-width: 1330px) {
        max-height: 200px;
    }
    @media (max-width: 1024px) {
        max-height: 200px;
    }
`;

const GreetingContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 25px;
    > p {
        &:nth-of-type(1) {
            font-size: 22px;
            font-weight: 600;
            line-height: 2;
        }
        &:nth-of-type(2) {
            font-size: 16px;
            line-height: 1.5;
        }
    }
    > div:nth-of-type(1) {
        padding: 15px 20px;
        border-radius: 5px;
        background-color: rgba(255, 204, 204, 0.65);
        > p {
            font-size: 16px;
            line-height: 1.5;
        }
    }

    @media (max-width: 1024px) {
        gap: 15px;
        > p {
            &:nth-of-type(1) {
                font-size: 18px;
                line-height: 1.5;
            }
            &:nth-of-type(2) {
                font-size: 15px;
            }
        }
        > div:nth-of-type(1) {
            padding: 10px 15px;
            > p {
                font-size: 15px;
            }
        }
    }
`;

const LinkButton = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    > * {
        display: flex;
        align-items: center;
        gap: 7px;
        color: #707070;
        font-size: 15px;
        font-weight: 600;
        cursor: pointer;
        &:hover {
            color: #f8c75d;
        }
    }
`;

const EducationContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding-bottom: 180px;

    @media (max-width: 1024px) {
        padding-bottom: 70px;
    }
`;

const EducationItem = styled.div`
    line-height: 1.5;
    > h2 {
        font-size: 18px;
        font-weight: 600;
    }
    > p {
        font-size: 15px;
    }

    @media (max-width: 1024px) {
        > h2 {
            font-size: 15px;
        }
        > p {
            font-size: 14px;
        }
    }
`;

const CertificateWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    padding-bottom: 180px;

    @media (max-width: 1024px) {
        padding-bottom: 70px;
    }
`;

const CertificateContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 30px;
    border-radius: 5px;
    background-color: rgba(253, 236, 200, 0.3);

    @media (max-width: 1024px) {
        gap: 15px;
        padding: 20px;
    }
`;

const CertificateItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    > h2 {
        font-size: 15px;
        font-weight: 600;
        font-style: italic;
    }

    @media (max-width: 1024px) {
        > h2 {
            font-size: 14px;
        }
    }
`;

const CertificateDateSpace = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-left: 20px;
`;

const DescriptionSpace = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-left: 25px;

    @media (max-width: 1024px) {
        font-size: 13px;
    }
`;

const ItemLine = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    > * {
        font-size: 15px;
    }

    @media (max-width: 1024px) {
        gap: 5px;
        > * {
            font-size: 13px;
        }
    }
`;

const ImportText = styled.span`
    color: #686de0;
    font-style: italic;
`;

const StringText = styled.span`
    color: #10ac84;
`;

const KeyWordText = styled.span`
    color: #f368e0;
`;

const ObjectKeyText = styled.span`
    color: #ee5253;
`;

const AwardsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 189px;
    > img {
        width: 300px;
    }

    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
        margin-bottom: 70px;
        > img {
            width: 30%;
        }
    }
    @media (max-width: 700px) {
        > img {
            width: 50%;
        }
    }
`;

const CopiedMessage = styled.p<{ $isEmailCopyClipBoard: boolean }>`
    opacity: ${(props) => (props.$isEmailCopyClipBoard ? 1 : 0)};
    color: #707070;
    transition: opacity 0.1s ease-in;
`;

interface IInfoProps {
    isFullWidth: boolean;
    educationRef: any;
    certificateRef: any;
    awardsRef: any;
}

function Info() {
    const { isFullWidth, educationRef, certificateRef, awardsRef } = useOutletContext<IInfoProps>();
    const [isEmailCopyClipBoard, setIsEmailCopyClipBoard] = useState<boolean>(false);

    /**@function onEmailCopyClipBoard
     * 1. 복사할 email을 받아와서 클립보드에 저장한다.
     * 2. 정상적으로 동작됐으면 확인 Message 띄우기 위해 isEmailCopyClipBoard(boolean) 변수에 true 대입하고 3초 후 다시 false 대입한다.
     * 3. 동작되지 않았으면 console에 error 띄운다.
     * @param { string } email
     */
    const onEmailCopyClipBoard = async (email: string) => {
        try {
            await navigator.clipboard.writeText(email);
            setIsEmailCopyClipBoard(true);
            setTimeout(() => setIsEmailCopyClipBoard(false), 1500);
        } catch {
            console.log("error");
        }
    };

    return (
        <Wrapper $isFullWidth={isFullWidth}>
            <PageHeader icon="🐯" title="백미진" />
            <TwoColumns $isFullWidth={isFullWidth}>
                <Image src={myImage} alt="me" />
                <GreetingContainer>
                    <p>
                        안녕하세요.
                        <br />
                        frontend 개발자 백미진입니다.
                    </p>
                    <p>
                        기록하는 걸 좋아하고
                        <br />
                        새로운 도전에 두려움이 없고
                        <br />
                        성장 욕심이 많아요.
                    </p>
                    <div>
                        <p>
                            🌟 성공은 실행력의 차이이다.
                            <br />
                            ✍️ 기대보단 계획을 고민보단 실행을
                            <br />
                            🐾 더딜지 몰라도 확실하게 나아갈 것
                            <br />
                            ❤️‍🩹 '꽃길' 아닌 '흙길' 위에서라도 그 순간을 사랑하는 사람이 되자.
                        </p>
                    </div>
                    <LinkButton>
                        <a href="https://github.com/mijinB" target="_blank" rel="noreferrer noopener">
                            <img src={githubImage} alt="github" width={25} />
                            GitHub
                        </a>
                        <a href="https://blog.naver.com/bkmij" target="_blank" rel="noreferrer noopener">
                            <img src={naverBlogImage} alt="naver blog" width={25} />
                            Naver Blog
                        </a>
                        <span onClick={() => onEmailCopyClipBoard("bmj13465@gmail.com")}>
                            <img src={gmailImage} alt="gmail" width={25} />
                            bmj13465@gmail.com
                            <CopiedMessage $isEmailCopyClipBoard={isEmailCopyClipBoard}>✅ 복사 완료</CopiedMessage>
                        </span>
                    </LinkButton>
                </GreetingContainer>
            </TwoColumns>
            <ScrollPaddingContainer ref={educationRef}></ScrollPaddingContainer>
            <PageHeader icon="👩‍🎓" title="Education" />
            <EducationContainer>
                <EducationItem>
                    <h2>여주대학교 컴퓨터정보과</h2>
                    <p>2017.03. ~ 2019.02. 졸업 (4.12 / 4.5)</p>
                </EducationItem>
                <EducationItem>
                    <h2>원광대학교 컴퓨터소프트웨어공학과</h2>
                    <p>2019.03. ~ 2021.02. 편입, 졸업 (3.77 / 4.5)</p>
                </EducationItem>
            </EducationContainer>
            <ScrollPaddingContainer ref={certificateRef}></ScrollPaddingContainer>
            <PageHeader icon="📜" title="Certificate" />
            <CertificateWrapper>
                <CertificateContainer>
                    <CertificateItem>
                        <ItemLine>
                            <ImportText>import</ImportText>
                            <span>정보처리기사</span>
                            <ImportText>from</ImportText>
                            <StringText>"한국산업인력공단"</StringText>
                            <span>;</span>
                        </ItemLine>
                        <ItemLine>
                            <ImportText>import</ImportText>
                            <span>GTQ_그래픽기술자격_1급</span>
                            <ImportText>from</ImportText>
                            <StringText>"한국생산성본부"</StringText>
                            <span>;</span>
                        </ItemLine>
                        <ItemLine>
                            <ImportText>import</ImportText>
                            <span>MOS_PowerPoint</span>
                            <ImportText>from</ImportText>
                            <StringText>"Microsoft"</StringText>
                            <span>;</span>
                        </ItemLine>
                        <ItemLine>
                            <ImportText>import</ImportText>
                            <span>ICDL_Start_Certificate</span>
                            <ImportText>from</ImportText>
                            <StringText>"한국생산성본부"</StringText>
                            <span>;</span>
                        </ItemLine>
                        <ItemLine>
                            <ImportText>import</ImportText>
                            <span>컴퓨터활용능력1급</span>
                            <ImportText>from</ImportText>
                            <StringText>"대한상공회의소"</StringText>
                            <span>;</span>
                        </ItemLine>
                        <ItemLine>
                            <ImportText>import</ImportText>
                            <span>전산회계1급</span>
                            <ImportText>from</ImportText>
                            <StringText>"한국세무사협회"</StringText>
                            <span>;</span>
                        </ItemLine>
                        <ItemLine>
                            <ImportText>import</ImportText>
                            <span>전산세무2급</span>
                            <ImportText>from</ImportText>
                            <StringText>"한국세무사협회"</StringText>
                            <span>;</span>
                        </ItemLine>
                        <ItemLine>
                            <ImportText>import</ImportText>
                            <span>FAT_회계정보처리1급</span>
                            <ImportText>from</ImportText>
                            <StringText>"한국공인회계사회"</StringText>
                            <span>;</span>
                        </ItemLine>
                    </CertificateItem>
                    <CertificateItem>
                        <ItemLine>
                            <KeyWordText>const</KeyWordText>
                            <span>certificateDate = &#123;</span>
                        </ItemLine>
                        <CertificateDateSpace>
                            <ItemLine>
                                <ObjectKeyText>"정보처리기사"</ObjectKeyText>
                                <span>:</span>
                                <StringText>"2020/12/31"</StringText>
                                <span>,</span>
                            </ItemLine>
                            <ItemLine>
                                <ObjectKeyText>"GTQ_그래픽기술자격_1급"</ObjectKeyText>
                                <span>:</span>
                                <StringText>"2019/03/15"</StringText>
                                <span>,</span>
                            </ItemLine>
                            <ItemLine>
                                <ObjectKeyText>"MOS_PowerPoint"</ObjectKeyText>
                                <span>:</span>
                                <StringText>"2019/12/06"</StringText>
                                <span>,</span>
                            </ItemLine>
                            <ItemLine>
                                <ObjectKeyText>"ICDL_Start_Certificate"</ObjectKeyText>
                                <span>:</span>
                                <StringText>"2020/08/28"</StringText>
                                <span>,</span>
                            </ItemLine>
                            <ItemLine>
                                <ObjectKeyText>"컴퓨터활용능력1급"</ObjectKeyText>
                                <span>:</span>
                                <StringText>"2021/02/05"</StringText>
                                <span>,</span>
                            </ItemLine>
                            <ItemLine>
                                <ObjectKeyText>"전산회계1급"</ObjectKeyText>
                                <span>:</span>
                                <StringText>"2021/04/27"</StringText>
                                <span>,</span>
                            </ItemLine>
                            <ItemLine>
                                <ObjectKeyText>"전산세무2급"</ObjectKeyText>
                                <span>:</span>
                                <StringText>"2021/06/24"</StringText>
                                <span>,</span>
                            </ItemLine>
                            <ItemLine>
                                <ObjectKeyText>"FAT_회계정보처리1급"</ObjectKeyText>
                                <span>:</span>
                                <StringText>"2021/06/29"</StringText>
                                <span>,</span>
                            </ItemLine>
                        </CertificateDateSpace>
                        <ItemLine>
                            <span>&#125;;</span>
                        </ItemLine>
                    </CertificateItem>
                </CertificateContainer>
                <CertificateContainer>
                    <CertificateItem>
                        <h2>💡 ICDL_Start_Certificate</h2>
                        <DescriptionSpace>
                            <span>Word Processing(워드프로세싱)</span>
                            <span>Spreadsheets(스프레드시트)</span>
                            <span>Presentation(프레젠테이션)</span>
                            <span>Web Browsing and Communication(ONLINE ESSENTIALS)</span>
                        </DescriptionSpace>
                    </CertificateItem>
                </CertificateContainer>
            </CertificateWrapper>
            <ScrollPaddingContainer ref={awardsRef}></ScrollPaddingContainer>
            <PageHeader icon="🏆" title="Awards" />
            <AwardsContainer>
                <img src={award1Image} alt="award1" />
                <img src={award2Image} alt="award2" />
            </AwardsContainer>
        </Wrapper>
    );
}

export default Info;
