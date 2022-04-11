import Home from "./page/index.tsx";
import CSSBox from "./demo/css-box/index";
// import CSSSelector from "./demo/css-selector/index";
import Demo2 from "./demo/demo2";
import Demo3 from "./demo/demo3";
import Demo4 from "./demo/demo4";
import Demo5 from "./demo/demo5";
import Demo6 from "./demo/demo6";
import { Route, Navigate, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/css-box' element={<CSSBox />} />
        <Route path='/demo2' element={<Demo2 />} />
        <Route path='/demo3' element={<Demo3 />} />
        <Route path='/demo4' element={<Demo4 />} />
        <Route path='/demo5' element={<Demo5 />} />
        <Route path='/demo6' element={<Demo6 />} />
        <Route path='*' element={<Navigate to='/home' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
