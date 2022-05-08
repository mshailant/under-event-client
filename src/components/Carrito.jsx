import React, { useState, useEffect } from "react";
import Cardi from "./Cardi"
import CardCarrito from "./CardCarrito";
import { Col, Container, Row, Alert } from "react-bootstrap";
import styles from './Detail.module.css'
import { Figure, Form, Button } from "react-bootstrap";
import Footer from "./Footer/Footer";

// ----- ------- -- - -- - - -- - - ///




function App() {

    const [render, setRender] = useState({})

    

    
    let variable = JSON.parse(localStorage.getItem('carrito')) 

    function removeItemFromCart  (id) {
        console.log(id)
        let temp = variable.filter(item => item.id !== id)
         //localStorage.setItem('carrito', JSON.stringify(temp))
         localStorage.setItem('carrito', JSON.stringify(temp));
    }
    
    function increaseItems(){
        
        var sum = 0;
		var items = JSON.parse(localStorage.getItem('carrito'));

		for (var i = 0; i < items.length; i++) {
			sum += (items[i].cost * items[i].quantity)
		}
		localStorage.setItem('numbers', JSON.stringify(sum))
        }

    function handleUpdateCart({}){

    }    

    function incressItem (id){
        var sum = 0;
        var quantity = 1;
		var items = JSON.parse(localStorage.getItem('carrito'));
       
       

		for (var i = 0; i < items.length; i++) {
			sum += (items[i].cost * quantity)
            console.log(items[i].cost)
            ++quantity
		}

        return sum
       
        

        
		
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
                variable.map((i, index) => (
  
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
                        <h5>x {incressItem(i.id)}</h5>
                      
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
            <h4>TOTAL: </h4>
          </div>
        </div>
      </div >
    );
  }
  
  export default App;