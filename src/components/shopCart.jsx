import React,  {useState} from "react"
import { useDispatch } from "react-redux"
import { FaTicketAlt } from "react-icons/fa"
import { LinkContainer } from "react-router-bootstrap"
import styles from "./ShopCart.module.css"




export default function ShoppingCart(){

    const [cantidad, setCantidad] = useState(0)
    console.log(cantidad, 'holiiiii')
    useDispatch(() => {
        setCantidad(cantidades)
    }, [])

    
    
    let cantidades = parseInt(localStorage.getItem('carrito visual'))

  
    return(
        <LinkContainer to="/carrito">
            <div className={styles.add}>
                <FaTicketAlt size={30}/>
                <h5>{cantidades}</h5>
            </div>
        </LinkContainer> 
    )


    }