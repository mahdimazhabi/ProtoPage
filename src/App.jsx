import { useRoutes } from "react-router-dom";
import AllRouters from "./routers/routers";

const App = () => {
  const Routers = useRoutes(AllRouters);
  return <>{Routers}</>;
};

export default App;
