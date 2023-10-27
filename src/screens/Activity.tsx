import { useOutletContext } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import styled from "styled-components";
import YearTitle from "../components/YearTitle";

const Wrapper = styled.div<{ $isFullWidth: boolean }>`
    width: ${(props) => (props.$isFullWidth ? 100 : 50)}%;
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
        </Wrapper>
    );
}

export default Activity;
