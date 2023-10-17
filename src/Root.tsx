import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 7fr;
    grid-template-rows: 1fr 18fr;
    min-height: 100vh;
    background-color: red;
`;

const Aside = styled.div`
    grid-row: span 2;
    background-color: blue;
`;

function Root() {
    return (
        <Wrapper>
            <Aside></Aside>
            <h1>root</h1>
            <Outlet />
        </Wrapper>
    );
}

export default Root;
