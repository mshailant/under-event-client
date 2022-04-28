import React from 'react'
import image from "../images/image.js";
import{Link} from "react-router-dom";

const Logo = () => {

  return (
    <div>
        <Link to="/home">
        <img src={image.img} alt="logo" width="150px" />
        </Link>
    </div>
  )
  }

export default Logo