import React from "react"
import { FaTicketAlt } from "react-icons/fa"
import { LinkContainer } from "react-router-bootstrap"
import styles from "./ShopCart.module.css"

export default function ShoppingCart(){
    return(
        <LinkContainer to="/cart">
            <div className={styles.add}>
                <FaTicketAlt size={30}/>
            </div>
        </LinkContainer> 
    )
}