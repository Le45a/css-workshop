import Home from "./page/index.tsx";
import CSSBox from "./demo/css-box/index";
import CSSSelector from "./demo/css-selector/index";
import CSSWeight from "./demo/css-selector/CSSWeight.tsx";
import Demo4 from "./demo/css-layout";
import Position from "./demo/css-layout/position";
import Demo6 from "./demo/demo6";
import { Route, Navigate, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/css-box' element={<CSSBox />} />
        <Route path='/css-selector' element={<CSSSelector />} />
        <Route path='/css-weight' element={<CSSWeight />} />
        <Route path='/css-layout' element={<Demo4 />} />
        <Route path='/position' element={<Position />} />
        <Route path='/demo6' element={<Demo6 />} />
        <Route path='*' element={<Navigate to='/home' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
