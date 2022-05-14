import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";


const Footer = () => {
return (
	<div >
	<Box >
	<h1 style={{ color: " #f1c40f ",
				textAlign: "center",
				marginTop: "-10px",
                marginBottom: "25px",
				fontWeight: "bold" }}>
		UnderEventsApp
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>Acerca de nosotros</Heading>
			<FooterLink href="/aboutUs">About us</FooterLink>
		</Column>
		<Column>
			<Heading>Servicios</Heading>
			<FooterLink href="#">Ventas de Tickets</FooterLink>
			<FooterLink href="#">Publicitar artistas</FooterLink>
			
		</Column>
		<Column>
			<Heading>Contactenos</Heading>
			<FooterLink href="/contactUs">Contact Us</FooterLink>
			{/* <FooterLink href="#">Sara Gismondi</FooterLink>
			<FooterLink href="#">Damian Olmedo</FooterLink>
			<FooterLink href="#">Franco Pirez</FooterLink>
			<FooterLink href="#">Tomas Tagliaferri</FooterLink>
			<FooterLink href="#">Lourdes Bonucci</FooterLink>
			<FooterLink href="#">Martin Hailant</FooterLink> */}
		</Column>
		<Column>
			<Heading>Redes Sociales</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
	</div>
);
};
export default Footer;
