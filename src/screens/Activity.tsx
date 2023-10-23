import { useOutletContext } from "react-router-dom";

interface IActivityProp {
    isFullWidth: boolean;
}

function Activity() {
    const { isFullWidth } = useOutletContext<IActivityProp>();

    return <h1>activity</h1>;
}

export default Activity;
