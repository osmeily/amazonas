import LandingPage from "./components/home/LandingPage";
import "../src/styles/app.css"
import LoginForm from "./components/login/LoginForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterForm from "./components/register/RegisterForm";
import Cart from "./components/cart/Cart";
import PaymentPage from "./components/cart/PaymentPage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/register" element={<RegisterForm/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/pago" element={<PaymentPage/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
