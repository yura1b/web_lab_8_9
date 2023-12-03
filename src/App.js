import "./App.css";
import React from "react";
import Header from "./containers/Header/header";
import Navigation from "./containers/Navigation/navigation";
import Footer from "./containers/Footer/Footer";
import Product from "./pages/product"
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import "./fonts.css";
import Shop from "./pages/shop";
import Catalog from "./pages/catalog";

function App() {
  return (
    <div style={{ width: "auto", height: "auto", backgroundColor: "black" }}>
      <BrowserRouter>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/Catalog" element={<Catalog />} />
          <Route path="/product" element={<Product/>}>
            <Route path=":productId" element={<Product/>}/>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
