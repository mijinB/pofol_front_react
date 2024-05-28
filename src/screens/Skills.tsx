import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import PageHeader from "../components/PageHeader";
import htmlImage from "../assets/images/html5.png";
import cssImage from "../assets/images/css3.png";
import jsImage from "../assets/images/js.png";
import reactImage from "../assets/images/react.png";
import vueImage from "../assets/images/vue.png";
import typescriptImage from "../assets/images/typescript.png";
import scssImage from "../assets/images/scss.png";
import styledComponentsImage from "../assets/images/styledcomponents.png";
import framerImage from "../assets/images/framer.png";
import vscodeImage from "../assets/images/vscode.png";
import githubImage from "../assets/images/github.png";
import dartImage from "../assets/images/dart.png";
import flutterImage from "../assets/images/flutter.png";

const Wrapper = styled.div<{ $isFullWidth: boolean }>`
    width: ${(props) => (props.$isFullWidth ? "100" : "50")}%;

    @media (max-width: 1024px) {
        width: 100%;
    }
`;

const IntroContainer = styled.div<{ $isFullWidth: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 30px;
    > p {
        font-size: 14px;
        line-height: 1.4;
    }

    @media (max-width: 1024px) {
        gap: 10px;
        margin-bottom: 20px;
        > p {
            font-size: 13px;
            line-height: 1.3;
        }
    }
`;

const SkillIcons = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 50px;
    margin-bottom: 100px;

    @media (max-width: 430px) {
        > img {
            width: 35px;
        }
    }
`;

const SkillContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 80px;
`;

const SkillItem = styled.div`
    width: 90%;
    > p {
        vertical-align: center;
        line-height: 1.5;
    }

    @media (max-width: 1024px) {
        &:last-child {
            margin-bottom: 80px;
        }
        > p {
            font-size: 14px;
        }
    }
`;

const SkillTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    width: 20%;
    padding-left: 5px;
    > span {
        font-weight: 700;
    }
`;

const Image = styled.img`
    border-radius: 10px;
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

const ShortDarkDivider = styled.div`
    width: 90px;
`;
const MediumDarkDivider = styled.div`
    width: 105px;
`;
const LongDarkDivider = styled.div<{ $isFullWidth: boolean }>`
    width: ${(props) => (props.$isFullWidth ? 192 : 145)}px;

    @media (max-width: 1420px) {
        width: 145px;
    }
    @media (max-width: 1024px) {
        width: 145px;
    }
`;
const JSDarkDivider = styled.div`
    width: 125px;
`;
const ReactDarkDivider = styled.div`
    width: 111px;
`;
const TSDarkDivider = styled.div`
    width: 130px;
`;
const FramerDarkDivider = styled.div`
    width: 120px;
`;
const FlutterDarkDivider = styled.div`
    width: 175px;
`;

interface ISkillsProp {
    isFullWidth: boolean;
}

function Skills() {
    const { isFullWidth } = useOutletContext<ISkillsProp>();

    return (
        <Wrapper $isFullWidth={isFullWidth}>
            <PageHeader icon="🎨" title="Skills" />
            <IntroContainer $isFullWidth={isFullWidth}>
                <p>
                    각자 아름다운 색을 가진 물감들은 서로 필요한 곳에서 사용되며 여러 색이 함께 사용되기도 해요. 여러
                    색이 잘 어우러져야 더 아름다운 결과물이 완성되겠죠?
                </p>
                <p>
                    저는 지금까지 습득한, 앞으로 계속 습득하게 될 Skill들을 물감처럼 조화롭게 어우러지게 하여 사용자가
                    원하고 제가 원하는 아름다운 결과물을 만들고 싶습니다.
                </p>
            </IntroContainer>
            <SkillIcons>
                <Image src={htmlImage} alt="html" width={50} />
                <Image src={cssImage} alt="css" width={50} />
                <Image src={jsImage} alt="javascript" width={45} />
                <Image src={reactImage} alt="react" width={47} />
                <Image src={vueImage} alt="vue" width={47} />
                <Image src={typescriptImage} alt="typescript" width={45} />
                <Image src={scssImage} alt="scss" width={45} />
                <Image src={styledComponentsImage} alt="styled components" width={45} />
                <Image src={framerImage} alt="framer" width={60} />
                <Image src={vscodeImage} alt="vscode" width={40} />
                <Image src={githubImage} alt="github" width={45} />
                <Image src={dartImage} alt="dart" width={50} />
                <Image src={flutterImage} alt="flutter" width={50} />
            </SkillIcons>
            <SkillContainer>
                <SkillItem>
                    <SkillTitle>
                        <Image src={htmlImage} alt="html" width={30} />
                        <span>HTML</span>
                    </SkillTitle>
                    <SubDivider>
                        <MediumDarkDivider />
                    </SubDivider>
                    <p>
                        ⪧ Block/Inline Elements 개념을 잘 이해하고 있고 Semantic Elements를 통해 가독성 좋은 코드를
                        작성하기 위해 노력해요.
                    </p>
                </SkillItem>
                <SkillItem>
                    <SkillTitle>
                        <Image src={cssImage} alt="css" width={30} />
                        <span>CSS</span>
                    </SkillTitle>
                    <SubDivider>
                        <ShortDarkDivider />
                    </SubDivider>
                    <p>
                        ⪧ Mozilla에서 제안한 CSS속성 기술 순서에 따라 규칙적으로 작성하고 있어요.
                        <br />
                        ⪧ position과 z-index, 그리고 display(block, inline, flex, grid…) 속성을 사용하여 의도한
                        디자인대로 구현할 수 있어요.
                        <br />
                        ⪧ &lt;img&gt;태그와 background-image 속성을 상황에 맞게 판단하여 사용할 수 있어요.
                        <br />⪧ 다중 선택자를 사용하여 중복 코드를 줄일 수 있고 가상 요소(::before, ::after)를 필요에
                        따라 사용할 수 있어요.
                        <br />⪧ @media를 사용하여 반응형 디자인을 구현할 수 있어요.
                    </p>
                </SkillItem>
                <SkillItem>
                    <SkillTitle>
                        <Image src={jsImage} alt="javascript" width={27} />
                        <span>JavaScript</span>
                    </SkillTitle>
                    <SubDivider>
                        <JSDarkDivider />
                    </SubDivider>
                    <p>
                        ⪧ framework 없이 Vanilla JS의 문서 객체 모델(DOM)을 사용하여 원하는 기능을 동적으로 구현할 수
                        있어요.
                    </p>
                </SkillItem>
                <SkillItem>
                    <SkillTitle>
                        <Image src={reactImage} alt="react" width={28} />
                        <span>React.JS</span>
                    </SkillTitle>
                    <SubDivider>
                        <ReactDarkDivider />
                    </SubDivider>
                    <p>
                        ⪧ SPA(싱글 페이지 에플리케이션)의 개념을 잘 이해하고 있어요.
                        <br />
                        ⪧ React Router Dom v6의 BrowserRouter와 createBrowserRouter를 사용하여 중첩 라우팅을 구현할 수
                        있고 useNavigate, useParams, Outlet(+useOutletContext)을 사용하여 의도하는 기능을 구현할 수
                        있어요.
                        <br />
                        ⪧ React Hook(State, Effect)을 사용하여 상태 관리를 할 수 있어요.
                        <br />⪧ 재사용을 위한 UI Component 구현이 가능해요.
                    </p>
                </SkillItem>
                <SkillItem>
                    <SkillTitle>
                        <Image src={vueImage} alt="vue" width={28} />
                        <span>Vue.JS</span>
                    </SkillTitle>
                    <SubDivider>
                        <MediumDarkDivider />
                    </SubDivider>
                    <p>
                        ⪧ 양방향 데이터 바인딩을 사용하여 데이터의 변화가 자동으로 화면에 반영되도록 데이터와 UI를 동기화할 수 있어요.
                        <br />
                        ⪧ 생명주기 훅을 잘 이해하고 있고 이를 활용하여 생명주기를 고려하여 구현이 가능해요.
                        <br />
                        ⪧ v-if/v-for과 같은 조건부/리스트 렌더링을 활용하여 Vue.JS의 장점을 살려 간단하게 구현할 수 있어요.
                        <br />
                        ⪧ props와 emit을 사용하여 컴포넌트간 데이터 통신과 이벤트 호출을 활용할 수 있어요.
                    </p>
                </SkillItem>
                <SkillItem>
                    <SkillTitle>
                        <Image src={typescriptImage} alt="typescript" width={27} />
                        <span>TypeScript</span>
                    </SkillTitle>
                    <SubDivider>
                        <TSDarkDivider />
                    </SubDivider>
                    <p>⪧ TypeScript를 이용한 JavaScript 정적 타입 분석이 가능해요.</p>
                </SkillItem>
                <SkillItem>
                    <SkillTitle>
                        <Image src={scssImage} alt="scss" width={27} />
                        <span>SCSS</span>
                    </SkillTitle>
                    <SubDivider>
                        <ShortDarkDivider />
                    </SubDivider>
                    <p>⪧ CSS의 전처리기인 SCSS를 사용하여 단순 반복되는 부분을 줄이고 코드를 관리할 수 있어요.</p>
                </SkillItem>
                <SkillItem>
                    <SkillTitle>
                        <Image src={styledComponentsImage} alt="styled components" width={28} />
                        <span>Styled Components</span>
                    </SkillTitle>
                    <SubDivider>
                        <LongDarkDivider $isFullWidth={isFullWidth} />
                    </SubDivider>
                    <p>
                        ⪧ Styled Components를 이용한 커스텀 태그 구현이 가능해요.
                        <br />⪧ props를 사용하여 스타일링 안에 분기를 가지고 스타일을 적용할 수 있어요.
                    </p>
                </SkillItem>
                <SkillItem>
                    <SkillTitle>
                        <Image src={framerImage} alt="framer" width={35} />
                        <span>Framer</span>
                    </SkillTitle>
                    <SubDivider>
                        <FramerDarkDivider />
                    </SubDivider>
                    <p>
                        ⪧ Framer Motion 라이브러리를 사용하여 Animation을 추가해 부드럽고 아름다운 디자인을 구현할 수
                        있어요.
                    </p>
                </SkillItem>
                <SkillItem>
                    <SkillTitle>
                        <Image src={vscodeImage} alt="vscode" width={25} />
                        <span>Visual Studio Code</span>
                    </SkillTitle>
                    <SubDivider>
                        <LongDarkDivider $isFullWidth={isFullWidth} />
                    </SubDivider>
                    <p>
                        ⪧ 코드 편집기로는 VSCode를 사용하고 있어요.
                        <br />⪧ 유용한 Extension로 도움을 받고 있어요.
                    </p>
                </SkillItem>
                <SkillItem>
                    <SkillTitle>
                        <Image src={githubImage} alt="github" width={27} />
                        <span>GitHub</span>
                    </SkillTitle>
                    <SubDivider>
                        <MediumDarkDivider />
                    </SubDivider>
                    <p>
                        ⪧ 형상 관리 툴은 GitHub를 사용하고 있어요.
                        <br />
                        ⪧ Commit 기록을 보고 알아보기 쉽게 Commit 메시지를 신중히 결정해요.
                        <br />
                        ⪧ 민감한 정보(ex.API key)는 .gitignore 파일을 이용해 숨겨요.
                        <br />⪧ github pages 배포 경험이 있어요.
                    </p>
                </SkillItem>
                <SkillItem>
                    <SkillTitle>
                        <Image src={dartImage} alt="dart" width={30} />
                        <span>Dart</span>
                        <Image src={flutterImage} alt="flutter" width={30} />
                        <span>Flutter</span>
                    </SkillTitle>
                    <SubDivider>
                        <FlutterDarkDivider />
                    </SubDivider>
                    <p>
                        ⪧ Dart, Flutter를 이용한 Android App 개발 및 출시 경험이 있어요.
                        <br />
                        ⪧ 매력적인 Widget들을 사용하고 커스텀하여 의도한 디자인대로 구현이 가능해요.
                        <br />
                        ⪧ 학습한 지식을 바탕으로 원하는 기능을 구현할 수 있어요.
                        <br />⪧ 재사용을 위한 UI Widget 구현이 가능해요.
                    </p>
                </SkillItem>
            </SkillContainer>
        </Wrapper>
    );
}

export default Skills;
