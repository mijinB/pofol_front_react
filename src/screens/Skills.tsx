import { useOutletContext } from "react-router-dom";

interface ISkillsProp {
    isFullWidth: boolean;
}

function Skills() {
    const { isFullWidth } = useOutletContext<ISkillsProp>();

    return <h1>skills</h1>;
}

export default Skills;
