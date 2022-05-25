import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./containers/HomePage/HomePage";
import CreateCartoons from "./containers/CreateCartoons/CreateCartoons";
import Cartoons from "./containers/Cartoons/Cartoons";
function App() {
  return (
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/cartoons" element={<Cartoons/>} />
      <Route path="/create-cartoon" element={<CreateCartoons/>} />
    </Routes>
  </BrowserRouter>);
}
export default App;
