"use client"
import React, {useContext, createContext, useState} from 'react'


// const objeto ={
//     id:1,
//     title: "hola",
//     src: "aas",
//     price: 2

// }

export const context = createContext()

export const useAppGlobalContext = ()=>{
    const useAppContext = useContext(context)
    if(!useAppContext) throw new Error("Provider required")
    return useAppContext
}

export const AppProvider = ({children})=>{

    const [totalPrice, setTotalPrice] = useState(0)
    const [cartProducts, setCartProducts] = useState([
        
    ])
    const addProduct = (productObject)=>{
        setCartProducts((prevCartProducts) => [...prevCartProducts, productObject])
    }
    const deleteProduct = (deletedId, size)=>{
        const filteredProducts = cartProducts.filter( (product) =>{
            return (
                !(product.id === deletedId && product.size === size)
            )
        } )
        setCartProducts(filteredProducts)
    }

    const setCart = (arr)=>{
        setCartProducts(arr)
    }
    const setPrice = (price)=>{
        setTotalPrice(price)
    }

    return(
        <context.Provider
            value={{
                cartProducts,
                addProduct,
                deleteProduct,
                setCart,
                totalPrice,
                setPrice
            }}
        >
            {children}
        </context.Provider>
    )
}


