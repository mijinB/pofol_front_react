import styled from "styled-components";

const ProjectTitle = styled.div`
    padding-top: 50px;
    > span {
        font-weight: 700;
    }
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

const DarkDivider = styled.div`
    width: 77px;
`;

interface IYearTitleProps {
    icon: string;
    title: string;
}

function YearTitle({ icon, title }: IYearTitleProps) {
    return (
        <ProjectTitle>
            <span>
                {icon} {title}
            </span>
            <SubDivider>
                <DarkDivider />
            </SubDivider>
        </ProjectTitle>
    );
}

export default YearTitle;
