import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Home/Header/Header";
import Home from "./components/Home/Home/Home";
import SinglePhoneDetail from "./components/Home/SinglePhoneDetail/SinglePhoneDetail";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/phone/:phoneId" element={<SinglePhoneDetail />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
