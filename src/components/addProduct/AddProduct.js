import React from 'react'
import "../../styles/addProducts.css"
import {useFormik} from "formik"
import { fileUpload } from '../../helpers/fileUpload'
import { useDispatch } from 'react-redux'
import { addProductsAsync } from '../../actions/actionProducts'

const AddProduct = () => {

    const dispatch = useDispatch()

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
        <div>
            <form className='form-add' onSubmit={formik.handleSubmit}>
            <div>
                <input name="imgUrl" id='imgUrl' style={{display:"none"}} type='button' onChange={handleFileChangeimgUrl}/>
                <button onClick={handleClickImgUrl}>Imagen card</button>
                <input name="imagen1" id='imagen1' style={{display:"none"}} type='button' onChange={handleFileChange1}/>
                <button onClick={handleClickPic1}>Imagen 1</button>
                <input  name="imagen2" id='imagen2' style={{display:"none"}} type="button" onChange={handleFileChange2}/>
                <button onClick={handleClickPic2}>Imagen 2</button>
                <input  name="imagen3" id='imagen3' style={{display:"none"}} type="button" onChange={handleFileChange3}/>
                <button onClick={handleClickPic3}>Imagen 3</button>
            </div>
            <div>
                <label>Nombre del producto</label>
                <input name='productName' onChange={formik.handleChange}/>
            </div>
            <div>
                <label>Categoría</label>
                <input name='category' onChange={formik.handleChange} />
            </div>
            <div>
                <label>Descripción del producto</label>
                <input name='productDetail' onChange={formik.handleChange}/>
            </div>
            <div>
                <label>Precio</label>
                <input name='productPrice' onChange={formik.handleChange} />
            </div>
            
            <button type='submit'>Agregar producto</button>
        </form>
        </div>
    )
}

export default AddProduct
