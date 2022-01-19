import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../../styles/more.css"


const More = ({products}) => {

    const navigate = useNavigate()

    const [render, setRender] = useState(false)
    
    const handleRender = () => {
        setRender(true)
    }
    console.log(products)

    const handleUid = (product)=> {
        console.log(product)
        localStorage.setItem("detail", JSON.stringify(product))
        navigate("/detalle")
    }

    return (
        <div>
            <div>
                <button onClick={()=>handleRender()} className='more-btn'>Ver todos los resultados</button>
            </div>
            {render ? products.map(product=>(
                <div className='products'>
                    <div onClick={()=> handleUid(product)} className='card' id={product.docId}>
                    <p>{product.docData.productName}</p>
                    <img src={product.docData.imgUrl} alt=""/>
                    </div>
                </div>
            )) : ""}
        </div>
    )
}

export default More
