import styled from "styled-components";

const SkillsContainer = styled.div`
    display: flex;
    gap: 5px;
    > div {
        display: inline-flex;
        align-items: center;
        gap: 2px;
        padding: 2px 3px;
        border-radius: 3px;
        > span {
            font-size: 12px;
            font-weight: 600;
        }
    }

    @media (max-width: 1024px) {
        > div {
            > svg {
                width: 12px;
            }
            > span {
                font-size: 11px;
            }
        }
    }
    @media (max-width: 400px) {
        > div {
            > svg {
                width: 10px;
            }
            > span {
                font-size: 9px;
            }
        }
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

function KoPlaceSkills() {
    return (
        <SkillsContainer>
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
                <svg role="img" width="13" height="13" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
        </SkillsContainer>
    );
}

export default KoPlaceSkills;
