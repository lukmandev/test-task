import loadable from "@loadable/component";
import { Route } from "react-router-dom";
import { HomeRoutesEnum } from "./enum";

const HomePage = loadable(() => import("../pages/home"));

const homeRoutes = [
  <Route key="HomePage" path={HomeRoutesEnum.HOME} element={<HomePage />} />,
];

export default homeRoutes;
