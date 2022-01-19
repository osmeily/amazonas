import { Routes, Route, Navigate } from "react-router-dom";
import AddProduct from "../components/addProduct/AddProduct";
import Cart from "../components/cart/Cart";
import PaymentPage from "../components/cart/PaymentPage";

export const DashboardRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/pago" element={<PaymentPage/>}/>
                <Route path="/addProduct" element={<AddProduct/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </>
    )
}