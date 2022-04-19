import { Suspense } from "react";
import { Routes } from "react-router-dom";

import SpinLoader from "./components/SpinLoader";
import homeRoutes from "./modules/home/routes";

const App = () => {
  return (
    <Suspense fallback={<SpinLoader />}>
      <Routes>{homeRoutes}</Routes>
    </Suspense>
  );
};

export default App;
