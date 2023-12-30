// Components
import { MainBody } from "./MainBody";
import { HomePage } from "./Dashboard";
import { Request } from "./Request";
import { MyMessages } from "./MyMessages";
import { MyProfile } from "./MyProfile";
import { MyTraffics } from "./MyTraffics/Container";
import { WorkReport } from "./WorkReport/Container";
import { MyLeaves } from "./MyLeaves/Container";
import { MyAssignments } from "./MyAssignments/Container";

const routes = {
  path: "/",
  element: <MainBody />,
  parent: "home",
  children: [
    {
      name: "profile",
      path: "/profile",
      element: <MyProfile />,
    },
    {
      name: "messages",
      path: "/messages",
      element: <MyMessages />,
    },
    {
      name: "traffics",
      path: "/",
      element: <MyTraffics />,
    },
    {
      name: "leaves",
      path: "/leaves",
      element: <MyLeaves />,
    },
    {
      name: "assignments",
      path: "/assignments",
      element: <MyAssignments />,
    },
    {
      name: "work_report",
      path: "/work-report",
      element: <WorkReport />,
    },
    {
      name: "list",
      path: "/home",
      element: <HomePage />,
    },
    {
      name: "request",
      path: "/request",
      element: <Request />,
    },
  ],
};

export default routes;
