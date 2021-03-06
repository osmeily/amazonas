import LandingPage from "./components/home/LandingPage";
import "../src/styles/app.css"
import LoginForm from "./components/login/LoginForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterForm from "./components/register/RegisterForm";
import { DashboardRoutes } from "./routers/DashboardRoutes";
import { PublicRoutes } from "./routers/PublicRoute";
import { PrivateRoutes } from "./routers/PrivateRoutes";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Detail from "./components/product/Detail";
import { useSelector } from "react-redux";

function App() {

  const [isLogedIn, setIsLogedIn] = useState(false)
  const [checkIn, setCheckIn] = useState(true)
  const [user, setUser] = useState("")

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user)=>{
      if(user?.uid){
        setUser(user.displayName)
        setIsLogedIn(true)
      } else {
        setIsLogedIn(false)
      }
      setCheckIn(false)
    })
  }, [isLogedIn, checkIn])
  
  const {products} = useSelector(store => store.products)


  if(checkIn){
    return(
      <h1>Espere...</h1>
    )
  }
  
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage user={user} products={products}/>}/>
          <Route path="/login" element={<PublicRoutes isAuthenticate={isLogedIn}>
            <LoginForm/>
          </PublicRoutes>}/>

          <Route path="/register" element={<PublicRoutes isAuthenticate={isLogedIn}>
            <RegisterForm/>
          </PublicRoutes>}/>

          <Route path="/detalle" element={<Detail products={products}/>}/>

          <Route path="/*" element={<PrivateRoutes isAuthenticate={isLogedIn}>
            <DashboardRoutes products={products}/>
          </PrivateRoutes>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
