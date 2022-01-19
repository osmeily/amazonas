import React from 'react'
import Footer from '../home/Footer';
import Footer2 from '../home/Footer2';
import NavBar from '../home/NavBar';
import NavBar2 from '../home/NavBar2';
import PreFooter from '../home/PreFooter';

const Detail = () => {

    const getLocal = JSON.parse(localStorage.getItem("detail"));

    console.log(getLocal)

    return (
        <div>
            <NavBar/>
            <NavBar2/>
            <p>{getLocal.docData.productName}</p>
            <img src={getLocal.docData.imgUrl} alt=""/>
            <img src={getLocal.docData.imagen1} alt=""/>
            <img src={getLocal.docData.imagen2} alt=""/>
            <img src={getLocal.docData.imagen3} alt=""/>
            <p>{getLocal.docData.productDetail}</p>
            <p>{getLocal.docData.productPrice}</p>
            <p>{getLocal.docData.category}</p>
            <PreFooter/>
            <Footer/>
            <Footer2/>
        </div>
    )
}

export default Detail
