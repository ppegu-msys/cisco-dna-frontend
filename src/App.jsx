import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "./redux/store";
import IndexView from "./views";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<IndexView />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
