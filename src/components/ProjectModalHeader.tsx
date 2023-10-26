import styled from "styled-components";

const ModalHeader = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 10px;
    background-color: white;
    > svg {
        cursor: pointer;
        &:hover {
            filter: sepia(100%) saturate(6054%) hue-rotate(358deg) brightness(100%) contrast(100%);
        }
    }
`;

interface IModalHeaderProps {
    clickFunction: () => void;
}

function ProjectModalHeader({ clickFunction }: IModalHeaderProps) {
    return (
        <ModalHeader>
            <svg
                onClick={clickFunction}
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="12" cy="12" r="9" stroke="#37352F" />
                <path d="M9.00009 14.9997L15.0001 8.99966" stroke="#37352F" />
                <path d="M15 15L9 9" stroke="#37352F" />
            </svg>
        </ModalHeader>
    );
}

export default ProjectModalHeader;
