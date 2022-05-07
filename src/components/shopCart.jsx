import React from "react"
import { FaTicketAlt } from "react-icons/fa"
import { LinkContainer } from "react-router-bootstrap"
import styles from "./ShopCart.module.css"

let cantidad = parseInt(localStorage.getItem('carrito visual'))

export default function ShoppingCart(){
    return(
        <LinkContainer to="/carrito">
            <div className={styles.add}>
                <FaTicketAlt size={30}/>
                <h5>{cantidad}</h5>
            </div>
        </LinkContainer> 
    )
}