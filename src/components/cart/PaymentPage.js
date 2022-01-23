import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../../resources/logo-amazon (1).png"
import visa from '../../resources/visa.png'
import "../../styles/paymentpage.css"

const PaymentPage = () => {

    const navigate = useNavigate()

    return (
        <div>
            <img onClick={()=> navigate("/")} className="amazon" src={logo} alt=""/>
        <div className='payment-cont'>
            <div className='card-info'>
                <h3>Información de tarjeta</h3>
                <p>Indica los detalles de la tarjeta con la que realizarás el pago</p>
                <div className='card-form'>
                    <img className='visa' src={visa} style={{width:"120px", display:"block"}} alt=""/>
                    <label className='nro'>Número de tarjeta</label>
                    <input className='nro' type="number"/>
                    <div className='month-cvv'>
                        <label className='month'>Mes y año</label>
                        <label className='cvv'>Código CVV</label>
                        <input className='monthInput' type="month"/>
                        <input className='cvvInput' placeholder='******' type="password"></input>
                    </div>
                </div>
            </div>
            <div className='personal-info'>
                <h3>Información personal</h3>
                <div className='names'>
                    <input placeholder='Nombres'/>
                    <input placeholder='Apellidos'/>
                </div>
                <input className='aloneInput' placeholder='País'/>
                <div className='city'>
                    <input placeholder='Ciudad'/>
                    <input placeholder='Código postal'/>
                </div>
                <input className='aloneInput' type="email" placeholder="Correo"/>
                <input className='aloneInput' type="number" placeholder="Número telefónico"/>
            </div>
            <button  className='pay'>Pago</button>
        </div>
        </div>
    )
}

export default PaymentPage
