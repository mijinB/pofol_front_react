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

const ActivityItem = styled.div<{ $itemSelect?: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    padding: 15px 10px;
    border-radius: 4px;
    background-color: ${(props) => (props.$itemSelect ? "rgba(91, 151, 189, 0.08)" : "white")};
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
    > img {
        border-radius: 2px;
    }
    > span {
        font-size: 14px;
        font-weight: 600;
    }
`;

const EmText = styled.div`
    font-size: 13px;
    font-weight: 600;
`;

interface IActivityProp {
    isFullWidth: boolean;
}

function Activity() {
    const { isFullWidth } = useOutletContext<IActivityProp>();
    const [itemSelect, setItemSelect] = useState<boolean>(true);

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
                    <ActivityItem $itemSelect={itemSelect}>
                        <ItemTitle>
                            <span>📚 IT 5분 잡학사전</span>
                        </ItemTitle>
                        <ActivitySkills isITBook={true} />
                        <span>2023년 10월 6일 → 10월 20일</span>
                    </ActivityItem>
                    <ActivityItem>
                        <ItemTitle>
                            <img src={typescriptImage} alt="type script logo" width={16} />
                            <span>TypeScript Challenge 17기</span>
                        </ItemTitle>
                        <ActivitySkills isTypeScript={true} />
                        <span>2023년 9월 25일 → 10월 9일</span>
                    </ActivityItem>
                    <ActivityItem>
                        <ItemTitle>
                            <img src={cssImage} alt="css logo" width={20} />
                            <span>CSS Layout Challenge 37기</span>
                        </ItemTitle>
                        <ActivitySkills isCSS={true} />
                        <span>2023년 9월 18일 → 10월 2일</span>
                    </ActivityItem>
                    <ActivityItem>
                        <ItemTitle>
                            <img src={reactImage} alt="react logo" width={16} />
                            <span>ReactJS Challenge 35기</span>
                        </ItemTitle>
                        <ActivitySkills isReact={true} />
                        <span>2023년 8월 28일 → 9월 12일</span>
                        <EmText>우수 졸업생 선정 🏅</EmText>
                    </ActivityItem>
                    <ActivityItem>
                        <ItemTitle>
                            <img src={javascriptImage} alt="java script logo" width={16} />
                            <span>VanillaJS Challenge 40기</span>
                        </ItemTitle>
                        <ActivitySkills isJavaScript={true} />
                        <span>2023년 8월 7일 → 8월 21일</span>
                        <EmText>우수 졸업생 선정 🏅</EmText>
                    </ActivityItem>
                    <ActivityItem>
                        <ItemTitle>
                            <img src={flutterImage} alt="flutter logo" width={19} />
                            <span>Dart/Flutter Challenge 1기</span>
                        </ItemTitle>
                        <ActivitySkills isFlutter={true} />
                        <span>2023년 4월 3일 → 4월 17일</span>
                        <EmText>(졸업생: 147명 / 신청자: 1,100여명)</EmText>
                    </ActivityItem>
                </ActivityItemList>
                <ActivityItemInfo>
                    {itemSelect && (
                        <ActivityInfo
                            addLink={true}
                            period="2023년 10월 6일 → 10월 20일"
                            learnedContent="⪧ 개발자에게 필요한 기본 지식을 배우며 기록하고 사람들과 공유하며 즐겁게 독서했어요."
                        />
                    )}
                </ActivityItemInfo>
            </ActivityContainer>
        </Wrapper>
    );
}

export default Activity;
