import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Productlist from './pages/product-list'
import ProductDetail from './pages/productDetail'
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/products" element={<Productlist/>}></Route>
        <Route path="/product/:id" element={<ProductDetail/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
