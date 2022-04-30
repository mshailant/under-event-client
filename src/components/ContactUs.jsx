import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import emailjs from 'emailjs-com';
import styles from "./ContactUs.module.css"
import Swal from 'sweetalert2'

export default class ContactUs extends Component {
    render() {
        function sendEmail(e){
            e.preventDefault();

            emailjs.sendForm('service_k0np36h', 'template_2661vcn', e.target, '4BHkR2Tf-F7GH6JZS').then(res=>{
                console.log(res);
            })
        }

        function handleOnClick(e){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your comment has been sended okay :)',
                showConfirmButton: false,
                timer: 1500
              })
        }
        return (
                <div className={styles.contactUs}>
                    <h1 className={styles.contactUsTitle}>Contact Us</h1>
                    <div className={styles.contactUsContent}>
                        <Form onSubmit={sendEmail}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control rows={3} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Comments</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <div className="d-grid gap-2">
                                <Button type='submit' variant="primary" size="lg" onClick={handleOnClick}>
                                    Send comment
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
        )
    }
}