import { useState } from "react";
// import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App1 from "./components/App1";
import App2 from "./components/App2";
import App3 from "./components/App3";
import App4 from "./components/App4";
import App5 from "./components/App5";
import App6 from "./components/App6";
import App7 from "./components/App7";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="app1">App1</Link>
        <Link to="app2">App2</Link>
        <Link to="app3">App3</Link>
        <Link to="app4">App4</Link>
        <Link to="app5">App5</Link>
        <Link to="app6">App6</Link>
        <Link to="app7">App7</Link>

      </div>
      <hr></hr>
      <div>
        <Routes>
          <Route index element={<App1 />} />
          <Route path="app1" element={<App1 />} />
          <Route path="app2" element={<App2 />} />
          <Route path="app3" element={<App3 />} />
          <Route path="app4" element={<App4 />} />
          <Route path="app5" element={<App5 />} />
          <Route path="app6" element={<App6 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;