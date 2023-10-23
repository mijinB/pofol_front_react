import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import myImage from "../assets/images/me.jpeg";
import githubImage from "../assets/images/github.png";
import naverBlogImage from "../assets/images/naverblog.png";
import gmailImage from "../assets/images/gmail.png";

const Wrapper = styled.div<{ $isFullWidth: boolean }>`
    width: ${(props) => (props.$isFullWidth ? 100 : 50)}%;
`;

const InfoHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    > span {
        &:nth-of-type(1) {
            font-size: 60px;
        }
        &:nth-of-type(2) {
            font-size: 30px;
            font-weight: 600;
        }
    }
`;

const Divider = styled.div`
    width: 100%;
    height: 1px;
    margin: 30px 0;
    background-color: #37352f;
`;

const TwoColumns = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
`;

const MyImage = styled.img`
    width: 100%;
`;

const GreetingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
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
        background-color: rgba(246, 229, 141, 0.6);
        > p {
            font-size: 16px;
            line-height: 1.5;
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
        &:hover {
            color: #f8c75d;
        }
    }
`;

interface IInfoProps {
    isFullWidth: boolean;
}

function Info() {
    const { isFullWidth } = useOutletContext<IInfoProps>();

    return (
        <Wrapper $isFullWidth={isFullWidth}>
            <InfoHeader>
                <span>🐯</span>
                <span>백미진</span>
            </InfoHeader>
            <Divider />
            <TwoColumns>
                <MyImage src={myImage} alt="me" />
                <GreetingWrapper>
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
                        <a href="https://github.com/mijinB">
                            <img src={githubImage} alt="github" width={25} />
                            GitHub
                        </a>
                        <a href="https://blog.naver.com/bkmij">
                            <img src={naverBlogImage} alt="naver blog" width={25} />
                            Naver Blog
                        </a>
                        <span>
                            <img src={gmailImage} alt="gmail" width={25} />
                            bmj13465@gmail.com
                        </span>
                    </LinkButton>
                </GreetingWrapper>
            </TwoColumns>
        </Wrapper>
    );
}

export default Info;
