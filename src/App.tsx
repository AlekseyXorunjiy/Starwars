import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import HumanPage from "./pages/HumanPage/HumanPage";
import style from "./AppStyles.module.scss";

const App = () => {
  return (
    <div className={style.app}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/human" element={<HumanPage />} />
      </Routes>
    </div>
  );
};

export default App;
