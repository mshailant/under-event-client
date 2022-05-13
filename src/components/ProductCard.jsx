import React from "react";
import { useState,useEffect } from "react";

export default function ProductCard({ titulo, precio, stock, imagen, numerito, id, removeItemFromCart, totalAmount }) {
    
    const [amount, setAmount] = useState(Number(precio))
    const [cuantity, setCuantity] = useState(1)
    
    const priceNumber = Number(precio)
    
    useEffect(() =>
        {setAmount(priceNumber * cuantity)}, [cuantity]
    )

    const sumar = () => {
        if (cuantity < stock) {
            setCuantity(cuantity + 1)
            localStorage.setItem(`cantidad ${id}`, amount);
            totalAmount = totalAmount + amount
        }
    }
    
    const restar = () => {
        if (cuantity > 1) {
            setCuantity(cuantity - 1)
            setAmount(amount * cuantity)
            totalAmount = totalAmount - amount
        }
    }
    
    return (
        <div>

            <h1>key : {numerito}</h1>
            <h1>NOMBRE {titulo}</h1>
            <img src={imagen} style={{ width: "4rem" }} />
            <h2>precio {precio}</h2>
            <h3>stock {cuantity}</h3>
            <h3>total {amount}</h3>

            {/* <ItemCount stock={stock} initial={0} onAdd/> */}

            <div>
                <div /* className="justify-content-md-center posCount" */>
                    <button onClick={() =>restar()}>-</button>
                    <button onClick={() => sumar()}>+</button>
                </div>
            </div>

            <button
                onClick={() => removeItemFromCart(id)}
            >
                Remove
            </button>

        </div>
    )
}