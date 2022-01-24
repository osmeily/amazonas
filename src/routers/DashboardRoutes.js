import { Routes, Route, Navigate } from "react-router-dom";
import AddProduct from "../components/addProduct/AddProduct";
import Cart from "../components/cart/Cart";
import PaymentPage from "../components/cart/PaymentPage";

export const DashboardRoutes = ({products}) => {
    return (
        <>
            <Routes>
                <Route path="/cart" element={<Cart products={products}/>}/>
                <Route path="/pago" element={<PaymentPage/>}/>
                <Route path="/addProduct" element={<AddProduct/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </>
    )
}