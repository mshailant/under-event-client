import StripeCheckout from "react-stripe-checkout";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Col, Row, Container } from "react-bootstrap";
import styles from "./Payment.module.css";
import { useSelector } from "react-redux";

const API_URL = "http://localhost:3001/events/payment";

const MySwal = withReactContent(Swal);

function Pay() {
  const publishableKey =
    "pk_test_51KvehVGJ6earutDK1a1AVoXZQWqbwpdHDV7NBvEPnSP1w8IxXkDaVltQOMwsixWtUaYHgOJSCrzlarO3ghGsZfIs00cRkKkzoE";
  const orderCreated = useSelector((state) => state.orderDetail);
  const [product, setProduct] = useState({});
  const [priceForStripe, setpriceForStripe] = useState(0);

  useEffect(() => {
    if (orderCreated) {
      setProduct(orderCreated.orderRes);
      setpriceForStripe(orderCreated.orderRes.totalPrice * 100);
    }
  }, []);

  console.log("product", product);

  const handleSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Payment was successful",
      time: 4000,
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
      const response = await axios({
        url: API_URL,
        method: "post",
        data: {
          amount: product.totalPrice,
          token,
          orderId: product.id,
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
    <Container className={styles.container} fluid>
      <Row>
        <Col>
          <div>
            <StripeCheckout
              stripeKey={publishableKey}
              label="Pay Now"
              name="Pay With Credit Card"
              billingAddress={false}
              shippingAddress={false}
              amount={priceForStripe}
              description={`Your total is $${product.totalPrice}`}
              token={payNow}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Pay;
