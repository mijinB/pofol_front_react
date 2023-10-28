import { useOutletContext } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import styled from "styled-components";
import YearTitle from "../components/YearTitle";

import typescriptImage from "../assets/images/typescript.png";
import cssImage from "../assets/images/css3.png";
import reactImage from "../assets/images/react.png";
import javascriptImage from "../assets/images/js.png";
import flutterImage from "../assets/images/flutter.png";
import { useState } from "react";
import ActivityInfo from "../components/ActivityInfo";
import ActivitySkills from "../components/ActivitySkills";

const Wrapper = styled.div<{ $isFullWidth: boolean }>`
    width: ${(props) => (props.$isFullWidth ? 100 : 50)}%;
`;

const ActivityContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 20px;
`;

const ActivityItemList = styled.div`
    display: grid;
    grid-template-rows: 30px repeat(3, 1fr) 1.6fr repeat(2, 1.2fr);
    gap: 5px;
    width: 100%;
    height: 100%;
    padding: 5px;
    border-radius: 4px;
    background-color: #f1f8fb;
`;

const ActivityItemInfo = styled.div``;

const ListTitle = styled.span`
    display: flex;
    align-items: center;
    gap: 3px;
    color: #5b97bd;
    font-size: 14px;
    font-weight: 600;
`;

const ActivityItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    padding: 15px 10px;
    border-radius: 4px;
    box-shadow: rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.05) 0px 2px 4px;
    cursor: pointer;
    &:hover {
        background-color: rgba(15, 15, 15, 0.02);
        transition: background-color 0.2s ease-out;
    }
    > span {
        font-size: 13px;
    }
`;

const ItemTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 14px;
    font-weight: 600;
    > img {
        border-radius: 2px;
    }
`;

const EmText = styled.div`
    font-size: 13px;
    font-weight: 600;
`;

interface IActivityProp {
    isFullWidth: boolean;
}

interface IItemSelect {
    id: number;
    title: string | React.ReactElement;
    tag: React.ReactElement;
    period: string;
    content: string | React.ReactElement;
    addLink: boolean;
}

function Activity() {
    const { isFullWidth } = useOutletContext<IActivityProp>();

    const [itemSelect, setItemSelect] = useState<IItemSelect>({
        id: 1,
        title: "📚 IT 5분 잡학 사전",
        tag: <ActivitySkills isITBook={true} />,
        period: "2023년 10월 6일 → 10월 20일",
        content: "⪧ 개발자에게 필요한 기본 지식을 배우며 기록하고 사람들과 공유하며 즐겁게 독서했어요.",
        addLink: true,
    });

    const activeList = [
        {
            id: 1,
            title: "📚 IT 5분 잡학 사전",
            tag: <ActivitySkills isITBook={true} />,
            period: "2023년 10월 6일 → 10월 20일",
            content: "⪧ 개발자에게 필요한 기본 지식을 배우며 기록하고 사람들과 공유하며 즐겁게 독서했어요.",
            addLink: true,
        },
        {
            id: 2,
            title: (
                <>
                    <img src={typescriptImage} alt="type script logo" width={16} />
                    TypeScript Challenge 17기
                </>
            ),
            period: "2023년 9월 25일 → 10월 9일",
            tag: <ActivitySkills isTypeScript={true} />,
            content: (
                <>
                    <p>⪧ call signatures와 generic의 개념을 습득했어요.</p>
                    <p>⪧ Type과 Interface의 차이점을 배웠어요.</p>
                    <p>⪧ 정의 파일(d.ts)의 개념을 배웠어요.</p>
                    <p>⪧ JSDoc을 사용하여 JavaScript파일도 TypeScript가 보호해줄 수 있게 했어요.</p>
                    <p>⪧ 입력되어 있는 JSDoc을 TypeScript로 변환하는 작업을 했어요.</p>
                </>
            ),
            addLink: false,
        },
        {
            id: 3,
            title: (
                <>
                    <img src={cssImage} alt="css logo" width={20} />
                    CSS Layout Challenge 37기
                </>
            ),
            tag: <ActivitySkills isCSS={true} />,
            period: "2023년 9월 18일 → 10월 2일",
            content: (
                <>
                    <p>⪧ display의 flex와 grid의 사용법을 잘 습득하게 해준 결정적인 활동이에요.</p>
                    <p>⪧ SCSS를 배우고 사용해보며 편리함을 직접 깨달았어요.</p>
                    <p>⪧ 여러 레이아웃 디자인들을 클론 코딩 해보면서 레이아웃 구현 능력이 상승됐어요.</p>
                </>
            ),
            addLink: false,
        },
        {
            id: 4,
            title: (
                <>
                    <img src={reactImage} alt="react logo" width={16} />
                    ReactJS Challenge 35기
                </>
            ),
            tag: <ActivitySkills isReact={true} />,
            period: "2023년 8월 28일 → 9월 12일",
            emText: "우수 졸업생 선정 🏅",
            content: (
                <>
                    <p>⪧ Styled Components를 배우며 유용성을 깨달았어요.</p>
                    <p>⪧ TypeScript를 사용하여 JavaScript의 정적 타입 분석을 적용했어요.</p>
                    <p>⪧ React Router V6에서 달라진 내용을 습득하고 챌린지의 프로젝트에 V6를 사용했어요.</p>
                    <p>⪧ React Query를 사용하여 API data를 가져와 프로젝트를 진행했어요.</p>
                    <p>⪧ Apex Charts를 활용해 아름다운 차트를 만들어보고 커스텀도 했어요.</p>
                    <p>⪧ Recoil의 atoms와 selectors를 사용하여 프로젝트의 상태 관리를 했어요.</p>
                    <p>⪧ Framer Motion을 사용하여 부드럽고 아름다운 애니메이션을 구현했어요.</p>
                </>
            ),
            addLink: false,
        },
        {
            id: 5,
            title: (
                <>
                    <img src={javascriptImage} alt="java script logo" width={16} />
                    VanillaJS Challenge 40기
                </>
            ),
            tag: <ActivitySkills isJavaScript={true} />,
            period: "2023년 8월 7일 → 8월 21일",
            emText: "우수 졸업생 선정 🏅",
            content: (
                <>
                    <p>⪧ JavaScript의 변수와 함수, 데이터 타입에 대해 배웠어요.</p>
                    <p>⪧ LocalStorage에 저장하고(set) 불러오며(get) 데이터를 관리했어요.</p>
                    <p>⪧ DOM의 개념을 배우고 여러 DOM Function을 사용했어요.</p>
                    <p>⪧ Event의 개념과 사용법을 익히고 공식 사이트를 참고하여 사용하는 법을 습득했어요.</p>
                </>
            ),
            addLink: false,
        },
        {
            id: 6,
            title: (
                <>
                    <img src={flutterImage} alt="flutter logo" width={19} />
                    Dart/Flutter Challenge 1기
                </>
            ),
            tag: <ActivitySkills isFlutter={true} />,
            period: "2023년 4월 3일 → 4월 17일",
            emText: "(졸업생: 147명 / 신청자: 1,100여명)",
            content: (
                <>
                    <p>⪧ Flutter 앱을 만들 때 필요한 Dart의 기능, 규칙 및 구문에 대해 배웠어요.</p>
                    <p>⪧ Flutter 프레임워크의 기본기 및 규칙에 대해 배웠어요.</p>
                    <p>⪧ 두 개의 APP을 만들어보면서 State와 상호작용을 배우고 Data Fetching, Navigation을 배웠어요.</p>
                </>
            ),
            addLink: false,
        },
    ];

    return (
        <Wrapper $isFullWidth={isFullWidth}>
            <PageHeader icon="👩‍🎨" title="Activity" />
            <YearTitle icon="🐰" title="2023" />
            <ActivityContainer>
                <ActivityItemList>
                    <ListTitle>
                        <svg width="16px" height="16px" viewBox="0 0 17 17" fill="#5b97bd">
                            <path d="M8.54688 16.5078C13.0156 16.5078 16.6953 12.8281 16.6953 8.35938C16.6953 3.89844 13.0078 0.210938 8.53906 0.210938C4.07812 0.210938 0.398438 3.89844 0.398438 8.35938C0.398438 12.8281 4.07812 16.5078 8.54688 16.5078ZM8.54688 14.7188C5.02344 14.7188 2.19531 11.8828 2.19531 8.35938C2.19531 4.83594 5.01562 2 8.53906 2C12.0703 2 14.8984 4.83594 14.9062 8.35938C14.9141 11.8828 12.0703 14.7188 8.54688 14.7188ZM7.71094 12.0781C8.00781 12.0781 8.27344 11.9219 8.44531 11.6562L11.8828 6.32031C11.9922 6.14844 12.0781 5.95312 12.0781 5.77344C12.0781 5.35156 11.7109 5.07031 11.3125 5.07031C11.0547 5.07031 10.8281 5.21094 10.6562 5.49219L7.6875 10.2578L6.29688 8.51562C6.10938 8.27344 5.91406 8.17969 5.67188 8.17969C5.25781 8.17969 4.92188 8.50781 4.92188 8.92969C4.92188 9.125 5 9.30469 5.14062 9.48438L6.94531 11.6641C7.16406 11.9375 7.40625 12.0781 7.71094 12.0781Z"></path>
                        </svg>
                        완료
                    </ListTitle>
                    {activeList.map((item) => {
                        return (
                            <ActivityItem key={item.id} onClick={() => setItemSelect(item)}>
                                <ItemTitle>{item.title}</ItemTitle>
                                {item.tag}
                                <span>{item.period}</span>
                                {item.emText && <EmText>{item.emText}</EmText>}
                            </ActivityItem>
                        );
                    })}
                </ActivityItemList>
                <ActivityItemInfo>
                    <ActivityInfo
                        addLink={itemSelect.addLink}
                        title={itemSelect.title}
                        skills={itemSelect.tag}
                        period={itemSelect.period}
                        learnedContent={itemSelect.content}
                    />
                </ActivityItemInfo>
            </ActivityContainer>
        </Wrapper>
    );
}

export default Activity;
