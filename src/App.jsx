import { Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Layout from "./pages/layout/Layout";
import Program from "./pages/program/Program";

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/program" element={<Program />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default App;
