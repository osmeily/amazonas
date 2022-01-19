import React from 'react'
import camion from "../../resources/camion.jpg"
import laptop from "../../resources/laptop.jpg"
import lol from "../../resources/lol.jpg"
import babymonitor from "../../resources/babymonitor.jpg"
import ps4 from "../../resources/ps4.jpg"
import "../../styles/products.css"
import pc from "../../resources/pc.jpg"
import beauty from "../../resources/belleza.jpg"
import More from './More'

const Products = ({products}) => {
    return (
        <div>
            <div className='card-cont'>
                <div className='shipping-card card'>
                    <p>Envío GRATIS a Colombia</p>
                    <img src={camion} alt=""/>
                </div>
                <div className='category card'>
                    <p>Compra por Categoría</p>
                    <div className='category-4'>
                        <div>
                            <img src={laptop} alt=""/>
                        </div>
                        <div>
                            <img src={ps4} alt=""/>
                        </div>
                        <div>
                            <img src={babymonitor} alt=""/>
                        </div>
                        <div>
                            <img src={lol} alt=""/>
                        </div>
                    </div>
                </div>
                <div className='computer card'>
                    <p>Computadoras y Accesorios</p>
                    <img src={pc} alt=""/>
                </div>
                <div className='beauty card'>
                    <p>Seleccionados en Belleza</p>
                    <img src={beauty} alt=""/>
                </div>
            </div>
            <More products={products}/>
        </div>
    )
}

export default Products
