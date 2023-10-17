import styled from "styled-components";

const Wrapper = styled.div`
    height: 100%;
    background-color: yellow;
`;

const TestH1 = styled.h1`
    font-size: 25px;
    font-weight: 600;
`;

function About() {
    return (
        <Wrapper>
            <TestH1>about</TestH1>
        </Wrapper>
    );
}

export default About;
