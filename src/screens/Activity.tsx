import { useOutletContext } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import styled from "styled-components";
import YearTitle from "../components/YearTitle";

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
    grid-template-rows: 30px repeat(6, 1fr);
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
    background-color: white;
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
    font-size: 14px;
    font-weight: 600;
`;

const TagContainer = styled.div`
    display: flex;
    gap: 7px;
`;

const ColorTag = styled.span<{ $tagColor: string }>`
    padding: 2px 3px;
    border-radius: 3px;
    background-color: ${(props) => props.$tagColor};
    font-size: 14px;
`;

interface IActivityProp {
    isFullWidth: boolean;
}

function Activity() {
    const { isFullWidth } = useOutletContext<IActivityProp>();

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
                    <ActivityItem>
                        <ItemTitle>📚 IT 5분 잡학사전</ItemTitle>
                        <TagContainer>
                            <ColorTag $tagColor="#fdecc8">계획</ColorTag>
                            <ColorTag $tagColor="#dbeddb">성실</ColorTag>
                            <ColorTag $tagColor="#ffe2dd">기록</ColorTag>
                            <ColorTag $tagColor="#e8deee">끈기</ColorTag>
                        </TagContainer>
                        <span>2023년 10월 6일 → 10월 20일</span>
                    </ActivityItem>
                </ActivityItemList>
                <ActivityItemInfo>Test Text</ActivityItemInfo>
            </ActivityContainer>
        </Wrapper>
    );
}

export default Activity;
