import Home from "./page/index.jsx";
import Demo1 from "./demo/demo1";
import Demo2 from "./demo/demo2";
import Demo3 from "./demo/demo3";
import Demo4 from "./demo/demo4";
import Demo5 from "./demo/demo5";
import { Route, Navigate, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/demo1' element={<Demo1 />} />
        <Route path='/demo2' element={<Demo2 />} />
        <Route path='/demo3' element={<Demo3 />} />
        <Route path='/demo4' element={<Demo4 />} />
        <Route path='/demo5' element={<Demo5 />} />

        <Route path='*' element={<Navigate to='/home' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
