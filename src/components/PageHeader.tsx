import styled from "styled-components";

const HeaderTitle = styled.h2`
    display: flex;
    flex-direction: column;
    gap: 20px;
    > span {
        &:nth-of-type(1) {
            font-size: 60px;
        }
        &:nth-of-type(2) {
            font-size: 30px;
            font-weight: 800;
        }
    }

    @media (max-width: 1024px) {
        gap: 10px;
        > span {
        &:nth-of-type(1) {
            font-size: 40px;
        }
        &:nth-of-type(2) {
            font-size: 22px;
            font-weight: 600;
        }
    }
    }
`;

const Divider = styled.div`
    width: 100%;
    height: 1px;
    margin: 30px 0;
    background-color: #37352f;

    @media (max-width: 1024px) {
        margin: 15px 0;
    }
`;

interface IPageHeaderProps {
  icon: string;
  title: string;
}

function PageHeader({icon, title}: IPageHeaderProps) {
    return (
        <>
            <HeaderTitle>
                <span>{icon}</span>
                <span>{title}</span>
            </HeaderTitle>
            <Divider />
        </>
    );
}

export default PageHeader;
