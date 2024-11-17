import "./App.css";
import Menu from "./Component/Menu";
import Footer from "./Component/Footer";
import Services from "./Component/Services";
import Products from "./Component/Products";
import Home from "./Component/Home";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./Component/LoginForm";
import RegisterForm from "./Component/RegisterForm";
function App() {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
