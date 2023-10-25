import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import PageHeader from "../components/PageHeader";
import todoTemplateImage from "../assets/images/todo_template.jpg";
import todoLogo from "../assets/images/todo_logo.png";
import koPlaceTemplateImage from "../assets/images/ko_place_template.jpg";
import koPlaceLogo from "../assets/images/ko_place_logo.png";

const Wrapper = styled.div<{ $isFullWidth: boolean }>`
    width: ${(props) => (props.$isFullWidth ? 100 : 50)}%;
`;

const ProjectTitle = styled.div`
    padding-top: 50px;
    > span {
        font-weight: 600;
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

const ProjectContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

const ProjectItem = styled.div`
    display: grid;
    grid-template-rows: 2fr 1fr;
    width: 400px;
    height: 350px;
    border-radius: 5px;
    background-color: white;
    box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px;
    cursor: pointer;
    &:hover {
        background-color: rgba(15, 15, 15, 0.02);
        transition: background-color 0.2s ease-out;
    }
`;

const TemplateImage = styled.img`
    width: 100%;
    height: 226px;
    border-bottom: 1px solid rgba(15, 15, 15, 0.1);
    object-fit: cover;
`;

const TemplateTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    padding: 5px;
    > span {
        font-size: 13px;
    }
`;

const TemplateTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 3px;
    > span {
        font-size: 14px;
        font-weight: 600;
    }
`;

const TemplateSkills = styled.div`
    display: flex;
    gap: 5px;
    > div {
        display: inline-flex;
        gap: 2px;
        padding: 2px 3px;
        border-radius: 3px;
        > span {
            font-size: 12px;
            font-weight: 600;
        }
    }
`;

const HTMLIcon = styled.div`
    background-color: #e34f26;
    > span {
        color: white;
    }
`;
const CSSIcon = styled.div`
    background-color: #1572b6;
    > span {
        color: white;
    }
`;
const JSIcon = styled.div`
    background-color: #f7df1e;
    > span {
        color: black;
    }
`;
const ReactIcon = styled.div`
    background-color: #61dafb;
    > span {
        color: black;
    }
`;
const TypeScriptIcon = styled.div`
    background-color: #3178c6;
    > span {
        color: white;
    }
`;
const RecoilIcon = styled.div`
    background-color: #3578e5;
    > span {
        color: white;
    }
`;
const StyledComponentsIcon = styled.div`
    background-color: #db7093;
    > span {
        color: white;
    }
`;
const DartIcon = styled.div`
    background-color: #0175c2;
    > span {
        color: white;
    }
`;
const FlutterIcon = styled.div`
    background-color: #02569b;
    > span {
        color: white;
    }
`;
const FirebaseIcon = styled.div`
    background-color: #ffca28;
    > span {
        color: black;
    }
`;
const AndroidIcon = styled.div`
    background-color: #3ddc84;
    > span {
        color: white;
    }
`;

const TemplateTag = styled.span`
    align-self: flex-start;
    padding: 2px 3px;
    border-radius: 3px;
    background-color: rgba(15, 15, 15, 0.1);
`;

interface IProjectProp {
    isFullWidth: boolean;
}

function Project() {
    const { isFullWidth } = useOutletContext<IProjectProp>();

    return (
        <Wrapper $isFullWidth={isFullWidth}>
            <PageHeader icon="🖼️" title="Project" />
            <ProjectTitle>
                <span>🐰 2023</span>
                <SubDivider>
                    <DarkDivider />
                </SubDivider>
            </ProjectTitle>
            <ProjectContainer>
                <ProjectItem>
                    <TemplateImage src={todoTemplateImage} alt="todo template" />
                    <TemplateTextContainer>
                        <TemplateTitle>
                            <img src={todoLogo} alt="todo logo" width={22} />
                            <span>To Do List</span>
                        </TemplateTitle>
                        <TemplateSkills>
                            <HTMLIcon>
                                <svg
                                    role="img"
                                    width="13"
                                    height="13"
                                    viewBox="0 0 24 24"
                                    fill="white"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>HTML5</title>
                                    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
                                </svg>
                                <span>HTML5</span>
                            </HTMLIcon>
                            <CSSIcon>
                                <svg
                                    role="img"
                                    width="13"
                                    height="13"
                                    viewBox="0 0 24 24"
                                    fill="white"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>CSS3</title>
                                    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
                                </svg>
                                <span>CSS3</span>
                            </CSSIcon>
                            <JSIcon>
                                <svg
                                    role="img"
                                    width="13"
                                    height="13"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>JavaScript</title>
                                    <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
                                </svg>
                                <span>JavaScript</span>
                            </JSIcon>
                            <span>/</span>
                        </TemplateSkills>
                        <TemplateSkills>
                            <ReactIcon>
                                <svg
                                    role="img"
                                    width="13"
                                    height="13"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>React</title>
                                    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
                                </svg>
                                <span>React</span>
                            </ReactIcon>
                            <TypeScriptIcon>
                                <svg
                                    role="img"
                                    width="13"
                                    height="13"
                                    viewBox="0 0 24 24"
                                    fill="white"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>TypeScript</title>
                                    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
                                </svg>
                                <span>TypeScript</span>
                            </TypeScriptIcon>
                            <RecoilIcon>
                                <svg
                                    role="img"
                                    width="13"
                                    height="13"
                                    viewBox="0 0 24 24"
                                    fill="white"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>Recoil</title>
                                    <path d="M17.09 8.862a3.017 3.018 0 00-2.615-2.43l-.245-.03a1.662 1.662 0 01-1.453-1.645v-.856a2.028 2.028 0 10-1.602-.02v.874a3.263 3.264 0 002.855 3.236l.245.032c.764.096 1.144.66 1.246 1.155.1.495-.03 1.163-.698 1.55a2.569 2.569 0 01-1.055.337l-3.68.346a4.212 4.212 0 00-1.71.546 3.02 3.02 0 00-1.468 3.257 3.017 3.018 0 002.615 2.43l.245.032a1.662 1.662 0 011.453 1.644v.777a2.03 2.03 0 101.602.016v-.793a3.263 3.264 0 00-2.856-3.236l-.244-.032c-.764-.096-1.145-.66-1.246-1.155-.1-.495.03-1.163.697-1.55a2.569 2.569 0 011.057-.337l3.68-.345a4.212 4.212 0 001.71-.546 3.023 3.024 0 001.467-3.258zm-2.653 4.708a5.71 5.71 0 01-.436.06l-1.543.147 1.93 2.119a3.47 3.47 0 01.906 2.34H16.9a5.07 5.07 0 00-1.325-3.42zm-5.003-3.11a4.65 4.65 0 01.546-.08l1.427-.136L9.469 8.12a3.47 3.47 0 01-.905-2.34H6.963c0 1.267.47 2.483 1.324 3.42z" />
                                </svg>
                                <span>Recoil</span>
                            </RecoilIcon>
                            <StyledComponentsIcon>
                                <svg
                                    role="img"
                                    width="13"
                                    height="13"
                                    viewBox="0 0 24 24"
                                    fill="white"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>styled-components</title>
                                    <path d="M16.214 6.762l-.075.391c-.116.741-.074.953.244 1.228l.307.254-.318 1.418c-.19.846-.423 1.555-.571 1.788-.127.201-.275.497-.307.656-.053.19-.233.381-.508.55-.243.138-.72.508-1.058.805-.27.243-.456.392-.557.456l-.33.261c-.106.17-.166.307-.189.411-.023.107-.01.178.024.23.033.05.09.085.168.107a.954.954 0 00.282.023 3 3 0 00.632-.112c.07-.019.125-.037.173-.053.074-.091.245-.263.548-.562.804-.793 1.111-1.227.794-1.11-.117.042-.064-.064.137-.276.424-.413.667-1.037 1.175-2.994.402-1.545.402-1.567.698-1.567.139 0 .532.024.532.024V6.762h-.902zm3.839 3.165c-.064 0-.17.096-.233.202-.116.19.021.306 1.767 1.396 1.037.657 1.873 1.217 1.852 1.26-.021.031-.868.582-1.883 1.217-1.842 1.142-1.852 1.153-1.683 1.386.212.275 0 .37 2.391-1.122L24 13.155v-.836l-1.937-1.196c-1.047-.656-1.957-1.185-2.01-1.196zm-16.085.117c-.053 0-.963.54-2.01 1.185L0 12.425v.836l1.947 1.217c1.08.666 1.99 1.217 2.032 1.217.042 0 .127-.096.212-.212.127-.201.02-.286-1.768-1.418C.72 12.996.54 12.848.71 12.732c.106-.074.91-.572 1.778-1.111 1.979-1.217 1.873-1.133 1.714-1.387-.063-.105-.17-.2-.233-.19zm8.684.023c-.292-.002-.92.443-2.8 1.978-.081.193-.088.326-.051.412.024.059.068.1.129.13.06.03.138.048.224.055.171.015.373-.012.536-.044l.11-.025a.386.386 0 01.144-.118c.116-.064.603-.508 1.09-.984.857-.868 1.058-1.26.709-1.387a.24.24 0 00-.09-.017zm2.196.603c-.257.007-.72.305-1.513.938-.398.323-.65.497-.785.533l-.524.414c-.197.36-.226.583-.174.706a.25.25 0 00.138.134.644.644 0 00.24.045 2.18 2.18 0 00.58-.085 3.466 3.466 0 00.291-.092l.029-.012.053-.028c.1-.129.33-.372.618-.652.91-.878 1.375-1.502 1.28-1.735-.043-.113-.117-.17-.233-.166zm-2.424 1.08c-.074.008-.24.136-.539.398-.432.382-.903.602-1.066.504a3.97 3.97 0 01-.114.024c-.166.033-.373.06-.558.045a.708.708 0 01-.252-.063.337.337 0 01-.168-.17c-.037-.09-.037-.202.005-.345l-.65.534-1.471 1.217V15.867l4.82-3.797a.41.41 0 01.016-.123c.037-.134.035-.202-.023-.196zm2.074.639c-.073 0-.195.103-.39.31-.265.283-.682.557-.903.613l-.034.018a2.191 2.191 0 01-.11.042c-.06.02-.138.044-.228.068-.18.049-.404.094-.604.089a.732.732 0 01-.275-.054.344.344 0 01-.184-.18c-.058-.139-.035-.334.092-.611L7.61 16.033v1.205h1.868l3.962-3.112c.103-.114.258-.27.467-.465.56-.519.687-.698.687-.963 0-.206-.023-.31-.096-.31zm.943 1.95l-.339.338c-.19.18-.529.402-.761.497l-.046.02-.003.005-.01.01c-.009.007-.013.008-.02.011a3.432 3.432 0 01-.282.093 3.058 3.058 0 01-.65.115 1.035 1.035 0 01-.31-.027.364.364 0 01-.218-.144c-.048-.074-.062-.173-.035-.295a1.11 1.11 0 01.095-.25l-3.197 2.526h4.252l.508-.582c.698-.814 1.016-1.396 1.016-1.894z" />
                                </svg>
                                <span>Styled Components</span>
                            </StyledComponentsIcon>
                        </TemplateSkills>
                        <span>2023년 8월 18일 → 2023년 8월 29일</span>
                        <TemplateTag>개인프로젝트</TemplateTag>
                    </TemplateTextContainer>
                </ProjectItem>
                <ProjectItem>
                    <TemplateImage src={koPlaceTemplateImage} alt="ko place template" />
                    <TemplateTextContainer>
                        <TemplateTitle>
                            <img src={koPlaceLogo} alt="ko place logo" width={22} />
                            <span>가볼 만한 곳=ko</span>
                        </TemplateTitle>
                        <TemplateSkills>
                            <DartIcon>
                                <svg
                                    role="img"
                                    width="13"
                                    height="13"
                                    viewBox="0 0 24 24"
                                    fill="white"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>Dart</title>
                                    <path d="M4.105 4.105S9.158 1.58 11.684.316a3.079 3.079 0 0 1 1.481-.315c.766.047 1.677.788 1.677.788L24 9.948v9.789h-4.263V24H9.789l-9-9C.303 14.5 0 13.795 0 13.105c0-.319.18-.818.316-1.105l3.789-7.895zm.679.679v11.787c.002.543.021 1.024.498 1.508L10.204 23h8.533v-4.263L4.784 4.784zm12.055-.678c-.899-.896-1.809-1.78-2.74-2.643-.302-.267-.567-.468-1.07-.462-.37.014-.87.195-.87.195L6.341 4.105l10.498.001z" />
                                </svg>
                                <span>Dart</span>
                            </DartIcon>
                            <FlutterIcon>
                                <svg
                                    role="img"
                                    width="13"
                                    height="13"
                                    viewBox="0 0 24 24"
                                    fill="white"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>Flutter</title>
                                    <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z" />
                                </svg>
                                <span>Flutter</span>
                            </FlutterIcon>
                            <FirebaseIcon>
                                <svg
                                    role="img"
                                    width="13"
                                    height="13"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>Firebase</title>
                                    <path d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z" />
                                </svg>
                                <span>Firebase</span>
                            </FirebaseIcon>
                            <AndroidIcon>
                                <svg
                                    role="img"
                                    width="13"
                                    height="13"
                                    viewBox="0 0 24 24"
                                    fill="white"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>Android</title>
                                    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396" />
                                </svg>
                                <span>Android</span>
                            </AndroidIcon>
                        </TemplateSkills>
                        <span>2023년 8월 18일 → 2023년 8월 29일</span>
                        <TemplateTag>개인프로젝트</TemplateTag>
                    </TemplateTextContainer>
                </ProjectItem>
            </ProjectContainer>
        </Wrapper>
    );
}

export default Project;
