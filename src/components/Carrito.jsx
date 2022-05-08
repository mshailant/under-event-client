import React, { useState, useEffect } from "react";
import Cardi from "./Cardi"
import CardCarrito from "./CardCarrito";
import { Col, Container, Row, Alert } from "react-bootstrap";
import styles from './Detail.module.css'
import { Figure, Form, Button } from "react-bootstrap";
import Footer from "./Footer/Footer";

// ----- ------- -- - -- - - -- - - ///




function App() {

    let variable = JSON.parse(localStorage.getItem('carrito')) 
    const [render, setRender] = useState(variable)
    const [sum, setSum] = useState(0)
    
    console.log(render, "soy render")

    

    

    function removeItemFromCart  (id) {
        console.log(id)
        let temp = variable.filter(item => item.id !== id)
         //localStorage.setItem('carrito', JSON.stringify(temp))
         localStorage.setItem('carrito', JSON.stringify(temp));
         setRender(temp)
    }
    
    function increaseItems(){
        var quantity = 1
        var sum = 0;
		var items = JSON.parse(localStorage.getItem('carrito'));

		for (var i = 0; i <render.length; i++) {
			sum += (render[i].cost * quantity)
		}
		return sum
        }

    function handleUpdateCart({}){

    }    

    function incressItem (cost){
        var suma = 0;
        var quantity = 1;
		var items = JSON.parse(localStorage.getItem('carrito'));
        console.log(items)
       
       

		for (var i = 0; i < items.length; i++) {
			suma += (items[i].cost.replace(/\./g, '') * quantity)
            quantity++
            console.log(suma)
            setSum(suma)
            return suma
            
		}
       
        
       
        var string='3.200';

        console.log(string.replace(/\./g, ''));

       

       // console.log(numEntero)

        

        

        
        // console.log(pepito, "hola soy pepito")

        // return sum

       
        

        
		
    }    
    
   

    return (
      <div className='container mt-2'>
        <div className='row justify-content-center'>
      
        </div>
  
        <div className='row mt-3'>
          <table className="table  text-center">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Product</th>
                <th scope="col">Product Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>
              {
                render.map((i, index) => (
  
                  < tr key={i.id}>
                    <th scope="row">{index + 1}</th>
                    <th scope="row">
                      <img src={i.imagen} style={{ width: '4rem' }} />
                    </th>
                    <td>{i.title}</td>
                    <td>
                     $ {i.cost}.00
                    </td>
                    <td>
                      <button
                        
                        className="btn btn-primary btn-sm"
                      >
                        -
                        </button>
                        <h5>x </h5>
                      
                      <button onClick={() => incressItem()}
                        
  
                        className="btn btn-primary btn-sm"
                        size="sm"
                      >
                         
                        +
                        </button>
                    </td>
  
                    <td>
                      <button onClick={() => removeItemFromCart(i.id)} className="btn btn-danger">
                        Remove
                        </button>
                    </td >
                  </tr >
                ))
              }
            </tbody>
          </table>
        </div>
        <div className="row">
          <div className="col text-center">
            <h4>TOTAL: {sum}</h4>
          </div>
        </div>
      </div >
    );
  }
  
  export default App;