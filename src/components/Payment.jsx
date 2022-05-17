import StripeCheckout from "react-stripe-checkout";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Col, Row, Container } from "react-bootstrap";
import styles from "./Payment.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "bootstrap/dist/js/bootstrap.bundle";
import { useAuth0 } from "@auth0/auth0-react";
import * as Action from "../redux/actions/actions";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:3001/events/payment";

const MySwal = withReactContent(Swal);

function Pay({ ...props }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useAuth0();
  const { items, cartTotal, emptyCart } = useCart();
  const publishableKey =
    "pk_test_51KvehVGJ6earutDK1a1AVoXZQWqbwpdHDV7NBvEPnSP1w8IxXkDaVltQOMwsixWtUaYHgOJSCrzlarO3ghGsZfIs00cRkKkzoE";
  const orderCreated = useSelector((state) => state.orderDetail);
  const [product, setProduct] = useState({});
  const [priceForStripe, setpriceForStripe] = useState(0);

  const handleSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Payment was successful",
      time: 4000,
    }).then((result) => {
      if (result.value) {
        emptyCart();
        navigate("/");
      }
    });
  };
  const handleFailure = () => {
    MySwal.fire({
      icon: "error",
      title: "Payment was not successful",
      time: 4000,
    });
  };
  const payNow = async (token) => {
    try {
      console.log("prod", cartTotal);
      const response = await axios({
        url: API_URL,
        method: "post",
        data: {
          amount: cartTotal,
          token,
          orderData: {
            email: user.email,
            eventos: items.map((item) => {
              return { id: item.id, cantidad: item.quantity };
            }),
            quantity: items.reduce(function (prev, next) {
              return prev + Number(next.quantity);
            }, 0),
            totalPrice: cartTotal,
          },
        },
      });
      console.log(response, "hola soy la respuesta");
      if (response.status === 200) {
        handleSuccess();
      }
    } catch (error) {
      handleFailure();
      console.log(error);
    }
  };

  return (
    <StripeCheckout
      id="Payment"
      style={{
        display: "block",
        margin: "auto",
        width: "150px",
        marginBottom: "10px",
      }}
      stripeKey={publishableKey}
      label="Pay Now"
      name="Pay With Credit Card"
      billingAddress={false}
      shippingAddress={false}
      amount={priceForStripe}
      description={`Your total is $${cartTotal}`}
      token={payNow}
    />
  );
}

export default Pay;
