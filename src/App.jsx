import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ConfigureElement from "./elements/ConfigureElement";
import IndexView from "./views";
import ConfigureOnprem from "./views/configuration/ConfigureOnprem";
import NetwrokConnectivityCheck from "./views/connectivity/Check";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexView />} />
        <Route path="configure" element={<ConfigureElement />}>
          <Route index element={<Navigate to="on-prem" />} />
          <Route path="on-prem" element={<ConfigureOnprem />} />
          <Route
            path="connectivity-check"
            element={<NetwrokConnectivityCheck />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
