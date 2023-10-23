import { useOutletContext } from "react-router-dom";

interface IProjectProp {
    isFullWidth: boolean;
}

function Project() {
    const { isFullWidth } = useOutletContext<IProjectProp>();

    return <h1>project</h1>;
}

export default Project;
