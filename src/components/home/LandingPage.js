import React, { useEffect } from 'react'
import NavBar from './NavBar'
import NavBar2 from './NavBar2'
import Footer from './Footer'
import Footer2 from './Footer2'
import UpToHome from './UpToHome'
import PreFooter from './PreFooter'
import Slider from './Slider'
import { useDispatch } from 'react-redux'
import { listProductsAsync } from '../../actions/actionProducts'
import Products from '../products/Products'

const LandingPage = ({user, products}) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listProductsAsync())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <NavBar user={user}/>
            <NavBar2/>
            <Slider/>
            <Products products={products}/>
            <PreFooter/>
            <UpToHome/>
            <Footer/>
            <Footer2/>
        </div>
    )
}

export default LandingPage
