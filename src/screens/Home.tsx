import styled from "styled-components";

const Wrapper = styled.div`
    height: 100%;
`;

const TestH1 = styled.h1`
    font-size: 25px;
    font-weight: 600;
`;

function Home() {
    return (
        <Wrapper>
            <TestH1>home</TestH1>
        </Wrapper>
    );
}

export default Home;
