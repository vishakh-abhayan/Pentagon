import Home from "../pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";

function Routess() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="community" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routess;
