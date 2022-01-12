import React from 'react'
import '../../styles/footer.css'

const Footer = () => {
    return (
        <footer className='footer-cont'>
            <div className='footer'>
            <div className='footer-col'>
                <p className='subtitle'>Conócenos</p>
                <p>Trabajar en Amazon</p>
                <p>Información corporativa</p>
                <p>Departamento de prensa</p>
            </div>
            <div className='footer-col'>
                <p className='subtitle'>Gana dinero con nosotros</p>
                <p>Vender en Amazon</p>
                <p>Vender en Amazon Handmade</p>
                <p>Publica tu libro en Kindle</p>
                <p>Programa de afiliados</p>
                <p>Anuncia tus productos</p>
            </div>
            <div className='footer-col'>
                <p className='subtitle'>Podemos ayudarte</p>
                <p>Amazon y el COVID-19</p>
                <p>Devolver o reemplazar productos</p>
                <p>Gestionar contenido y dispositivos</p>
                <p>Ayuda</p>
            </div>
            <div className='footer-col'>
                <p className='subtitle'>Métodos de pago</p>
                <p>Tarjetas de crédito y débito</p>
                <p>Tarjetas de regalo</p>
                <p>Meses sin intereses</p>
                <p>Amazon Cash</p>
                <p>Amazon Recargable</p>
            </div>
            </div>
        </footer>
    )
}

export default Footer
