import React, { useEffect, useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useCart } from "react-use-cart";
import CartItem from "./CartItem";
import NavTop from "./NavBars/Nav";
import { useAuth0 } from "@auth0/auth0-react";
import * as Action from "../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import Payment from "./Payment";
import { useNavigate } from "react-router-dom";
import styles from './Cart.module.css'
import { Carouse2 } from "./Carousel";

export default function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [totalItems, setTotalItems] = useState(0);
  const { user, isAuthenticated, loginWithPopup } = useAuth0();
  const { items, cartTotal } = useCart();

  useEffect(() => {
    setTotalItems(
      items.reduce(function (prev, next) {
        return prev + Number(next.quantity);
      }, 0)
    );
  }, [items]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = () => {
    !isAuthenticated
      ? loginWithPopup()
      : dispatch(
          Action.createOrder({
            email: user.email,
            eventos: items.map((item) => {
              return { id: item.id, cantidad: item.quantity };
            }),
            quantity: totalItems,
            totalPrice: cartTotal,
          })
        ).then((order) => {
          console.log(order);
          navigate("/payment");
        });
  };

  return (
    <div
      className={styles.container}
      style={{
        width: "100%",
        height: "100vh",
        backgroundAttachment:" fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        
          
        height: "100vh"  
        
      }}
    >
      <NavTop />
      <section class="pt-5 pb-5">
        <div style={{ background: "rgba(244, 208, 63, 0.638)", boxShadow:"0 0 9px rgb(225, 174, 7), 0 0 12px rgb(119, 118, 119)- 0 0 3px rgb(17, 15, 15), 0 0 6px rgb(193, 193, 193)" }} class="container">
          <div class="row w-100">
            <div class="col-lg-12 col-md-12 col-12">
              <h3 class="display-5 mb-2 text-center">Shopping Cart</h3>
              <p class="mb-5 text-center">
                <i class="text-danger font-weight-bold">{totalItems}</i> items
                in your cart
              </p>
              <table
                id="shoppingCart"
                class="table table-condensed table-responsive"
              >
                <thead>
                  <tr style={{color: "black"}}>
                    <th style={{ width: "55%" }}>Product</th>
                    <th style={{ width: "18%" }}>Price</th>
                    <th style={{ width: "12%" }}>Quantity</th>
                    <th style={{ width: "5%" }}></th>
                  </tr >
                </thead>
                <tbody>
                  <CartItem />
                </tbody>
              </table>
              <div class="float-right text-right">
                <h4>Subtotal:</h4>
                <h1>${cartTotal}</h1>
              </div>
            </div>
          </div>
          <div class="row mt-4 d-flex align-items-center">
            <div class=" order-md-2 text-right">
              <Button
               variant="dark"
                style={{
                  display: "block",
                  margin: "auto",
                  width: "150px",
                  marginBottom: "10px"
                }}
                disabled={items.length === 0 ? true : false}
                onClick={handleClick}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
       
      </section>
     
      <div>
      <Carouse2/>
      </div>
     
    </div>
  );
}
