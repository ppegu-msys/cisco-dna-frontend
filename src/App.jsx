import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexView from "./views";
import ConfigureOnprem from "./views/configuration/ConfigureOnprem";
import NetwrokConnectivityCheck from "./views/connectivity/Check";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexView />} />
        <Route path="/configure-on-prem" element={<ConfigureOnprem />} />
        <Route
          path="/network-connectivity-check"
          element={<NetwrokConnectivityCheck success={true} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
