import "./Styles/App.css";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Detail from "./Pages/Detail";
import ReducerCount from "./Components/ReducerCount";

function App() {
  return (
    <>
      {/* <ReducerCount /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<h1>Error 404 - Page not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
