import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../../styles/more.css"


const More = ({products}) => {

    const navigate = useNavigate()

    const [render, setRender] = useState(false)
    
    const handleRender = () => {
        setRender(true)
    }

    const handleUid = (product)=> {
        localStorage.setItem("detail", JSON.stringify(product))
        navigate("/detalle")
    }

    return (
        <div>
            {
                !render ?  <div>
                <button onClick={()=>handleRender()} className='more-btn'>Ver todos los resultados</button>
            </div> : ''
            }
            <div className='products-cont'>
            {render ? products.map(product=>(
                <div key={product.docId} className='products'>
                    <div onClick={()=> handleUid(product)} className='card-product' id={product.docId}>
                    <img src={product.docData.imgUrl} alt=""/>
                    <p className='product-name'>{product.docData.productName}</p>
                    </div>
                </div>
            )) : ""}
            </div>
            
        </div>
    )
}

export default More
