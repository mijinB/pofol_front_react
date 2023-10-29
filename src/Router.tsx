import { createHashRouter } from "react-router-dom";
import Root from "./Root";
import Info from "./screens/Info";
import Skills from "./screens/Skills";
import Project from "./screens/Project";
import Activity from "./screens/Activity";

const router = createHashRouter(
    [
        {
            path: "/",
            element: <Root />,
            children: [
                {
                    path: "/info",
                    element: <Info />,
                },
                {
                    path: "/skills",
                    element: <Skills />,
                },
                {
                    path: "/project",
                    element: <Project />,
                },
                {
                    path: "/activity",
                    element: <Activity />,
                },
            ],
        },
    ]);

export default router;
