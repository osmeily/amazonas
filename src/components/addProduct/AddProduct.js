import React from 'react'
import "../../styles/addProducts.css"
import {useFormik} from "formik"
import { fileUpload } from '../../helpers/fileUpload'
import { useDispatch } from 'react-redux'
import { addProductsAsync } from '../../actions/actionProducts'
import paso1 from "../../resources/paso1.png"
import paso2 from "../../resources/paso2.png"
import paso3 from "../../resources/paso3.png"
import logo from "../../resources/logo-amazon (1).png"
import { useNavigate } from 'react-router-dom'


const AddProduct = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues:{
            productName: "",
            category: "",
            productDetail: "",
            productPrice: "",
            imgUrl: "",
            imagen1: "",
            imagen2: "",
            imagen3: ""
        },
        onSubmit:(data)=>{
            dispatch(addProductsAsync(data))
        }
    })

    const handleClickImgUrl = () => {
        document.querySelector("#imgUrl").click()
    }

    const handleClickPic1 = () => {
        document.querySelector("#imagen1").click()
    }

    const handleClickPic2 = () => {
        document.querySelector("#imagen2").click()
    }

    const handleClickPic3 = () => {
        document.querySelector("#imagen3").click()
    }

    const handleFileChangeimgUrl = (e) => {
        const file = e.target.files[0]
        fileUpload(file)
        .then(
            response => {
                formik.initialValues.imgUrl = response
            }
        )
        .catch(
            error => {
                console.log(error)
            }
        )
    }

    const handleFileChange1 = (e) => {
        const file = e.target.files[0]
        fileUpload(file)
        .then(
            response => {
                formik.initialValues.imagen1 = response
            }
        )
        .catch(
            error => {
                console.log(error)
            }
        )
    }

    const handleFileChange2 = (e) => {
        const file = e.target.files[0]
        fileUpload(file)
        .then(
            response => {
                formik.initialValues.imagen2 = response
            }
        )
        .catch(
            error => {
                console.log(error)
            }
        )
    }

    const handleFileChange3 = (e) => {
        const file = e.target.files[0]
        fileUpload(file)
        .then(
            response => {
                formik.initialValues.imagen3 = response
            }
        )
        .catch(
            error => {
                console.log(error)
            }
        )
    }

    return (
        <div className='form-div'>
            <img onClick={()=> navigate("/")} className='addLogo' src={logo} alt=""/>
            <form className='form-add' onSubmit={formik.handleSubmit}>
                <p className='steps'><img style={{width:"80px"}} src={paso1} alt=''/> Agrega todas las imágenes, empezando por la que mostrarás en lista</p>
                <div className='image'>
                    <input name="imgUrl" id='imgUrl' style={{display:"none"}} type='file' onChange={handleFileChangeimgUrl} required/>
                    <button onClick={handleClickImgUrl}>Imagen card</button>
                    <input name="imagen1" id='imagen1' style={{display:"none"}} type='file' onChange={handleFileChange1} required/>
                    <button onClick={handleClickPic1}>Imagen 1</button>
                    <input  name="imagen2" id='imagen2' style={{display:"none"}} type="file" onChange={handleFileChange2} required/>
                    <button onClick={handleClickPic2}>Imagen 2</button>
                    <input  name="imagen3" id='imagen3' style={{display:"none"}} type="file" onChange={handleFileChange3} required/>
                    <button onClick={handleClickPic3}>Imagen 3</button>
                </div>
                <hr/>
                <p className='steps'><img style={{width:"80px"}} src={paso2} alt=''/> Llena los campos con la información del producto</p>
                <div className='input-info'>
                    <div>
                        <label>Nombre del producto :</label>
                        <input name='productName' onChange={formik.handleChange} required/>
                    </div>
                    <div>
                        <label>Categoría :</label>
                        <input name='category' onChange={formik.handleChange} required/>
                    </div>
                    <div>
                        <label>Descripción del producto :</label>
                        <input name='productDetail' onChange={formik.handleChange} required/>
                    </div>
                    <div>
                        <label>Precio :</label>
                        <input name='productPrice' onChange={formik.handleChange} required />
                    </div>
                </div>
                <hr/>
                <p className='steps'><img style={{width:"80px"}} src={paso3} alt=''/> Tu producto está listo para ser agregado</p>
                <button className='add-btn' type='submit'>Agregar producto</button>
        </form>
        </div>
    )
}

export default AddProduct
