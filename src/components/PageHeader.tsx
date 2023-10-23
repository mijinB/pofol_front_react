import styled from "styled-components";

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

interface IPageHeaderProps {
  icon: string;
  title: string;
}

function PageHeader({icon, title}: IPageHeaderProps) {
    return (
        <>
            <InfoHeader>
                <span>{icon}</span>
                <span>{title}</span>
            </InfoHeader>
            <Divider />
        </>
    );
}

export default PageHeader;
