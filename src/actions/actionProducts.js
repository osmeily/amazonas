import { addDoc, collection, doc, getDocs, query, where } from "firebase/firestore"
import { db } from "../application/firebaseConfig"
import types from "../types/types"

export const listProducts = (products) => {
    return {
        type: types.listProducts,
        payload : products
    }
}

export const searchProduct = (products) => {
    return {
        type : types.search,
        payload: products
    }
}

export const addProducts = (product) => {
    return {
        type: types.addProducts,
        payload: product
    }
}


export const addProductsAsync = (productObject) => {
    return (dispatch)=> {
        addDoc(collection(db, "amazonas-products"), productObject)
        .then(
            response => {
                dispatch(addProducts(productObject))
            }
        )
        .catch(
            error => {
                console.log(error)
            }
        )
    }
}

export const listProductsAsync = () => {
    return async(dispatch)=> {
        const firebaseProducts = await getDocs(collection(db, "amazonas-products"))
        const productsArray = []
        firebaseProducts.forEach(doc => {
            const docId = doc.id
            const docData = doc.data()
            const newObject = {
                docData,
                docId
            }
                productsArray.push({
                    ...newObject
                })
        })
        dispatch(listProducts(productsArray))
    }
}

export const searchProductAsync = (category) => {
    return async(dispatch) => {
        const storeCollection = collection(db, "amazonas-products")
        const q = query(storeCollection, where("category", "==", category))
        const documents = await getDocs(q)
        const productStorage = []
        documents.forEach(document => {
            productStorage.push(document.data())
        })
        console.log(productStorage)
        dispatch(searchProduct(productStorage))
    }
}


